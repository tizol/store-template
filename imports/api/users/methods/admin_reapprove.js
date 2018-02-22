import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  adminReApprove(id){
    if (!this.userId) {
      throw new Meteor.Error('Please log in');
    }

    if(!Roles.userIsInRole(this.userId, ['admin'])) return;

    let updateValue = {
      status: 'approved'
    };

    Meteor.users.update({ _id: id }, { $set: updateValue });

    return 'success'
  },
})
