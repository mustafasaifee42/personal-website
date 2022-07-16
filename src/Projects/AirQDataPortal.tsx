import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const El = styled.div`
  margin-top: 7.2rem;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/dataViz/AirQ/coverImage.jpg");
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
  max-width: 96rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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

const FeatureSectionEl = styled.div`
  padding: 8rem 2rem;
  max-width: 128rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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

const FeatureEl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  font-size: 1.6rem;
  line-height: 2.8rem;
  text-align: left;
  font-family: 'IBM Plex Sans', sans-serif;
  align-items: center;
`;

interface AlingProps{
  align: 'right' | 'left';
}

const TextColumn = styled.div<AlingProps>`
  width: calc(30% - 2rem);
  text-align: ${props => props.align};
`;

const ImgColumn = styled.div`
  width: calc(70% - 2rem);
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
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("./img/dataViz/AirQ/linkImage.jpg");
  height: 20rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'IBM Plex Sans', sans-serif;
  margin: 0 auto 8rem auto;
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

const AirqDataPortal: React.FunctionComponent<{}> = () => {
    return (
      <El>
        <HeroBannerEl>
          <ContainerEl>
            <H1>AirQ Data Portal</H1>
            <H2>Tool to track near real-time concentration on PM 2.5 in the air.</H2>
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
            <div><a href='https://airq.mustafasaifee.com/' rel="noopener noreferrer" target='_blank'>AirQ Data Portal</a></div>
            <SideColumnHeadEl>Tools</SideColumnHeadEl>
            <div>Typescript</div>
            <div>Leaflet</div>
            <div>D3.js</div>
            <div>React.js</div>
            <div>Express.js</div>
          </RoleColumn>
          <AboutColumn>
            <SideColumnHeadEl>
              About the Project
            </SideColumnHeadEl>
            <div>
              AirQ visualizes near real-time data and historical data of concentration on particulate matter less than 2.5 microns (PM 2.5) in diameter in the air. The portal allows users to spot global patterns, and drill into patterns and trends on a country or city level.
            </div>
          </AboutColumn>
        </TopSectionEl>
        <IMGContainer>
          <img src='./img/dataViz/AirQ/img1.png' alt="Access all data info" width="100%" style={{maxWidth: '960px'}} />
        </IMGContainer>
        <SectionTwoColumnEl>
          <HeadEl>
            Concept
          </HeadEl>
          <BodyEl>
            AirQ Data Portal is designed to let users visualize and analyze air quality in different countries and cities. It's an interactive tool that translates the data into a form that is easy to understand for everyone by comparing air quality to cigarette smoking and using health indicators based on US's EPA.
            <br />
            <br />
            Each country and city have its page where users can see near real-time air quality data as well as analyze historical data.
          </BodyEl>
          <IMGContainer>
            <img src='./img/dataViz/AirQ/img2.png' alt="Access all data info" width="100%" style={{maxWidth: '960px'}} />
          </IMGContainer>
        </SectionTwoColumnEl>
        <FeatureSectionEl>
          <HeadEl>
            Visualization Solutions
          </HeadEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Particle Visualization</div>
              <div>
                Visualizes the concentration of PM2.5 particles as floating black circles on white background. They work well for visual design, and from a metaphorical point of view (the higher the concentration the more polluted the air the more black particles on a white background).
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/dataViz/AirQ/img3.jpg' alt="Railyard View" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/dataViz/AirQ/img4.jpg' alt="Line Map" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">Air Quality Strip</div>
              <div>
                Use a series of colored stripes chronologically ordered to visually portray long-term air quality trends. The stripes use colors alone to visualize the air quality to avoid technical distractions and intuitively convey air quality trends to non-scientists.
              </div>
            </TextColumn>
          </FeatureEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Air Quality Cigarette Equivalence</div>
              <div>
                Makes the PM2.5 concentration data more understandable and accessible to non-scientists by comparing breathing bad quality air to smoking cigarettes. 
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/dataViz/AirQ/img5.jpg' alt="Messaging System" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/dataViz/AirQ/img6.jpg' alt="Conflict Solver" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">Heatmap for Air Quality by Time of Day</div>
              <div>
                Lets the user identify which time of the day air quality is good or bad. 
              </div>
            </TextColumn>
          </FeatureEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Time Series</div>
              <div>
                Visualize historical data of PM2.5 concentration and lets users identify any trends or patterns. 
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/dataViz/AirQ/img7.jpg' alt="Messaging System" width="100%" />
            </ImgColumn>
          </FeatureEl>
        </FeatureSectionEl>
        <LinkBannerEl>
          <LinkBanner>
            <a href='https://airq.mustafasaifee.com/' rel="noopener noreferrer" target='_blank'>
              <ButtonEl>See Interactive Version</ButtonEl>
            </a>
          </LinkBanner>
        </LinkBannerEl>
        <RelatedCasesEl>
            <CardsEl>
              <Link to={'/gendered-toponyms'}>
                <LinkEl>
                  ← Gendered Toponyms
                </LinkEl>
              </Link>
            </CardsEl>
            <CardsEl>
              <Link to={'/election-results'}>
                <LinkEl>
                 Indian Election Results →
                </LinkEl>
              </Link>
            </CardsEl>
        </RelatedCasesEl>
      </El>
    );
};

export default AirqDataPortal;
