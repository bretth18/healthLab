import React from 'react';
import { Meteor } from 'meteor/meteor';


Profile = React.createClass({

  getProfile(){
    // let userEmail = Meteor.us
    // User.profile ={
    //   profileImage: '',
    //   profileBio: 'bio goes here',
    //   profileAge: 0,
    // };
    const user = Meteor.users.findOne(userId);
    // store profile data within a callable object
    var userProfile = {
      name: user.name,
      email: user.email,
    };
  },
  render() {
    return(
      <div className="container">
        <h4>profile</h4>
        <p>{this.userProfile.name}</p>
      </div>
    );
  }
});
