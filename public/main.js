var Clove = {};

// insert navbar - good for code reusability
Clove.makeNavbar = function (className) {
   var navbarTemplate = $('#nav_template').html();

   $('.navbar').addClass('navbar-default navbar-doublerow navbar-trans ' +
      'navbar-fixed-top');
   $('.navbar').append(navbarTemplate);
}

Clove.addListeners = function () {
   // click listeners for modal popup
   $('.render').click(function (e) {
      $('.lightbox').children().attr('src', $(this).children().attr('src'));
      $('.lightbox').toggleClass('hidden');
      $('.lightbox').removeClass('zoom-out');
      $('.lightbox').toggleClass('zoom');
   });
   // modal listener for shrinking back down
   $('.lightbox').click(function (e) {
      $('.lightbox').toggleClass('zoom-out');
      $('.lightbox').removeClass('zoom');
      // 
      setTimeout(function () {
         $('.lightbox').toggleClass('hidden');
      }, 400);
   });
   // click listener for nav bar items
   Clove.addPantryPageHandler();
   Clove.addContactPageHandler();
   Clove.addTeamPageHandler();
   Clove.addHomePageHandler();
}

Clove.addPantryPageHandler = function () {
   $('.nav-pantry').click(function (e) {
      console.log('pantry');
      $('.pantry').removeClass('hidden');
      $('.team').addClass('hidden');
      $('.contact').addClass('hidden');
      $('.home').addClass('hidden');
   });
}

Clove.addContactPageHandler = function () {
   $('.nav-contact').click(function (e) {
      console.log('contact');
      $('.contact').removeClass('hidden');
      $('.team').addClass('hidden');
      $('.home').addClass('hidden');
      $('.pantry').addClass('hidden');
   });
}

Clove.addTeamPageHandler = function () {
   $('.nav-team').click(function (e) {
      console.log('team');
      $('.team').removeClass('hidden');
      $('.home').addClass('hidden');
      $('.contact').addClass('hidden');
      $('.pantry').addClass('hidden');
   });
}

Clove.addHomePageHandler = function () {
   $('.navbar-brand').click(function (e) {
      console.log('home');
      $('.home').removeClass('hidden');
      $('.team').addClass('hidden');
      $('.contact').addClass('hidden');
      $('.pantry').addClass('hidden');
   });
}

// Firebase config
var config = {
   apiKey: 'AIzaSyDgH8_Zxdy6TsW5PcqQmmjZjDBbcyxOAB0',
   authDomain: 'https://clove-a6adf.firebaseio.com/',
   databaseURL: 'https://clove-a6adf.firebaseio.com/'
};
firebase.initializeApp(config);

var sendEmail = function () {
   var info = {
      email: $('.email-field').val(),
      name: $('.name-field').val(),
      subscribed: true
   }

   if (info.name && info.email.indexOf('@') != -1) {
      firebase.database().ref().child('users/' + info.email.hashCode()).set(info);
      alert('You are now subscribed to our mailing list!');
      $('.submit').prop('disabled', true);
   }
   else 
      alert('Incorrect format, try again');

   return false;
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

$(document).ready(function () {
   Clove.makeNavbar('navbar');
   Clove.addListeners();
});

// Turn the email into a hash to be used for the database key
String.prototype.hashCode = function() {
   var hash = 0, i, chr;
   if (this.length === 0) return hash;
   for (i = 0; i < this.length; i++) {
     chr   = this.charCodeAt(i);
     hash  = ((hash << 5) - hash) + chr;
     hash |= 0; // Convert to 32bit integer
   }
   return hash;
 };