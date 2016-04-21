import React from 'react';

About = React.createClass({
  render(){
    return(
      <div className="container">
        <h4>About</h4>
        <div className="col s12">
          <h5>Development</h5>
          <blockquote>
            healthLab.io is developed by <a href="https://github.com/bretth18">@bretth18</a>. The platform is developed
            on top of the Meteor stack, and uses React.js. 
          </blockquote>
        </div>
      </div>
    );
  }
});
