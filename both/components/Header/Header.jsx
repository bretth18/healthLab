import React from 'react';
import $ from 'jquery';

Header = React.createClass({
  getInitialState() {
    return {
      isLoggedIn: User.isLoggedIn()
    };

  },
    // function for mobile side-bar layout
  showBar(){
    $('.button-collapse').sideNav({
    menuWidth: 100, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
    console.log('registering click');
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
    var mobileNavOptions = User.isLoggedIn() ? <MobileLoggedInNav logout={this.logout} /> : <MobileLoggedOutNav />;

    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="#" data-activates="mobile-demo" className="button-collapse" onClick={this.showBar}><i className="material-icons">menu</i></a>
          <a href="/" class="brand-logo">healthLab.io</a>
          {navOptions}
          <ul className="side-nav" id="mobile-demo">
            {mobileNavOptions}
          </ul>
      </div>
    </nav>
    );
  }
});
