import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, useTheme, useMediaQuery } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.4),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    flexGrow: 1, // Ensure the search bar takes up available space
    marginRight: '1.6%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Corrected the interpolation
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const Navbar = ({ open, handleDrawerToggle }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate(); // Hook to navigate

    const handleNotificationClick = () => {
        navigate('/WhatsNew'); // Navigate to the "What's New" page
    };

    return (
        <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Notification Icon (hidden on mobile) */}
                {!isMobile && (
                    <Box
                        sx={{
                            marginTop: '0.11%',
                            backgroundColor: 'rgb(245,245,245,0.45)',
                            borderRadius: '4px',
                            marginLeft: '1%',
                        }}
                    >
                        <IconButton color="inherit" onClick={handleNotificationClick}>
                            <NotificationsIcon />
                        </IconButton>
                    </Box>
                )}

                {/* Search Bar */}
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </Search>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
