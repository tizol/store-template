import { Meteor } from 'meteor/meteor';
import { Products } from '/imports/api/products/schema/products.js';

Meteor.publish("productsList", function () {

  let query = {
    active: true
  }

  //console.warn('productsList ', Products.find(query).fetch());
  return Products.find(query);
});
