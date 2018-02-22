import React, {Component} from 'react';
import {Link} from 'react-router';
import About from '/imports/ui/components/Home/About.jsx';
import HomePageSlides from '/imports/ui/components/Home/HomePageSlides.jsx';
import HomePageBanners from '/imports/ui/components/Home/HomePageBanners.jsx';
import HomePageProducts from '/imports/ui/components/Home/HomePageProducts.jsx';
import StoreAdvantages from '/imports/ui/components/Home/StoreAdvantages.jsx';


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomePageSlides />
        <About />
        <HomePageBanners />
        <HomePageProducts />
        <StoreAdvantages />
      </div>
    )
  }
}
