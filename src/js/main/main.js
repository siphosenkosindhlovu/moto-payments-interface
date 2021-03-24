$(document).ready(function(){
	const currencySymbolToHtmlEntity = {
		GBP: '&pound;',
		USD: '&dollar;',
		RUB: '&#8381;'
	}

	$('#currency').on('change', function(e){
		$('#currencyDisplay').html(currencySymbolToHtmlEntity[e.target.value])
	})

})