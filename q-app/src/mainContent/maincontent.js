import React from 'react';
import MainContentTemplate from './maincontent.template';
import './maincontent.css';

export default class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return MainContentTemplate();
    }
}
