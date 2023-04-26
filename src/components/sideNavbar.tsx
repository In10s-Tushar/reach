import React from 'react';
import axios from 'axios';
import { SideNavbarData } from '../store/services/sideNavbarData';

const SideNavbar = () => {
    axios.get('http://localhost:3000/navbar').then(res => 
        {
            console.log('SideNavbarData', res);
        });
    return(
        <React.Fragment>
            <div className='sidenavbar-main position-relative'>
                SideNavbar
            </div>
        </React.Fragment>
    )
}

export default SideNavbar;