import React, { Component } from 'react';
import './App.scss';
import TopMenu from "../TopMenu/TopMenu";

export default class App extends Component {

  render() {
    return (
      <div className="container">
          <TopMenu/>
      </div>
    )
  }
}
