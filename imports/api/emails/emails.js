import { Meteor } from 'meteor/meteor';
import { Mandrill } from '/imports/api/emails/mandrill.js';
import Accounting from 'accounting';
import Moment from 'moment';


Meteor.methods({
  welcomeEmail: function(email){
    let user = Accounts.findUserByEmail(email);

    if (user){
      let to = user.first_name;

      var data = {
        template_name: 'welcome-user',
        template_content: [{
          name: 'body',
          content: 'Welcome User'
        }],
        message: {
          "from_email": 'contact@fluffr.io',
          "from_name": 'Fluffr',
          "subject": 'Welcome to Fluffr',
          "to": [{
            email: email
          }],
          "global_merge_vars": [
            {
              "name": "to",
              "content": to
            }
          ]
        }
      }

      Mandrill.messages.sendTemplate(data, function(error, res){
        if (error){
          console.warn("Error while sending email", error);
        }
      });
    } else {
      throw new Meteor.Error({message: 'Email not found in our records'});
    }

    return 'success';
  },
  emailReadyForPurchase: function(id){
    let user = Meteor.users.findOne({_id: id});

    if (user){

        Meteor.users.update({_id: id}, {$set: {status: 'approved'}});

        let url;

        let emails = [
          {
            email: user.emails[0].address
          }
        ]

        var data = {
          template_name: 'approved',
          template_content: [{
            name: 'body',
            content: 'You have been approved to purchase Fluffr tokens'
          }],
          message: {
            "from_email": 'contact@fluffr.io',
            "from_name": 'Fluffr',
            "subject": 'Fluffr tokens ready for purchase',
            "to": emails,
            "global_merge_vars": [
              {
                "name": "to",
                "content": user.first_name
              }, {
                "name": "from",
                "content": "Fluffr Team"
              }
            ]
          }
        }

        Mandrill.messages.sendTemplate(data, function(error, res){
          if (error){
            console.warn("Error while sending email", error);
          }
        });
      return 'success';
    }
  },
  tokensSentToWallet: function(id){
    let user = Meteor.users.findOne({ _id: id });

    if (user){

      Meteor.users.update({_id: id}, {$set: {status: 'completed'}});

      let email = user.emails[0].address;
      var data = {
        template_name: 'token-sent-to-wallet',
        template_content: [{
          name: 'body',
          content: 'Your Fluffr tokens have been sent to your NEM wallet!'
        }],
        message: {
          "from_email": 'contact@fluffr.io',
          "from_name": 'Fluffr Team',
          "subject": "Fluffr Tokens sent to Your NEM Wallet",
          "to": [{
            email: email
          }],
          "global_merge_vars": [
            {
              "name": "to",
              "content": user.first_name
            }
          ]
        }
      }

      Mandrill.messages.sendTemplate(data, function(error, res){
        if (error){
          console.warn("Error while sending token sent email", error);
        }
      });

      return 'success';
    }
  }
})
