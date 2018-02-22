import React, {Component} from 'react';
import ProductDetail from '/imports/ui/components/Marketplace/ProductDetail.jsx';

export default class ProductDetailPage extends Component {

  render() {
    if(this.props.dataIsReady){
      let {product_name} = this.props.product;
      return (
        <section id="marketplace" className="subpage_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="section-title text-center wow zoomIn">
                  <h2>{product_name}</h2>
                  <div className="line"></div>
                </div>
                  <ProductDetail {...this.props}/>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (<div className="preloader">
        <div className="status">
          <div className="status-mes"></div>
        </div>
      </div>)
    }
  }
}
