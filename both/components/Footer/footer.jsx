import React from 'react';

Footer = React.createClass({
  render(){

    return (
      <footer className="page-footer" id="main">
        <div className="footer-copyright" id="footer">
          <div className="container">
            © 2014 Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
});
