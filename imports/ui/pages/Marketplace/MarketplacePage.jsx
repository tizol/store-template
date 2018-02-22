import React, {Component} from 'react';
import MarketplaceContainer from '/imports/ui/containers/Marketplace/MarketplaceContainer.jsx';

export default class MarketplacePage extends Component {

  render() {
    return (
      <section id="marketplace" className="subpage_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title text-center wow zoomIn">
                <h2>Marketplace</h2>
                <div className="line"></div>
              </div>
                <MarketplaceContainer />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
