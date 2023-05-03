# Copyright (c) 2023, Nilesh Pithiya and contributors
# For license information, please see license.txt

# import frappe


# Copyright (c) 2023, Nilesh Pithiya and contributors
# For license information, please see license.txt


# from __future__ import unicode_literals
# import frappe
# from frappe import _


# from datetime import datetime # from python std library
# from frappe.utils import add_to_date
# from frappe.utils import today


# def execute(filters=None):
# 	columns, data = get_columns(), get_data(filters)
# 	return columns, data


# def get_columns():
# 	columns = [
# 		{"label": _("Campaign"), "fieldname": "name", "fieldtype": "Link", "options": "Donation Campaign", "width": 200},
# 		{"label": _("NGO"), "fieldname": "ngo", "fieldtype": "Link", "options": "NGO", "width": 250},
# 		{
# 			"label": _("Email"),
# 			"fieldname": "ngo_email",
# 			"fieldtype": "Data",
# 			# "fieldtype": "Link",
# 			# "options": "User",
# 			"width": 200,
# 		},
# 		{"fieldname": "status", "label": _("Status"), "fieldtype": "Data", "width": 100},

# 		{"label": _("Campaign Category"), "fieldname": "campaign_category", "fieldtype": "Data", "width": 150},
# 		# {"label": _("Organisation Name"), "fieldname": "organisation_name", "fieldtype": "Data", "width": 100},
# 		# {"label": _("Date"), "fieldname": "date", "fieldtype": "Date", "width": 100},
# 		# {"label": _("Amount"), "fieldname": "raised_amount", "fieldtype": "Data", "width": 100},

# 		{"label": _("Item"), "fieldname": "item", "fieldtype": "Data", "width": 100},
# 		{"label": _("Qty"), "fieldname": "price", "fieldtype": "Data", "width": 100},
# 		{"label": _("Price"), "fieldname": "c_qty", "fieldtype": "Data", "width": 100},
# 	]

# 	return columns

# def get_data(filters):
# 	data = frappe.db.sql(
# 		"""
# 		SELECT 
# 			dc.campaign_category, DATEDIFF(dc.completion_date, dc.start_date) AS completion_days, avg(dc.donation_amount)as donation_amount, avg(dc.raised_amount) as raised_amount, dc.ngo, dc.ngo_email, dc.status, dc.raised_amount, dc.name,
# 			dci.item, dci.price, dci.c_qty
# 		FROM
# 			`tabDonation Campaign` as dc
# 		INNER JOIN
# 			`tabDonation Campaign Item` as dci
# 		ON	
# 			dc.name = dci.parent
# 		WHERE
# 			dc.status = 'Closed'
# 			{conditions}
# 		ORDER BY
# 			completion_days asc """.format(
# 			conditions=get_conditions(filters)
# 		),
# 		filters,
# 		as_dict=1,
# 	)
# 	print("\n\n data", data, "\n\n")
# 	return data

# 	# data = frappe.db.get_list("Donation Campaign", filters=get_conditions(filters), fields=["*"])

# 	# print("\n\n data", data, "\n\n")
# 	# return data



# def get_conditions(filters):

# 	conditions = []

# 	if filters.get('campaign'):
# 		conditions.append("and dc.name=%(campaign)s")

# 	if filters.get("campaign_category"):
# 		conditions.append("and dc.campaign_category=%(campaign_category)s")
	
# 	return " ".join(conditions) if conditions else ""




# ----------------------------------------------------------------------------------------------------------------


from __future__ import unicode_literals
import frappe
from frappe import _


from datetime import datetime # from python std library
from frappe.utils import add_to_date
from frappe.utils import today


def execute(filters=None):
	columns = get_columns()
	data = []
	list = []
	camapign_name = get_campaign_name(filters)
	# campagin_item = get_campaign_item(filters)

	campaign_item = get_data(filters)

	for sl_name in camapign_name:
		# data.append(sl_name)
		for slm in campaign_item:
			if sl_name.name == slm.name:
				if slm.name in list:
					slm.pop('name')
					slm.pop('campaign_category')
					slm.pop('ngo')
					slm.pop('ngo_email')
					slm.pop('status')
					slm.pop('raised_amount')
					data.append(slm)
				else:
					list.append(slm.name)
					data.append(slm)

