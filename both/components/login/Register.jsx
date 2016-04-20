import React from 'react';

Register = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    //testing remove
    console.log(e);
    var element = $(e.target);

    // grab form elements
    var email = element.find("email").val();
    var password = element.find("#password").val();
    var confirmPassword = element.find("confirmPassword").val();

    //validate password
    // TODO: more validation
    if(password === confirmPassword && password !== "" && confirmPassword !== ""){
      var accountInfo = {
        email: email,
        password: password
      };
      // call meteor function to create account
      Accounts.createUser(accountInfo, function(er){
        if(er){
          Materialize.toast('An error has occured creating your account!', 4000); // 4000 is the duration of the toast
        } else {
          Meteor.loginWithPassword(email, password, function(er) {
            if (er){
              Materialize.toast('failed to login... sorry?', 4000) // 4000 is the duration of the toast
            } else {
              //Redirect
              console.log("login worked");
            }
          });
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
            <button className="waves-effect waves-light btn btn-block">button</button>
          </div>
        </form>
    </div>

  );
  }
});
