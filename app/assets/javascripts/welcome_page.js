$(document).on('ready page:load', function(){
	$(function(){ $(document).foundation(); });
	$('.aboutme-link').on('click', function(event){
		event.preventDefault();
		$(this).unbind('click');
		$.get('/aboutme').done(function(content){
			$('.row').after(content);
		}).fail(function(){
			console.log('bad things');
		});
	});
})