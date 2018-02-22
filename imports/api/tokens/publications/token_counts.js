import { Meteor } from 'meteor/meteor';
import { Tokens } from '/imports/api/tokens/schema/tokens.js';

Meteor.publish("tokenCounts", function (currency) {

  let query = {
    //currency: currency
  }

  //console.warn('tokens ', Tokens.find(query).fetch());
  return Tokens.find(query);
});
