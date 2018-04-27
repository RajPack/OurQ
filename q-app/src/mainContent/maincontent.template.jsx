import React from 'react';

export default function MainContentTemplate () {
    return (
        <div className="maincontent-container">
            <div className="work-exp-title"> 
                <div clas="work-exp-label">Work Experience</div>
                <div class="total-exp">{this.state.totalExp}</div>
            </div>

            {
                this.generateWorkExpList()
            }
        </div>
        );
}