import React from 'react';

MobileLoggedInNav = React.createClass({
  render(){
    return (
      <ul className="side-nav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/changePassword">Change Password</a></li>
        <li><a onClick={this.props.logout}>Logout</a></li>
      </ul>
    );
  }
});
