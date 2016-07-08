$('.animsition').animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500,
});

$('.header').sticky({
  topSpacing: 0,
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.header').on('sticky-start', function () {
    $('.description').html('We Build <strong>Great</strong> Apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We Build Apps');
});

$('.grid-full h5').sticky({
  topSpacing: 64,
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.grid-full h5').on('sticky-start', function(){
  $(this).html('Want us to work on your project? <a href="mailto:email@website.com" class="email-text">Email&nbsp;us</a>');
});


$('.slides').slick();
