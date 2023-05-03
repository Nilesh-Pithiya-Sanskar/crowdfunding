frappe.listview_settings['Donation Campaign'] = {
	add_fields: [ "status"],
    get_indicator:function(doc){
        if (doc.status === "Live") {
                    return [__("Live"), "green", "status,=,Live"];
            }
        if(doc.status == 'Pending'){
                return [__("Pending"), "orange", "status,=,Pending"];
        }
        if(doc.status == 'Rejected'){
                return [__("Rejected"), "red", "status,=,Rejected"];            
            }
        if(doc.status == 'Closed'){
            return [__("Closed"), "blue", "status,=,Closed"];            
        }
    }
};