import React from 'react';

MainLayout = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <main className="container">{this.props.content}</main>
      </div>
    );
  }
});
