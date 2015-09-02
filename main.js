$(document).ready(function() {
	$('.Menu').addClass('original').clone().insertAfter('.Menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}
});

$(document).ready(function(){
	$('.text').mouseover(function(){
		$(this).addClass('hover');
	});
	
	$('.text').mouseout(function(){
		$(this).removeClass('hover');
	});
	$('#Project').mouseover(function(){
		$(this).addClass('select');
	});
	
	$('#Project').mouseout(function(){
		$(this).removeClass('select');
	});
});

$(document).ready(function() {
	$('#wrap').mouseover(function() {
		$('[name="text1"]').addClass('select');
	});
	$('#wrap').mouseout(function() {
		$('[name="text1"]').removeClass('select');
	});
	$('#aboutMe').mouseover(function() {
		$('[name="text1"]').addClass('select');
	});
	$('#aboutMe').mouseout(function() {
		$('[name="text1"]').removeClass('select');
	});
	$('#experience').mouseover(function() {
		$('[name="text2"]').addClass('select');
	});
	$('#experience').mouseout(function() {
		$('[name="text2"]').removeClass('select');
	});
	$('#education').mouseover(function() {
		$('[name="text3"]').addClass('select');
	});
	$('#education').mouseout(function() {
		$('[name="text3"]').removeClass('select');
	});$('#skills').mouseover(function() {
		$('[name="text4"]').addClass('select');
	});
	$('#skills').mouseout(function() {
		$('[name="text4"]').removeClass('select');
	});
});
