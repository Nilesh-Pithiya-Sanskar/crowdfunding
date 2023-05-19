from frappe.auth import LoginManager
from frappe.auth import CookieManager
from sadbhavna_donatekart.api.autologin import login_via_oauth2, login_via_oauth2_id_token
import frappe
from frappe.utils import today
import math
import random

import base64
import json
from typing import TYPE_CHECKING, Callable

import jwt
import frappe.utils
from frappe import _
from frappe.utils.password import get_decrypted_password
# from frappe.utils.oauth import login_via_oauth2, login_via_oauth2_id_token


if TYPE_CHECKING:
    from frappe.core.doctype.user.user import User


class SignupDisabledError(frappe.PermissionError):
    ...


@frappe.whitelist(allow_guest=True)
def get_recent_donation(name):
    return frappe.db.get_list("Donation", filters={"campaign": name}, fields=["name", "donor_name", "amount", "creation", "date", "anonymous", "donor_image"], order_by='date desc')
    # return frappe.db.sql(f"select donor.image, donor.donor_name, donation.name, donation.amount, donation.creation, donation.anonymous from `tabDonation` as donation inner join `tabDonor` as donor on donation.donor = donor.name where donation.name='{name}'")

@frappe.whitelist(allow_guest=True)
def get_generous_donation(name):
    return frappe.db.get_list("Donation", filters={"campaign": name}, fields=["name", "donor_name", "amount", "creation", "date", "anonymous", "donor_image"], order_by='amount desc')
    # return frappe.db.sql(f"select donor.image, donor.donor_name, donation.name, donation.amount, donation.creation, donation.anonymous from `tabDonation` as donation inner join `tabDonor` as donor on donation.donor = donor.name where donation.name='{name}'")

@frappe.whitelist(allow_guest=True)
def register(first_name, last_name, email, password, phone_number, pan_number):
    # doc = frappe.new_doc('User')
    # doc.email = email,
    # doc.first_name = first_name,
    # doc.last_name = last_name,
    # doc.new_password = password,
    # doc.phone = phone_number
    # doc.insert(ignore_permissions=True)

    user = frappe.db.get_value("User", email, fieldname=['name'])
    if user:
        return 'This email is already registered'
    else:
        user_no = frappe.db.get_value("User", filters={"phone": phone_number}, fieldname=['name'])
        if user_no:
            return 'This phone number is already registered'
        else:
            user = frappe.get_doc({"doctype": "User", "email": f"{email}", "first_name": f"{first_name}",
                                "last_name": f"{last_name}", "phone": f"{phone_number}", "new_password": f"{password}", "role_profile_name": "Donor", "send_welcome_email": 0})
            user.insert(ignore_permissions=True)
            frappe.db.commit()
            donor = frappe.get_doc({"doctype": "Donor", "email": f"{email}", "donor_name": f"{first_name} {last_name}",
                                "mobile": f"{phone_number}", "donor_type": "Default", "pan_number": f"{pan_number}"})
            donor.insert(ignore_permissions=True)
            frappe.db.commit()

# @frappe.whitelist(allow_guest=True)
# def set_details_in_doctype_after_donation(user_id, campaign, item, price):
#     donor = frappe.db.get_value("Donor", filters={"email": f"{user_id}"}, fieldname=["name"], pluck="name")
#     donation = frappe.get_doc({"doctype": "Donation", "donor": donor, "campaign": f"{campaign}", "date": today(), "amount": price, "donation_item": [{"item": item, "qty": 1, "rate": price, "amount": price}]})
#     donation.insert(ignore_permissions=True)
#     frappe.db.commit()

#     # raised_amount = frappe.db.get_value("Donation Campaign", filters={"name": campaign}, fieldname=["raised_amount"], pluck="name")
#     raised_amount, donation_amount = frappe.db.get_value("Donation Campaign", filters={"name": campaign}, fieldname=["raised_amount", "donation_amount"])
#     total = int(price) + int(raised_amount)
#     if total >= int(donation_amount):
#         frappe.db.set_value("Donation Campaign", campaign, "raised_amount", total)
#         frappe.db.set_value("Donation Campaign", campaign, "published", 0)
#     else:
#         frappe.db.set_value("Donation Campaign", campaign, "raised_amount", total)


