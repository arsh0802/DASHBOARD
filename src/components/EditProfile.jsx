import React from 'react';

function EditProfile() {
  // Ensure the page container covers the entire viewport
  const pageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    height: '100%', // Ensure it covers the full height of the viewport
    width: '100%', // Ensure it covers the full width of the viewport
    margin: 0,
    padding: 0,
  };

  // Style for the background video
  const videoStyle = {
    position: 'fixed', // Use fixed positioning to cover the entire viewport
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1', // Ensure the video is behind all other content
  };

  // Style for the content container
  const contentContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    margin: 'auto',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    position: 'relative', // Ensure the container is the parent for positioning the content
    zIndex: '1', // Make sure content appears above the video
    background: 'rgba(255, 255, 255, 0.5)', // Slightly transparent background to see the video
  };

  // Styles for the profile picture section
  const sectionStyle = {
    background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center-align content in the profile picture section
  };

  const profilePictureStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: 'rgba(127, 255, 212, 0.7)',
    color: 'black',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    width: '100%',
    textAlign: 'center',
  };

  const accountDetailsStyle = {
    marginLeft: '20px',
    textAlign: 'center',
    flex: 2,
  };

  const formGroupStyle = {
    margin: '20px', // Adjusted margin for spacing between form elements
  };

  const inputStyle = {
    textAlign: 'center',
    width: '100%', // Adjust width relative to container
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginTop: '10px', // Space between input fields
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxSizing: 'border-box', // Include padding and border in width
    fontSize: '0.9rem', // Responsive font size
  };
  

  const saveButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: 'rgba(127, 255, 212, 0.7)',
    color: 'black',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    marginLeft:'20px',
    width: '98%',
    textAlign: 'center',
  };

  return (
    <div style={pageContainerStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src="/back video.mp4" type="video/mp4" />
      </video>

      <div style={contentContainerStyle}>
        <div style={sectionStyle}>
          <div style={profilePictureStyle}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="Profile"
              style={imageStyle}
            />
            <button style={buttonStyle}>Choose Profile Picture</button>
          </div>
        </div>

        <div style={accountDetailsStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Account Details</h3>
          <form>
            <div style={formGroupStyle}>
              <input type="text" placeholder="Enter your username" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <input type="text" placeholder="Enter your first name" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <input type="text" placeholder="Enter your last name" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <input type="text" placeholder="Enter your gender" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <input type="text" placeholder="Enter your location" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <input type="email" placeholder="Enter your email address" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <input type="tel" placeholder="Enter your phone number" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <input type="date" placeholder="Enter your birthdate" style={inputStyle} />
            </div>
            <button type="submit" style={saveButtonStyle}>Save changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
