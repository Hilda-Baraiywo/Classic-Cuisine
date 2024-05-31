// Copyright (c) 2024, Hilda Chepkirui and contributors
// For license information, please see license.txt

frappe.ui.form.on("Order", {
	refresh: function(frm) {
        frm.add_custom_button(__('Edit Your Response'), function(){
            frm.set_read_only(false);
            frappe.msgprint('You can now edit your response.');
        }, __("Actions"));
        frm.add_custom_button(__('View Your Response'), function(){
            frappe.msgprint('Your response is:' + frm.doc.order_text);
        }, __("Actions"));
        frm.add_custom_button(__('Submit Another Response'), function(){
            frappe.new_doc('Order');
        }, __("Actions"));
	}
});
