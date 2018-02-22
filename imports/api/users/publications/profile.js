import { Meteor } from 'meteor/meteor';
import '/imports/api/users/schema/users.js';


Meteor.publish("profile", function () {
  let pubFields = {
    createdAt: 0
  }
  //console.warn('user ', Meteor.users.find({_id: this.userId}, {fields: pubFields}).fetch());
  return Meteor.users.find({_id: this.userId}, {fields: pubFields});
});
