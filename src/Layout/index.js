import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
             <div>
                 header
            </div>
            <div style={{
                width: '100%',
                height: '400px',
                backgroundColor: 'red',
            }}>
                <Outlet />
            </div>
        </div>
    )
} 

export default Layout;