@frappe.whitelist(allow_guest=True)
def set_details_in_doctype_after_donation(user_id, campaign, item, amount, payment_id, anonymous):
    # print("\n\n user", user_id, "\n\n")
    # print("\n\n anonymouse", anonymous, "\n\n")
    from frappe.utils import now
    donor = frappe.db.get_value(
        "Donor", filters={"email": f"{user_id}"}, fieldname=["name"], pluck="name")
   
    donation = frappe.get_doc({"doctype": "Donation", "donor": donor, "campaign": f"{campaign}",
                              "date": today(), "amount": amount, "donation_item": item, "payment_id": payment_id, "anonymous": anonymous, "paid": 1})
    
    payment = frappe.get_doc({"doctype": "Payment Entry", "payment_type": "Receive", "party_type": "Donor", "party": donor, "paid_to": "Axis - ST",
                               "paid_from": "Debtors - ST", "posting_date": today(), "reference_date": today(), "reference_no": payment_id,
                               "received_amount": amount, "paid_amount": amount})
       
    donors = frappe.db.sql(f"select count(name) as donors from `tabDonation` where campaign='{campaign}'", as_dict=True)
    donation_campaign = frappe.get_doc("Donation Campaign",  campaign)
    item_dict = {}
    item_list = []
    for i in item:
        item_dict[i['item']]=i
        item_list.append(i['item'])
    for d in donation_campaign.add_campaign_items:
        if d.item in item_list:
            d.c_qty = int(d.c_qty) if d.c_qty else 0
            d.c_qty += int(item_dict[d.item]['qty'])
            frappe.db.set_value("Donation Campaign Item", d.name, "c_qty", d.c_qty)
    raised_amount = donation_campaign.raised_amount
    donation_amount = donation_campaign.donation_amount
    total = int(amount) + int(raised_amount)
    if total >= int(donation_amount):
        # frappe.db.set_value("Donation Campaign", campaign,
        #                     "raised_amount", total)
        frappe.db.set_value("Donation Campaign", campaign, {"raised_amount": total, "published": 0, "status": "Closed", "total_donor": donors[0].donors, "remark": "amount target is completed", "completion_date": now()})
    else:
        frappe.db.set_value("Donation Campaign", campaign, {"raised_amount": total, "total_donor": donors[0].donors})
    # donation = frappe.db.get_value("Donation", filters={'donor': user_id, 'campaign': campaign, 'donation_item': item, "payment_id": payment_id, 'date': today()}, fieldname=['name'])
    # print("\n\n donation", donation, "\n\n")

    payment.insert(ignore_permissions=True)
    frappe.db.commit()

    donation.insert(ignore_permissions=True)
    frappe.db.commit()

    donation = frappe.get_last_doc('Donation', filters={"payment_id": payment_id})

    return amount, donation.name

# @frappe.whitelist(allow_guest=True)
# def set_details_in_doctype_after_donation(user_id, campaign, item, amount, payment_id, anonymous):
#     donor = frappe.db.get_value(
#         "Donor", filters={"email": f"{user_id}"}, fieldname=["name"], pluck="name")
#     donation = frappe.get_doc({"doctype": "Donation", "donor": donor, "campaign": f"{campaign}",
#                               "date": today(), "amount": amount, "donation_item": item, "payment_id": payment_id, "anonymous": anonymous, "paid": 1})
#     donation.insert(ignore_permissions=True)
#     frappe.db.commit()

#     donation_campaign = frappe.get_doc("Donation Campaign",  campaign)
#     item_dict = {}
#     item_list = []
#     for i in item:
#         item_dict[i['item']]=i
#         item_list.append(i['item'])
#     raised_amount = 0
#     for d in donation_campaign.add_campaign_items:
#         if d.item in item_list:
#             d.c_qty = int(d.c_qty) if d.c_qty else 0
#             d.c_qty += int(item_dict[d.item]['qty'])
#             frappe.db.set_value("Donation Campaign Item", d.name, "c_qty", d.c_qty)
#         raised_amount += int(d.c_qty) * int(d.price)
#     # raised_amount = donation_campaign.raised_amount
#     donation_amount = donation_campaign.donation_amount
#     # total = int(amount) + int(raised_amount)
#     if raised_amount >= int(donation_amount):
#         # frappe.db.set_value("Donation Campaign", campaign,
#         #                     "raised_amount", total)
#         frappe.db.set_value("Donation Campaign", campaign, {
#                             "raised_amount": raised_amount, "published": 0, "status": "Closed"})
#     else:
#         frappe.db.set_value("Donation Campaign", campaign,
#                             "raised_amount", raised_amount)
#     # donation = frappe.db.get_value("Donation", filters={'donor': user_id, 'campaign': campaign, 'donation_item': item, "payment_id": payment_id, 'date': today()}, fieldname=['name'])
#     # print("\n\n donation", donation, "\n\n")
#     donation = frappe.get_last_doc('Donation', filters={"payment_id": payment_id})

