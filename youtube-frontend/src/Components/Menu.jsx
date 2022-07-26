import React from "react";
import styled from "styled-components";
import Logo from "./youtube-logo-png-2069.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

const Container = styled.div`
  flex: 1;
  background-color: black;
  height: 100vh;
  color: white;
  font-size: 14px;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const LogoContaner = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  font-weight: bold;
  margin-bottom: 25px;
`; 
   
const Img = styled.img`
  height: 40px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid white;
`;
const Menu = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <LogoContaner>
            <Img src={Logo} alt="logo" />
            YOUTUBE
          </LogoContaner>
          <Item>
            <HomeIcon />
            HOME
          </Item>
          <Item>
            <ExploreOutlinedIcon />
            EXPLORE
          </Item>
          <Item>
            <SubscriptionsOutlinedIcon />
            SUBSCRIPTIONS
          </Item>
          {/* <Item>
            <VideoLibraryOutlinedIcon />
            VIDEO LIBRARY
          </Item> */}
          <Hr />
        </Wrapper>
      </Container>  
      
    </>
  );
};

export default Menu;
