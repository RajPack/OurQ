import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {AppTemplate} from './app.template';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return AppTemplate.call(this);
  }
}