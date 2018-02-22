import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Mandrill } from '/imports/api/emails/mandrill.js';
import '/imports/api/users/schema/users.js';;


Meteor.methods({
  forgotUserPassword: function(email, url) {
    var user = Accounts.findUserByEmail(email);
    if(user){
      var fname   = user.first_name;
      var email   = user.emails[0].address;
      var token   = Random.secret();
      var subject = "Password Reset Request for " + fname;

      /**
       * Create Token record
       */
      var tokenRecord = {
        token: token,
        email: email,
        when: new Date()
      };

      /**
       * Update user with Token record
       */
      Meteor.users.update({_id: user._id}, {$set: { "services.password.reset": tokenRecord}});

      var resetLink  = url + '/resetpassword/' + token;
      //console.warn("resetLink", resetLink);

      var data = {
        template_name: "reset-password",
        template_content: [{
          name: 'body',
          content: 'Password Reset'
        }],
        message: {
          "from_email": "contact@fluffr.io",
          "from_name": "Fluffr",
          "subject": subject,
          "to": [{
           email: email,
          }],
          "global_merge_vars": [{
           name: "reset_link",
           content: resetLink
          }, {
           name : "first_name",
           content: fname,
          }]
        }
      };

      //console.warn('data ', data.message.global_merge_vars);

      Mandrill.messages.sendTemplate(data, function(error, res) {
        if(error){
          console.warn("Error while sending user forgotPassword email ", error);
        }
      });
    } else {
      throw new Meteor.Error({message: 'Email not found in our records.'});
    }
    return "success";
  },
})
