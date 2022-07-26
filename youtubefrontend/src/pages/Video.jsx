import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
color:${({ theme }) => theme.textSoft}
`;
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text};
`;
const Button = styled.div``;
const Video = () => {
  return (
    <>
      <Container>
        <Content>
          <VideoWrapper>
            <iframe
              width="100%"
              height="720"
              src="https://www.youtube.com/embed/yIaXoop8gl4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </VideoWrapper>
          <Title>Test Video</Title>
          <Details>
            <Info>2,736,364 views Jun 22, 2022</Info>
            <Buttons>
              <Button>button</Button>
              <Button>button</Button>
            </Buttons>
          </Details>
        </Content>
        <Recommendation>recommendation</Recommendation>
      </Container>
    </>
  );
};

export default Video;