#     return amount, donation.name



# login with google
@frappe.whitelist(allow_guest=True)
def login_with_google(email, last_name='', first_name='', image_url=''):
    user_exists = frappe.db.get_value("User", filters={'email': email})

    if not user_exists:
        user = frappe.get_doc({"doctype": "User", "email": email, "last_name": last_name,
                              "first_name": first_name, "user_image": image_url, "role_profile_name": "Donor", "send_welcome_email": 0})
        user.insert(ignore_permissions=True)
        frappe.db.commit()
        donor = frappe.get_doc({"doctype": "Donor", "email": f"{email}", "donor_name": f"{first_name} {last_name}",
                                "donor_type": "Default", "image": f"{image_url}"})
        donor.insert(ignore_permissions=True)
        frappe.db.commit()
    else:
        doc = frappe.get_doc("User", email)
        doc.update(
            {
                "enabled": 1,
                "email": email,
                "last_name": last_name,
                "first_name": first_name,
                "user_image": image_url,
            }
        )
        doc.save(ignore_permissions=True)
        donor = frappe.db.get_value(
            "Donor", filters={"email": f"{email}"}, fieldname=["name"], pluck="name")
        doc = frappe.get_doc("Donor", donor)
        doc.update(
            {
                "email": f"{email}",
                "donor_name": f"{first_name} {last_name}",
                "donor_type": "Default",
                "image": f"{image_url}"
            }
        )
        doc.save(ignore_permissions=True)

    return login_user(email)


def login_user(user):
    number = frappe.db.get_value("User", user, ['phone'])
    frappe.local.login_manager.user = user
    frappe.local.login_manager.post_login()
    frappe.db.commit()

    login_token = frappe.generate_hash(length=32)
    frappe.cache().set_value(
        f"login_token:{login_token}", frappe.local.session.sid, expires_in_sec=120
    )
    # print("\n\n login token", login_token, "\n\n")
    # return login_token
    return login_via_token(login_token, number)

# @frappe.whitelist(allow_guest=True)
# def login_user():
#     # frappe.local.login_manager.user = user
#     frappe.local.login_manager.post_login()
#     frappe.db.commit()

#     login_token = frappe.generate_hash(length=32)
#     frappe.cache().set_value(
#         f"login_token:{login_token}", frappe.local.session.sid, expires_in_sec=120
#     )
#     print("\n\n login token", login_token, "\n\n")
#     # return login_token
#     return login_via_token(login_token)


@frappe.whitelist(allow_guest=True)
def login_via_token(login_token: str, number):
    sid = frappe.cache().get_value(f"login_token:{login_token}", expires=True)
    print("api login_via_token", sid)
    if not sid:
        frappe.respond_as_web_page(_("Invalid Request"), _(
            "Invalid Login Token"), http_status_code=417)
        return

    frappe.local.form_dict.sid = sid
    if number:
        frappe.local.cookie_manager = CookieManager()
        frappe.local.cookie_manager.set_cookie("number", number)
    frappe.local.login_manager = LoginManager()
   
    # frappe.utils.set_cookie("my_cookie_name", '7845795655', expires=None)
    return True


# login with whatsapp if whatsapp integration is enable
@frappe.whitelist(allow_guest=True)
def login_with_whatsapp(phone):
    # if whatsapp integration
    otp = generateOTP(4)
    # doc = frappe.get_doc({"doctype": "Whatsapp OTP", "number": f'{phone}', "otp": otp, "status": "Pending"})
    doc = frappe.get_doc({"doctype": "Whatsapp OTP",
                         "number": f'{phone}', "otp": otp, "status": "Sent"})
    doc.insert(ignore_permissions=True)
    frappe.db.commit()

    message = send_whatsapp_otp(phone, otp)
    message = f'OTP sent to your whatsapp number: {phone}'
    result = {"message": message, "number": phone}
    # return result
    return message, phone, 'whatsapp'

