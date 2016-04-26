import React from 'react';

MobileLoggedOutNav = React.createClass({
  render(){
    return(
      <ul className="side-nav" id="mobile-demo">
      <li><a href="/">Home</a></li>
      <li><a href="/register">Register</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  );
  }
});
