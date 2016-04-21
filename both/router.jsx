// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

// NOTE see flow-router branch for the vanilla router

import React from 'react';

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/register" content={Register} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/login" content={Login} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/changePassword" content={ChangePassword} layout={MainLayout} triggersEnter={isNotLoggedIn} />
    <Route path="/dashboard" content={Dashboard} layout={MainLayout} />
    <Route path="/about" content={About} layout={MainLayout} />
    <Route path="/profile" content={Profile} layout={MainLayout} />
    <Route path="/editprofile" content={EditProfile} layout={MainLayout} />
  </Router>
);

// TODO: create stacked layout for rendering two componenents side by side, need for editprofile

// checks user log status
function isLoggedIn(context, doRedirect) {
  if (User.isLoggedIn()){
    console.log("user is logged in");
    doRedirect('/');
  }
}

function isNotLoggedIn(context, doRedirect) {
  if(!User.isLoggedIn()) {
    doRedirect('/');
  }
}

// checks for user profile data
function profile(){
  if (User.isLoggedIn()){
    // return user profile data
    getProfile();
  } else {
    console.log('no data in user profile');
    // redirect to edit profile component
    //
    doRedirect('/profile');
  }
}

// Reaktor doensn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
