import React from 'react';

Header = React.createClass({
  render() {

    var navStyle ={
      paddingLeft: "12px"
    };
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" class="brand-logo">healthLab.io</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    );
  }
});
