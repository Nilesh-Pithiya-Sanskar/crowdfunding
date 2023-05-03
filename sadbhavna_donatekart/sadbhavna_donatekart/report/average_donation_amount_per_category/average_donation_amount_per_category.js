// Copyright (c) 2023, Nilesh Pithiya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Average Donation amount per category"] = {
	"filters": [
		{
			"fieldname": "campaign_category",
			"fieldtype": "Link",
			"label": "Campaign Category",
			"options": "Donation Campaign Category",
			"reqd": 0
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			"reqd": 0
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 0
		}
		]
};
