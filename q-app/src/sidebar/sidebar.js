import React from 'react';
import './sidebar.css';
import SideBarTemplate from './sidebar.template';
import { data } from '../data/data'

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: data.about,
            primarySkills: data.primarySkills,
            secondarySkills: data.secondarySkills,
            education: data.education
        }
    }
    generateRating() {
        return this.state.primarySkills.map((ratingObj, index) => {
            let stars = ratingObj.rating;
            return (
                <div className="rating-line" key={index}>
                    <div className="rating-title">{ratingObj.title}</div>
                    <div className="rating-stars">
                        {
                            this.genStars(stars)
                        }
                    </div>
                </div>
            );
        });
    }
    genStars(stars) {
        const starsArr = []
        for (var i = 0; i < 5; i++) {
            var cls = "fa rating-star ";
            cls += stars > i ? (stars - i >= 1 ? "fa-star" : "fa-star-half-o") : "fa-star-o";
            starsArr.push(
                <span className={cls} key={i}></span>
            )
        }
        return starsArr;
    }
    render() {
        return SideBarTemplate.call(this);
    }
}