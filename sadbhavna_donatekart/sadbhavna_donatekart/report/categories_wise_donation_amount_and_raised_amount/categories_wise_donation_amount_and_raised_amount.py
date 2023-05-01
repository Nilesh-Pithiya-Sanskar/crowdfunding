# Copyright (c) 2023, Nilesh Pithiya and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
    columns = [
        {"label": "Campaign category", "fieldname": "campaign_category","width":200, "fieldtype": "Data"},
        {"label": "Total Donation Amount", "fieldname": "total_donation_amount","width":200, "fieldtype": "Data"},
        {"label": "Total Raised Amount", "fieldname": "total_raised_amount","width":200, "fieldtype": "Data"},
    ]

    if filters.get("campaign_category"):
        data = frappe.db.sql("""
            select
                campaign_category,
                sum(donation_amount) as total_donation_amount,
                sum(raised_amount) as total_raised_amount
            from
                `tabDonation Campaign`
            where
                start_date and campaign_category=%(campaign_category)s group by campaign_category
            """, filters, as_dict=1)
    else:
        data = frappe.db.sql("""
            select
                campaign_category,
                sum(donation_amount) as total_donation_amount,
                sum(raised_amount) as total_raised_amount
            from
                `tabDonation Campaign`
            where
                start_date group by campaign_category
           """, as_dict=1)
    return columns, data	
