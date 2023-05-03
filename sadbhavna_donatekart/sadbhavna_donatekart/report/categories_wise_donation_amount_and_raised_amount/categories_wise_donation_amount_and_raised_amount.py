# Copyright (c) 2023, Nilesh Pithiya and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
    columns = [
        {"label": "Campaign category", "fieldname": "campaign_category","width":200, "fieldtype": "Data"},
        {"label": "Total Donation Amount", "fieldname": "total_donation_amount","width":200, "fieldtype": "Data"},
        {"label": "Total Raised Amount", "fieldname": "total_raised_amount","width":200, "fieldtype": "Data"},
    ]

    data = get_data(filters)

    return columns, data


def get_data(filters):
    return frappe.db.sql(
        """
            select
                campaign_category, status,
                sum(donation_amount) as total_donation_amount,
                sum(raised_amount) as total_raised_amount
            from
                `tabDonation Campaign`
            where
                start_date 
                {conditions}
            group by campaign_category
           """.format(
			conditions=get_conditions(filters)
		),
		filters,
		as_dict=1,
    )

def get_conditions(filters):
    conditions = []

    if filters.get("campaign_category"):
        conditions.append("and campaign_category=%(campaign_category)s")

    if filters.get('status'):
        conditions.append("and status=%(status)s")
	
    return " ".join(conditions) if conditions else ""
