(function(){

	App.Models.Discount = Backbone.Model.extend({
		defaults : {
			price : 0,
			discount : 0,
			discountPrice : 0,
			tax : 0,
			taxPrice : 0,
			finalPrice : ''
		}
	});

})();