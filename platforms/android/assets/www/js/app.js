(function(){

	window.App = {
		Models : {},
		Views : {}
	};

	window.template = function(id){
		return _.template( $('#' + id).html() );
	};

})();