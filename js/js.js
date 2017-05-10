$(function($) {
  var allAccordions = $('.accordion div.data');
  var allAccordionItems = $('.accordion .accordion-item');
  $('.accordion > .accordion-item').click(function() {
    if($(this).hasClass('open'))
    {
      $(this).removeClass('open');
      $(this).next().slideUp("default");
    }
    else
    {
    allAccordions.slideUp("default");
    allAccordionItems.removeClass('open');
    $(this).addClass('open');
    $(this).next().slideDown("default");
    return false;
    }
  });
});

$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() !== 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});