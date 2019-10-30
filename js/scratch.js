/*
$('#tlt-1').textillate({ in: { effect: 'fadeIn' }})
.on('end.tlt', function () {
  $(this).fadeTo('slow',0);
  $('#tlt-2').textillate({ in: { effect: 'fadeIn' }})
  .on('end.tlt', function () {
    $(this).fadeTo('slow',0);
    $('#tlt-3').textillate({ in: { effect: 'fadeIn' }})
    .on('end.tlt', function () {
      $(this).fadeTo('slow',0);
      $('#tlt-4').textillate({ in: { effect: 'fadeIn' }})
      .on('end.tlt', function () {
        $(this).fadeTo('slow', 0, function() {
          $('#intro-text').remove();
          $('#intro-title').fadeIn(1000, function() {
            $('#intro-subtitle').fadeIn(1000, function() {
              $('.navigation').css('opacity',1);
              $('#toggle, #toggle-bg').css('opacity',1);
            });
          });
        });
      });
    });
  });
});
*/

$('#intro-text').remove();
$('#intro-title').fadeIn(1000, function() {
  $('#intro-subtitle').fadeIn(1000, function() {
    $('.navigation').css('opacity',1);
    $('#toggle, #toggle-bg').css('opacity',1);
  });
});


$('.nav').click(function() {
  $('.nav').removeClass('active');
  $(this).addClass('active');
  $('.page-content').hide().filter(this.getAttribute('href')).fadeIn();
});

$('#menu-logo').click(function() {
  $('.page-content').hide().filter(this.getAttribute('href')).fadeIn();
});


$("#toggle").click(function() {
	$(this).toggleClass("open");
	$("#menu").toggleClass("opened");
});

$(".nav-menu").click(function() {
  $("#menu").toggleClass("opened");
  $("#toggle").toggleClass("open");
});


var typed = '';

document.addEventListener("keydown", function(event) {
  var pressed = event.keyCode;
  if (pressed == 49){
    //Used to swap the Nav top to bottom
    //$('body').css('flex-direction','column-reverse');
  }
  if (pressed == 50){
    //Used to swap the Nav top to bottom
    //$('body').css('flex-direction','column');
  }
  typed += pressed;

  if (typed.includes('8969657289696572')){
    yeah.play();
    typed='';
  }
});
