
frappe.pages['donation-campaign-re'].on_page_load = function(wrapper) {

	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Donation Campaign Report',
		single_column: true
	});
	// let field = page.add_field(
	// 	{
	// 		label: 'Status',
	// 		fieldtype: 'Data',
	// 		fieldname: 'campaign',
	// 		options: [
	// 			'Live',
	// 			'Closed',
	// 		],
	// 		change() {
	// 			console.log(field.get_value());
				
	// 		}
	// 	}
	// 	);


	frappe.call({
		method: 'sadbhavna_donatekart.sadbhavna_donatekart.page.donation_campaign_re.donation_campaign_re.get_data',
		args: {
			// 'campaign_name': get_url_arg('campaign_name')
			// 'campaign_name': "THE-ELE-18-03-2023-0002"
			'campaign_name': "THEY’RE-20-03-2023-0001"
			// 'campaign_name': field.get_value()
		},
		// THE-ELE-18-03-2023-0002
		callback: function(r) {
			if (r) {
				console.log("adf", r)
				page.set_title(r.message[0][0].name)
				if(r.message[0][0].status == 'Live'){
					page.set_indicator('Live', 'green')
				}
				else if(r.message[0][0].status == 'Closed'){
					page.set_indicator('Closed', 'blue')
				}
				$(frappe.render_template("donation_campaign_re_table", r)).appendTo(page.main);

			}
		}
	})

	

	// frappe.call({
	// 	method: "sadbhavna_donatekart.sadbhavna_donatekart.page.donation_campaign_re.donation_campaign_re.get_user_data",
	// 	callback: function(r) {
	// 		if (r) {
	// 			console.log(r)
	// 			$(frappe.render_template("donation_campaign_re_table", r)).appendTo(page.main);
	// 		}
	// 	}
	// })

	// let $btn = page.set_secondary_action('Refresh', () => refresh(), 'octicon octicon-sync')
	// page.add_menu_item('Send Email', () => open_email_dialog(), true)


}



// let open_email_dialog = new frappe.ui.Dialog({
//     title: 'Enter details',
//     fields: [
//         {
//             label: 'First Name',
//             fieldname: 'first_name',
//             fieldtype: 'Data'
//         },
//         {
//             label: 'Last Name',
//             fieldname: 'last_name',
//             fieldtype: 'Data'
//         },
//         {
//             label: 'Age',
//             fieldname: 'age',
//             fieldtype: 'Int'
//         }
//     ],
//     primary_action_label: 'Submit',
//     primary_action(values) {
//         console.log(values);
//         d.hide();
//     }
// });





	// let field1 = page.add_field(
	// {
	// 	label: 'Status',
	// 	fieldtype: 'Date',
	// 	fieldname: 'status',
	// 	change() {
	// 		console.log(field1.get_value());
	// 	}
	// }
	// );
	// let values = page.get_form_values()
	// console.log(values)