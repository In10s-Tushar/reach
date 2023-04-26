import React from 'react';
import axios from 'axios';

export const SideNavbarData = () => {
    return async ()=>{
        axios.get('http://localhost:3000/navbar').then(res => 
        {
            console.log('SideNavbarData', res);
        });
    }
}