import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactGA from "react-ga";
import styled, { createGlobalStyle } from "styled-components";
import ScrollToTop from 'react-router-scroll-top';
import Home from "./Home";
import About from "./About";
import FortumApollo from "./Projects/FortumApollo";
import SocialMedia from "./SocialMedia";
import VROhjus from "./Projects/VROhjus";
import OmaFingrid from "./Projects/OmaFingrid";
import UNDPAccessAllData from "./Projects/UNDPAccessAllData";
import GenderedToponyms from "./Projects/GenderedToponyms";
import AirqDataPortal from "./Projects/AirQDataPortal";
import ElectionResults from "./Projects/IndianElection";
import COVID from "./Projects/COVID";
import UNDPDataPortal from "./Projects/UNDPDataPortal";

ReactGA.initialize("UA-32895936-1");
ReactGA.set({ anonymizeIp: true });
ReactGA.pageview("/");


const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --magenta: #c41d7f;
    --blue:#190c4f;
    --purple:#531dab;
    --green:#08979c;
    --primary:#202124;
    --bgColor:#fafbfc;
    --seperatorColor:#1D3557;
    --black-100: #FAFAFA;
    --black-200: #f5f9fe;
    --black-300: #EDEFF0;
    --black-400: #E9ECF6;
    --black-450: #DDD;
    --black-500: #A9B1B7;
    --black-550: #666666;
    --black-600: #212121;
    --black-700: #000000;
    --blue-very-light: #F2F7FF;
    --shadow:0px 10px 30px -10px rgb(9 105 250 / 15%);
    --shadow-bottom: 0 10px 13px -3px rgb(9 105 250 / 5%);
    --shadow-top: 0 -10px 13px -3px rgb(9 105 250 / 15%);
    --shadow-right: 10px 0px 13px -3px rgb(9 105 250 / 5%);
    --shadow-left: -10px 0px 13px -3px rgb(9 105 250 / 15%);
  }
  
  html { 
    font-size: 62.5%; 
  }

  body {
    font-family: "IBM Plex Serif", serif;
    font-size: 1.6rem;
    color: var(--primary);
    background-color: #fff;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--blue);
    font-style: italic;
  }

  h1 {
    color: var(--blue);
    font-size: 3.2rem;
    font-family: 'Baloo Tamma 2', sans-serif;
    font-weight: 700;
    margin: 0;    
    @media (max-width: 760px) {
      font-size: 2.4rem;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    font-family: "IBM Plex Sans", sans-serif;
    margin-bottom: 1rem;
  }

  h4 {
    margin: 0;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-family: "IBM Plex Sans", sans-serif;
  }

  a:hover {
    font-weight: bold;
  }

  .bold{
    font-weight: 700;
  }
  
  .italics{
    font-style: italic;
  }

  .container{
    max-width: 96rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem;
  }

`;

const FooterEl = styled.footer`
  border-top: 1px solid var(--black-400);
  background-color: var(--bgColor);
  padding: 3rem 2rem 2rem 2rem;
  text-align: center;
  bottom: 0;
  h2 {
    font-size: 3.6rem;
    font-family: 'Baloo Tamma 2', sans-serif;
    color: var(--primary);
    margin: 0;
  };
`;

const HeaderEl = styled.header`
  box-shadow: var(--shadow-bottom);
  background-color: var(--bgColor);
  top:0;
  left:0;
  right:0;
  z-index: 10;
  position:fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  font-size: 1.4rem;  
  font-family: "IBM Plex Sans", sans-serif;
  a {
    font-style: normal;
  }
  h1 {
    font-size: 3rem;
    margin: 1.5rem 2rem 0.5rem 2rem;
    color: var(--blue);
    font-family: 'Baloo Tamma 2', sans-serif;
  }
`;


const NavItem = styled.div`
  font-size: 1.6rem;
  padding: 2rem;
  font-weight: normal;
  color:var(--primary);
  &:hover{
    font-weight: bold;
  }
`;

const FooterBody = styled.div`
  border-top: 1px solid var(--black-500);
  padding-top: 2rem;
  font-size: 1.4rem;
  font-family: "IBM Plex Sans", sans-serif;
  color: var(--black-500);
  text-align: left;
`;

const FlexDiv = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <HeaderEl>
          <Link to={`/`}>
            <h1>mustafa saifee</h1>
          </Link>
          <FlexDiv>
            <a
              href="./Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <NavItem>Resume</NavItem>
            </a>
            <Link to={`/about`}>
              <NavItem>About</NavItem>
            </Link>
          </FlexDiv>
        </HeaderEl>
        <Route
          path={`/`}
          exact
          render={() => {
            return <Home />;
          }}
        />
        <Route
          path={`/about`}
          exact
          render={() => {
            return <About />;
          }}
        />
        <Route
          path={`/fortum-apollo`}
          exact
          render={() => {
            return <FortumApollo />;
          }}
        />
        <Route
          path={`/vr-ohjus`}
          exact
          render={() => {
            return <VROhjus />;
          }}
        />
        <Route
          path={`/oma-fingrid`}
          exact
          render={() => {
            return <OmaFingrid />;
          }}
        />
        <Route
          path={`/airq-data-portal`}
          exact
          render={() => {
            return <AirqDataPortal />;
          }}
        />
        <Route
          path={`/undp-access-all-data`}
          exact
          render={() => {
            return <UNDPAccessAllData />;
          }}
        />
        <Route
          path={`/election-results`}
          exact
          render={() => {
            return <ElectionResults />;
          }}
        />
        <Route
          path={`/covid-dashboard`}
          exact
          render={() => {
            return <COVID />;
          }}
        />
        <Route
          path={`/gendered-toponyms`}
          exact
          render={() => {
            return <GenderedToponyms />;
          }}
        />
        <Route
          path={`/undp-data-portal`}
          exact
          render={() => {
            return <UNDPDataPortal />;
          }}
        />
        <FooterEl>
          <div className="container">
            <h2>Let's have a chat!</h2>
            <SocialMedia align="center" forAbout={false} />
            <br />
            <FooterBody>
              <span className="bold">PRIVACY POLICY</span> 
              <br />
              <br />
              This website does not save any information about you. We do not
              directly use cookies or other tracking technologies. We do, however,
              use Google Analytics for mere statistical reasons. It is possible that
              Google Analytics sets cookies or uses other tracking technologies, but
              this data is not directly accessible by us.
              <br />
              <br />
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  className="italics"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                and{" "}
                <a
                  href="https://www.flaticon.com/authors/pixel-perfect"
                  className="italics"
                  title="Pixel perfect"
                >
                  Pixel perfect
                </a>{" "}
                from{" "}
                <a
                  href="https://www.flaticon.com/"
                  className="italics"
                  title="Flaticon"
                >
                  www.flaticon.com
                </a>
              </div>
            </FooterBody>
          </div>
        </FooterEl>
      </Router>
    </>
  );
}

export default App;
