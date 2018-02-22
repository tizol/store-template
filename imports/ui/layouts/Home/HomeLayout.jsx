import React, {Component} from 'react';
import Header from '/imports/ui/components/Main/Header.jsx';
import Footer from '/imports/ui/components/Main/Footer.jsx';

export default class HomeLayout extends Component {
  render() {
    if(this.props.dataIsReady){
      return (
        <div>
            <Header {...this.props}/>
            <div style={{minHeight: '80vh'}}>
              {this.props.children}
            </div>
            <Footer />
        </div>
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
