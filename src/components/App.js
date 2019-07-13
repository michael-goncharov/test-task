import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';

import Table from "./Table";
import StatsBar from "./StatsBar";

export default class App extends React.Component{

  render() {
    return (
        <div className="container">
          <h1> Articles </h1>
          <Table/>
          <div className="card-group">
          <StatsBar/>
          <StatsBar/>
          </div>
        </div>
    );
  }


}


