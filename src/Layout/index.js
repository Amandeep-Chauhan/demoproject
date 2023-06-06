import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar';

import {Container} from './styles'

const Layout = () => {
    return (
        <Container>
            <div >
                <NavBar />
            </div>
            <div style={{ paddingInline: '30px'}}>
                <Outlet />
            </div>
        </Container>
    )
} 

export default Layout;