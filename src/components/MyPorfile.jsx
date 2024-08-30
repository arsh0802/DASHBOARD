import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const MyProfile = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleUpdateProfile = () => {
        navigate('/EditProfile'); // Navigate to the EditProfile page
    };

    return (
        <>
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            >
                <source src="/back video.mp4" type="video/mp4" />
            </video>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    minHeight: '75vh',
                    fontFamily: 'Arial, sans-serif',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        maxWidth: '900px',
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '10px',
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        border: '1px solid #ddd',
                    }}
                >
                    {/* Profile Section */}
                    <div
                        style={{
                            flex: 1,
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRight: '1px solid #000', // Change border to black
                        }}
                    >
                        <img
                            src="/avatar.png" // Updated path to the profile image
                            alt="Profile Avatar"
                            style={{
                                width: '150px', // Increased size
                                height: '150px', // Increased size
                                borderRadius: '50%',
                                marginBottom: '20px',
                                marginTop: '30px',
                                border: '3px solid rgb(127, 255, 212)', // Changed border color to match button background
                                objectFit: 'cover',
                            }}
                        />
                        <h2 style={{ marginBottom: '10px', fontSize: '24px' }}>Student</h2>
                        <p style={{ marginBottom: '20px', fontSize: '16px' }}>GLA University</p>
                    </div>

                    {/* Details Section */}
                    <div
                        style={{
                            flex: 2,
                            padding: '20px',
                            borderLeft: '1px solid #000', // Change border to black
                        }}
                    >
                        <div style={{ marginBottom: '20px' }}>
                            {/* Details with underlines */}
                            <div
                                style={{
                                    padding: '10px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    borderBottom: '1px solid #000', // Change underline to black
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 'bold' }}>Name</span>
                                    <span>Student</span>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '10px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    borderBottom: '1px solid #000', // Change underline to black
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 'bold' }}>Email</span>
                                    <span>demostudent@gmail.com</span>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '10px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    borderBottom: '1px solid #000', // Change underline to black
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 'bold' }}>Phone</span>
                                    <span>+91 8273619318</span>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '10px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    borderBottom: '1px solid #000', // Change underline to black
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 'bold' }}>LinkedIn</span>
                                    <span>
                                        <a
                                            href="https://www.linkedin.com/in/divyanshu-khandelwal-dkoder/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: '#0073b1', textDecoration: 'none' }}
                                        >
                                            LinkedIn Profile
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '10px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    borderBottom: '1px solid #000', // Change underline to black
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 'bold' }}>GitHub</span>
                                    <span>
                                        <a
                                            href="https://github.com/Abhi-dr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: '#000', textDecoration: 'none' }}
                                        >
                                            GitHub Profile
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '10px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    borderBottom: '1px solid #000', // Change underline to black
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 'bold' }}>Website</span>
                                    <span>
                                        <a
                                            href="https://divyanshukhandelwal.tech/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: '#1e88e5', textDecoration: 'none' }}
                                        >
                                            Personal Website
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={handleUpdateProfile} // Add click handler
                                style={{
                                    padding: '10px 20px',
                                    marginBottom: '20px',
                                    marginTop:'15px',
                                    border: '2px solid #3333',
                                    borderRadius: '5px',
                                    backgroundColor: 'rgb(127, 255, 212)',
                                    color: '#000',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    width: '100%',
                                }}
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
