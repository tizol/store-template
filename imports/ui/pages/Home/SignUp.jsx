import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';
import Notify from '/imports/ui/components/Reusable/Notification.jsx';


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onPassword: false,
      onConfirmPassword: false,
      password: '',
      confirm_password: ''
    }

    this.submitSignUp = this.submitSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hasUpper     = this.hasUpper.bind(this);
    this.hasLower     = this.hasLower.bind(this);
    this.hasEight     = this.hasEight.bind(this);
    this.hasNum       = this.hasNum.bind(this);
  }

  hasUpper(){
    if (this.state.password.match(/[A-Z]+/g)){
      return true;
    } else {
      return false;
    }
  }

  hasLower(){
    if (this.state.password.match(/[a-z]+/g)){
      return true;
    } else {
      return false;
    }
  }

  hasNum(){
    if (this.state.password.match(/\d+/g)){
      return true;
    } else {
      return false;
    }
  }

  hasEight(){
    if (this.state.password.length >= 8){
      return true;
    } else {
      return false;
    }
  }

  handleChange(event, name){
    if (event.target.value){
      event.target.style.borderBottom = '3px solid #FF7545';
      event.target.style.borderTop = 'none';
      event.target.style.borderRight = 'none';
      event.target.style.borderLeft = 'none';
    }

    if (name && name === 'password'){
      this.setState({password: event.target.value})
    }

    if (name && name === 'confirm_password'){
      this.setState({confirm_password: event.target.value})
    }
  }

  componentDidMount(){
    $('body,html').scrollTop(0);
  }

  /**
   * If user is already logged in, send to /dashboard
   */
  componentWillMount(){
    if(Meteor.userId()){
      browserHistory.push('/member');
    }
  }

  submitSignUp(event){
    if (event.key === 'Enter' || event.nativeEvent.type === 'click') {
      let fname = this.refs.first_name.value.trim();
      let lname = this.refs.last_name.value.trim();
      let password = this.state.password.trim();
      let confirm_password = this.state.confirm_password.trim();
      let email = this.refs.email.value.trim();

      if(!fname || !lname || !password || !confirm_password || !email){
        if (!fname){
          this.refs.first_name.style.border = "1px solid red";
        }
        if (!lname){
          this.refs.last_name.style.border = "1px solid red";
        }
        if (!password){
          this.refs.password.style.border = "1px solid red";
        }
        if (!confirm_password){
          this.refs.confirm_password.style.border = "1px solid red";
        }
        if (!email){
          this.refs.email.style.border = "1px solid red";
        }
        return this.refs.notify.refs.notification.addNotification({
          title: 'All fields are required',
          position: 'tc',
          message: 'Please fill out all the fields and submit again.',
          level: 'error'
        })
      }

      /**
       * Check password has at least 8 chars:
       * 1 upper case letter
       * 1 lower case letter
       * 1 number
       */
      if(!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || password.length < 8){
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

      if(password != confirm_password){
        return this.refs.notify.refs.notification.addNotification({
          position: 'tc',
          title: 'Your password does not matched',
          children: (<div>
                      <div><strong>Please check password and confirm password are correct.</strong></div>
                    </div>),
          level: 'error'
        })
      }

      fname = fname.charAt(0).toUpperCase() + fname.substr(1).toLowerCase();
      lname = lname.charAt(0).toUpperCase() + lname.substr(1).toLowerCase();

      let profile = {
        first_name: fname,
        last_name: lname
      }

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

      Accounts.createUser({email, password, profile}, error => {
        if (error) {
          return this.refs.notify.refs.notification.addNotification({
            title: 'Error',
            position: 'tc',
            message: error.message,
            level: 'error'
          });
        } else {

          Meteor.call('welcomeEmail', email, function(error, result){
              if (error){
                console.log("error at welcomeEmail", error);
              }
            });

          browserHistory.push("/member")
        }
      })
    }
  }

  render() {
    return (
      <section id="signup" className="subpage_area section-padding">
        <div className="container">
          <div className="row ht-u-mt-6">
            <div className="section-title text-center wow zoomIn">
              <h2>Fluffr Token Registration</h2>
              <div className="line"></div>
              <p>Already have an account? <Link to="/signin" style={{color: '#70BAF4'}}>Login</Link></p>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="contact">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="ht-b-label">First Name <span className="text-danger">*</span></label>
                      <input onChange={this.handleChange} ref="first_name" type="text" name="first_name" className="form-control" id="first_name" placeholder="First Name" required="required"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="ht-b-label">Last Name <span className="text-danger">*</span></label>
                      <input onChange={this.handleChange} ref="last_name" type="text" name="last_name" className="form-control" id="last_name" placeholder="Last Name" required="required"/>
                    </div>
                    <div className="form-group col-md-12">
                      <label className="ht-b-label">Email <span className="text-danger">*</span></label>
                      <input onChange={this.handleChange} ref="email" type="email" name="email" className="form-control" id="email" placeholder="Email" required="required"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="ht-b-label">Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" placeholder="Password" value={this.state.password} onKeyPress={this.submitSignUp} onChange={(e) => {this.handleChange(e, 'password')}} ref="password" onFocus={() => {this.setState({onPassword: true})}} onBlur={() => {this.setState({onPassword: false})}}/>
                    </div>
                    <div className="form-group col-md-6">
                       <label className="ht-b-label">Confirm Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.confirm_password} ref="confirm_password" onChange={(e) => {this.handleChange(e, 'confirm_password')}} onFocus={() => {this.setState({onConfirmPassword: true})}} onBlur={() => {this.setState({onConfirmPassword: false})}}/>
                    </div>
                    <div className="form-group col-md-12">
                     <label className="ht-b-label mb-20 mr-10">Your password must have:</label>
                       <span style={this.hasUpper() ? {color: "#70BAF4"}: { }} className="ht-b-label mr-20">{this.hasUpper() ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>} Uppercase characters</span>
                       <span style={this.hasLower() ? {color: "#70BAF4"}: { }} className="ht-b-label mr-20">{this.hasUpper() ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>} Lowercase characters</span>
                       <span style={this.hasEight() ? {color: "#70BAF4"}: { }} className="ht-b-label mr-20">{this.hasUpper() ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>} At least 8 characters</span>
                       <span style={this.hasNum() ? {color: "#70BAF4"} : { }} className="ht-b-label">{this.hasUpper() ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>} At least 1 number</span>
                   </div>
                    <div className="col-md-12 mt-30">
                      <div className="actions text-center">
                        <button onClick={this.submitSignUp} id="submitButton" className="btn btn-lg btn-contact-bg">REGISTER NOW</button>
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
