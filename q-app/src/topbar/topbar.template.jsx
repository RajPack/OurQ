import React from 'react';

export function TopBarTemplate() {
    return (
        <div className='top-bar-container'>
            <div className='name-section'>
                <div className="name">{this.state.fullName}</div>
                <div className="title">{this.state.title}</div>
                <div className="details-section">
                    <div className="mobile"><span className= "fa fa-mobile" > </span>{this.state.mobile}</div>
                    <div className="email"> <span className= "fa fa-envelope" > </span>{this.state.email}</div>
                    <div className="dob"><span className= "fa fa-birthday-cake" > </span>{this.state.dob}</div>
                    <div className="place"><span className= "fa fa-map-marker" > </span>{this.state.place}</div>
                </div>
            </div>
            <div className="profile-image-section">
                <img src={this.state.profilepath} alt="My pic"/>
            </div>
        </div>
    )
}
