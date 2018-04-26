import React from 'react';
import './App.css';

import {AppTemplate} from './app.template';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listofMembers: ["Raj", "Chethan", "Senthil", "Amol"]
    }
  }
  render(){
    console.log(this.props.children);
    return AppTemplate.call(this);
  }
}