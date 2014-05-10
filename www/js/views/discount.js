(function($){

	App.Views.Discount = Backbone.View.extend({
		el : '.container',

		events : {
			'submit form' : 'getData'
		},

		showAlert : function(e){
			e.preventDefault();
			alert('It Works');
		},

		getData : function(e){
			e.preventDefault();
			var price = parseFloat($('input[name="price"]').val());
			var discount = parseFloat($('input[name="discount"]').val());
			var tax = parseFloat($('input[name="tax"]').val());
			
			var discountPrice = price-(price*(discount/100));
			var tax = (price*(tax/100))
			var taxPrice =  tax + price;
			var finalPrice = discountPrice + tax;
			
			console.log(discountPrice, tax, taxPrice, finalPrice);
			//alert('Discount Price : $' + discountPrice + '\nTax Price : $' + taxPrice);
			navigator.notification.vibrate(1500);
			navigator.notification.alert(
				'Discount Price : $' + discountPrice + 
				'\nTax : $' + tax +
				'\nTax Price : $' + taxPrice +
				'\nFinal Price : $' + finalPrice,
				alertDismissed,
				'Final Price',
				'Done'
			);
			function alertDismissed(){
				location.reload();
			}
		}
	});

	var view = new App.Views.Discount;

})(jQuery);