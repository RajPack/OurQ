import React, {Component} from 'react';
import './topbar.css'
import { TopBarTemplate } from './topbar.template';


export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName : "Rajarajan Packianathan",
            title : "Front End UI Specialist",
            mobile: "+(91) 897-196-8322",
            email: "letsthinkbetter@gmail.com",
            dob: "01-May-1989",
            place: "Bengaluru",
            profilepath: "../assets/images/profile.jpg"
        }
    }

    render(){
        return TopBarTemplate.call(this);
    }
}