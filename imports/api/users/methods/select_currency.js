import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Wallets } from '/imports/api/wallets/schema/wallets.js';

var ip;

Meteor.onConnection(function(conn) {
  ip = conn.clientAddress;
});

Meteor.methods({
  selectCurrency(tokens){
    if (!this.userId) {
      throw new Meteor.Error('Please log in');
    }

    let query = {
      currency: tokens.currency,
      active: true
    }

    //console.warn('wallets ', Wallets.findOne(query));
    let wallet = Wallets.findOne(query);

    let updateValue = tokens;

    if(wallet){
      updateValue.wallet_address = wallet.address;
      updateValue.wallet_id = wallet._id;
      updateValue.ip_address = ip;
    }

      Meteor.users.update({ _id: this.userId }, { $set: updateValue });

      return 'success'
  },
})
