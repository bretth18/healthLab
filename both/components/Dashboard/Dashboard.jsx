import React from 'react';

Dashboard = React.createClass({
  render(){
    return(
      <div className="container">
      <h4>Dashboard</h4>

      <div class="row">

          <div className="col s12 m4 l3">
            <ul className="collection with-header">
  <li className="collection-header"><h4>First Names</h4></li>
  <li className="collection-item">Alvin</li>
  <li className="collection-item">Alvin</li>
  <li className="collection-item">Alvin</li>
  <li className="collection-item">Alvin</li>
</ul>



        </div>

          <div className="col s12 m8 l9">
            <ul className="collection">
  <li className="collection-item avatar">
    <img src="images/yuna.jpg" alt="" className="circle" />
    <span className="title">Title</span>
    <p>First Line <br/>
       Second Line
    </p>
    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
  </li>
  <li className="collection-item avatar">
    <i className="material-icons circle">folder</i>
    <span className="title">Title</span>
    <p>First Line <br/>
       Second Line
    </p>
    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
  </li>
  <li className="collection-item avatar">
    <i className="material-icons circle green">insert_chart</i>
    <span className="title">Title</span>
    <p>First Line <br/>
       Second Line
    </p>
    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
  </li>
  <li className="collection-item avatar">
    <i className="material-icons circle red">play_arrow</i>
    <span className="title">Title</span>
    <p>First Line <br/>
       Second Line
    </p>
    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
  </li>
</ul>



        </div>

      </div>
    </div>


    );
  }
});
