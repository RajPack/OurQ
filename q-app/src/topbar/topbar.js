import React, {Component} from 'react';
import './topbar.css'
import { TopBarTemplate } from './topbar.template';

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Senthil sleepy head",
            showTitle: false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                showTitle: true
            });
        }, 10000);
    }
    componentWillUnmount(){

    }
    render(){
        return TopBarTemplate.call(this);
    }
}