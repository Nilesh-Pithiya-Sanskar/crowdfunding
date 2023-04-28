import frappe

def execute(filters=None):
    data = []
    
    columns = [
        {"label": "Campaign Title", "fieldname": "campaign_title", "fieldtype": "Data", "width": 700,  "align": "left"},
        {"label": "Campaign category", "fieldname": "campaign_category", "fieldtype": "Data","width": 200, "align": "left"},
        {"label": "Total Raised Amount", "fieldname": "total_raised_amount", "width": 150, "fieldtype": "Currency"},
    ]

    if filters.get("from_date") and filters.get("to_date") and filters.get("campaign_category"):
        data = frappe.db.sql("""
            select
                campaign_title,
                campaign_category,
                sum(raised_amount) as total_raised_amount
            from
                `tabDonation Campaign`
            where
                start_date between %(from_date)s and %(to_date)s and campaign_category=%(campaign_category)s group by campaign_category
            """, filters, as_dict=1)      
    else:
        data = frappe.db.sql("""
            select
                campaign_title,
                campaign_category,
                sum(raised_amount) as total_raised_amount
            from
                `tabDonation Campaign`
            where
                start_date group by campaign_category
            """, as_dict=1)


    return columns, data

