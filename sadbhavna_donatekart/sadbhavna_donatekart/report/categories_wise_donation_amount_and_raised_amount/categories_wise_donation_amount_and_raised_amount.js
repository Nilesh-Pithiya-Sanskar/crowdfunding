// Copyright (c) 2023, Nilesh Pithiya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Categories Wise donation amount and raised amount"] = {
	"filters": [
		{
			"fieldname": "campaign_category",
			"fieldtype": "Link",
			"label": "Campaign Category",
			"options": "Donation Campaign Category",
			"reqd": 0
		}
	]
};
