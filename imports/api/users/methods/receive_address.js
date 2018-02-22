import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  receiveAddress(address){
    if (!this.userId) {
      throw new Meteor.Error('Please log in');
    }

    let updateValue = {receive_address: address, status: 'claim'};
    Meteor.users.update({ _id: this.userId }, { $set: updateValue });

    return 'success'
  },
})
