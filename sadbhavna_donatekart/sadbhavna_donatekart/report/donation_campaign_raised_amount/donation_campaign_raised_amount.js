// Copyright (c) 2023, Nilesh Pithiya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Donation Campaign Raised Amount"] = {
	"filters": [
		{
			"fieldname":"campaign_category",
			"label": __("Campaign Category"),
			"fieldtype": "Link",
			"options": "Donation Campaign Category"
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			// "reqd": 1
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			// "reqd": 1
		},
		{
			"fieldname":"status",
			"label": __("Status"),
			"fieldtype": "Select",
			options:['Live', 'Closed']
		},
		// {
		// 	"fieldname":"date",
		// 	"label": __("Date"),
		// 	"fieldtype": "Select",
		// 	options: [
		// 		{ "value": "Weekly", "label": __("Weekly") },
		// 		{ "value": "Monthly", "label": __("Monthly") },
		// 	],
		// 	"default": "Weekly"
		// },
		// {
		// 	"fieldname": "ngo_email",
		// 	"lable": __("Email"),
		// 	"fieldtype": "Data",
		// 	"options": "Email"
		// }	
	]
};
