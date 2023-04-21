import frappe

@frappe.whitelist(allow_guest=True)
def get_blogs(start=0, page_length=12, category = '', language = ''):
    from frappe.utils import getdate
    today = getdate()
    return frappe.db.get_list("Blog Post", filters={'published': 1, 'blog_category': f'{category}'}, fields=["*"], start=start, page_length=page_length)
    
