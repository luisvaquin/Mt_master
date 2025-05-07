import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from './drawerComponent';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* AppBar fijo */}
            <AppBar position="fixed" sx={{
                backgroundColor: '#F5F5F5',
                color: '#000000',
                boxShadow: 2, // sombra sutil
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 6 }}>
                        Opciones
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* Espaciador para compensar la altura del AppBar fijo */}
            <Toolbar />

            {/* Drawer conectado al estado del Navbar */}
            <DrawerComponent open={drawerOpen} onClose={handleDrawerClose} />
        </Box>
    );
}
