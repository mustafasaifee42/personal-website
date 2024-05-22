import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const El = styled.div`
  margin-top: 7.2rem;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/dataViz/COVID/coverImage.jpg");
  height: 50%;
  min-height: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`;

const ContainerEl = styled.div`
  width: 100%;
  max-width: 96rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
`;

const H1 = styled.h1`
  color: var(--white);
  font-size: 4.8rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bold;
  margin: 0;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  color: var(--white);
  font-size: 2.4rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: normal;
  margin: 0;
`;

const Subnote = styled.div`
  margin-top: 2rem;
  color: var(--white);
  font-size: 1.6rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const SectionTwoColumnEl = styled.div`
  padding: 8rem 2rem 0 2rem;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-start;
  justify-content: space-between;
`;

const TopSectionEl = styled.div`
  padding: 8rem 2rem;
  max-width: 96rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2rem;
  line-height: 3rem;
  h3 {
    font-size: 3.6rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-Weight: bold;
    margin: 2rem 0;
  }
`;

const MetaDataColumn = styled.div`
  width: calc(20% - 1.5rem);
  font-size: 1.6rem;
`;

const RoleColumn = styled.div`
  width: calc(20% - 1.5rem);
  font-size: 1.6rem;
`;

const AboutColumn = styled.div`
  width: calc(60% - 4.5rem);
  padding-left: 3rem;
`;

const SideColumnHeadEl = styled.div`
  font-size: 1.8rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-Weight: bold;
  text-transform: uppercase;
  margin: 2rem 0 0 0;
`;

const HeadEl = styled.div`
  font-size: 2.4rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-Weight: bold;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const BodyEl = styled.div`
  font-size: 1.8rem;
  font-family: 'IBM Plex Sans', sans-serif;
  margin: 2rem 0;
  line-height: 3rem;
`;

const RelatedCasesEl = styled.div`
  text-align: left;
  font-size: 2.4rem;
  font-weight: light;
  display: flex;
  justify-content: space-between;
`;

const CardsEl = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  width: calc(50% - 0.1rem);
  &:last-of-type{
    text-align: right;
  }
`;

const ButtonEl = styled.div`
  padding: 1rem 2rem;
  background-color: var(--green);
  text-transform: uppercase;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: bold;
  font-style: normal !important;
`;

const LinkEl = styled.div`
  color: var(--primary);
  padding: 4rem;
  background-color: var(--black-200);
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
`;

const LinkBanner  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url("./img/dataViz/COVID/coverImage.jpg");
  height: 20rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'IBM Plex Sans', sans-serif;
  margin: 8rem auto 8rem auto;
  width: 100%;
`;

const LinkBannerEl = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 128rem;
`;

const IMGContainer = styled.div`
  margin: auto; 
  padding: 0 2rem;
  width: fit-content;
`;

const COVID: React.FunctionComponent<{}> = () => {
    return (
      <El>
        <HeroBannerEl>
          <ContainerEl>
            <H1>COVID-19 Dashboard</H1>
            <H2>COVID-19 data visualisation and dashboard</H2>
            <Subnote><span className="bold">Client</span>: Personal Project</Subnote>
          </ContainerEl>
        </HeroBannerEl>
        <TopSectionEl>
          <MetaDataColumn>
            <SideColumnHeadEl>Client</SideColumnHeadEl>
            <div>Personal Project</div>
            <SideColumnHeadEl>Year</SideColumnHeadEl>
            <div>2019</div>
            <SideColumnHeadEl>My Role</SideColumnHeadEl>
            <div>Data Visualization</div>
            <div>UI Design</div>
            <div>UX Design</div>
            <div>Interaction Design</div>
            <div>Front-End Development</div>
          </MetaDataColumn>
          <RoleColumn>
            <SideColumnHeadEl>Link</SideColumnHeadEl>
            <div><a href='https://covid19.mustafasaifee.dev/' rel="noopener noreferrer" target='_blank'>COVID-19 Dashboard</a></div>
            <SideColumnHeadEl>Tools</SideColumnHeadEl>
            <div>Typescript</div>
            <div>D3.js</div>
            <div>React.js</div>
            <div>Lodash</div>
          </RoleColumn>
          <AboutColumn>
            <SideColumnHeadEl>
              About the Project
            </SideColumnHeadEl>
            <div>
              In an effort to make COVID data more accessible, I developed COVID-19 dashboard, to get transparent, accurate and real-time COVID information.
            </div>
          </AboutColumn>
        </TopSectionEl>
        <IMGContainer>
          <img src='./img/dataViz/COVID/img2.png' alt="Access all data info" width="100%" style={{maxWidth: '960px'}} />
        </IMGContainer>
        <SectionTwoColumnEl>
          <HeadEl>
            Key features
          </HeadEl>
          <BodyEl>
            Data for the dashboard is complex but but it need to be accessed by almost anyone, thus it is important to keep the design simple and make it intuitively interactive for informative analytics.
          </BodyEl>
        </SectionTwoColumnEl>
        <img src='./img/dataViz/COVID/img1.jpg' alt="Access all data info" width="100%" />
        <LinkBannerEl>
          <LinkBanner>
            <a href='https://covid19.mustafasaifee.dev/' rel="noopener noreferrer" target='_blank'>
              <ButtonEl>See Interactive Version</ButtonEl>
            </a>
          </LinkBanner>
        </LinkBannerEl>
        <RelatedCasesEl>
            <CardsEl>
              <Link to={'/election-results'}>
                <LinkEl>
                  ← Indian Election Result
                </LinkEl>
              </Link>
            </CardsEl>
            <CardsEl>
              <Link to={'/undp-access-all-data'}>
                <LinkEl>
                  UNDP Access All Data →
                </LinkEl>
              </Link>
            </CardsEl>
        </RelatedCasesEl>
      </El>
    );
};

export default COVID;
