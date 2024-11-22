import React, { useState } from 'react';
import { Link } from "react-scroll";
import './Nav.css';
import {tabs} from '../../Source';
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from "react-icons/fa";


const Navbar: React.FC = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <nav className="navbar">
            <div>
                <div className='name'>
                    <label className='label'>Sachith Rangana</label>
                </div>

            <div className={`tabs-group sidebar ${openSidebar ? 'visible':''}`}>
                    
                    {openSidebar ? <div className='overlay' onClick={()=> setOpenSidebar(!openSidebar)}/> : " "}
                    
                    <div className={`cancel-btn d-flex justify-content-center`}
                    onClick={()=>setOpenSidebar(!openSidebar)}
                    >
                        <FaTimes />
                    </div>
                    {
                        tabs.map((tab,index)=>(
                            <Link 
                            to={tab.id}
                            className='tab link-underline-dark link-underline-opacity-0'
                            activeClass='active'
                            smooth={true}
                            onClick={()=> setOpenSidebar(false)}
                            spy={true}
                            key={index}
                            >
                                {tab.name}
                            </Link>
                        ))
                    }
                    
                </div>
                    <div className='menu'>
                        <div className='icon-wrapper menu-btn'
                        onClick={()=>setOpenSidebar(!openSidebar)}>
                            <HiMenu />
                        </div>
                        
                    </div>
            </div>
        </nav>
    )
}
export default Navbar;