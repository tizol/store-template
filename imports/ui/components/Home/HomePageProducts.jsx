import React, {Component} from 'react';


export default class HomePageProducts extends Component {
  render() {
    return (
      <section className="bgwhite p-t-45 p-b-58">
    		<div className="container">
    			<div className="sec-title p-b-22">
    				<h3 className="m-text5 t-center">
    					Our Products
    				</h3>
    			</div>

    			{/*  Tab01  */}
    			<div className="tab01">
    				{/*  Nav tabs  */}
    				<ul className="nav nav-tabs" role="tablist">
    					<li className="nav-item">
    						<a className="nav-link active" data-toggle="tab" href="#best-seller" role="tab">Best Seller</a>
    					</li>
    					<li className="nav-item">
    						<a className="nav-link" data-toggle="tab" href="#featured" role="tab">Featured</a>
    					</li>
    					<li className="nav-item">
    						<a className="nav-link" data-toggle="tab" href="#sale" role="tab">Sale</a>
    					</li>
    					<li className="nav-item">
    						<a className="nav-link" data-toggle="tab" href="#top-rate" role="tab">Top Rate</a>
    					</li>
    				</ul>

    				{/*  Tab panes  */}
    				<div className="tab-content p-t-35">
    					{/*  -  */}
    					<div className="tab-pane show active" id="best-seller" role="tabpanel">
    						<div className="row">
    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
    										<img src="images/item-02.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-08.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Denim jacket blue
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$92.50
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-10.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Coach slim easton black
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$165.90
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-06.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-12.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-14.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Denim jacket blue
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$92.50
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-05.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Coach slim easton black
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$165.90
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-07.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Frayed denim shorts
    										</a>

    										<span className="block2-oldprice m-text7 p-r-5">
    											$29.50
    										</span>

    										<span className="block2-newprice m-text8 p-r-5">
    											$15.90
    										</span>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>

    					{/*  -  */}
    					<div className="tab-pane" id="featured" role="tabpanel">
    						<div className="row">
    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-07.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Frayed denim shorts
    										</a>

    										<span className="block2-oldprice m-text7 p-r-5">
    											$29.50
    										</span>

    										<span className="block2-newprice m-text8 p-r-5">
    											$15.90
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
    										<img src="images/item-01.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-14.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Denim jacket blue
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$92.50
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
    										<img src="images/item-06.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-11.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Frayed denim shorts
    										</a>

    										<span className="block2-oldprice m-text7 p-r-5">
    											$29.50
    										</span>

    										<span className="block2-newprice m-text8 p-r-5">
    											$15.90
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
    										<img src="images/item-12.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-15.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Denim jacket blue
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$92.50
    										</span>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>

    					{/*    */}
    					<div className="tab-pane" id="sale" role="tabpanel">
    						<div className="row">
    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-01.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-14.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Denim jacket blue
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$92.50
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-06.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-08.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Denim jacket blue
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$92.50
    										</span>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>

    					{/*    */}
    					<div className="tab-pane" id="top-rate" role="tabpanel">
    						<div className="row">
    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
    										<img src="images/item-02.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-03.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Denim jacket blue
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$92.50
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-05.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Coach slim easton black
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$165.90
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-07.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Frayed denim shorts
    										</a>

    										<span className="block2-oldprice m-text7 p-r-5">
    											$29.50
    										</span>

    										<span className="block2-newprice m-text8 p-r-5">
    											$15.90
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-10.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Coach slim easton black
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$165.90
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
    										<img src="images/item-11.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Frayed denim shorts
    										</a>

    										<span className="block2-oldprice m-text7 p-r-5">
    											$29.50
    										</span>

    										<span className="block2-newprice m-text8 p-r-5">
    											$15.90
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
    										<img src="images/item-12.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Herschel supply co 25l
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$75.00
    										</span>
    									</div>
    								</div>
    							</div>

    							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
    								{/*  Block2  */}
    								<div className="block2">
    									<div className="block2-img wrap-pic-w of-hidden pos-relative">
    										<img src="images/item-15.jpg" alt="IMG-PRODUCT" />

    										<div className="block2-overlay trans-0-4">
    											<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
    												<i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
    												<i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
    											</a>

    											<div className="block2-btn-addcart w-size1 trans-0-4">
    												{/*  Button  */}
    												<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
    													Add to Cart
    												</button>
    											</div>
    										</div>
    									</div>

    									<div className="block2-txt p-t-20">
    										<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
    											Denim jacket blue
    										</a>

    										<span className="block2-price m-text6 p-r-5">
    											$92.50
    										</span>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    );
  }
}
