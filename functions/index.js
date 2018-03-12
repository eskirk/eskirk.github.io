const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
var admin = require('firebase-admin');
var serviceAccount = require(<PathToSecretKey>);

// Configure email service
let mailer = nodemailer.createTransport({
   service: 'gmail',
   host: 'smtp.gmail.com',
   port: 587,
   secure: false,
   auth: {
      user: <Email>,
      pass: <Password>
   }
});

// Set up app to communicate with firebase db
admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: <DatabaseUrl>
 });

// Send functions to firebase
exports.newUser = functions.database.ref('users/').onWrite(event => {
   var data = event.data.val();
   var newData = data[Object.keys(data)[Object.keys(data).length - 1]] 
   console.log(data);
   console.log(newData);
   
   // define the mail options
   let emailToSubscriber = {
      to: newData.email,
      from: 'getcloveusa@gmail.com',
      subject: 'You Have Subscribed to the Clove Mailing List',
      text: newData.name + ',\n\nThank you for subscribing to the Clove ' + 
       'mailing list.\nWe will be in touch ' +
       'shortly.\n-The Clove Team ' +
       '\n\nIf you believe this is a mistake, reply UNSUBSCRIBE ' + 
       'to this email and you will be unsubscribed.'
   }
   let emailToAdministrator = {
      to: 'getcloveusa@gmail.com',
      from: 'getcloveusa@gmail.com',
      subject: 'New Mail List Subscriber',
      text: 'We just got a new subscriber wooohoooo!\n ' + 
       '\nNew subscriber email: ' + newData.email + '\nNew subscriber name: ' + 
       newData.name
   }

   // use nodemailer to send an email to our email account
   mailer.sendMail(emailToSubscriber, (err, info) => {
      if (err) 
         console.log(err);
      else    
         console.log('Message sent: %s', info.messageId);
   });

   mailer.sendMail(emailToAdministrator, (err, info) => {
      if (err) 
         console.log(err);
      else    
         console.log('Message sent: %s', info.messageId);
   });

});