def whatsapp_keys_details():
    access_token = frappe.db.get_single_value('WhatsApp Api', 'access_token')
    api_endpoint = frappe.db.get_single_value('WhatsApp Api', 'api_endpoint')
    name_type = frappe.db.get_single_value('WhatsApp Api', 'name_type')
    version = frappe.db.get_single_value('WhatsApp Api', 'version')
    return access_token, api_endpoint, name_type, version

def send_whatsapp_otp(phone, otp):  
    import requests
    access_token, api_endpoint, name_type, version = whatsapp_keys_details()
    headers = {
        "Content-Type": "text/json",
        "Authorization": access_token
    }
    url = f"{api_endpoint}/{name_type}/{version}/sendTemplateMessage?whatsappNumber=91{phone}"
    payload = {
        "parameters": [
            {
                "name": "otp",
                "value": otp
            },
            {
                "name": "business_name",
                "value": "BestDeed"
            }
        ],

        "broadcast_name": "otp_msg",
        "template_name": "otp_msg"
    }
    response = requests.post(url, json=payload, headers=headers)

    return f'OTP sent to your whatsapp number: {phone}'


# login with sms
@frappe.whitelist(allow_guest=True)
def login_with_sms(phone):
    otp = generateOTP(4)
    doc = frappe.get_doc({"doctype": "SMS OTP",
                         "number": f'{phone}', "otp": otp, "status": "Sent"})
    doc.insert(ignore_permissions=True)
    frappe.db.commit()

    message = send_sms_otp(phone, otp)
    result = {"message": message, "number": phone}
    # return result
    return message, phone, 'sms'


@frappe.whitelist(allow_guest=True)
def send_sms_otp(number, otp):

    from twilio.rest import Client
    account_sid = 'ACe488e68cab478d21b913f5d4f96ae1b9'
    auth_token = '487fcf46079bd9e8c6a0d4030f604cc5'
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    from_='+15855493649',
    body= f'{otp} is your one time password (OTP) to login to crowdfunding. Don`t share OTP With anyone. Please enter the OTP to proceed.',
    to= f'+91{number}'
    )
    return f'OTP sent to your mobile number: {number}'

# generate OTP
def generateOTP(digit):
    digits = "0123456789"
    OTP = ""
    for i in range(digit):
        OTP += digits[math.floor(random.random() * 10)]

    return OTP

# verify OTP and login
@frappe.whitelist(allow_guest=True)
def verify_otp(number, otp, m_type):
    if m_type == 'whatsapp':
        data = frappe.db.get_value("Whatsapp OTP", filters={
                                "number": number, "otp": otp, "status": "Sent"}, fieldname=['name'])
        if data:
            frappe.db.set_value("Whatsapp OTP", data, {"status": "Verified"})
            frappe.db.delete("Whatsapp OTP", {"name": data})
            frappe.db.commit()
            user = frappe.db.get_value(
                "User", filters={"phone": number}, fieldname=['name'])
            if user:
                login_user(user)
            else:
                email = str(number) + '@gmail.com'
                first_name = number
                user = frappe.get_doc({"doctype": "User", "email": f'{email}', "first_name": first_name, "phone": number, "role_profile_name": "Donor", "send_welcome_email": 0})
                user.insert(ignore_permissions=True)
                frappe.db.commit()
                donor = frappe.get_doc({"doctype": "Donor", "email": f"{email}", "donor_name": f"{first_name}", "donor_type": "Default", "mobile": number})
                donor.insert(ignore_permissions=True)
                frappe.db.commit()
                user = frappe.db.get_value(
                "User", filters={"phone": number}, fieldname=['name'])
                if user:
                    login_user(user)
        else:
            return 'failed', 'a'
            # OTP not match write your logic here
            return f'Your OTP is not match with your number: {number}'
        
    elif m_type == 'sms':
        data = frappe.db.get_value("SMS OTP", filters={
                                "number": number, "otp": otp, "status": "Sent"}, fieldname=['name'])
        if data:
            frappe.db.set_value("SMS OTP", data, {"status": "Verified"})
            frappe.db.delete("SMS OTP", {"name": data})
            frappe.db.commit()
            user = frappe.db.get_value(
                "User", filters={"phone": number}, fieldname=['name'])
            if user:
                login_user(user)
            else:
                email = str(number) + '@gmail.com'
                first_name = number
                user = frappe.get_doc({"doctype": "User", "email": f'{email}', "first_name": first_name, "phone": number, "role_profile_name": "Donor", "send_welcome_email": 0})
                user.insert(ignore_permissions=True)
                frappe.db.commit()
                donor = frappe.get_doc({"doctype": "Donor", "email": f"{email}", "donor_name": f"{first_name}", "donor_type": "Default", "mobile": number})
                donor.insert(ignore_permissions=True)
                frappe.db.commit()
                user = frappe.db.get_value(
                "User", filters={"phone": number}, fieldname=['name'])
                if user:
                    login_user(user)
        else:
            return 'failed', 'a'
        
    elif m_type == 'email':
        data = frappe.db.get_value("Email OTP", filters={
                                "email": number, "otp": otp, "status": "Sent"}, fieldname=['name'])
        if data:
            frappe.db.set_value("Email OTP", data, {"status": "Verified"})
            return 'pass', number
        else:
            return 'failed', 'a'
            return f'Your OTP is not match with your email: {number}'
    
    


