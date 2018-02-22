import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProductDetailPage from '/imports/ui/pages/Marketplace/ProductDetailPage.jsx';
import { Products } from '/imports/api/products/schema/products.js';

const ProductDetailContainer =  createContainer((props) => {
  let productId = props.params.id;

  const productDetailSub = Meteor.subscribe('productDetail', productId);
  let query = {product_id: productId};
  let product = Products.findOne(query);

  return {
    product: product,
    dataIsReady: productDetailSub.ready()
  };
}, ProductDetailPage);

export default ProductDetailContainer;
