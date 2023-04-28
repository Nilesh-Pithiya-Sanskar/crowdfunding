# Copyright (c) 2023, Nilesh Pithiya and contributors
# For license information, please see license.txt

import frappe

def execute(filters=None):
    columns = [
        {"label": "Donor Name", "fieldname": "donor_name", "fieldtype": "data"},
        {"label": "Email", "fieldname": "email", "fieldtype": "email"},
        {"label": "Total Amount", "fieldname": "total_amount", "fieldtype": "Currency"}
    ]

    if filters and filters.get("from_date") and filters.get("to_date"):
        data = frappe.db.sql("""
            select
                date,
                donor_name,
                email,
                sum(amount) as total_amount 
            from
                `tabDonation`
            where
                date between %(from_date)s and %(to_date)s group by email
            """, filters, as_dict=1)
    else:
        data = frappe.db.sql("""
            select
                date,
                donor_name,
                email,
                sum(amount) as total_amount 
            from
                `tabDonation`
            where
                date group by email
            """, as_dict=1)
        
    return columns, data
