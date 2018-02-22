import React, { Component } from 'react';
import Notify from '/imports/ui/components/Reusable/Notification.jsx';
import { browserHistory } from 'react-router';


export default class ChangePassword extends Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.target.style.border="1px solid rgba(0, 0, 0, 0.15)";
  }

  render(){
    var changePassword = () => {
      if(!this.refs.newPassword){
        return this.refs.notify.refs.notification.addNotification({
          title: 'FAILED',
          message: 'Please enter the new password.',
          position: 'tc',
          level: 'error'
        });
      }

      let oldPassword = this.refs.oldPassword.value.trim();
      let newPassword = this.refs.newPassword.value.trim();
      let confirmNewPassword = this.refs.confirmNewPassword.value.trim();
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

      if(newPassword!==confirmNewPassword) {
        this.refs.newPassword.style.border = "1px solid red";
        this.refs.confirmNewPassword.style.border = "1px solid red";
        return this.refs.notify.refs.notification.addNotification({
          position: 'tc',
          message: 'New passwords do not match!',
          level: 'error'
        })
      }

      var self = this;
      Accounts.changePassword(oldPassword, newPassword, function(error){
        if(error){
          if(error.reason==='Incorrect password'){
            self.refs.oldPassword.style.border = "1px solid red";
          }
          self.refs.notify.refs.notification.addNotification({
            title: "Unable to change password",
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
      <div className="container mt-30 subpage_area">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <h2 className="text-center ht-u-mt-6 mb-20">Change Password</h2>
                  <div className="line"></div>
                  <div className="mb-1 text-center">
                    <label className="mb-20 col-md-4 col-sm-4 row">Old Password</label>
                  <input className="form-control col-md-8 col-sm-12 col-xs-12 mb-20" type="password" ref="oldPassword" onChange={this.handleChange}/>
                  </div>
                  <div className="mb-1 text-center">
                    <label className="mb-20 col-md-4 col-sm-4 row">New Password</label>
                  <input className="form-control col-md-8 col-sm-12 col-xs-12 mb-20" type="password" ref="newPassword" onChange={this.handleChange}/>
                  </div>
                  <div className="mb-1 text-center">
                    <label className="col-md-4 col-sm-4 row">Confirm New Password</label>
                  <input className="form-control col-md-8 col-sm-12 col-xs-12" type="password" ref="confirmNewPassword" onChange={this.handleChange}/>
                  </div>
                  <div className="text-center">
                    <button type="button" onClick={() => {changePassword()}} className="btn btn-primary active mt-1">CHANGE PASSWORD</button>
                    <Notify ref="notify"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