#create razorpay payment link 
@frappe.whitelist(allow_guest=True)
def create_payment_link(amount, name, email):
    amount = str(amount)
    amount1 = amount + '00'
    from sadbhavna_donatekart import razorpay
    client = razorpay.Client(auth=("rzp_test_Adc0DsR6E8VV3t", "qxawCeu9WJSdW4XjEK8vqzWO"))
    return client.payment_link.create({
    "amount": int(amount1),
    "currency": "INR",
    "description": "Donation",
    "customer": {
        "name": name,
        "email": email,
    },
    "notify": {
        "sms": True,
        "email": True
    },
    "reminder_enable": True,
    # "notes": {
    #     "policy_name": "Jeevan Bima"
    # },
    # "callback_url": f"http://crowdfunding.com:8001/api/method/sadbhavna_donatekart.api.api.verify_signature?amount={amount}",
    "callback_url": f"https://crowdfunding.frappe.cloud/sadbhavna?amount={amount}",
    "callback_method": "get"
    })

# verify_signature after payment done
@frappe.whitelist(allow_guest=True)
def verify_signature(amount, razorpay_payment_id, razorpay_payment_link_id, razorpay_payment_link_reference_id, razorpay_payment_link_status, razorpay_signature):
    from sadbhavna_donatekart import razorpay
    client = razorpay.Client(auth=("rzp_test_Adc0DsR6E8VV3t", "qxawCeu9WJSdW4XjEK8vqzWO"))
    response = client.utility.verify_payment_link_signature({
    'payment_link_id': razorpay_payment_link_id,
    'payment_link_reference_id': razorpay_payment_link_reference_id,
    'payment_link_status': razorpay_payment_link_status,
    'razorpay_payment_id': razorpay_payment_id,
    'razorpay_signature': razorpay_signature
    })
    return response, amount
    redirect_url = f"http://crowdfunding.com:8001/sadbhavna/donation-success-page/{amount}"
    return response, redirect_url


@frappe.whitelist(allow_guest=True)
def set_translation_from_erpnext(doc, method):

    import json
    import os

    language, source_text, translated_text = frappe.db.get_value("Translation", doc.name, ['language', "source_text", "translated_text"])

    file_path = 'File.json'
    if language == 'en':
        file_path = 'en.json'
    elif language == 'gu':
        file_path = 'gu.json'
    elif language == 'hi':
        file_path = 'hi.json'

    with open(file_path, "r", encoding="utf-8") as files:
        existing_data = json.load(files)
        # if existing_data[source_text]:
        #     if existing_data[source_text] == source_text:
        #         print("\n\n key alredy exist")
        # else:
        existing_data[source_text] = translated_text

    with open(file_path, "w") as d:
        data = json.dumps(existing_data)
        d.write(data)
        

    # with open('File.json', 'r') as file:
    # # file = open("File.json", "a")
    #     print("\n\n file", file, "\n\n")
    #     # print("\n\n f.read", file.read())
    #     a = file.read()
    #     existing_data = json.load(a)
    #     print("\n\n existing data", existing_data, "\n\n")
    #     existing_data.append(new_data)

