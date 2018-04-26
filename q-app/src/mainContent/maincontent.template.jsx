import React from 'react';

export default function MainContentTemplate () {
    return (
        <div className="maincontent-container">
            <div className="work-exp-title">Work Experience</div>
            {
                this.generateWorkExpList()
            }
        </div>
        );
}