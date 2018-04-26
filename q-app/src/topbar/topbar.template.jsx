import React from 'react';

export function TopBarTemplate () {
    return (
        <div className='top-bar-container'>
           { this.state.showTitle && <div>{this.state.title}</div> }
        </div>
    )
}
