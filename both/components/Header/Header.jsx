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
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    );
  }
});
