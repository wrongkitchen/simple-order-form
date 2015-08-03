Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/admin/add-product', { 
	name: 'admin.addProduct', 
	controller: 'AddProductController'
});

AddProductController = RouteController.extend({
	action: function() {
		this.render('addProduct', {
			data: function () {
				return { posts: ['post red', 'post blue'] }
			}
		});
	}
});

MainController = RouteController.extend({
	action: function() {
		this.render('home', {
			data: function () {
				return { posts: ['post red', 'post blue'] }
			}
		});
	}
});