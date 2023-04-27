// // Copyright (c) 2023, Sanskar and contributors
// // For license information, please see license.txt
// let prev_page_route = ['','','']
// let is_form_new = false
// frappe.ui.form.on('Donation Campaign', {
// 	refresh: function(frm) {
// 		prev_page_route = frappe.get_prev_route()
// 		if(frm.doc.ngo){
// 			frm.events.show_go_to_ngo_campaign_form(frm,"NGO",frm.doc.ngo);
// 		}
// 		if(frm.doc.campaign_request){
// 			frm.events.show_go_to_ngo_campaign_form(frm,"Donation Campaign Request",frm.doc.campaign_request);
// 		}
// 		frm.events.show_preview_campaign(frm)
// 	},
// 	before_save: function(frm) {
// 		is_form_new = frm.doc.name.includes('new')
// 	},
// 	after_save:function(frm){
// 		if(prev_page_route[1]==='Donation Campaign request' && is_form_new ){
// 			frappe.call({
// 				method: "sadbhavna_donatekart.sadbhavna_donatekart.doctype.donation_campaign_request.donation_campaign_request.update_campaign_request",
// 				args: {'campaign_request': prev_page_route[2] ,'ngo': frm.doc.ngo,'campaign':frm.doc.name,'update_status_to':'Pending Campaign'},
// 				freeze: true,
// 				callback: function(r) {
// 					is_form_new = false
// 				}
// 			});
// 		}
// 	},
// 	show_go_to_ngo_campaign_form: function(frm,type,name) {
// 		// open NGO page
// 		frm.add_custom_button(__(`${type}`), function() {
// 			frappe.set_route("Form",type,name);
// 		});
// 	},
// 	show_preview_campaign: function(frm) {
// 		// open NGO page
// 		frm.add_custom_button(__(`Preview Campaign`), function() {
// 			let html_link = '/'
// 			window.open(`/sadbhavna/campaign-donation/${frm.doc.name}`, '_blank');
// 		});
// 	},
// });

// frappe.ui.form.on('Donation Campaign Item', {
// 	price:function(frm){
// 		donation_amount_calculation()
// 	},
// 	qty:function(frm){
// 		donation_amount_calculation()
// 	}
// });

// function donation_amount_calculation(){
// 	cur_frm.doc.donation_amount = cur_frm.doc.add_campaign_items.reduce((total, item) => 
// 										(item.qty||0) * (item.price||0) + total, 0);
// 	cur_frm.refresh_field('donation_amount');
// }






// Copyright (c) 2023, Sanskar and contributors
// For license information, please see license.txt
let prev_page_route = ['','','']
let is_form_new = false
frappe.ui.form.on('Donation Campaign', {
	refresh: function(frm) {
		prev_page_route = frappe.get_prev_route()
		if(frm.doc.ngo){
			frm.events.show_go_to_ngo_campaign_form(frm,"View NGO",frm.doc.ngo);
		}
		if(frm.doc.campaign_request){
			frm.events.show_go_to_ngo_campaign_form(frm,"Donation Campaign Request",frm.doc.campaign_request);
		}

		if(frm.doc.ngo_email){
			frappe.call({
				method: 'sadbhavna_donatekart.sadbhavna_donatekart.doctype.donation_campaign.donation_campaign.check_user',
				args: {
					'email': frm.doc.ngo_email
				},
				callback: function(r){
					// console.log(r)
					if(r.message != null){
						frm.events.show_go_to_ngo_campaign_form(frm, "User", frm.doc.ngo_email)
					}
					else{
						// frm.events.show_go_to_ngo_campaign_form(frm, "User1", frm.doc.ngo_email)
						frm.add_custom_button(__('Create User of NGO'), function(){
							frappe.call({
					method: 'sadbhavna_donatekart.sadbhavna_donatekart.doctype.donation_campaign.donation_campaign.create_ngo_user',
								args: {
									'ngo': frm.doc.ngo
								},
								callback: function(r){
									console.log(r)
								}
							})
						})
					}
				}
			})
		}
		frm.events.show_preview_campaign(frm)
	},
	before_save: function(frm) {
		is_form_new = frm.doc.name.includes('new')
	},
	after_save:function(frm){
		if(prev_page_route[1]==='Donation Campaign request' && is_form_new ){
			frappe.call({
				method: "sadbhavna_donatekart.sadbhavna_donatekart.doctype.donation_campaign_request.donation_campaign_request.update_campaign_request",
				args: {'campaign_request': prev_page_route[2] ,'ngo': frm.doc.ngo,'campaign':frm.doc.name,'update_status_to':'Pending Campaign'},
				freeze: true,
				callback: function(r) {
					is_form_new = false
				}
			});
		}
	},
	show_go_to_ngo_campaign_form: function(frm,type,name) {
		// open NGO page
		frm.add_custom_button(__(`${type}`), function() {
			frappe.set_route("Form",type,name);
		});
	},
	show_preview_campaign: function(frm) {
		// open NGO page
		frm.add_custom_button(__(`Preview Campaign`), function() {
			let html_link = '/'
			window.open(`/campaign-donation/${frm.doc.name}`, '_blank');
		});
	},
});

frappe.ui.form.on('Donation Campaign Item', {
	price:function(frm){
		donation_amount_calculation()
	},
	qty:function(frm){
		donation_amount_calculation()
	}
});

function donation_amount_calculation(){
	cur_frm.doc.donation_amount = cur_frm.doc.add_campaign_items.reduce((total, item) => 
										(item.qty||0) * (item.price||0) + total, 0);
	cur_frm.refresh_field('donation_amount');
}




