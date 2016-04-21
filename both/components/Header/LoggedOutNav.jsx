import React from 'react';

LoggedOutNav = React.createClass({
  render(){
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
    </ul>
  );
  }
});
