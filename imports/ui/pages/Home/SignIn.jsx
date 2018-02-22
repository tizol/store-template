import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';
import Notify from '/imports/ui/components/Reusable/Notification.jsx';
import { Roles } from 'meteor/alanning:roles';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
  }

  // componentWillMount(){
  //   if(Meteor.userId()){
  //     browserHistory.push('/member');
  //   }
  // }

  componentDidMount(){
    $('body,html').scrollTop(0);
  }

  submitLogin(event) {
    if (event.key === 'Enter' || event.nativeEvent.type === 'click') {
      const email = this.refs.email.value.trim();
      const password = this.refs.password.value.trim();

      /**
       * Validate email has @ and .
       */
      var atIndex = email.indexOf("@");
      var dotIndex = email.lastIndexOf(".");

      if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        this.refs.notify.refs.notification.addNotification({
          title: 'Invalid email',
          position: 'tc',
          message: "Please enter a valid email",
          level: 'error'
        });
        return false;
      }

      var self = this;
      Meteor.loginWithPassword(email, password, Meteor.bindEnvironment((error, result) => {
        if (error) {
          self.refs.notify.refs.notification.addNotification({
            title: 'User not found',
            position: 'tc',
            message: "Wrong Email or Password",
            level: 'error'
          });
        } else {
          if(Meteor.userId()){
            if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
                browserHistory.push('/bunny');
              } else{
                browserHistory.push('/member');
              }
          }
        }
      }));
    }
  }

  handleChange(event){
    if (event.target.value){
      event.target.style.borderBottom = '3px solid #FF7545';
      event.target.style.borderTop = 'none';
      event.target.style.borderRight = 'none';
      event.target.style.borderLeft = 'none';
    }
  }

  render() {
    var style = {
      NotificationItem: {
        DefaultStyle: {width: '400px', fontSize: '15px'}
      }
    }

    return (
      <section id="signin" className="subpage_area section-padding">
        <div className="container">
          <div className="row ht-u-mt-6">
            <div className="section-title text-center wow zoomIn">
              <h2>Login</h2>
              <div className="line"></div>
              <p>Don't have an account? <Link to="/signup" style={{color: '#70BAF4'}}>Register</Link></p>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="contact">
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label className="ht-b-label">Email <span className="text-danger">*</span></label>
                      <input onChange={this.handleChange} ref="email" type="email" name="email" className="form-control" id="email" placeholder="Email" required="required"/>
                    </div>
                    <div className="form-group col-md-12">
                      <label className="ht-b-label">Password <span className="text-danger">*</span></label>
                      <input onChange={this.handleChange} type="password" className="form-control" placeholder="Password" ref="password" />
                    </div>

                    <div className="col-md-12 mt-30">
                      <div className="actions text-center">
                        <button onClick={this.submitLogin} id="submitButton" className="btn btn-lg btn-contact-bg">SIGN IN</button>
                      </div>
                      <div className="mt-15 text-center">
                        <span style={{'color': '#1d3858'}}><Link to={'/forgotpassword'}>Forgot password</Link></span> 
                      </div>
                      <Notify ref="notify"/>
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
