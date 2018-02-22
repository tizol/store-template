import React, {Component} from 'react';


export default class HomePageBanners extends Component {
  render() {
    return (
        <div className="banner bgwhite p-t-40 p-b-40">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                {/* block1 */}
                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="images/banner-05.jpg" alt="IMG-BENNER" />

                  <div className="block1-wrapbtn w-size2">
                    {/* Button */}
                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
        								Sunglasses
        							</a>
                  </div>
                </div>
              </div>

              <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                {/* block1 */}
                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="images/banner-03.jpg" alt="IMG-BENNER" />

                  <div className="block1-wrapbtn w-size2">
                    {/* Button */}
                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
        								Watches
        							</a>
                  </div>
                </div>
              </div>

              <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                {/* block1 */}
                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="images/banner-10.jpg" alt="IMG-BENNER" />

                  <div className="block1-wrapbtn w-size2">
                    {/* Button */}
                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
        								Bags
        							</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
