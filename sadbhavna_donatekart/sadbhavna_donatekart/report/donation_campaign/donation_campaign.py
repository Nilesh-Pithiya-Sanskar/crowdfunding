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
		{
			"label": _("Name"),
			"fieldname": "name",
			"fieldtype": "Link",
			"options": "Donation Campaign request",
			"width": 150,
		},
		{"label": _("Campaign"), "fieldname": "campaign", "fieldtype": "Link", "options": "Donation Campaign", "width": 150},
		{"label": _("NGO"), "fieldname": "ngo", "fieldtype": "Link", "options": "NGO", "width": 120},
		# {
		# 	"label": _("Email"),
		# 	"fieldname": "email",
		# 	"fieldtype": "Data",
		# 	# "fieldtype": "Link",
		# 	# "options": "User",
		# 	"width": 100,
		# },
		# {"fieldname": "status", "label": _("Status"), "fieldtype": "Data", "width": 150},
		# {
		# 	"fieldname": "lead_owner",
		# 	"label": _("Lead Owner"),
		# 	"fieldtype": "Link",
		# 	"options": "User",
		# 	"width": 100,
		# },

		# {"label": _("Campaign Category"), "fieldname": "campaign_category", "fieldtype": "Data", "width": 120},
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
			`tabDonation`
		WHERE
			creation BETWEEN %(from_date)s AND %(to_date)s
			{conditions}
		GROUP BY
			campaign
		ORDER BY
			creation asc """.format(
			conditions=get_conditions(filters)
		),
		filters,
		as_dict=1,
	)


def get_conditions(filters):
	conditions = []

	if filters.get("name"):
		conditions.append(" and name=%(name)s")
	
	if filters.get("email"):
		conditions.append(" and email=%(email)s")
	
	if filters.get("organisation_name"):
		conditions.append(" and organisation_name = %(organisation_name)s")

	if filters.get("requester_type"):
		conditions.append(" and requester_type=%(requester_type)s")

	return " ".join(conditions) if conditions else ""
