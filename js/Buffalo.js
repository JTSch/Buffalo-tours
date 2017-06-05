 $('#datepicker').datepicker();
$('#datepicker').on('changeDate', function() {
    $('#my_hidden_input').val(
        $('#datepicker').datepicker('getFormattedDate')
    );
});
$(".button-block .btn").focus(function(){
	$('.btn-primary').addClass('btn-default');
	$('.btn-primary').removeClass('btn-primary');
	$(this).addClass('btn-primary');
	$(this).removeClass('btn-default');
});
$(window).resize(function(){
	$('.content').height($('.calendar').height());

})
$('.content').height($('.calendar').height());
 
