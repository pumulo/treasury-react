import React from "react";
import {
    Link,
    NavLink
} from 'react-router-dom';
import {
    FaBars,
    FaStar,
    FaUpload,
    FaQuestionCircle,
    FaComments,
    FaWrench,
    FaSignOutAlt,
    FaTable
} from 'react-icons/fa';
import icon from '../../assets/images/bofa.jpeg';

const Navbar = () => {
    const links = [
        {name: 'Service Dashboard', id: 'serviceDashboardNavId', link: '/service_dashboard', icon: <FaWrench></FaWrench>},
        {name: 'Chat', id: 'chatNavId', link: '/chat', icon: <FaComments></FaComments>},
        {name: 'Document Upload', id: 'docUploadNavId', link: '/uploads/new', icon: <FaUpload></FaUpload>},
        {name: 'Reports', id: 'reportsNavId', link: '/reports', icon: <FaTable></FaTable>},
        {name: 'Help', id: 'helpNavId', link: '/help', icon: <FaQuestionCircle></FaQuestionCircle>},
        {name: 'Logout', id: 'logoutNavId', link: '/', icon: <FaSignOutAlt></FaSignOutAlt>},
    ]

    return (
        <div className="shadow-md w-full top-0 left-0 bg-white">
            <div className="md:px-10 py-1 px-3 md:flex justify-between items-center">
                {/* logo and title here */}
                <Link to='/'>
                    <div className="flex text-2x1 cursor-pointer items-baseline gap-2">
                        <img src={icon} alt="Home" className='w-100 h-10'></img>
                        <span className="font-bold text-4xl text-bofa ">
                            CashPro
                        </span> 
                    </div>
                    <div className="flex flex-row text-2x1 cursor-pointer items-baseline gap-6">
                        
                        <NavLink
                            to='/'
                            id='homeNavLink'
                        >
                            <div className="flex justify-between cursor-pointer items-center gap-2"><FaBars></FaBars> Home</div>
                        </NavLink>
                        <NavLink
                            to='/favorites'
                            id='favoriteNavLink'
                        >
                        <div className="flex justify-between cursor-pointer items-center gap-2"><FaStar></FaStar> Favorites</div>
                            
                        </NavLink>
                    </div>
                </Link>

                {/* nav links here */}
                <div className="flex flex-col md:px-10 py-2 px-7 md:flex ">
                    <div className="text-base text-bofa-light">
                        Last Login: February 7, 2024 9:24 AM EST <br />
                        UserId: pumulo.sikaneta@pega.com <br />
                    </div>
                    <div className="flex text-2xl cursor-pointer items-baseline gap-2 ">
                        <ul className='md:flex md-items-center text-bofa'>
                            {
                                links.map(
                                    link => (
                                        <li className='font-semibold my-7 md:my-0 md:mr-8 md:mt-2 cursor-pointer' key={link.id}>
                                            <NavLink
                                                to={link.link}
                                                id={link.id}
                                                title={link.name}
                                                className='cursor-pointer'
                                            >
                                                {link.icon}
                                            </NavLink>
                                        </li>
                                    )
                                )
                            }  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;