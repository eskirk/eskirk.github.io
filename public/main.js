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
      $('.lightbox').removeClass('hidden');
      $('.lightbox').addClass('zoom');
      $('.lightbox').removeClass('zoom-out');
   });
   // modal listener for shrinking back down
   $('.lightbox').click(function (e) {
      $('.lightbox').addClass('zoom-out');
      $('.lightbox').removeClass('zoom');
      // 
      setTimeout(function () {
         $('.lightbox').addClass('hidden');
      }, 400);
   });
   // confirmation modal listener
   $('.confirmation').click(function (e) {
      $('.confirmation').addClass('zoom-out');
      $('.confirmation').removeClass('zoom');
      // 
      setTimeout(function () {
         $('.confirmation').addClass('hidden');
      }, 400);
   });
   // contact us confirmation modal listener
   $('.message-confirmation').click(function (e) {
      $('.message-confirmation').addClass('zoom-out');
      $('.message-confirmation').removeClass('zoom');
      // 
      setTimeout(function () {
         $('.message-confirmation').addClass('hidden');
      }, 400);
   });
   // dropdown toggle button listener
   $('.nav-icon').click(function(e) {
      $('.drop-menu').toggleClass('hidden');
   });
   // hamburger icon listener
   $('.nav-icon').click(function(){
      $('.nav-icon').toggleClass('open');
      console.log('yo');
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

   $('.nav-home').click(function (e) {
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

// subscribe to the mailing list
var sendEmail = function() {
   var info = {
      email: $('.email-field').val(),
      name: $('.name-field').val(),
      subscribed: true
   }

   if (info.name && info.email.indexOf('@') != -1) {
      var now = new Date().getTime();
      firebase.database().ref().child('users/' + now).set(info);
      // alert('You are now subscribed to our mailing list!');
      $('.confirmation').toggleClass('hidden');
      $('.submit').prop('disabled', true);
   }
   else 
      alert('Incorrect format, try again');

   return false;
}

// contact us 
var contactUs = function() {
   var info = {
      email: $('.contact-email-field').val(),
      name: $('.contact-name-field').val(),
      subject: $('.subject-field').val(),
      message: $('.message-field').val()
   }

   if (info.name && info.email.indexOf('@') != -1) {
      var now = new Date().getTime();
      firebase.database().ref().child('contact/' + now).set(info);
      // alert('You are now subscribed to our mailing list!');
      console.log(info);
      $('.message-confirmation').toggleClass('hidden');
      $('.contact-submit').prop('disabled', true);
   }
   else {
      alert('Incorrect format, try again');
      console.log(info);
   }

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
