import React from "react";
import styled from "styled-components";
import Logo from "./youtube-logo-png-2069.png";

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
`
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
            HOME
          </Item>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
