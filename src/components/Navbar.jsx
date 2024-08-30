import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, useTheme, useMediaQuery } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.4),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    flexGrow: 1, // Ensure the search bar takes up available space
    marginRight:'1.6%',
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const Navbar = ({ open, handleDrawerToggle }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Menu Button for Mobile */}
                {isMobile && (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        {open ? <MenuIcon /> : <MenuIcon />}
                    </IconButton>
                )}

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
                        <IconButton color="inherit">
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
