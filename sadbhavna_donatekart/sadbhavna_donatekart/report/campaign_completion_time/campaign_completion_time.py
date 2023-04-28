# Copyright (c) 2023, Nilesh Pithiya and contributors
# For license information, please see license.txt


from __future__ import unicode_literals
import frappe
from frappe import _


from datetime import datetime # from python std library
from frappe.utils import add_to_date
from frappe.utils import today


def execute(filters=None):
	columns, data = get_columns(), get_data(filters)
	return columns, data


def get_columns():
	columns = [
		{"label": _("Campaign"), "fieldname": "name", "fieldtype": "Link", "options": "Donation Campaign", "width": 200},
		{"label": _("NGO"), "fieldname": "ngo", "fieldtype": "Link", "options": "NGO", "width": 250},
		{
			"label": _("Email"),
			"fieldname": "ngo_email",
			"fieldtype": "Data",
			# "fieldtype": "Link",
			# "options": "User",
			"width": 200,
		},
		{"fieldname": "status", "label": _("Status"), "fieldtype": "Data", "width": 100},

		{"label": _("Campaign Category"), "fieldname": "campaign_category", "fieldtype": "Data", "width": 150},
		# {"label": _("Organisation Name"), "fieldname": "organisation_name", "fieldtype": "Data", "width": 100},
		# {"label": _("Date"), "fieldname": "date", "fieldtype": "Date", "width": 100},
		{"label": _("Amount"), "fieldname": "raised_amount", "fieldtype": "Data", "width": 100},
		{"label": _("Completion Days"), "fieldname": "completion_days", "fieldtype": "data"+"days", "width": 200}
	]

	return columns

def get_data(filters):
	data = frappe.db.sql(
		"""
		SELECT campaign_category, DATEDIFF(completion_date, start_date) AS completion_days, avg(donation_amount)as donation_amount, avg(raised_amount) as raised_amount, ngo, ngo_email, status, raised_amount, name
		FROM
			`tabDonation Campaign`
		WHERE
			status = 'Closed'
			{conditions}
		GROUP BY
			name
		ORDER BY
			creation asc """.format(
			conditions=get_conditions(filters)
		),
		filters,
		as_dict=1,
	)
	print("\n\n data", data, "\n\n")
	return data

def get_conditions(filters):

	conditions = []

	if filters.get('campaign'):
		conditions.append("and name=%(campaign)s")

	if filters.get("campaign_category"):
		conditions.append("and campaign_category=%(campaign_category)s")
	
	return " ".join(conditions) if conditions else ""

