import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';
import ProductGrid from '/imports/ui/components/Marketplace/ProductGrid.jsx';

export default class Marketplace extends Component {

  render() {
    if(this.props.dataIsReady){
    let {products} = this.props;
    let productsList = products.map(function(product, i){
      return <ProductGrid key={i} product={product}/>
    })

    return (
      <div className="container">
        <div className="row">
          {/*product */}
          {productsList}
          {/*end product */}

        </div>
      </div>
    )
  } else {
    return (<div className="preloader">
      <div className="status">
        <div className="status-mes"></div>
      </div>
    </div>)
    }
  }
}
