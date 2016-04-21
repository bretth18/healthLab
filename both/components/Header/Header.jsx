import React from 'react';

Header = React.createClass({
  getInitialState() {
    return {
      isLoggedIn: User.isLoggedIn()
    };

  },
  logout() {
    Meteor.logout((er)=>{
      if(er) {
        Materialize.toast(er.reason, 4000);
      } else {
        // set state to logged out
        this.setState({isLoggedIn: !this.state.isLoggedIn});
        FlowRouter.go('/');
      }
    });
  },
  render() {

    var navStyle ={
      paddingLeft: "12px"
    };
    // handles nav bar for logged in user
    var navOptions = User.isLoggedIn() ? <LoggedInNav logout={this.logout} /> : <LoggedOutNav />;

    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" class="brand-logo">healthLab.io</a>
          {navOptions}
      </div>
    </nav>
    );
  }
});
