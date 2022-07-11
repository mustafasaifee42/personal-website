import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const El = styled.div`
  margin-top: 7.2rem;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/dataViz/UNDP Access All Data/img9.jpg");
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url("./img/dataViz/UNDP Access All Data/linkImage.jpg");
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

const UNDPAccessAllData: React.FunctionComponent<{}> = () => {
    return (
      <El>
        <HeroBannerEl>
          <ContainerEl>
            <H1>UNDP Access All Data</H1>
            <H2>Tool for advanced multi-dimensional data analysis of development indicators.</H2>
            <Subnote><span className="bold">Client</span>: UNDP</Subnote>
          </ContainerEl>
        </HeroBannerEl>
        <TopSectionEl>
          <MetaDataColumn>
            <SideColumnHeadEl>Client</SideColumnHeadEl>
            <div>UNDP</div>
            <SideColumnHeadEl>Year</SideColumnHeadEl>
            <div>2021</div>
            <SideColumnHeadEl>My Role</SideColumnHeadEl>
            <div>Data Visualization</div>
            <div>UI Design</div>
            <div>UX Design</div>
            <div>Interaction Design</div>
            <div>Front-End Development</div>
          </MetaDataColumn>
          <RoleColumn>
            <SideColumnHeadEl>Link</SideColumnHeadEl>
            <div><a href='https://data.undp.org/explore-all-data/' rel="noopener noreferrer" target='_blank'>UNDP Access All Data</a></div>
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
              In an effort to make development data open, and more acccessible; UDNP released Data Futures Platform. This was a tool I designed for the Data futures Platform advanced analysis of correlation between indicators. All indicators and data stored on the platform could be visualized usign different charts.
            </div>
          </AboutColumn>
        </TopSectionEl>
        <div style={{width: '100%'}}>
          <ImageGallery 
            items={[
              {
                original: './img/dataViz/UNDP Access All Data/img2.jpg',
              },
              {
                original: './img/dataViz/UNDP Access All Data/img3.jpg',
              },
            ]} 
            autoPlay={true}
            showBullets={true}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            slideDuration={500}
            slideInterval={4000}
          />      
        </div>
        <SectionTwoColumnEl>
          <HeadEl>
            Key features
          </HeadEl>
          <BodyEl>
            The tool is designed to be an analytical tool used by users in UN country offices, UN thematic team, governments, policy makers and for advocacy. Since the tool has many different users and use cases, the tool needed to be very flexible and allow users to visualize data in multiple ways for multi-dimensional data analysis.
            <br />
            <br />
            The tool also lets users filter data based on countries, regions, human development index and income groups of countries to help them focus on the countries or country groups they might be interested in.
            <br />
            <br />
            The tool also lets users animate the data and visualise the change over time. We also added a feature in the tool to visualized the most recent available data for the selected indicators, since all the countries and aganecies dont conduct data collection excercise in the same year or timeline.
            <br />
            <br />
            Tho improve the shareability to differnt visaulization we allow user to download the graph as an image. All the graphs are  embeddable with custom country, time range, etc. selection.
          </BodyEl>
        </SectionTwoColumnEl>
        <img src='./img/dataViz/UNDP Access All Data/img1.jpg' alt="Access all data info" width="100%" />
        <FeatureSectionEl>
          <HeadEl>
            Visualization of the Data
          </HeadEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Multivariate Choropleth Maps</div>
              <div>
                Displays one or two variables on a single choropleth map. The interface also lets user to project bubbles chart on the map as third variable.
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/dataViz/UNDP Access All Data/img4.jpg' alt="Railyard View" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/dataViz/UNDP Access All Data/img5.jpg' alt="Line Map" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">Bubble Chart</div>
              <div>
                Visualizes two or three continuous variable and one discreete variable. This lets users identify correlations and outlier in the data.
              </div>
            </TextColumn>
          </FeatureEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Bar Chart</div>
              <div>
                Lets user rank countries based on the indicator they have selected. Users can change orientation of the chart from horizontal to vertical. 
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/dataViz/UNDP Access All Data/img6.jpg' alt="Messaging System" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/dataViz/UNDP Access All Data/img7.jpg' alt="Conflict Solver" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">Dual Axis Line Chart</div>
              <div>
                Lets user compare change over time for two variable for a selected country. 
              </div>
            </TextColumn>
          </FeatureEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Line Chart</div>
              <div>
                Lets user change over time for a variable across countries. 
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/dataViz/UNDP Access All Data/img8.jpg' alt="Messaging System" width="100%" />
            </ImgColumn>
          </FeatureEl>
        </FeatureSectionEl>
        <LinkBannerEl>
          <LinkBanner>
            <a href='https://data.undp.org/explore-all-data/' rel="noopener noreferrer" target='_blank'>
              <ButtonEl>See Interactive Version</ButtonEl>
            </a>
          </LinkBanner>
        </LinkBannerEl>
        <RelatedCasesEl>
            <CardsEl>
              <Link to={'/covid-dashboard'}>
                <LinkEl>
                  ← COVID-19 Dashboard
                </LinkEl>
              </Link>
            </CardsEl>
            <CardsEl>
              <Link to={'/gendered-toponyms'}>
                <LinkEl>
                  Gendered Toponyms →
                </LinkEl>
              </Link>
            </CardsEl>
        </RelatedCasesEl>
      </El>
    );
};

export default UNDPAccessAllData;
