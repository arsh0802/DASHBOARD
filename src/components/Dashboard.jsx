import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PercentageCircle from './PercentageCircle'; // Adjust the path as needed

// Create a custom theme with Georgia font
const theme = createTheme({
    typography: {
        fontFamily: 'Georgia, serif',
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Decrease background opacity
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Georgia, serif',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Remove uppercase transform
                },
            },
        },
    },
});

const Dashboard = () => {
    const [studentsEnrolledPercentage, setStudentsEnrolledPercentage] = useState(0);
    const [resourcesAccessedPercentage, setResourcesAccessedPercentage] = useState(0);

    // Simulate fetching data
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = {
                studentsEnrolled: 75,
                resourcesAccessed: 45,
            };

            setStudentsEnrolledPercentage(fetchedData.studentsEnrolled);
            setResourcesAccessedPercentage(fetchedData.resourcesAccessed);
        };

        fetchData();
    }, []);

    const batchData = [
        { no: 1, name: 'Class 7th JEE-UG', category: 'CBSE- Academics', duration: '1 Year' },
        { no: 2, name: 'Class 8th JEE-UG', category: 'JEE Entrance', duration: '1 Year' },
        { no: 3, name: 'Class 9th JEE-UG', category: 'JEE Entrance', duration: '1 Year' },
        { no: 4, name: 'Class 10th JEE-UG', category: 'JEE Entrance', duration: '1 Year' },
        { no: 5, name: 'Class 11th JEE-UG', category: 'JEE Entrance', duration: '1 Year' }
    ];

    return (
        <ThemeProvider theme={theme}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <video autoPlay loop muted style={styles.video}>
                    <source src="/back video.mp4" type="video/mp4" />
                </video>
                <div style={styles.overlay}>
                    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                                        <Box flex={1}>
                                            <Typography variant="h6">Tasks Completed</Typography>
                                        </Box>
                                        <Box>
                                            <PercentageCircle value={studentsEnrolledPercentage} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                                        <Box flex={1}>
                                            <Typography variant="h6">Overall Progress</Typography>
                                        </Box>
                                        <Box>
                                            <PercentageCircle value={resourcesAccessedPercentage} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                                        <Box flex={1}>
                                            <Typography variant="h6">Average Task Scores</Typography>
                                        </Box>
                                        <Box>
                                            <PercentageCircle value={studentsEnrolledPercentage} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom style={styles.heading}>
                                            My Batches
                                        </Typography>
                                        <Grid container style={styles.tableHeaderContainer}>
                                            <Grid item xs={1}>
                                                <Typography variant="body1" style={styles.tableHeader}>
                                                    S No.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="body1" style={styles.tableHeader}>
                                                    Name
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="body1" style={styles.tableHeader}>
                                                    Category
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography variant="body1" style={styles.tableHeader}>
                                                    Action
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="body1" style={styles.tableHeader}>
                                                    Duration
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        {batchData.map((batch, index) => (
                                            <Grid container key={index} alignItems="center" style={styles.tableRow}>
                                                <Grid item xs={1}>
                                                    <Typography variant="body1" style={styles.tableContent}>
                                                        {batch.no}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="body1" style={styles.tableContent}>
                                                        {batch.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="body1" style={styles.tableContent}>
                                                        {batch.category}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2} style={styles.actionColumn}>
                                                    <Button variant="contained" style={styles.resumeButton}>
                                                        Resume
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="body1" style={styles.tableContent}>
                                                        {batch.duration}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </ThemeProvider>
    );
};

const styles = {
    video: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
    },
    overlay: {
        position: 'relative',
        zIndex: 1,
        color: '#fff',
    },
    tableHeaderContainer: {
        marginBottom: '16px', // Maintain the height of the table header section
    },
    tableHeader: {
        fontWeight: 'bold',
        padding: '8px 0',
        margin: '0',
        textAlign: 'center',
    },
    tableRow: {
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
    },
    tableContent: {
        padding: '4px 0', // Reduced padding
        textAlign: 'center',
    },
    actionColumn: {
        textAlign: 'center',
    },
    resumeButton: {
        backgroundColor: '#72B6F9',
        color: '#fff',
        fontSize: '0.875rem', // Adjust button font size
        padding: '4px 8px', // Adjust button padding
    },
    heading: {
        textAlign: 'center',
        marginBottom: '16px', // Space below the heading
    },
    '@media (max-width: 600px)': {
        tableHeader: {
            fontSize: '0.8rem', // Smaller font size for mobile view
        },
        tableContent: {
            fontSize: '0.8rem', // Smaller font size for mobile view
        },
        resumeButton: {
            fontSize: '0.75rem', // Smaller font size for button on mobile
            padding: '2px 6px', // Smaller padding for button on mobile
        },
    },
};

export default Dashboard;
