# Copyright (c) 2023, Sanskar and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator
from frappe.model.naming import getseries
from frappe.utils import get_datetime_str, formatdate
from frappe.model.document import Document
from frappe.website.website_generator import WebsiteGenerator
from frappe.utils import now

class DonationCampaign(WebsiteGenerator):
	def autoname(self):
		_date = formatdate(get_datetime_str(self.creation), "dd-mm-yyyy")
		org_name = self.campaign_title.strip()[0:7].replace(" ","-")
		autoname = "{0}-{1}-".format(org_name,_date)
		self.name = autoname.upper()+getseries(org_name, 4)

	def before_save(self):
		if self.status=='Live' and frappe.get_doc("Donation Campaign", self.name).status!="Live":
			ngo=frappe.get_doc("NGO", self.ngo)
			# print("\n\n\Changed",self.ngo.email,frappe.db.exists("User", "jane@example.org"))
		if self.campaign_request:
			if self.status == 'Live':
				frappe.db.set_value("Donation Campaign request", self.campaign_request, "status", "Live Campaign")
			elif self.status == 'Closed':
				frappe.db.set_value("Donation Campaign request", self.campaign_request, "status", "Close Campaign")

	def before_insert(self):
		if self.start_date < now():
			frappe.throw("The start date should be no later than today's date")
	
	# def after_insert(self):

	def before_save(self):
		if self.end_date < self.start_date:
			frappe.throw("end date should be after the start date")
	# pass
	# def after_insert(self):
		print("self.name", self.name)

		import xml.etree.ElementTree as ET
		
		# Parse the existing XML file
		tree = ET.parse('../apps/sadbhavna_donatekart/frontend/public/sitemap.xml')
		root = tree.getroot()

		# Create a new element and add it to the root
		url = ET.Element('url')
		loc = ET.Element('loc')
		lastmod = ET.Element('lastmod')

		from datetime import datetime, timezone

		# Get the current time in UTC
		current_time = datetime.now(timezone.utc)

		# Format the time as a string
		formatted_time = current_time.isoformat()

		# a = 'adsf'
		loc.text = f"https://bestdeed.org/campaign-donation/{self.name}"
		lastmod.text = formatted_time

		url.append(loc)
		url.append(lastmod)
		root.append(url)

		# Write the updated XML back to the file
		tree.write('../apps/sadbhavna_donatekart/frontend/public/sitemap.xml', encoding='utf-8', xml_declaration=True)

@frappe.whitelist()
def check_user(email):
    return frappe.db.exists("User", email)

@frappe.whitelist()
def create_ngo_user(ngo):
    ngo_data = frappe.db.get_value("NGO", ngo, ['full_name', 'state', 'city', 'phone', 'email', 'requester_type'], as_dict=True)
    
    user = frappe.get_doc(doctype='User', first_name = ngo_data.full_name, email = ngo_data.email, phone = ngo_data.phone, state = ngo_data.state, city = ngo_data.city, role_profile_name='NGO', send_welcome_email = 0)
    user.insert()
    donor = frappe.get_doc(doctype='Donor', donor_name=ngo_data.full_name, email = ngo_data.email, mobile = ngo_data.phone, donor_type='Default') 
    donor.insert()