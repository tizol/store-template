import { Meteor } from 'meteor/meteor';
import { Wallets } from '/imports/api/wallets/schema/wallets.js';

Meteor.publish("activeWallets", function (currency) {

  let user = Meteor.users.findOne({_id: this.userId});

  let query = {
    currency: user.currency,
    active: true
  }

  //console.warn('wallets ', Wallets.find(query).fetch());
  return Wallets.find(query);
});
