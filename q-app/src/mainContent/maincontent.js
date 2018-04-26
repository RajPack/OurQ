import React from 'react';
import MainContentTemplate from './maincontent.template';
import './maincontent.css';

export default class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list : props.list
        }
    }
    render(){
        console.log(this.props.children);
        var templateArr = [];
        this.state.list.forEach((member, index)=>{
           templateArr.push(this.props.children(member, index));
        })
        console.log(templateArr);
        return MainContentTemplate(templateArr);
    }
}
