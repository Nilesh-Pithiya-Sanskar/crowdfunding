// Copyright (c) 2023, Nilesh Pithiya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Average Donation Amount Of Donor"] = {
	"filters": [
	{
		"fieldname": "from_date",
		"fieldtype": "Date",
		"label": "Date",
		"reqd": 0
	},
	{
		"fieldname": "to_date",
		"fieldtype": "Date",
		"label": "To Date",
		"reqd": 0
	}
	]
};
