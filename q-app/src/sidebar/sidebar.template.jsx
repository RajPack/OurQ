import React from 'react';

export default function SideBarTemplate() {
    return (
        <div className='sidebar-container'>
            <div className="about-container sidebar-section">
                <div className="section-title">About Me</div>
                <div className="section-content about-content">{this.state.about}</div>
            </div>
            <div className="primary-container sidebar-section">
                <div className="section-title">Primary Skills</div>
                    {this.generateRating()}
            </div>
            <div className="secondary-container sidebar-section">
                <div className="section-title">Technologies</div>
                    {
                        this.state.secondarySkills.map((item, index)=>{
                            return <div className="secondary-item" key={index}>{item}</div>
                        })
                    }
            </div>
            <div className="edu-container sidebar-section">
                <div className="section-title">Education</div>
                    <div className="edu-content">{this.state.education}</div>
            </div>
        </div>
    )
}