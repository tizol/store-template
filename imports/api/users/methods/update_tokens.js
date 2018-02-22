import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  updateTokens(tokens){
    if (!this.userId) {
      throw new Meteor.Error('Please log in');
    }

    let updateValue = tokens;

      /*let updateValue = {nem_address: tokens.nem_address};

      if(tokens.currency == 'ETH'){
        updateValue.currency = 'ETH';
      } else if(tokens.currency == 'BTC'){
        updateValue.currency = 'BTC';
      } else{
        updateValue.currency = 'XEM';
      }*/

      //console.warn('updateValue ', updateValue);

      Meteor.users.update({ _id: this.userId }, { $set: updateValue });

      return 'success'
  },
})
