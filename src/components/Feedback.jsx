import React, { useState } from 'react';
import styled from 'styled-components';

// Background video URL
const backgroundVideoUrl = '/back video.mp4'; // Adjust the path if needed

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: hidden;
  margin: 0; /* Ensure no extra margin */
  padding: 0; /* Ensure no extra padding */
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const FeedbackContainer = styled.div`
  width: 90%;
  max-width: 800px; /* Increased max-width */
  margin: 40px auto 0; /* Set margin top, auto for centering horizontally */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7); /* White with slight transparency */
  border-radius: 8px;
  z-index: 2;
  height: auto; /* Adjust height to fit content */
  box-sizing: border-box; /* Include padding in height calculations */
`;

const FeedbackHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    font-size: 17px;
    color: #555;
  }
`;

const FeedbackForm = styled.div`
  .form-group {
    margin-bottom: 20px; /* Increased margin-bottom */
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input,
  .form-group textarea {
    width: 97%; /* Full width */
    padding: 10px; /* Increased padding */
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  /* Placeholder styles */
  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: rgba(0, 0, 0, 0.4); /* Light grey color for placeholders */
  }

  .form-group textarea {
    resize: vertical;
    min-height: 150px; /* Increased min-height */
  }

  button {
    display: block;
    width: 100%;
    padding: 12px; /* Increased padding */
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px; /* Increased font size */

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Feedback = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, subject, feedback });
  };

  return (
    <PageContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src={backgroundVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <FeedbackContainer>
        <FeedbackHeader>
          <h1>Feedback</h1>
          <p>Your feedback matters to us</p>
        </FeedbackHeader>
        <FeedbackForm>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject"></label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback"></label>
              <textarea
                id="feedback"
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FeedbackForm>
      </FeedbackContainer>
    </PageContainer>
  );
};

export default Feedback;

