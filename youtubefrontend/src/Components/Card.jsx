import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 201px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const Texts = styled.div``;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  /* color:${({ theme }) => theme.text}; */
`;

const ChannelName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: black;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Card = () => {
  return (
    <>
      <Link to="/video/test" style={{
        textDecoration: "none",
        color: "inherit"
      }}>
        <Container>
          <Image src="https://images.unsplash.com/photo-1658239828542-daa29a4cd472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
          <Details>
            <ChannelImage src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Texts>
              <Title>Test Video</Title>
              <ChannelName>JAVASCRIPT MASTERY</ChannelName>
              <Info>660,456 views</Info>
            </Texts>
          </Details>
        </Container>
      </Link>
    </>
  );
};

export default Card;
