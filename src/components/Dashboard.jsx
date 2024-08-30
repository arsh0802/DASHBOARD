import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
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
    },
});

const Dashboard = () => {
    const [studentsEnrolledPercentage, setStudentsEnrolledPercentage] = useState(0);
    const [resourcesAccessedPercentage, setResourcesAccessedPercentage] = useState(0);
    const [mostAccessedResources, setMostAccessedResources] = useState([]);

    // Simulate fetching data
    useEffect(() => {
        // Example data fetching logic (replace with your API call)
        const fetchData = async () => {
            // Example fetched data (replace with API response data)
            const fetchedData = {
                studentsEnrolled: 75,
                resourcesAccessed: 45,
                accessedResources: [
                    { name: "Resource 1", count: 120 },
                    { name: "Resource 2", count: 95 },
                    { name: "Resource 3", count: 80 },
                ],
            };

            setStudentsEnrolledPercentage(fetchedData.studentsEnrolled);
            setResourcesAccessedPercentage(fetchedData.resourcesAccessed);
            setMostAccessedResources(fetchedData.accessedResources);
        };

        fetchData();
    }, []);

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
                                            <Typography variant="h6">Quiz Completed</Typography>
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
                                            <Typography variant="h6">Average Quiz Score</Typography>
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
                                        <Typography variant="h6" gutterBottom>
                                            Create Roadmap
                                        </Typography>
                                        <List>
                                            {mostAccessedResources.map((resource, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={resource.name} secondary={`Access Count: ${resource.count}`} />
                                                </ListItem>
                                            ))}
                                        </List>
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
};

export default Dashboard;
