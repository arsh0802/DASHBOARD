import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MyRoadmaps from './components/MyRoadmaps';
import MyProfile from './components/MyPorfile';
import Feedback from './components/Feedback';
import Quizes from './components/Quizes';
import WhatsNew from './components/WhatsNew';
import EditProfile from './components/EditProfile';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* Navbar */}
          <Navbar />

          {/* Content Routes */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-roadmaps" element={<MyRoadmaps />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/quizes" element={<Quizes />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/WhatsNew' element={<WhatsNew />} />
            <Route path='/EditProfile' element={<EditProfile/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;