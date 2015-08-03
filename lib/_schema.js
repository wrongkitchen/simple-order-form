Schemas = {};

Schemas.Bills = new SimpleSchema({
	name: {
		type: String,
		label:"Name",
		max: 200
	},
	mobile: {
		type: String,
		label:"Mobile Number",
		max: 200
	},
	email: {
		type: String,
		label:"Email",
		min: 0
	},
	request: {
		type: String,
		label:"Sqecial request",
		max: 200
	},
	receipts: {
		type: String,
		optional: true,
		autoform: {
			afFieldInput: {
				type: 'cfs-file',
				collection: 'receipts'
		    }
		}
	}
});