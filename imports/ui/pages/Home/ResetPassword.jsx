import React, { Component } from 'react';
import Notify from '/imports/ui/components/Reusable/Notification.jsx';
import { browserHistory } from 'react-router';


export default class resetPassword extends Component{
  componentWillMount(){
    if(Meteor.userId()){
      browserHistory.push('/dashboard');
    }
  }

  render(){
    var resetPassword = () => {
      if(!this.refs.newPassword){
        return this.refs.notify.refs.notification.addNotification({
          title: 'FAILED',
          message: 'Please enter the new password.',
          position: 'tc',
          level: 'error'
        });
      }

      let newPassword = this.refs.newPassword.value.trim();
      let token = this.props.params.token;

      /**
       * Check password has at least 8 chars:
       * 1 upper case letter
       * 1 lower case letter
       * 1 number
       */
      if(!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword) || newPassword.length < 8){
        return this.refs.notify.refs.notification.addNotification({
          position: 'tc',
          title: 'Your password must have:',
          children: (<div>
                      <div><strong>At least 8 characters.</strong></div>
                      <div><strong>Upper & lowercase letters.</strong></div>
                      <div><strong>At least 1 number.</strong></div>
                    </div>),
          level: 'error'
        })
      }

      var self = this;
      Accounts.resetPassword(token, newPassword, function(error){
        if(error){
          self.refs.notify.refs.notification.addNotification({
            title: "Unable to reset password",
            message: error.reason,
            position: 'tc',
            level: 'error'
          })
        } else {
          self.refs.notify.refs.notification.addNotification({
            title: 'SUCCESS',
            message: 'Password successfully updated',
            position: 'tc',
            level: 'success'
          })
          setTimeout(function(){
            browserHistory.push('/dashboard');
          }, 3000);
        }
      });
    }

    return (
      <div className="ht-l-container mt-30 subpage_area">
        <h2 className="ht-u-text-center ht-u-mt-6 ht-u-mb-4">Reset Password</h2>
        <div className="line"></div>
        <div className="col-sm-offset-3 col-sm-6">
          <p> Enter your new password <span className="text-danger">*</span></p>
        </div>
        <div className="col-sm-offset-3 col-sm-6">
          <input className="form-control ht-b-input" type="password" ref="newPassword" placeholder="Password"/>
        </div>
        <div className="ht-u-text-center col-sm-12 ht-u-mb-4 ht-u-mt-4">
          <button type="button" onClick={() => {resetPassword()}} className="ht-b-btn ht-is-primary">Reset Password</button>
          <Notify ref="notify"/>
          </div>
      </div>
    )
  }
}
