import { Meteor } from 'meteor/meteor';
import { Prices } from '/imports/api/prices/schema/prices.js';

Meteor.publish("currencyPrices", function () {

  let query = {}

  //console.warn('prices ', Prices.find(query).fetch());
  return Prices.find(query);
});
