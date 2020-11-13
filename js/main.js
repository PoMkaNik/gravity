$(function () {
  $('.services-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
    startPosition: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

$(function () {
  $('ul.js--tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
      // tabs links
      .addClass('active')
      .siblings()
      .removeClass('active')
      // tabs content
      .closest('section.js--tabs')
      .find('div.js--tabs__content')
      .removeClass('active')
      .eq($(this).index())
      .addClass('active');
  });
});

$(function () {
  $('.contributor-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
    // startPosition: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
