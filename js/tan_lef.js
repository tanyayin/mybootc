/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
		$('#tan_lef h2 a').click(function(e){
			e.preventDefault();
			var div = $('#tan_lef');
			console.log(div.css('left'));
			if (div.css('left') === '-195px') {
				$('#tan_lef').animate({
					left: '0px'
				}); 
			} else {
				$('#tan_lef').animate({
					left: '-195px'
				});
			}
		})
	});