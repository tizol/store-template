import { Meteor } from 'meteor/meteor';
import { Products } from '/imports/api/products/schema/products.js';

Meteor.publish("productDetail", function (productId) {

  let query = {
    product_id: productId,
    active: true
  }

  //console.warn('query ', query);
  //console.warn('productDetail ', Products.find(query).fetch());
  return Products.find(query);
});