@frappe.whitelist(allow_guest=True)
def forgot_password(email):
    user = frappe.db.get_value("User", email, 'name')
    if user:
        from frappe.utils import get_url, random_string, now_datetime
        # otp = generateOTP(4)
        # # doc = frappe.get_doc({"doctype": "Whatsapp OTP", "number": f'{phone}', "otp": otp, "status": "Pending"})
        # doc = frappe.get_doc({"doctype": "Email OTP",
        #                     "email": f'{email}', "otp": otp, "status": "Sent"})
        # doc.insert(ignore_permissions=True)
        # frappe.db.commit()

        key = random_string(32)
        frappe.db.set_value("User", user, "reset_password_key", key)
        frappe.db.set_value("User", user, "last_reset_password_key_generated_on", now_datetime())

        url =f"/reset_password/{key}&{email}"
        link = get_url(url)

        message = send_reset_password_email(email, link)
        result = {"message": message, "number": email}
        # return result
        return message, email, 'email'
    else:
        return 'user not found with this email'

def send_reset_password_email(email, link):
    frappe.sendmail(sender='sanskartechnolab.test@gmail.com', recipients=email, subject='Forgot Password', message=f"Reset your password in BestDeed using this link: {link}", now=True)
    return f'OTP sent to your email address: {email}'

@frappe.whitelist(allow_guest=True)
def reset_password(email, password, key):
        pass_key = frappe.db.get_value("User", {'email': f'{email}'}, ['reset_password_key'])
        if pass_key and pass_key == key:
            doc = frappe.get_doc('User', email)
            doc.new_password = password
            doc.save(ignore_permissions=True)
            login_user(email)
        else:
            return 'Your key is not valid'
    # frappe.db.set_value("User", email, "new_password", password)


@frappe.whitelist(allow_guest=True)
def close_end_date_campaign():
    from frappe.utils import now
    today_end_date_campaign = frappe.db.get_list("Donation Campaign", filters={'end_date': ["<", today()]}, fields=['name', 'ngo_email', 'campaign_title', 'raised_amount'])
    for i in today_end_date_campaign:
        frappe.db.set_value("Donation Campaign", i.name, {'status': 'Closed', 'published': 0, 'remark': 'Your Camapign is close due to reached time limit.', 'completion_date': now()})
        frappe.db.commit()
        # frappe.sendmail(recipients=i.ngo_email, subject=f'You Campaign {i.campaign_title}', message=f'your campaign {i.campaign_title} is closed due to reached time limit, your total raised amount is {i.raised_amount}')
    return today_end_date_campaign


# custom login api
@frappe.whitelist( allow_guest=True )
def login(usr, pwd):
    try:
        login_manager = frappe.auth.LoginManager()
        login_manager.authenticate(user=usr, pwd=pwd)
        login_manager.post_login()
    except frappe.exceptions.AuthenticationError:
        frappe.clear_messages()
        frappe.local.response["message"] = {
            "success_key":0,
            "message":"Authentication Error!"
        }

        return

    api_generate = generate_keys(frappe.session.user)
    user = frappe.get_doc('User', frappe.session.user)

    frappe.response["message"] = {
        "success_key":1,
        "message":"Authentication success",
        "sid":frappe.session.sid,
        "api_key":user.api_key,
        "api_secret":api_generate,
        "username":user.username,
        "email":user.email,
        "user_image": user.user_image
    }



def generate_keys(user):
    user_details = frappe.get_doc('User', user)
    api_secret = frappe.generate_hash(length=15)

    if not user_details.api_key:
        api_key = frappe.generate_hash(length=15)
        user_details.api_key = api_key
    user_details.api_secret = api_secret
    user_details.save(ignore_permissions=True)

    return api_secret


@frappe.whitelist(allow_guest=True)
def get_about_data():
    total_campaigns = frappe.db.count('Donation Campaign')
    total_donations = frappe.db.count('Donation')
    total_donors = frappe.db.count('Donor')
    total_ngos = frappe.db.count('NGO')
    total_live_campaigns = frappe.db.count('Donation Campaign', {'status': 'Live'})

    return total_campaigns, total_donations, total_donors, total_ngos, total_live_campaigns


