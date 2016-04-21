import React from 'react';

EditProfile = React.createClass({
  getInitialState(){
    var userProfile = User.profile;
    var user = this.state.user;
  },
  onSubmit(e){
    // prevent reload
    e.preventDefault();

    // little bit of jquery, grabbing form elements
    var element = $(e.target);
    var image = element.find("#image").val();
    var bio = element.find("#bio").val();
    var age = element.find("#age").val();

    // push values into our User object
    User.profile.push({
      profileImage: image,
      profileBio: bio,
      profileAge: age,
    });
  },


  render(){
    return(
      <div className="container">
        
      </div>

    );
  }
});
