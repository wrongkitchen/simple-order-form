SimpleSchema.debug = true;
AutoForm.debug();

var receiptsDropbox = new FS.Store.Dropbox("receiptsDropbox");

Receipts = new FS.Collection("receipts", {
	stores: [ receiptsDropbox ],
	filter: { 
		allow: { 
			contentTypes: ['image/*'] 
		} 
	}
})