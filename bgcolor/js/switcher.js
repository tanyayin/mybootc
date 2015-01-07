/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		$(".green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/green.css" );
			return false;
		});
		
		$(".blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/blue.css" );
			return false;
		});
		
		$(".orange" ).click(function(){
			$("#colors" ).attr("href", "css/colors/orange.css" );
			return false;
		});
		
		$(".navy" ).click(function(){
			$("#colors" ).attr("href", "css/colors/navy.css" );
			return false;
		});
		
		$(".yellow" ).click(function(){
			$("#colors" ).attr("href", "css/colors/yellow.css" );
			return false;
		});
		
		$(".peach" ).click(function(){
			$("#colors" ).attr("href", "css/colors/peach.css" );
			return false;
		});
		
		$(".beige" ).click(function(){
			$("#colors" ).attr("href", "css/colors/beige.css" );
			return false;
		});

		$(".purple" ).click(function(){
			$("#colors" ).attr("href", "css/colors/purple.css" );
			return false;
		});

		$(".red" ).click(function(){
			$("#colors" ).attr("href", "css/colors/red.css" );
			return false;
		});

		$(".pink" ).click(function(){
			$("#colors" ).attr("href", "css/colors/pink.css" );
			return false;
		});
		
		$(".celadon" ).click(function(){
			$("#colors" ).attr("href", "css/colors/celadon.css" );
			return false;
		});
		
		$(".brown" ).click(function(){
			$("#colors" ).attr("href", "css/colors/brown.css" );
			return false;
		});
		
		$(".cherry" ).click(function(){
			$("#colors" ).attr("href", "css/colors/cherry.css" );
			return false;
		});
		
		$(".gray" ).click(function(){
			$("#colors" ).attr("href", "css/colors/gray.css" );
			return false;
		});
		
		$(".dark" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark.css" );
			return false;
		});
		
		$(".cyan" ).click(function(){
			$("#colors" ).attr("href", "css/colors/cyan.css" );
			return false;
		});
		
		$(".olive" ).click(function(){
			$("#colors" ).attr("href", "css/colors/olive.css" );
			return false;
		});
		
		$(".dirty-green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dirty-green.css" );
			return false;
		});
		
		
		// Layout Switcher
		$(".boxed" ).click(function(){
			$("#layout" ).attr("href", "css/boxed.css" );
			return false;
		});

		$("#layout-switcher").on('change', function() {
			$('#layout').attr('href', $(this).val() + '.css');
		});;

		
		// Style Switcher	
		$('#style-switcher').animate({
			right: '-197px'
		});
		
		$('#style-switcher h2 a').click(function(e){
			e.preventDefault();
			var div = $('#style-switcher');
			console.log(div.css('right'));
			if (div.css('right') === '-197px') {
				$('#style-switcher').animate({
					right: '0px'
				}); 
			} else {
				$('#style-switcher').animate({
					right: '-197px'
				});
			}
		})
		
		$('.colors li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
		})
		
		$('.bg li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundImage');
			$('body').css('backgroundImage',bg);
			$('.side-left').css('border','none');
			$('.helper-font-24').css('color','#000')

		})
		
		$('.bgsolid li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundColor');
			$('body').css('backgroundColor',bg).css('backgroundImage','none');
			$('.side-left').css('border','none');
			$('.helper-font-24').css('color','#000')
		})
		
		   $('.bg_top li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundImage');
			$('.header').css('backgroundImage',bg);
		})
		
		$('.bgsolid_top li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundColor');
			$('.header').css('backgroundColor',bg).css('backgroundImage','none')
		})

		   $('.bg_nav li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundImage');
			$('.grd-black2').css('backgroundImage',bg);
			$('.sidebar > li').css('border','none');
			$('.sidebar > li > a').css('color','#000');

		})
		
		$('.bgsolid_nav li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundColor');
			$('.grd-black2').css('backgroundColor',bg).css('backgroundImage','none');
			$('.sidebar > li').css('border','none');
			$('.sidebar > li > a').css('color','#000');
		})
		
    	$('#reset_2 a').click(function(e){
			var bg = $(this).css('backgroundImage');
			$('.grd-black2').css('background','')
			$('.sidebar > li').css('border','');
			$('.sidebar > li > a').css('color','#fff');

		})

    	$('#reset_1 a').click(function(e){
			var bg = $(this).css('backgroundImage');
			$('.header').css('background','')
		})

		
		$('#reset a').click(function(e){
			var bg = $(this).css('backgroundImage');
			$('body').css('background','');
			$('.side-left').css('border','');
			$('.helper-font-24').css('color','')
		})
			
	});