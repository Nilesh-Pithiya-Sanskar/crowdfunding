import frappe
@frappe.whitelist(allow_guest=True)
def contact_us(first_name, last_name, email_id, subject, message):
    doc = frappe.get_doc({"doctype": "Lead", "first_name": f"{first_name}", "last_name": f"{last_name}", "email_id": f"{email_id}", "subject": f"{subject}", "message": f"{message}" })  
    doc.insert(ignore_permissions=True)
    frappe.db.commit()

