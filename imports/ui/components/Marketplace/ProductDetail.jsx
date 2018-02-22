
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';


export default class ProductDetail extends Component {

  render() {
    let {product_name, description, product_id, price, currency, main_image, more_images} = this.props.product;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9  push-md-4 push-lg-3">
            <div className="details-content">
              <div className="product-details section-bg-white">
                <div className="row">
                  <div className="col-lg-6">
                    <Carousel>
                      <Carousel.Item>
                        {/* NOTE we can add width={900} height={500}  */}
                        <img src={main_image} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={main_image} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={main_image} />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="col-lg-6">
                    <div className="product-details-info">
                      <span className="product-title"><strong>{product_name}</strong></span>
                      <p>{description}</p>
                      <div className="price"><b>{price} {currency}</b></div>
                      <div className="add-to-cart">
                        <a className="btn btn-primary" href="shopping-cart.html">Purchase</a> {/* <span><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></span> */}
                      </div>
                      {/* add-to-cart */}
                    </div>
                    {/* products-details-info */}
                  </div>
                </div>
                {/* row */}
              </div>
              {/* products-details */}
              <div className="products-description section-bg-white">
                <ul className="nav nav-tabs description-tabs" role="tablist">
                  <li role="presentation" className="nav-item"><a className="nav-link active" href="#details" aria-controls="details" role="tab" data-toggle="tab">Details</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#delivery" aria-controls="delivery" role="tab" data-toggle="tab" aria-expanded="true">Delivery</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#payment" aria-controls="payment" role="tab" data-toggle="tab" aria-expanded="true">Payment</a></li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane fade show active" id="details">
                    <p>
                      {description}
                    </p>
                  </div>
                  {/* tab-pane */}
                  <div role="tabpanel" className="tab-pane fade" id="delivery">
                    <div className="delivery">
                      <p>
                        delivery info goes here
                      </p>
                    </div>
                  </div>
                  {/* tab-pane */}
                  <div role="tabpanel" className="tab-pane fade" id="payment">
                    <div className="payment">
                      <p>
                        payment info goes here
                      </p>
                    </div>
                  </div>
                  {/* tab-pane */}
                </div>
                {/* content */}
              </div>
              {/* producription */}
            </div>
            {/* content */}
          </div>
        </div>
        {/* row */}
      </div>
    )
  }
}
