$(document).on('ready page:load', function(){
	$(function(){ $(document).foundation(); });
	$('.aboutme-link').on('click', function(event){
		event.preventDefault();
		$(this).off('click');
		$.get('/aboutme').done(function(content){
			$('.row').after(content);
			$('.aboutme').fadeIn();
		}).fail(function(){
			console.log('bad things');
		});
	});
})