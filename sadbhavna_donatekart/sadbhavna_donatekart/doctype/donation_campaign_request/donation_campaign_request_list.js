// frappe.listview_settings['Donation Campaign request'] = {
// 	add_fields: [ "status"],
//     get_indicator:function(doc){
//         if (doc.status === "Verified") {
//             return [__("Verified"), "green", "status,=,Verified"];
//             }
//         if (doc.status === "Live Campaign") {
//             return [__("Live Campaign"), "green", "status,=,Live Campaign"];
//         }
//         if(doc.status == 'Pending Campaign'){
//             return [__("Pending Campaign"), "orange", "status,=,Pending Campaign"];
//         }
//         if(doc.status == 'Rejected'){
//             return [__("Rejected"), "red", "status,=,Rejected"];            
//             }
//         if(doc.status == 'Close Campaign'){
//             return [__("Close Campaign"), "blue", "status,=,Close Campaign"];            
//         }
//         if(doc.status == 'New Request'){
//             return [__("New Request"), "yellow", "status,=,New Request"];            
//         }
        
//     }
// };