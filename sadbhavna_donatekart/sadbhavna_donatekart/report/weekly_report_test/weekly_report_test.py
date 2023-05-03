# Copyright (c) 2013, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt
import datetime
from typing import List

import frappe
from frappe import _, scrub
from frappe.utils import get_first_day as get_first_day_of_month
from frappe.utils import get_first_day_of_week, get_quarter_start, getdate

from erpnext.accounts.utils import get_fiscal_year


def execute(filters=None):
	filters = frappe._dict(filters or {})
	columns = get_columns(filters)
	data = get_data(filters)
	# chart = get_chart_data(columns)

	# return columns, data, None, chart

	return columns, data, None

def get_columns(filters):
	columns = [
		{"label": _("Donation"), "options": "Donation", "fieldname": "name", "fieldtype": "Link", "width": 140},
		{
			"label": _("Donor Name"),
			"options": "Donor",
			"fieldname": "donor",
			"fieldtype": "Link",
			"width": 140,
		},
		{
			"label": _("Campaign"),
			"options": "Donation Campaign",
			"fieldname": "campaign",
			"fieldtype": "Link",
			"width": 140,
		},
		{"label": _("Amount"), "fieldname": "amount", "fieldtype": "Data", "width": 120},
		# {"label": _("UOM"), "fieldname": "uom", "fieldtype": "Data", "width": 120},
	]

	ranges = get_period_date_ranges(filters)

	print("\n\n ranges", ranges,"\n\n")

	for dummy, end_date in ranges:
		period = get_period(end_date, filters)

		print("\n\n period", period, "\n\n")
		columns.append(
			{"label": _(period), "fieldname": scrub(period), "fieldtype": "Float", "width": 120}
		)

# 	print("\n\n column", columns, "\n\n")

	if filters.get('range') == 'Weekly':
		print("\n\n weekly")

		# data = get_data2('Weekly')


	return columns


def get_period_date_ranges(filters):
	from dateutil.relativedelta import relativedelta

	from_date = round_down_to_nearest_frequency(filters.from_date, filters.range)
	to_date = getdate(filters.to_date)

	increment = {"Monthly": 1, "Quarterly": 3, "Half-Yearly": 6, "Yearly": 12}.get(filters.range, 1)

	periodic_daterange = []
	for dummy in range(1, 53, increment):
		if filters.range == "Weekly":
			period_end_date = from_date + relativedelta(days=6)
		else:
			period_end_date = from_date + relativedelta(months=increment, days=-1)

		if period_end_date > to_date:
			period_end_date = to_date
		periodic_daterange.append([from_date, period_end_date])

		from_date = period_end_date + relativedelta(days=1)
		if period_end_date == to_date:
			break

	return periodic_daterange


def round_down_to_nearest_frequency(date: str, frequency: str) -> datetime.datetime:
	"""Rounds down the date to nearest frequency unit.
	example:

	>>> round_down_to_nearest_frequency("2021-02-21", "Monthly")
	datetime.datetime(2021, 2, 1)

	>>> round_down_to_nearest_frequency("2021-08-21", "Yearly")
	datetime.datetime(2021, 1, 1)
	"""

	def _get_first_day_of_fiscal_year(date):
		fiscal_year = get_fiscal_year(date)
		return fiscal_year and fiscal_year[1] or date

	round_down_function = {
		"Monthly": get_first_day_of_month,
		"Quarterly": get_quarter_start,
		"Weekly": get_first_day_of_week,
		"Yearly": _get_first_day_of_fiscal_year,
	}.get(frequency, getdate)
	return round_down_function(date)


def get_period(posting_date, filters):
	months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	if filters.range == "Weekly":
		period = _("Week {0} {1}").format(str(posting_date.isocalendar()[1]), str(posting_date.year))
	elif filters.range == "Monthly":
		period = _(str(months[posting_date.month - 1])) + " " + str(posting_date.year)
	elif filters.range == "Quarterly":
		period = _("Quarter {0} {1}").format(
			str(((posting_date.month - 1) // 3) + 1), str(posting_date.year)
		)
	else:
		year = get_fiscal_year(posting_date, company=filters.company)
		period = str(year[2])
	return period


# def get_chart_data(columns):
	# labels = [d.get("label") for d in columns[5:]]
	# chart = {"data": {"labels": labels, "datasets": []}}
	# chart["type"] = "line"

	# return chart
	pass


def get_data(filters):
	return frappe.db.sql(
		"""
		SELECT *
		FROM
			`tabDonation`
		WHERE
			creation BETWEEN %(from_date)s AND %(to_date)s
			{conditions}
		ORDER BY
			creation asc """.format(
			conditions=get_conditions(filters)
		),
		filters,
		as_dict=1,
	)


def get_conditions(filters):
	conditions = []

	return " ".join(conditions) if conditions else ""

def get_data2(filters):
# 	return frappe.db.sql("""
# 		with daily as(
#     select
#         request_type,
#         creation,
#         name
#     from
#         `tabLead`
#     where
#         creation >= now() - INTERVAL 1 DAY
#     group by
#         request,
#         creation
# ),
# week as(
#     select
#         request_type,
#         creation,
#         name
#     from
#         `tabLead`
#     where
#         creation >= now() - INTERVAL 7 DAY
#     group by
#         request,
#         creation
# ),
# quarterly as(
#     select
#         request_type,
#         creation,
#         name
#     from
#         `tabLead`
#     where
#         creation >= now() - INTERVAL 14 DAY
#     group by
#         request,
#         creation
# ),
# monthly as(
#     select
#         request_type,
#         creation,
#         name
#     from
#         `tabLead`
#     where
#         creation >= now() - INTERVAL 30 DAY
#     group by
#         request,
#         creation
# )
# select
#     i.request_type as 'Request Type::150',
#     count(i.request_type) as 'Total::200',
#     count(daily.request_type) as "Today::200",
#     count(week.request_type) as "In 7 Days::200",
#     count(quarterly.request_type) as "In 15 Days::200",
#     count(monthly.request_type) as "In 30 Days::200"
# from
#     `tabLead` i
#     left outer join daily on daily.request_type = i.request_type
#     and daily.creation = i.creation
#     left outer join week on week.request_type = i.request_type
#     and week.creation = i.creation
#     left outer join quarterly on quarterly.request_type = i.request_type
#     and quarterly.creation = i.creation
#     left outer join monthly on monthly.request_type = i.request_type
#     and monthly.creation = i.creation
# where

#     (
#        DATE(i.creation) between %(from_date) s
#        and %(to_date) s
#    )

# group by
#     i.request_type
# 	""")

	return frappe.db.sql(
		"""
		SELECT *
		FROM
			`tabDonation`
		WHERE
			creation BETWEEN %(from_date)s AND %(to_date)s
		ORDER BY
			creation asc """.format(
			conditions=get_conditions(filters)
		),
		filters,
		as_dict=1,
	)
	