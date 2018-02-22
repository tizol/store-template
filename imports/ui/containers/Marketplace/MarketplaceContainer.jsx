import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Marketplace from '/imports/ui/components/Marketplace/Marketplace.jsx';
import { Products } from '/imports/api/products/schema/products.js';

const MarketplaceContainer =  createContainer((props) => {
  const productsSub = Meteor.subscribe('productsList');
  let query = {};
  let products = Products.find(query).fetch();

  return {
    products: products,
    dataIsReady: productsSub.ready()
  };
}, Marketplace);

export default MarketplaceContainer;
