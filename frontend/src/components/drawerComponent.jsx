// DrawerComponent.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function DrawerComponent({ open, onClose }) {
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>

            <div className="h-[auto] justify-center items-center mt-[7rem]">
                <div className=''>
                    <img
                        className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
                        src="https://scontent.fgua2-2.fna.fbcdn.net/v/t39.30808-6/484995234_660763906460123_4060759496937870933_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hcpAd8tzQhwQ7kNvwEDcyEt&_nc_oc=Adm41kHPefu_GIgdI-zr1x8MTZBaS9lL7NA6wVIZB05TkO2kLcefgBCe4-K_kaHZc7mG9BmmFhDANZZsHdfCv3Or&_nc_zt=23&_nc_ht=scontent.fgua2-2.fna&_nc_gid=V_4-Cv3qPMnMT8HnBy4MMA&oh=00_AfE0Auy1fj0kUn5C86fphzI_RS45IaS_qMMkMM1k-EP0RA&oe=681E0DD9"
                        alt="Profile"

                    />
                    <div className="text-center mt-2 text-3xl font-medium">El master</div>
                    <div className="text-center mt-2 font-light text-sm"></div>
                </div>
            </div>

            <List>
                {['Servicios', 'Mecanicos', 'Contactanos'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ marginLeft: '1rem', marginRight: '1rem', marginTop: '0.25rem' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </Box>
    );

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            {DrawerList}
        </Drawer>
    );
}
