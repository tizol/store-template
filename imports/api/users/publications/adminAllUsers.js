import { Meteor } from 'meteor/meteor';
import '/imports/api/users/schema/users.js';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish("adminAllUsers", function () {
  let selector = {
  };

  let options = {
    fields: {
      'first_name': 1,
      'last_name': 1,
      'createdAt': 1,
      'updated_at': 1,
      'currency': 1, //currency they chose ETH, BTC, NEM
      'amount': 1, //amount they sending
      'sent_address': 1, // their currency address the sending from
      'receive_address': 1, //nem address to transfer token to
      'nem_address': 1, //old field first 30 users
      'wallet_address': 1, //sending funds to
      'wallet_id': 1, //sending funds to
      'carats': 1, //number of carats they are getting
      'fluffs': 1, //number of carats they are getting
      'status': 1, //approved, sent, claim, completed
      'emails': 1,
      'referral': 1,
      'ip_address': 1
    },
    sort: {createdAt: -1}
  };

  return Meteor.users.find(selector, options);
});
