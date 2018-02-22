import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

var ip;

Meteor.onConnection(function(conn) {
  ip = conn.clientAddress;
});

/**
 * callback from Accounts.createUser, executes before user is inserted to the DB.
 */
Accounts.onCreateUser(function(options, user) {
  if (options.email){
    user.first_name = options.profile.first_name;
    user.last_name = options.profile.last_name;
    user.ip_address = ip;
    //user.status = "approved";
  }

  return user;
});

Accounts.onLogin(function(options){
  let user = options.user;
  if(!user){
    return;
  }

});
