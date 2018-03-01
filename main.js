var Clove = {};

Clove.makeNavbar = function(className) {
   var navbarTemplate = $('#nav_template').html();
   
   $('.navbar').addClass('navbar-default navbar-doublerow navbar-trans ' + 
    'navbar-fixed-top');
   $('.navbar').append(navbarTemplate);
}

Clove.addListeners = function() {
   $('.render').click(function(e) {
      $('.lightbox').children().attr('src', $(this).children().attr('src'));
      $('.lightbox').toggleClass('hidden');
      $('.lightbox').toggleClass('zoom');
   });
   $('.lightbox').click(function(e) {
      $('.lightbox').removeClass('zoom');
      $('.lightbox').toggleClass('hidden');
   });
}

// toggle class scroll 
$(window).scroll(function () {
   if ($(this).scrollTop() > 50) {
      $('.navbar-trans').addClass('afterscroll');
      $('.rendering').addClass('moveup');
   } else {
      $('.navbar-trans').removeClass('afterscroll');
      $('.rendering').removeClass('moveup')
   }

});

$(document).ready(function() {
   Clove.makeNavbar('navbar');
   Clove.addListeners();
});

