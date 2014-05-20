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
			var inputTax = parseFloat($('input[name="tax"]').val());
			
			var discountPrice = price-(price*(discount/100));
			var tax = (price*(inputTax/100))
			var taxPrice =  tax + price;
			var finalPrice = discountPrice + tax;
			
			var Model = new App.Models.Discount
			if($.isNumeric(price)){

				if($.isNumeric(inputTax) || $.isNumeric(discount)){

					if(!inputTax){
						Model.set({price : price, discount : discount, discountPrice : discountPrice, finalPrice : discountPrice});
					} 
					else if(!discount){
						Model.set({price : price, tax : tax, taxPrice : taxPrice, finalPrice : taxPrice});	
					}
					else {
						Model.set({price : price, discount : discount, discountPrice : discountPrice, tax : tax, taxPrice : taxPrice, finalPrice : finalPrice});		
					}

					navigator.notification.vibrate(1500);
					navigator.notification.alert(
						'Discount Price : $' + Model.get('discountPrice') + 
						'\nTax : $' + Model.get('tax') +
						'\nTax Price : $' + Model.get('taxPrice') +
						'\nFinal Price : $' + Model.get('finalPrice'),
						alertDismissed,
						'Final Price',
						'Done'
					);
					function alertDismissed(){
						location.reload();
					}
				}
			}
			else {
				navigator.notification.alert(
					'The input was not valid, Please try again',
					alertDismissed,
					'Error!',
					'Try Again'
				);
				function alertDismissed(){
					location.reload();
				}
			}
		}
	});

	var view = new App.Views.Discount;

})(jQuery);