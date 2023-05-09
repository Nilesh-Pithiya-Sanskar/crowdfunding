import frappe

@frappe.whitelist(allow_guest=True)
def get_data(campaign_name):
    # return frappe.db.sql(f"select * from `tabDonation Campaign`", as_dict=True)
    # return frappe.db.sql(f"select *, DATEDIFF(completion_date, start_date) as completion_date from `tabDonation Campaign` where name = '{campaign_name}'", as_dict=True)
    return frappe.db.sql(f"select total_donor, raised_amount, donation_amount, campaign_category, status from `tabDonation Campaign` where name = '{campaign_name}'", as_dict=True)

    # dc = frappe.qb.DocType("Donation Campaign")
    # child_tab = frappe.qb.DocType("Donation Campaign Item")

    # query = (
    # frappe.qb.from_(dc)
    # # .join(sed)	
    # # .on(dc.name == sed.parent)
    # .join(child_tab).on(dc.name == child_tab.parent)
    # .select(
    # dc.name,
    # dc.campaign_category,
    # dc.ngo,
    # dc.ngo_email,
    # dc.status,
    # dc.raised_amount,
    # child_tab.item,
    # child_tab.c_qty,
    # child_tab.price,
    # )
    # .where(
    # 	(dc.name == campaign_name)
    # )	
    # )
    # return query.run(as_dict=True)


@frappe.whitelist()
def get_user_data():
    # return frappe.db.get_list("User", ,fields=['*'])

    return frappe.db.sql("select * from `tabUser` where user_image != ''", as_dict=True)