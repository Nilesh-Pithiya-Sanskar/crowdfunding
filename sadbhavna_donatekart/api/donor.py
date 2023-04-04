import frappe
from frappe.utils import today

# @frappe.whitelist(allow_guest=True)
# def get_recent_donation(name):
#     return frappe.db.get_value("Donation", filters={"campaign": name, "anonymous": 0})

@frappe.whitelist(allow_guest=True)
def download_80g(donor, donation, date=''):
    if date == '':
        date = today()
    donor = frappe.db.get_value("Donor", filters={"email": donor}, fieldname=["name"])
    data = frappe.db.get_value("Tax Exemption 80G Certificate", filters={"donor": donor, "date": date, "donation": donation}, fieldname=['name'])
    if data:
        return data
    else:
        doc = frappe.get_doc({"doctype": "Tax Exemption 80G Certificate", "recipient": "Donor", "donor": donor, "date": date, "donation": donation})
        doc.insert(ignore_permissions=True)
        frappe.db.commit()
        doc = frappe.get_last_doc("Tax Exemption 80G Certificate")
        return doc.name

@frappe.whitelist(allow_guest=True)
def get_details_of_donor_donations(donor):
    # donor = frappe.db.get_value("Donor", filters={"email": donor}, fieldname=["name"])
    total_campaign = 0
    total_donation = 0
    data = frappe.db.get_list("Donation", filters={"email": donor}, fields=['campaign', "amount"])
    for i in data:
        total_campaign += 1
        total_donation += i.amount
    return total_campaign, total_donation

@frappe.whitelist()
def update_donor(first_name, last_name, phone, old_email, pan_number):
    donor = frappe.db.get_value("Donor", filters={"email": old_email}, fieldname=["name"])
    user = frappe.db.get_value("User", filters={"email": old_email}, fieldname=["name"])
    frappe.db.set_value("Donor", donor, {"donor_name": f'{first_name} {last_name}', "mobile": f'{phone}', "pan_number": pan_number})
    doc = frappe.get_doc('User', old_email)
    doc.first_name = first_name
    doc.last_name = last_name
    doc.phone = f'{phone}'
    doc.save()
    # frappe.rename_doc('User', old_email, email)     
    
@frappe.whitelist()
def set_image(name, user_image):
    frappe.db.set_value("User", name, {'user_image': user_image})


@frappe.whitelist(allow_guest=True)
def create_donor_from_checkout(f_name, phone_number, email):
    from sadbhavna_donatekart.api.api import login_user
    user = frappe.db.get_value("User", email, fieldname=['name'])
    if user:
        login_user(user)
    else:
        user = frappe.get_doc({"doctype": "User", "email": f'{email}', "first_name": f_name, "phone": phone_number, "role_profile_name": "Donor"})
        user.insert(ignore_permissions=True)
        frappe.db.commit()
        donor = frappe.get_doc({"doctype": "Donor", "email": f"{email}", "donor_name": f"{f_name}", "donor_type": "Defult", "mobile": phone_number})
        donor.insert(ignore_permissions=True)
        frappe.db.commit()
        user = frappe.db.get_value("User", email, fieldname=['name'])
        if user:
            login_user(user)