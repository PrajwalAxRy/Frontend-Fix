import React from "react";
import { useSelector } from 'react-redux';

import burgerMenu from '../../assets/burgerMenu.png'
import historyIcon from '../../assets/history.png'
import stackIcon from '../../assets/stack.png'
import gitIcon from '../../assets/gitIcon.png'
import profileImage from '../../assets/ProfileImg.png'

import "./Sidebar.css"; 

function Sidebar() {
    const database = useSelector(state => state.database);
    const isDatabaseMocked = database.isDatabaseMocked;
    console.log("first", isDatabaseMocked)

    return (
        <div>
            <div className="sidebar flex flex-col items-center gap-9 pt-8 pl-2">
                <img src={burgerMenu} className="h-4 cursor-pointer hover:opacity-70" alt="This is the icon for burger menu" />
                <img src={historyIcon} className="h-6 cursor-pointer hover:opacity-70" alt="This is the icon for History menu" />
                <img src={stackIcon} className="h-6 cursor-pointer hover:opacity-70" alt="This is the icon for Stack Menu" />
                <img src={gitIcon} className="h-6 cursor-pointer hover:opacity-70" alt="Github Icon" />
                <div className="flex-grow"></div>
                <img src={profileImage} alt="Profile display" />
            </div>
        </div>

        
    );
}

export default Sidebar;
