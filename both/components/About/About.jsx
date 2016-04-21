import React from 'react';

About = React.createClass({
  render(){
    return(
      <div className="container">
        <h4>About</h4>
        <div className="col s12">
          <div className="row">
          <h5>Development</h5>
          <blockquote>
            healthLab.io is developed by <a href="https://github.com/bretth18">@bretth18</a>. The platform is developed
            on top of the Meteor stack, and uses React.js.
          </blockquote>
          <blockquote>
            We're creating a tool for patients to manage their health. Track appointments, track diet, track your medication and compare potential interactions between drugs.
            We're also developing a platform for patients with chronic diseases to create prediction models for flare-ups (i.e autoimmune conditions).
          </blockquote>
        </div>
        <h5>Investors</h5>
        <blockquote>
          healthLab is looking for investors. Please visit /investors.
        </blockquote>
      </div>
      </div>
    );
  }
});
