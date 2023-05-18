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
	# def on_update(self):
	# 	import xml.etree.ElementTree as ET

	# 	from datetime import datetime, timezone
	# 	# Get the current time in UTC
	# 	current_time = datetime.now(timezone.utc)
	# 	# Format the time as a string
	# 	formatted_time = current_time.isoformat()

	# 	xml_file_path = '../apps/sadbhavna_donatekart/sadbhavna_donatekart/www/site/sitemap.xml'
	# 	loc = f"https://bestdeed.org/campaign-donation/{self.name}"
	# 	lastmod = formatted_time

	# 	tree = ET.parse(xml_file_path)
	# 	root = tree.getroot()

	# 	# Check if the <url> tag with the specified <loc> exists
	# 	url_exists = False
	# 	for url_elem in root.findall('url'):
	# 		loc_elem = url_elem.find('loc')
	# 		if loc_elem is not None and loc_elem.text == loc:
	# 			# Update the <lastmod> text
	# 			lastmod_elem = url_elem.find('lastmod')
	# 			if lastmod_elem is not None:
	# 				lastmod_elem.text = lastmod
	# 			url_exists = True
	# 			break

	# 	if not url_exists:
	# 		# Create a new <url> tag
	# 		new_url_elem = ET.Element('url')

	# 		loc_elem = ET.SubElement(new_url_elem, 'loc')
	# 		loc_elem.text = loc

	# 		lastmod_elem = ET.SubElement(new_url_elem, 'lastmod')
	# 		lastmod_elem.text = lastmod

	# 		# Append the new <url> tag to the root
	# 		root.append(new_url_elem)

	# 	# Save the updated XML to a file
	# 	tree.write(xml_file_path, encoding='utf-8', xml_declaration=True)

	# def after_insert(self):
	# 	import xml.etree.ElementTree as ET

	# 	from datetime import datetime, timezone
	# 	# Get the current time in UTC
	# 	current_time = datetime.now(timezone.utc)
	# 	# Format the time as a string
	# 	formatted_time = current_time.isoformat()

	# 	xml_file_path = '../apps/sadbhavna_donatekart/sadbhavna_donatekart/www/site/sitemap.xml'
	# 	loc = f"https://bestdeed.org/campaign-donation/{self.name}"
	# 	lastmod = formatted_time

	# 	tree = ET.parse(xml_file_path)
	# 	root = tree.getroot()

	# 	# Check if the <url> tag with the specified <loc> exists
	# 	url_exists = False
	# 	for url_elem in root.findall('url'):
	# 		loc_elem = url_elem.find('loc')
	# 		if loc_elem is not None and loc_elem.text == loc:
	# 			# Update the <lastmod> text
	# 			lastmod_elem = url_elem.find('lastmod')
	# 			if lastmod_elem is not None:
	# 				lastmod_elem.text = lastmod
	# 			url_exists = True
	# 			break

	# 	if not url_exists:
	# 		# Create a new <url> tag
	# 		new_url_elem = ET.Element('url')

	# 		loc_elem = ET.SubElement(new_url_elem, 'loc')
	# 		loc_elem.text = loc

	# 		lastmod_elem = ET.SubElement(new_url_elem, 'lastmod')
	# 		lastmod_elem.text = lastmod

	# 		# Append the new <url> tag to the root
	# 		root.append(new_url_elem)

	# 	# Save the updated XML to a file
	# 	tree.write(xml_file_path, encoding='utf-8', xml_declaration=True)

	def after_delete(self):
		import xml.etree.ElementTree as ET

		xml_file_path = '../apps/sadbhavna_donatekart/sadbhavna_donatekart/www/site/sitemap.xml'
		loc = f"https://bestdeed.org/campaign-donation/{self.name}"

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