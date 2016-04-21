import React from 'react';

ChangePassword = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    //this.refs.oldPassword.value
    var oldPassword = this.refs.oldPassword.value;
    var newPassword = this.refs.newPassword.value;
    var confirmPassword = this.refs.confirmPassword.value;

    if(newPassword === confirmPassword) {
      Accounts.changePassword(oldPassword, newPassword, ()=> {
        if(er) {
          Materialize.toast(er.reason, 4000);
        } else {
          Materialize.taost('Your password has changed!', 4000);
          FlowRouter.go('/');
        }
      });
    }
  },
  render() {
    return (
      <div className="row">
        <h4 className="text-center">Change Password</h4>
        <form onSubmit={this.onSubmit} className="col offset-s4 s4">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="oldPassword" type="password" className="validate" ref="oldPassword"/>
              <label htmlFor="oldPassword">Old password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="newPassword" type="password" className="validate" ref="newPassword"/>
              <label htmlFor="newPassword"> New Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="confirmPassword" type="password" className="validate" ref="confirmPassword"/>
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
