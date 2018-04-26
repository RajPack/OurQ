import React from 'react';

export default function SideBarTemplate() {
    return (
        <div className='sidebar-container'>
            <div className="about-container sidebar-section">
                <div className="section-title">About Me</div>
                <div className="section-content">{this.state.about}</div>
            </div>
            <div className="primary-container sidebar-section">
                <div className="section-title">Primary Skills</div>
                    {this.generateRating()}
            </div>
            <div className="secondary-container sidebar-section">
                <div className="section-title">Secondary Skills</div>
                    {
                        this.state.secondarySkills.map((item)=>{
                            return <div className="secondary-item">{item}</div>
                        })
                    }
            </div>
            <div className="edu-container sidebar-section">
                <div className="section-title">Education</div>

            </div>
        </div>
    )
}