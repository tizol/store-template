import React, { Component } from 'react';
import Notify from '/imports/ui/components/Reusable/Notification.jsx';
import { browserHistory } from 'react-router';


export default class ForgotPassword extends Component{
  componentWillMount(){
    if(Meteor.userId()){
      browserHistory.push('/dashboard');
    }
  }

  render(){
    submitEmail = () => {
      var email = this.refs.email.value.trim();
      var url = window.location.href;

      if(url == 'http://localhost:3000/forgotpassword'){
        url = 'http://localhost:3000';
      } else {
        url = Meteor.settings.public.url;
      }


      if(!email){
        return;
      }

      var self = this;
      Meteor.call('forgotUserPassword', email, url, function(error, result){
        if(result){
          self.refs.notify.refs.notification.addNotification({
            title: 'A link has been sent to your email.',
            message: 'Check your span folder if you cannot find it',
            position: 'tc',
            level: 'success'
          });
        }
        if(error) {
          return self.refs.notify.refs.notification.addNotification({
            title: 'FAILED',
            message: error.error.message,
            position: 'tc',
            level: 'error'
          });
        }
      });
    }
    return(
      <div className="ht-l-container mt-30 subpage_area">
        <h2 className="ht-u-text-center ht-u-mt-6 ht-u-mb-4">Forgot Password</h2>
        <div className="line"></div>
        <div className="col-sm-offset-3 col-sm-6">
          <p> Enter your email to reset your password <span className="text-danger">*</span></p>
        </div>
        <div className="col-sm-offset-3 col-sm-6">
            <input className="form-control ht-b-input" type="email" ref="email" placeholder="Email"/>
        </div>
        <div className="ht-u-text-center col-sm-12 ht-u-mb-4 ht-u-mt-4">
          <button type="button" onClick={() => {submitEmail()}} className="ht-b-btn ht-is-primary">Submit</button>
          <Notify ref="notify"/>
          </div>
      </div>
    );
  }
}
