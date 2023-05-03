// Copyright (c) 2023, Nilesh Pithiya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Donation Campaign Raised Item"] = {
	"filters": [
		{
			"fieldname": "campaign",
			"label": "Campaign",
			"fieldtype": "Link",
			"options": "Donation Campaign"
		},
		{
			"fieldname": "campaign_category",
			"label": "Campaign Category",
			"fieldtype": "Link",
			"options": "Donation Campaign Category"
		},
		{
			"fieldname": "status",
			"label": "Status",
			"fieldtype": "Select",
			"default": "Closed",
			options: 
			[
				"Closed",
				"Live"
			]
		}
	]
};
