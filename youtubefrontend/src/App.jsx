import React from "react";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: #f3eaea;
`;
const Wrapper = styled.div`
  /* padding: 22px; */
`;

const App = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Router>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="video">
                      <Route path=":id" element={<Video />} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
