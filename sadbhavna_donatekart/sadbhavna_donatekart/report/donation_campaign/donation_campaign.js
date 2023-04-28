// Copyright (c) 2023, Nilesh Pithiya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Donation Campaign"] = {
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
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
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
			"fieldname":"date",
			"label": __("Date"),
			"fieldtype": "Select",
			options: [
				{ "value": "Weekly", "label": __("Weekly") },
				{ "value": "Monthly", "label": __("Monthly") },
			],
		},
		{
			"fieldname": "campaign_category",
			"lable": __("Campaign Category"),
			"fieldtype": "Data",
		},
		{
			"fieldname": "ngo_email",
			"lable": __("Email"),
			"fieldtype": "Data",
			"options": "Email"
		}	
	]
};
