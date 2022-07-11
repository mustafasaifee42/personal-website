import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const El = styled.div`
  margin-top: 7.2rem;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/dataViz/gt/coverImage.jpg");
  height: 50%;
  min-height: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`;

const LinkBanner  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("./img/dataViz/gt/linkImage.jpg");
  height: 20rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'IBM Plex Sans', sans-serif;
  margin: 8rem auto;
  width: 100%;
  max-width: 96rem;
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

const ButtonEl = styled.div`
  padding: 1rem 2rem;
  background-color: var(--green);
  text-transform: uppercase;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: bold;
  font-style: normal !important;
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

const LinkEl = styled.div`
  color: var(--primary);
  padding: 4rem;
  background-color: var(--black-200);
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
`;

const IMGContainer = styled.div`
  margin: auto; 
  padding: 0 2rem;
  width: fit-content;
`;

const LinkBannerEl = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 96rem;
`;

const GenderedToponyms: React.FunctionComponent<{}> = () => {
    return (
      <El>
        <HeroBannerEl>
          <ContainerEl>
            <H1>Gendered Toponyms</H1>
            <H2>Mapping gender imbalance in city street names.</H2>
            <Subnote><span className="bold">Client</span>: Personal Project</Subnote>
          </ContainerEl>
        </HeroBannerEl>
        <TopSectionEl>
          <MetaDataColumn>
            <SideColumnHeadEl>Client</SideColumnHeadEl>
            <div>Personal Project</div>
            <SideColumnHeadEl>Year</SideColumnHeadEl>
            <div>2020</div>
            <SideColumnHeadEl>My Role</SideColumnHeadEl>
            <div>Data Visualization</div>
            <div>Visual Design</div>
            <div>Front-End Development</div>
          </MetaDataColumn>
          <RoleColumn>
            <SideColumnHeadEl>Link</SideColumnHeadEl>
            <div><a href='https://gendered-toponyms.mustafasaifee.com/' target={'_black'}>Gendered Toponyms</a></div>
            <SideColumnHeadEl>Tools</SideColumnHeadEl>
            <div>Typescript</div>
            <div>D3.js</div>
            <div>React.js</div>
            <div>Topojson</div>
            <div>SVG</div>
            <div>Python</div>
          </RoleColumn>
          <AboutColumn>
            <SideColumnHeadEl>
              About the Project
            </SideColumnHeadEl>
            <div>
              Places and streets names define how a person interacts with a city. Often they are named after important personalities, gods, and goddesses. The project aims to study and visualize the distribution of gender in eponymous streets.
              <br />
              <br />
              The the visualization and data is open source and the source code of the visualization can be found on <a href='https://github.com/mustafasaifee42/gender-street-name' rel="noopener noreferrer"  target='_blank'>Github</a>.
            </div>
          </AboutColumn>
        </TopSectionEl>
        <IMGContainer>
          <img src='./img/dataViz/gt/img1.png' alt="Access all data info" width="100%" style={{maxWidth: '960px'}} />
        </IMGContainer>
        <SectionTwoColumnEl>
          <HeadEl>
            Berlin, Germany
          </HeadEl>
          <BodyEl>
            The dataset for Berlin can be downloaded from <a href='https://github.com/mustafasaifee42/gender-street-name/blob/main/public/data/Berlin/mapData.json' rel="noopener noreferrer" target='_blank'>here</a>
          </BodyEl>
        </SectionTwoColumnEl>
        <IMGContainer>
        <img src='./img/dataViz/gt/berlin.jpg' alt="Access all data info" width="100%"  style={{maxWidth: '960px'}} />
        </IMGContainer>
        <SectionTwoColumnEl>
          <HeadEl>
            Delhi, India
          </HeadEl>
          <BodyEl>
            The dataset for Delhi can be downloaded from <a href='https://github.com/mustafasaifee42/gender-street-name/blob/main/public/data/Delhi/mapData.json' rel="noopener noreferrer" target='_blank'>here</a>
          </BodyEl>
        </SectionTwoColumnEl>
        <IMGContainer>
          <img src='./img/dataViz/gt/delhi.jpg' alt="Access all data info" width="100%" style={{maxWidth: '960px'}}  />
        </IMGContainer>
        <SectionTwoColumnEl>
          <HeadEl>
            Helsinki, Finland
          </HeadEl>
          <BodyEl>
            The dataset for Helsinki can be downloaded from <a href='https://github.com/mustafasaifee42/gender-street-name/blob/main/public/data/Helsinki/mapData.json' rel="noopener noreferrer" target='_blank'>here</a>
          </BodyEl>
        </SectionTwoColumnEl>
        <IMGContainer>
          <img src='./img/dataViz/gt/helsinki.jpg' alt="Access all data info" width="100%" style={{maxWidth: '960px'}}  />
        </IMGContainer>
        <SectionTwoColumnEl>
          <HeadEl>
            Mumbai, India
          </HeadEl>
          <BodyEl>
            The dataset for Mumbai can be downloaded from <a href='https://github.com/mustafasaifee42/gender-street-name/blob/main/public/data/Mumbai/mapData.json' rel="noopener noreferrer" target='_blank'>here</a>
          </BodyEl>
        </SectionTwoColumnEl>
        <IMGContainer>
          <img src='./img/dataViz/gt/mumbai.jpg' alt="Access all data info" width="100%" style={{maxWidth: '960px'}}  />
        </IMGContainer>
        <LinkBannerEl>
          <LinkBanner>
            <a href='https://gendered-toponyms.mustafasaifee.com/' target={'_black'}>
              <ButtonEl>See Interactive Version</ButtonEl>
            </a>
          </LinkBanner>
        </LinkBannerEl>
        <RelatedCasesEl>
            <CardsEl>
              <Link to={'/undp-access-all-data'}>
                <LinkEl>
                  ← UNDP Access All Data
                </LinkEl>
              </Link>
            </CardsEl>
            <CardsEl>
              <Link to={'/airq-data-portal'}>
                <LinkEl>
                 AirQ Data Portal →
                </LinkEl>
              </Link>
            </CardsEl>
        </RelatedCasesEl>
      </El>
    );
};

export default GenderedToponyms;
