import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative; /* To ensure the video is positioned correctly */
`;

const BackgroundVideo = styled.video`
  position: fixed; /* Fixed positioning to cover the entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ContentContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  z-index: 2;
  margin-top: 20px;
`;

const WhatsNewHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 30px;
    margin-bottom: 10px;
    color: #333;
  }
`;

const AnnouncementCard = styled.div`
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }

  .date {
    font-size: 14px;
    color: #777;
    text-align: right;
  }

  .icon {
    font-size: 16px;
    margin-left: 5px;
  }
`;

const WhatsNew = () => {
  return (
    <PageContainer>
      <BackgroundVideo autoPlay loop muted>
        <source src="/back video.mp4" type="video/mp4" />
      </BackgroundVideo>
      <ContentContainer>
        <WhatsNewHeader>
          <h1>What's New</h1>
        </WhatsNewHeader>
        <AnnouncementCard>
          <h2>Subject: MOST IMPORTANT:</h2>
          <p>
            Please USE EARPHONES in the Backend sessions.  
            <span className="icon">🔥</span>
          </p>
          <p className="date">June 27, 2024, 6:25 p.m.</p>
        </AnnouncementCard>
        <AnnouncementCard>
          <h2>Subject: IMPORTANT:</h2>
          <p>
            Assignments miss mt kro. 
            <span className="icon">😇</span>
          </p>
          <p className="date">June 24, 2024, 9:13 p.m.</p>
        </AnnouncementCard>
        <AnnouncementCard>
          <h2>Subject: Imp 
            <span className="icon">🔥</span>:</h2>
          <p>
            AI Solver is in the house Guyzzz.... Check it out and *FEEDBACK* is important.
          </p>
          <p className="date">June 24, 2024, 9:13 p.m.</p>
        </AnnouncementCard>
      </ContentContainer>
    </PageContainer>
  );
};

export default WhatsNew;
