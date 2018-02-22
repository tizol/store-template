import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  sentAddress(address){
    if (!this.userId) {
      throw new Meteor.Error('Please log in');
    }

    let updateValue = {
      sent_address: address,
      status: 'sent',
      sent_date: new Date()
    };

    Meteor.users.update({ _id: this.userId }, { $set: updateValue });

    return 'success'
  },
})
