import React from 'react';


LoggedInNav = React.createClass({
  render(){
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/changePassword">Change Password</a></li>
        <li><a onClick={this.props.logout}>Logout</a></li>
    </ul>
  );
  }
});
