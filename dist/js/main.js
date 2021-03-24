/*! project-name v0.0.1 | (c) 2021 Siphosenkosi Ndhlovu | MIT License | https://github.com/siphosenkosindhlovu/gulp-boilerplate.git */
$(document).ready((function(){
	const currencySymbolToHtmlEntity = {
		GBP: '&pound;',
		USD: '&dollar;',
		RUB: '&#8381;'
	}

	$('#currency').on('change', (function(e){
		$('#currencyDisplay').html(currencySymbolToHtmlEntity[e.target.value])
	}))

}))