(function(){

	App.Models.Discount = Backbone.Model.extend({
		defaults : {
			price : 0,
			discount : 0,
			tax : 0
		}
	});

})();