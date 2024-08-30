import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PercentageCircle = ({ value }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <CircularProgress variant="determinate" value={value} size={80} />
            <Typography variant="h6" color="textPrimary">
                {value}%
            </Typography>
        </Box>
    );
};

export default PercentageCircle;
