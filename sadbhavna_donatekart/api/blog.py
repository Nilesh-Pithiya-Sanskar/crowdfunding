import frappe

@frappe.whitelist(allow_guest=True)
def get_blogs(start=0, page_length=12, category = '', language = ''):
    from frappe.utils import getdate
    today = getdate()
    if category != '':
        return frappe.db.get_list("Blog Post", filters={'published': 1, 'blog_category': f'{category}'}, fields=["*"], start=start, page_length=page_length)
    else:
        return frappe.db.get_list("Blog Post", filters={'published': 1}, fields=["*"], start=start, page_length=page_length)
