
// imports
import React from 'react';
import { Meteor } from 'meteor/meteor';

// react class for register
Register = React.createClass({
  // function to handle form submission
  onSubmit(e) {
    e.preventDefault();
    //testing remove
    console.log(e);
    var element = $(e.target);

    // grab form elements
    var firstName = element.find("#first_name").val();
    var email = element.find("#email").val();
    var password = element.find("#password").val();
    var confirmPassword = element.find("#confirmPassword").val();

  //  create a userObject to pass to server
    var profileObject = {
      first_name: firstName,
      email_val: email,
    };

    //validate password
    // TODO: more validation
    if(password === confirmPassword && password !== "" && confirmPassword !== ""){
      var userInfo = {
        email: email,
        password: password
      };
      // call meteor function to create account
      Accounts.createUser(userInfo, function(er){
        if(er){
          Materialize.toast(er.reason, 4000); // 4000 is the duration of the toast
        } else {
              console.log("login worked");
              // call server side method to send verification email
              Meteor.call("emailVerification", userInfo, function(err, res){
                if(err){
                  console.log("error", err);
                  // optional - do we want to notify user of fail verification?
                  Materialize.toast(err.reason, 4000);
                }
                if(res){
                  // debugging - remove
                  console.log('email verification sent');
                  Materialize.toast('Verification email sent! - Check your inbox!');
                }
              });
              // redirect
              FlowRouter.go('/');

            }
          });
    } else {
      Materialize.toast('Passwords do not match!', 4000); // 4000 is the duration of the toast
    }

  },
  render() {
    return(
      <div className="row">
        <h4 className="text-center">Register Account</h4>
        <form onSubmit={this.onSubmit} className="col offset-s4 s4">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="first_name" type="text" className="validate"/>
              <label htmlFor="first_name">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="email" type="text" className="validate"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="password" type="password" className="validate"/>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="confirmPassword" type="password" className="validate"/>
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn btn-block">Register</button>
          </div>
        </form>
    </div>

  );
  }
});
