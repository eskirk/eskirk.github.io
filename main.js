var Clove = {};

// insert navbar - good for code reusability
Clove.makeNavbar = function(className) {
   var navbarTemplate = $('#nav_template').html();
   
   $('.navbar').addClass('navbar-default navbar-doublerow navbar-trans ' + 
    'navbar-fixed-top');
   $('.navbar').append(navbarTemplate);
}

Clove.addListeners = function() {
   // click listeners for modal popup
   $('.render').click(function(e) {
      $('.lightbox').children().attr('src', $(this).children().attr('src'));
      $('.lightbox').toggleClass('hidden');
      $('.lightbox').removeClass('zoom-out');
      $('.lightbox').toggleClass('zoom');
   });
   // modal listener for shrinking back down
   $('.lightbox').click(function(e) {
      $('.lightbox').toggleClass('zoom-out');
      $('.lightbox').removeClass('zoom');
      setTimeout(function(){
         $('.lightbox').toggleClass('hidden');
      }, 500);
   });
   // click listener for nav bar items
   Clove.addPantryPageHandler();
   Clove.addContactPageHandler();
   Clove.addTeamPageHandler();
   Clove.addHomePageHandler();
}

Clove.addPantryPageHandler = function() {
   $('.nav-pantry').click(function(e) {
      console.log('pantry');
      $('.pantry').removeClass('hidden');
      $('.team').addClass('hidden');
      $('.contact').addClass('hidden');
      $('.home').addClass('hidden');
   });
}

Clove.addContactPageHandler = function() {
   $('.nav-contact').click(function(e) {
      console.log('contact');
      $('.contact').removeClass('hidden');
      $('.team').addClass('hidden');
      $('.home').addClass('hidden');
      $('.pantry').addClass('hidden');
   });
}

Clove.addTeamPageHandler = function() {
   $('.nav-team').click(function(e) {
      console.log('team');
      $('.team').removeClass('hidden');
      $('.home').addClass('hidden');
      $('.contact').addClass('hidden');
      $('.pantry').addClass('hidden');
   });
}

Clove.addHomePageHandler = function() {
   $('.navbar-brand').click(function(e) {
      console.log('home');
      $('.home').removeClass('hidden');
      $('.team').addClass('hidden');
      $('.contact').addClass('hidden');
      $('.pantry').addClass('hidden');
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

