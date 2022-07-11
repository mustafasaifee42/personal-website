import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const El = styled.div`
  margin-top: 7.2rem;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/dataViz/lsResult/coverImage.jpg");
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
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("./img/dataViz/lsResult/linkImage.jpg");
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

const ElectionResults: React.FunctionComponent<{}> = () => {
    return (
      <El>
        <HeroBannerEl>
          <ContainerEl>
            <H1>Indian Lok Sabha Election Visualization</H1>
            <H2>Visual exploration of Indian general election results</H2>
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
            <div><a href='https://loksabharesults.mustafasaifee.com/' rel="noopener noreferrer" target='_blank'>Lok Sabha Election Result</a></div>
            <SideColumnHeadEl>Tools</SideColumnHeadEl>
            <div>D3.js</div>
            <div>React.js</div>
            <div>Python (for web scraping)</div>
          </RoleColumn>
          <AboutColumn>
            <SideColumnHeadEl>
              About the Project
            </SideColumnHeadEl>
            <div>
              Elections are a massive affair for both media houses and citizens. This tool visualizes the results of Indian General Election from 2019. The objective was to offer a good visual election reporting and let users gain meaningful insights by exploring the visualization.
            </div>
          </AboutColumn>
        </TopSectionEl>
        <IMGContainer>
          <img src='./img/dataViz/lsResult/img3.png' alt="Access all data info" width="100%" style={{maxWidth: '960px'}} />
        </IMGContainer>
        <SectionTwoColumnEl>
          <HeadEl>
            Hexagonal TIle Grid Map
          </HeadEl>
          <BodyEl>
            Tile grid map is a variation of choropleth map. In this map, areas are reduced to a uniform size hexagons and the tiles are arranged to roughly approximate their real-world geographic locations. Tile grid maps avoid the visual imbalances inherent to traditional choropleths because of the area of the regions. Tile grid maps are a great option for mapped region data where area are not part of the story we’re trying to tell with the map.
            <br />
            <br />
            Since a hexagonal tile grid map didn't exist for Indian constituency I started first by designing and building and open source hexagonal tile grid map for Indian contituencies.
            <br />
            <img src='./img/dataViz/lsResult/img2.png' alt="Access all data info" width="100%" style={{maxWidth: '960px'}}  />
            <br />
            The final layout with the visualization looks like this:
            </BodyEl>
            <img src='./img/dataViz/lsResult/img1.jpg' alt="Access all data info" width="100%" style={{maxWidth: '960px'}}  />
        </SectionTwoColumnEl>
        <SectionTwoColumnEl>
          <HeadEl>
            Key features
          </HeadEl>
          <BodyEl>
            The tool is for users to explore the data and let users gain meaningful insights by exploring the visualization and adding different filters.
            <br />
            <br />
            The tool also lets users filter data based on political party, gender, caste, religion, total assets, victory margin of the winners.
          </BodyEl>
        </SectionTwoColumnEl>
        <img src='./img/dataViz/lsResult/img4.jpg' alt="Access all data info" width="100%" />
        <FeatureSectionEl>
          <HeadEl>
            Other Visualizations
          </HeadEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Animated Map</div>
              <div>
                Visualizes the changes and patterns in election results through the year using animation.
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/dataViz/lsResult/Screengrab.gif' alt="Animation" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/dataViz/lsResult/img5.jpg' alt="Line Map" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">List View</div>
              <div>
                List view provide list of all the winner that can be sorted by total assets, political party, states, education qualification, or criminal cases
              </div>
            </TextColumn>
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
              <Link to={'/airq-data-portal'}>
                <LinkEl>
                  ← AIRQ Data Portal
                </LinkEl>
              </Link>
            </CardsEl>
            <CardsEl>
              <Link to={'/covid-dashboard'}>
                <LinkEl>
                 COVID Dashboard →
                </LinkEl>
              </Link>
            </CardsEl>
        </RelatedCasesEl>
      </El>
    );
};

export default ElectionResults;