# @frappe.whitelist(allow_guest=True)
# def ondismiss_payment(item_cart, i_qty, total_price, item_b, campaign, email, name, phone=''):
#     # print("\n\n item_cart", item_cart)
#     # print("\n\n i_qty", i_qty)
#     # print("\n\n total_price", total_price)
#     # print("\n\n item_b", item_b)
#     # print("\n\n campaign", campaign)
#     # print("\n\n email", email)
#     # print("\n\n name", name)
#     # print("\n\n phone", phone)

#     message = f'''
#         <p>Hello {name},</p>
#         <p>You recently visit our platform BestDeed and try to donate but your payment is not done.</p>
#         <a href="https://bestdeed.org/campaign-donation/{campaign}">Click here to donate</a>
#         <p> Thank You </p>
#     '''
#     frappe.sendmail(recipients=email, subject='Donation Not Completed | BestDeed', message=message)


@frappe.whitelist(allow_guest=True)
def ondismiss_payment(item_cart, i_qty, total_price, item_b, campaign, email, name, phone=''):
# def ondismiss_payment(name):
    pass
    # print("\n\n name", name)
    # donation = frappe.get_list("Donation", filters={"donor_name": name}, fields=["name"])
    # if donation:
    #     donation_doc = frappe.get_doc("Donation", donation[0].name)
    #     message = f'''
    #         <p>Dear {donation_doc.donor_name },<p>
    #         <p>We hope this email finds you well. We wanted to reach out and remind you about the donation you started for { frappe.db.get_value('Donation Campaign', donation_doc.campaign, 'campaign_title') } on BestDeed. It seems that you added an item to your cart but did not complete the transaction.</p>
    #         <p>Your contribution towards acquiring {{ for item in doc.donation_item }}{{ item.item }} for { frappe.get_doc("Donation Campaign", campaign).ngo }'s campaign is vital and will make a real difference in their mission to [describe the mission/goals of the NGO/Individual]. Your support is highly valued and deeply appreciated.</p>
    #         <p>To complete your donation and ensure your generous contribution reaches its intended destination, please visit [Campaign Donation Link] and proceed with the transaction. By finalizing your donation, you will help bring us closer to our fundraising goal and enable us to achieve a tangible impact.</p>
    #         <p>If you have any questions or encounter any difficulties during the donation process, please do not hesitate to contact us. We are here to assist you and make your donation experience as seamless as possible.</p>
    #         <p>Thank you for considering completing your donation for {{ frappe.get_doc('Donation Campaign', donation_doc.campaign).campaign_title }}. Your generosity has the power to create meaningful change, and we are grateful for your support.</p>
    #         <p>Best regards,</p>
    #         <p>BestDeed</p>
    #     '''
    #     subject = f"Don't Miss Out! Complete Your Donation for { frappe.db.get_value('Donation Campaign', donation_doc.campaign, 'campaign_title') } on BestDeed"

        
    #     frappe.sendmail(recipients='nilesh@sanskartechnolab.com', subject=subject, message=message)
        
    #     # frappe.sendmail(recipients='nilesh@sanskartechnolab.com', subject="Don't Miss Out! Complete Your Donation for on BestDeed", message='asdfadsfasd')

    #     return {'success': True, 'message': 'Notification sent successfully.'}
    # else:
    #     return {'success': False, 'message': 'No donation found for the given donor name.'}


@frappe.whitelist()
def delete_verified_otp():
    frappe.db.delete("Whatsapp OTP", {"status": "Verified"})
    frappe.db.delete("SMS OTP", {"status": "Verified"})
    frappe.db.commit()


