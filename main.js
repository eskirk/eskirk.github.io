var Clove = {};

Clove.makeNavbar = function(className) {
   var navbarTemplate = $('#nav_template').html();
   
   $('.navbar').addClass('navbar-default navbar-doublerow navbar-trans ' + 
    'navbar-fixed-top');
   $('.navbar').append(navbarTemplate);
}

// toggle class scroll 
$(window).scroll(function () {
   if ($(this).scrollTop() > 50) {
      $('.navbar-trans').addClass('afterscroll');
   } else {
      $('.navbar-trans').removeClass('afterscroll');
   }

});

$(document).ready(function() {
   Clove.makeNavbar('navbar');
});

