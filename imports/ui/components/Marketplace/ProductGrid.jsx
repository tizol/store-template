import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';

export default class ProductGrid extends Component {

  render() {
    let {product_id, product_name, price, currency, main_image} = this.props.product;
    return (
      <div className="col-md-6 col-lg-3">
          <div className="product">
              <Link className="image-link" to={"/product/"+product_id} tabIndex="-1">
                  <span className="product-image">
                    <img src={main_image} className="img-fluid"/>
                  </span>
                  <span className="product-title">{product_name}</span>
                  <span className="price">{price} {currency}</span>
              </Link>
          </div>
      </div>
    )
  }
}
