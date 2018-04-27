import React from 'react';
import MainContentTemplate from './maincontent.template';
import './maincontent.css';
import {data} from '../data/data';

export default class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            workExp : data.workExperience
        }
    }
    generateWorkExpList () {

        const list = this.state.workExp.map((work, index)=>{
            const item = 
           ( <div className="work-exp-item" key={index}>
                <div className="job-title">{work.role}</div>
                <div className="logo-container"><img src={work.logo}></img></div>
                <div className="company-title">{work.company}</div>
                <div className="period">{work.period}</div>
                <div className="work-content">{work.synopsis}</div>
            </div>
           )
           return item;
        })
        return list;
    }
    render(){
        return MainContentTemplate.call(this);
    }
}
