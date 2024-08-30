import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useTheme, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import FeedbackIcon from '@mui/icons-material/Feedback';

const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* Menu Button for Mobile */}
            {isMobile && (
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    style={{ position: 'absolute', top: 16, left: 16, zIndex: 1300 }}
                >
                    {open ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            )}

            {/* Sidebar Drawer */}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? open : true}
                onClose={isMobile ? handleDrawerToggle : undefined}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { 
                        width: 240, 
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(245, 245, 245, 0.5)',
                        backdropFilter: 'blur(4px)',  // Adding blur to the background
                        overflowX: 'hidden', // Prevent horizontal scroll
                    },
                }}
            >
                <div style={{ textAlign: 'center', padding: '10px' }}>
                    <img
                        src="/LearnMitra__1_-removebg-preview.png"
                        alt="Logo"
                        style={{ 
                            width: '100%', 
                            maxWidth: '180px', 
                            height: 'auto',
                            filter: 'brightness(1.65)' // Increase brightness of the logo
                        }}
                    />
                </div>
                <List>
                    {[
                        { text: 'My Dashboard', icon: <DashboardIcon /> },
                        { text: 'My Roadmaps', icon: <LibraryBooksIcon /> },
                        { text: 'Quizes', icon: <MapIcon /> },
                        { text: "What's New", icon: <NewReleasesIcon /> },
                        { text: 'Feedback', icon: <FeedbackIcon /> },
                        { text: 'My Profile', icon: <PersonIcon /> },
                        { text: 'Logout', icon: <ExitToAppIcon /> }
                    ].map((item, index) => (
                        <ListItem 
                            button 
                            key={index} 
                            sx={{
                                padding:2,
                                borderBottom: '0.5px solid rgb(211,211,211)', // Add thin line between items
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', // Add shadow to items
                                transition: 'all 0.3s ease', 
                                '&:hover': {
                                    backgroundColor: '#AFDBF5',
                                    borderRadius: '20px', // Make the hover effect slightly oval
                                    transform: 'scale(1.05)', // Zoom in on hover
                                },
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} primaryTypographyProps={{ style: { fontSize: '1.15rem' } }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
