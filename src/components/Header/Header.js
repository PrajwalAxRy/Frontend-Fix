import React, { useState } from 'react';
import './Header.css'; 
import SideModal from '../SideModal/SideModal';
import { Menu } from 'react-feather';

import logo from '../../assets/logo.png'

function Header() {

    const [isModalOpen, setModalOpen] = useState(false); 

    const toggleModal = () => setModalOpen(!isModalOpen); 

    return (
        <>
            <header className="header flex justify-between">
                <div className='flex items-center gap-3 pt-3 text-lg'>
                    <img src={logo} alt="This is the logo of the comapny" className='h-6' />
                    <h3 className='heading text-xl pl-4'>Configure Flows</h3>
                </div>
                
                <button onClick={toggleModal} className="cursor-pointer hover:opacity-65 pr-3 pt-3">
                    <Menu /> 
                </button>
            </header>

            <SideModal isOpen={isModalOpen} toggleModal={toggleModal} />

        </>
    );
}

export default Header; 