# 	data = [{'name': 'DURGA-L-19-03-2023-0001', 'item': 'Grocery Kit', 'c_qty': None, 'price': 645.0}, {'item': 'Rice 10Kg', 'c_qty': None, 'price': 470.0}, {'item': 'Rajma 2 Kg', 'c_qty': None, 'price': 280.0}, {'item': 'Ghee 1L', 'c_qty': None, 'price': 540.0}, {'item': 'Chana Dal 4 Kg', 'c_qty': None, 'price': 320.0},
#    {'name': 'RAFI’S--20-03-2023-0001', 'item': 'Medicine Kit', 'c_qty': None, 'price': 400.0,'name': 'RAFI’S--20-03-2023-0001', 'item': 'Toor daal 4kg', 'c_qty': None, 'price': 460.0}, {'name': 'RAFI’S--20-03-2023-0001', 'item': 'Ghee 1L', 'c_qty': None, 'price': 550.0}, 
#    {'name': 'THE-ELE-16-01-2023-0001', 'item': 'Ration Kit', 'c_qty': None, 'price': 200000.0}, {'name': 'THE-ELE-16-01-2023-0001', 'item': 'Medicine Kit', 'c_qty': None, 'price': 500.0}, 
#    {'name': 'THEY’RE-20-03-2023-0001', 'item': 'Groceries Kit', 'c_qty': '200', 'price': 640.0}, {'name': 'THEY’RE-20-03-2023-0001', 'item': 'Women Sweaters', 'c_qty': '28', 'price': 450.0}, {'name': 'THEY’RE-20-03-2023-0001', 'item': 'Rajma 3Kg', 'c_qty': '143', 'price': 345.0}, {'name': 'THEY’RE-20-03-2023-0001', 'item': 'thermals', 'c_qty': '54', 'price': 500.0}, {'name': 'THEY’RE-20-03-2023-0001', 'item': 'Mink Blanket', 'c_qty': '92', 'price': 600.0}, {'name': 'THEY’RE-20-03-2023-0001', 'item': 'Woolen Caps (Pack of 2)', 'c_qty': '16', 'price': 300.0}, {'name': 'THEY’RE-20-03-2023-0001', 'item': 'Woolen Gloves (Pack of 2 pairs)', 'c_qty': '12', 'price': 200.0}, {'name': 'THEY’RE-20-03-2023-0001', 'item': 'Construction Kit', 'c_qty': '259', 'price': 650.0}, 
#    {'name': 'THIS-MA-19-03-2023-0003', 'item': 'Groceries Kit', 'c_qty': None, 'price': 645.0}, {'name': 'THIS-MA-19-03-2023-0003', 'item': 'Rice 10Kg', 'c_qty': None, 'price': 460.0}, {'name': 'THIS-MA-19-03-2023-0003', 'item': 'Adult Diaper (Pack of 10)', 'c_qty': None, 'price': 500.0}, {'name': 'THIS-MA-19-03-2023-0003', 'item': 'Urinary Catheter', 'c_qty': None, 'price': 300.0}]

	return columns, data


def get_campaign_name(filters):
	dc = frappe.qb.DocType("Donation Campaign")
	query = (
				frappe.qb.from_(dc).select(
			dc.name,
			# dc.campaign_category,
			# dc.ngo,
			# dc.ngo_email,
			# dc.status,
			# dc.raised_amount,).where((dc.status == "Closed")	#& (dc.docstatus == 1)				
			)	
	)
	return query.run(as_dict=True)



# def get_campaign_item(filters):
# 	dc = frappe.qb.DocType("Donation Campaign")
# 	child_tab = frappe.qb.DocType("Donation Campaign Item")
# 	numb = get_conditions(filters)

# 	query = (
# 		frappe.qb.from_(dc)
# 		# .join(sed)	
# 		# .on(dc.name == sed.parent)
# 		.join(child_tab).on(dc.name == child_tab.parent)
# 		.select(
# 			dc.name,
# 			dc.campaign_category,
# 			dc.ngo,
# 			dc.ngo_email,
# 			dc.status,
# 			dc.raised_amount,
# 			child_tab.item,
# 			child_tab.c_qty,
# 			child_tab.price,
# 		)
# 		# .where(
# 		# 	(dc.name == child_tab.parent)
# 		# )	
# 	)
# 	return query.run(as_dict=True)


def get_columns():
	columns = [
		{"label": _("Campaign"), "fieldname": "name", "fieldtype": "Link", "options": "Donation Campaign", "width": 150},
		{"label": _("NGO"), "fieldname": "ngo", "fieldtype": "Link", "options": "NGO", "width": 200},
		# {
		# 	"label": _("Email"),
		# 	"fieldname": "ngo_email",
		# 	"fieldtype": "Data",
		# 	"width": 200,
		# },
		{"fieldname": "status", "label": _("Status"), "fieldtype": "Data", "width": 100},
		{"label": _("Campaign Category"), "fieldname": "campaign_category", "fieldtype": "Data", "width": 150},
		{"label": _("Item"), "fieldname": "item", "fieldtype": "Data", "width": 200},
		{"label": _("Qty"), "fieldname": "c_qty", "fieldtype": "Data", "width": 100},
		{"label": _("Price"), "fieldname": "price", "fieldtype": "Data", "width": 150},
	]

	return columns

def get_data(filters):
	data = frappe.db.sql(
		"""
		SELECT 
			dc.name, dc.campaign_category, dc.raised_amount, dc.ngo, dc.ngo_email, dc.status, dc.raised_amount,
			dci.item, dci.price, dci.c_qty
		FROM
			`tabDonation Campaign` as dc
		INNER JOIN
			`tabDonation Campaign Item` as dci
		ON
			dc.name = dci.parent
		WHERE
			dc.docstatus = 0
			{conditions}
		""".format(
			conditions=get_conditions(filters)
		),
		filters,
		as_dict=1,
	)
	return data


def get_conditions(filters):

	conditions = []
	
	if filters.get('status'):
		conditions.append("and dc.status=%(status)s")

	if filters.get('campaign'):
		conditions.append("and dc.name=%(campaign)s")

	if filters.get("campaign_category"):
		conditions.append("and dc.campaign_category=%(campaign_category)s")
	
	return " ".join(conditions) if conditions else ""

