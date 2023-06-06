import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { AccessAlarm } from '@mui/icons-material';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { useNavigate } from 'react-router-dom';
import { Links } from './styles'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, fontSize: '24px' }}>
              CouponSphere
          </Typography>
          <Links>
            <AccessAlarm color="primary" sx={{ fontSize: 18 }} />
            <Button color="inherit">Order history</Button>
          </Links>
          <Links onClick={() => navigate('/cart')}>
          <ShoppingCartCheckoutIcon color="primary" sx={{ fontSize: 18 }} />
            <Button color="inherit">My Cart</Button>
          </Links>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;