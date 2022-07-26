import React from "react";
import styled from "styled-components";
import Logo from "./youtube-logo-png-2069.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
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
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid rgb(62, 166, 255);
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color:#aaaaaa;
`

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" style={{
            textDecoration: "none",
            color: "inherit"
          }}>
          <LogoContaner>
            <Img src={Logo} alt="logo" />
            YOUTUBE
          </LogoContaner>
          </Link>
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
          <Item>
            <VideoLibraryOutlinedIcon />
            LIBRARY
          </Item>
          <Item>
            <HistoryIcon />
            HISTORY
          </Item>
          <Hr />
          <Login>
            Sign in to like videos ,comment, subscribe
            <Button>
              {" "}
              <AccountCircleOutlinedIcon /> Sign in
            </Button>
          </Login>
          <Title>More from YouTube</Title>
          <Item>
            <LibraryMusicOutlinedIcon />
            MUSIC
          </Item>
          <Item onClick={()=>setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon  />
          Light Mode
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            SPORTS
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            SPORTS
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            SPORTS
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            SPORTS
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            SPORTS
          </Item>
          <Hr />
          <Item>
            <SportsBasketballOutlinedIcon />
            SPORTS
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            SPORTS
          </Item>
        
          <Item>
            <SportsBasketballOutlinedIcon />
            SPORTS
          </Item>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
