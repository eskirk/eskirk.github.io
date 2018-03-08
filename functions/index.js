const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
var admin = require('firebase-admin');
var serviceAccount = require('./clove-a6adf-firebase-adminsdk-91luc-6422ff816a.json');

// Configure email service
var mailer = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
      user: <Email>,
      pass: <Password>
   }
});

// Set up app to communicate with firebase db
admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: 'https://clove-a6adf.firebaseio.com'
 });

// Send functions to firebase
exports.newUser = functions.database.ref('users/').onWrite(event => {
   console.log(event.data.val());
   
   // define the mail options
   let mailOptions = {
      to: 'getcloveusa@gmail.com',
      from: 'getcloveusa@gmail.com',
      subject: 'New Mail List Subscriber',
      text: 'We just got a new subscriber wooohoooo!'
   }

   // use nodemailer to send an email to our account
   mailer.sendMail(mailOptions, (err, info) => {
      if (err) 
         console.log(err);
      console.log('Message sent: %s', info.messageId);
   });

});
