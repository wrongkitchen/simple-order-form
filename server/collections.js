var receiptsDropbox = new FS.Store.Dropbox("receiptsDropbox", {
	key: "38dcg33qwewfoi2", 
	secret: "d05f36w0ejvot43", 
	token: "qk_bjHXmKPAAAAAAAAANDR85mCHJ4NEkcFcLb-y5tLmLfG4yGoyg639yCrthno4d"
});

Receipts = new FS.Collection("receipts", {
	stores: [ receiptsDropbox ],
	filter: { 
		allow: { 
			contentTypes: ['image/*'] 
		} 
	}
});