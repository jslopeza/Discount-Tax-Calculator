(function($){

	App.Views.Discount = Backbone.View.extend({
		el : '.button',

		events : {
			'tap .btn' : 'showAlert'
		},

		showAlert : function(){
			alert('It Works');
		}
	});

})(jQuery);