import React from 'react';


Profile = React.createClass({
  onSubmit(e){
    e.preventDefault();
    // little bit of jquery
    // var element = $(e.target);
    // var image = element.find("#image").val();
    // var bio = element.find("#bio").val();
    // var age = element.find("#age").val();
    //
    // // push values into our User object
    // User.profile.push({
    //   profileImage: image,
    //   profileBio: bio,
    //   profileAge: age,
    // });
  },
  getProfile(){
    User.profile ={
      profileImage: '',
      profileBio: 'bio goes here',
      profileAge: 0,
    };
  },
  render() {
    return(
      <div className="container">
        <div className="row">

        <div className="col sm8 left-align">
          <h4>profile</h4>
          <img className="img-rounded" src={User.profile.profileImage} />
            <blockquote>{User.profile.profileBio}</blockquote>
            <blockquote>{User.profile.profileAge}</blockquote>
        </div>

        <div className="col sm4 right-align">
          <h4>edit profile</h4>
            <div className="divider"></div>
            <div className="section">
              <h5>profile image</h5>
                <form action="#">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" id="image" />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </form>
            </div>
            <div className="divider"></div>
            <div className="section">
              <h5>Bio</h5>
              <form className="col s12">
                <div className="row">
                  <div class="input-field col s12">
                    <textarea id="bio" className="materialize-textarea"></textarea>
                    <label for="textarea1">Bio</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="divider"></div>
            <div className="section">
              <h5>Age</h5>
              <form action="#">
                <p className="range-field">
                  <input type="range" id="test5" min="0" max="100" id="age" />
                </p>
              </form>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Save
              <i className="material-icons right">send</i>
            </button>
        </div>
      </div>
    </div>
  );
  }
});
