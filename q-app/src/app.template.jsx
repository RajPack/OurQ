import React from 'react';
import TopBar from './topbar/topbar';
import SideBar from './sidebar/sidebar';
import MainContent from './mainContent/maincontent';

export function AppTemplate() {
    return (
        <div className = 'app-container'>
            <TopBar />
            <SideBar />
            <MainContent/> 
        </div>
    )
}