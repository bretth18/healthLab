import React from 'react';

Home = React.createClass({
  render() {
    return (
      <div>
        <h4>Welcome to healthLab.io</h4>
    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="https://cdn.drivenlocal.com/wp-content/uploads/2015/10/Material-design.jpg" height='400' width='100' />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Hello there!<i className="material-icons right">more_vert</i></span>
      <p><a href="/about">Learn More</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Hi! Thanks for chosing healthLab.io. Please read our FAQ and stay up to date on our news section.</p>
    </div>
  </div>
  </div>
      );
    }
});
