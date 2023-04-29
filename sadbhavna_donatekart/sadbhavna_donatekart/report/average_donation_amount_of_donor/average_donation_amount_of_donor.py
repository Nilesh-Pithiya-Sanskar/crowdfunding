# Copyright (c) 2023, Nilesh Pithiya and contributors
# For license information, please see license.txt

import frappe

def execute(filters=None):
    columns = [
        {"label": "Email", "fieldname": "email", "fieldtype": "Data", "options": "Donor", "width": 250, "align": "left"},
        {"label": "Average Amount", "fieldname": "total_amount", "fieldtype": "Currency", "width": 150}
    ]

    if filters and filters.get("from_date") and filters.get("to_date"):
        data = frappe.db.sql("""
            select
                email,
                avg(amount) as total_amount 
            from
                `tabDonation`
            where
                date between %(from_date)s and %(to_date)s group by email
            order by
                total_amount desc
            """, filters, as_dict=1)
    else:
        data = frappe.db.sql("""
            select
                email,
                avg(amount) as total_amount 
            from
                `tabDonation`
            where
                date group by email
            order by
                total_amount desc
            """, as_dict=1)
        
    return columns, data
