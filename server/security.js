Bills.allow({
	insert: function(){ return true; },
	update: function(){ return true; },
});
Receipts.allow({
	insert: function(){ return true; },
	update: function(){ return true; },
	download: function(){ return true; }
});
