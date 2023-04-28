// Copyright (c) 2023, Nilesh Pithiya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["New Donation Request"] = {
	"filters": [
		{
			"fieldname":"name",
			"label": __("Name"),
			"fieldtype": "Data",
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -2),
			"reqd": 1
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"status",
			"label": __("Status"),
			"fieldtype": "Select",
			options: [
				{ "value": "New Request", "label": __("New Request") },
				{ "value": "Verified", "label": __("Verified") },
				{ "value": "Pending Campaign", "label": __("Pending Campaign") },
				{ "value": "Live Campaign", "label": __("Live Campaign") },
				{ "value": "Close Campaign", "label": __("Close Campaign") },
				{ "value": "Rejected", "label": __("Rejected") },
			],
		},
		{
			"fieldname": "email",
			"lable": __("Email"),
			"fieldtype": "Data",
			"options": "Email"
		},
		{
			"fieldname": "organisation_name",
			"lable": __("Organisation Name"),
			"fieldtype": "Data",
		},
		{
			"fieldname": "requester_type",
			"lable": __("Requester Type"),
			"fieldtype": "Select",
			options: [
				{"value": "NGO", "lable": __("NGO")},
				{"value": "Indivisual/Group", "lable": __("Indivisual/Group")}
			]
		}
	]
};
