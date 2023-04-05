import frappe
 
@frappe.whitelist(allow_guest=True)
def get_campaign_detail(name):
    # return name
    return frappe.db.get_value("Donation Campaign", filters={"name": name}, fieldname=["*"], as_dict=True)
    # return frappe.db.get_all("Donation Campaign", )

@frappe.whitelist(allow_guest=True)
def get_campaigns(category = '', language = ''):
    from frappe.utils import getdate
    today = getdate()
    if category != '':
        return frappe.db.get_list("Donation Campaign", filters={'published': 1, 'status': 'Live', 'campaign_category': f'{category}', 'end_date': ['>=', today]}, fields=["*"], order_by='start_date desc')
    else:
        return frappe.db.get_list("Donation Campaign", filters={'published': 1, 'status': 'Live', 'end_date': ['>=', today]}, fields=["*"], order_by='start_date desc')

    # if language == 'gu':
    #     language = 'ગુજરાતી'
    # elif language == 'hi':
    #     language = 'हिंदी'
    # elif language == 'en-GB' or 'en':
    #     language = 'English'
   
    # if category != '' and language != '':
    #     return frappe.db.get_list("Donation Campaign", filters={'published': 1, 'campaign_category': f'{category}', 'language': f'{language}', 'end_date': ['>=', today]}, fields=["name", "campain_image", "is_featured", "campaign_title", "donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"], order_by='start_date desc')
    # elif category != '' and language == '':
    #     return frappe.db.get_list("Donation Campaign", filters={'published': 1, 'campaign_category': f'{category}', 'end_date': ['>=', today]}, fields=["name", "campain_image", "is_featured", "campaign_title", "donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"], order_by='start_date desc')
    # elif language != '' and category == '':
    #     return frappe.db.get_list("Donation Campaign", filters={'published': 1, 'language': f'{language}', 'end_date': ['>=', today]}, fields=["name", "campain_image", "is_featured", "campaign_title", "donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"], order_by='start_date desc')
    # else:
    #     return frappe.db.get_list("Donation Campaign", filters={'published': 1, 'end_date': ['>=', today]}, fields=["name", "campain_image", "is_featured", "campaign_title", "donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"], order_by='start_date desc')

@frappe.whitelist(allow_guest=True)
def get_featured_campaigns():
    return frappe.db.get_list("Donation Campaign", filters={'published': 1, 'status': 'Live', 'is_featured': 1}, fields=["*"])

# @frappe.whitelist(allow_guest=True)
# def get_campaign_detail(name):
#     doc = frappe.get_doc("Donation Campaign", name)
#     doc = doc.__dict__
#     return doc

@frappe.whitelist(allow_guest=True)
def request_campaign(full_name, email, phone, campaign_story, social_media_page, beneficiary_group, campaign_type, organisation_website='', organisation_name='',):
    doc = frappe.get_doc({"doctype": "Donation Campaign request", "full_name": f"{full_name}", "email": f"{email}", "phone": f"{phone}", "campaign_story": f"{campaign_story}", "requester_type": f"{campaign_type}", "beneficiary_group": f"{beneficiary_group}", "social_media_page": f"{social_media_page}", "organisation_website": f"{organisation_website}", "organisation_name": f"{organisation_name}" })
    doc.insert(ignore_permissions=True)
    frappe.db.commit()
    

@frappe.whitelist(allow_guest=True)
def get_details_of_ngo_campaigns(ngo):
    # donor = frappe.db.get_value("Donor", filters={"email": donor}, fieldname=["name"])
    total_live_campaign = 0
    total_pending_campaign = 0
    total_rejected_campaign = 0
    total_raised_amount = 0
    total_requested_amount = 0
    ngo_name = frappe.db.get_value("NGO", filters={"email": ngo}, fieldname=['name'])
    data = frappe.db.get_list("Donation Campaign", filters={"ngo": ngo_name}, fields=['name', 'raised_amount', 'donation_amount', 'status'])
    
    for i in data:
        total_raised_amount += i.raised_amount
        total_requested_amount += i.donation_amount
        if i.status == 'Live':
            total_live_campaign += 1
        if i.status == 'Rejected':
            total_rejected_campaign += 1
        if i.status == 'Pending':
            total_pending_campaign += 1

    data = [{"total_live_campaign": total_live_campaign, "total_pending_campaign": total_pending_campaign, "total_raised_amount": total_raised_amount, "total_rejected_campaign": total_rejected_campaign, "total_requested_amount":total_requested_amount}]
    return data