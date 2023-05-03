# Copyright (c) 2023, Nilesh Pithiya and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _


def execute(filters=None):
	columns, data = get_columns(), get_data(filters)
	return columns, data

def get_columns():
	columns = [
		# {
		# 	"label": _("Name"),
		# 	"fieldname": "name",
		# 	"fieldtype": "Link",
		# 	"options": "Donation Campaign request",
		# 	"width": 150,
		# },
		{"label": _("Campaign"), "fieldname": "campaign", "fieldtype": "Link", "options": "Donation Campaign", "width": 250},
		{"label": _("NGO"), "fieldname": "ngo", "fieldtype": "Link", "options": "NGO", "width": 250},
		# {
		# 	"label": _("Email"),
		# 	"fieldname": "email",
		# 	"fieldtype": "Data",
		# 	# "fieldtype": "Link",
		# 	# "options": "User",
		# 	"width": 100,
		# },
		{"fieldname": "status", "label": _("Status"), "fieldtype": "Data", "width": 100},

		{"label": _("Campaign Category"), "fieldname": "campaign_category", "fieldtype": "Data", "width": 150},
		{"label": _("Requester Type"), "fieldname": "requester_type", "fieldtype": "Data", "width": 150},
		{"label": _("Organisation Name"), "fieldname": "organisation_name", "fieldtype": "Data", "width": 200},
		# {"label": _("Donation Amount"), "fieldname": "", "fieldtype": "Date", "width": 100},
		{"label": _("Amount"), "fieldname": "amount", "fieldtype": "Data", "width": 100},
		# {
		# 	"label": _("Owner"),
		# 	"fieldname": "owner",
		# 	"fieldtype": "Link",
		# 	"options": "user",
		# 	"width": 120,
		# },
	]
	return columns


def get_data(filters):
	return frappe.db.sql(
		"""
		SELECT *
		FROM
			`tabDonation` as donation
		INNER JOIN 
			`tabDonation Campaign` as campaign
		ON
			donation.campaign = campaign.name
		INNER JOIN
			`tabNGO` as ngo
		ON
			campaign.ngo = ngo.name
		WHERE
			{conditions}
		GROUP BY
			donation.campaign
		ORDER BY
			donation.amount desc """.format(
			conditions=get_conditions(filters)
		),
		filters,
		as_dict=1,
	)
# creation BETWEEN %(from_date)s AND %(to_date)s
	# print("\n\n data", data,"\n\n")


def get_conditions(filters):
	from datetime import datetime # from python std library
	from frappe.utils import add_to_date
	from frappe.utils import today

	conditions = []



	# print("\n\n from_date", filters.get('from_date'), "\n\n")
	# print("\n\n today", today(), "\n\n")
	# print("\n\n new from_date", add_to_date(datetime.now().strftime('%Y-%m-%d'), days=-7), "\n\n")

	# if filters.get('date'):
	# 	if filters.get('date') == 'Weekly':
	# 		conditions.append(f"creation BETWEEN {add_to_date(datetime.now().strftime('%Y-%m-%d'), days=-7)} AND {today()}")
	# 	else:
	# 		conditions.append(f"creation BETWEEN {add_to_date(datetime.now().strftime('%Y-%m-%d'), days=-300)} AND {today()}")
	

	if filters.get('from_date'):
		conditions.append("donation.creation BETWEEN %(from_date)s AND %(to_date)s")

	if filters.get("campaign_category"):
		conditions.append("and campaign.campaign_category=%(campaign_category)s")
	
	if filters.get("email"):
		conditions.append("and donation.email=%(email)s")
	
	if filters.get("status"):
		conditions.append("and campaign.status=%(status)s")

	if filters.get("organisation_name"):
		conditions.append("and campaign.organisation_name = %(organisation_name)s")

	if filters.get("requester_type"):
		conditions.append("and campaign.requester_type=%(requester_type)s")
	

	print("\n\n conditions", conditions, "\n\n")
	return " ".join(conditions) if conditions else ""