@frappe.whitelist(allow_guest=True)
def set_sitemap_for_blog(doc, method):

    print("\n\n called \n\n")

    import xml.etree.ElementTree as ET

    from datetime import datetime, timezone
	# Get the current time in UTC
    current_time = datetime.now(timezone.utc)
	# Format the time as a string
    formatted_time = current_time.isoformat()

    xml_file_path = '../apps/sadbhavna_donatekart/sadbhavna_donatekart/www/site/sitemap.xml'
    loc = f'https://bestdeed.org/blog-post/{doc.name}'
    lastmod = formatted_time

    tree = ET.parse(xml_file_path)
    root = tree.getroot()

    # root.attrib['xmlns:xsi'] = 'http://www.w3.org/2001/XMLSchema-instance'
    # root.attrib['xmlns'] = "http://www.sitemaps.org/schemas/sitemap/0.9"
    # root.attrib['xsi:schemaLocation'] = 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd'

    # if root.attrib['xmlns:xsi'] != 'http://www.w3.org/2001/XMLSchema-instance':
    #     root.attrib['xmlns:xsi'] = 'http://www.w3.org/2001/XMLSchema-instance'
    # if root.attrib['xmlns'] != "http://www.sitemaps.org/schemas/sitemap/0.9":
    #     root.attrib['xmlns'] = "http://www.sitemaps.org/schemas/sitemap/0.9"
    # # if root.attrib['xmlns:image'] !="http://www.google.com/schemas/sitemap-image/1.1":
    #     # root.attrib['xmlns:image'] ="http://www.google.com/schemas/sitemap-image/1.1"
    # if root.attrib['xsi:schemaLocation'] != 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd':
    #     root.attrib['xsi:schemaLocation'] = 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd'

    # if 'xmlns:xsi' not in root.attrib or root.attrib['xmlns:xsi'] != 'http://www.w3.org/2001/XMLSchema-instance':
    #     root.set('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
    # if 'xmlns' not in root.attrib or root.attrib['xmlns'] != "http://www.sitemaps.org/schemas/sitemap/0.9":
    #     root.set('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    # if 'xsi:schemaLocation' not in root.attrib or root.attrib['xsi:schemaLocation'] != 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd':
    #     root.set('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd')


    # attribute_name = 'xmlns:xsi'
    # attribute_value = 'http://www.w3.org/2001/XMLSchema-instance'
    # if not any(attribute_name in attr for attr in root.attrib.values()):
    # # if not any(attribute_name in elem.attrib for elem in root):
    #     root.set(attribute_name, attribute_value)

    # attribute_name1 = 'xmlns'
    # attribute_value1 = 'http://www.sitemaps.org/schemas/sitemap/0.9'
    # if not any(attribute_name in attr for attr in root.attrib.values()):
    # # if not any(attribute_name1 in elem.attrib for elem in root):
    #     root.set(attribute_name1, attribute_value1)

    # attribute_name2 = 'xsi:schemaLocation'
    # attribute_value2 = 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd'
    # if not any(attribute_name in attr for attr in root.attrib.values()):
    # # if not any(attribute_name2 in elem.attrib for elem in root):
    #     root.set(attribute_name2, attribute_value2)

    # if 'xmlns' not in root.attrib:
    #     print("\n\n adfadsf not \n\n")

    # else:
    # print("\n\n asdfgafgafa sdf yes \n\n", root, "\n\n")



    # Check if the <url> tag with the specified <loc> exists
    url_exists = False
    for url_elem in root.findall('url'):
        loc_elem = url_elem.find('loc')
        if loc_elem is not None and loc_elem.text == loc:
            # Update the <lastmod> text
            lastmod_elem = url_elem.find('lastmod')
            if lastmod_elem is not None:
                lastmod_elem.text = lastmod
            url_exists = True
            break

    if not url_exists:
        # Create a new <url> tag
        new_url_elem = ET.Element('url')

        loc_elem = ET.SubElement(new_url_elem, 'loc')
        loc_elem.text = loc

        lastmod_elem = ET.SubElement(new_url_elem, 'lastmod')
        lastmod_elem.text = lastmod

        # Append the new <url> tag to the root
        root.append(new_url_elem)

    # Save the updated XML to a file
    tree.write(xml_file_path, encoding='utf-8')


@frappe.whitelist(allow_guest=True)
def remove_sitemap_for_blog(doc, method):

    import xml.etree.ElementTree as ET

    xml_file_path = '../apps/sadbhavna_donatekart/sadbhavna_donatekart/www/site/sitemap.xml'
    loc = f'https://bestdeed.org/blog-post/{doc.name}'

    tree = ET.parse(xml_file_path)
    root = tree.getroot()

    # Find the <url> tags with matching <loc> text
    urls_to_remove = []
    for url_elem in root.findall('url'):
        loc_elem = url_elem.find('loc')
        if loc_elem is not None and loc_elem.text == loc:
            urls_to_remove.append(url_elem)

    # Remove the matching <url> tags from the root
    for url_elem in urls_to_remove:
        root.remove(url_elem)

    # Save the updated XML to a file
    tree.write(xml_file_path, encoding='utf-8')
    