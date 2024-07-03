import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const El = styled.div`
  margin-top: 7.2rem;
`;


const LinkBanner  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("./img/UiUx/mockups/DFx/linkImage.png");
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

const LinkBannerEl = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 96rem;
`;

const ButtonEl = styled.div`
  padding: 1rem 2rem;
  background-color: var(--magenta);
  text-transform: uppercase;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: bold;
  font-style: normal !important;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/ProjectHero/Dfx.png");
  height: 50%;
  min-height: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`;

const SeperatorBannerEl  = styled.div`
  background-image: url("./img/UiUx/mockups/DFx/img5.jpg");
  height: 75%;
  min-height: 60rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--black-500);
  border-bottom: 1px solid var(--black-500);
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

const FeedbackSectionEl = styled.div`
  padding: 8rem 2rem;
  max-width: 96rem;
  margin-left: auto;
  margin-right: auto;
  color: var(--primary);
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

const SectionContainer = styled.div`
  background-color: var(--white);
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

const LinkEl = styled.div`
  color: var(--primary);
  padding: 4rem;
  background-color: var(--black-200);
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
`;

const FeatureSectionHead = styled.div`
  max-width: 96rem;
  margin: auto;
`

const UNDPDfx: React.FunctionComponent<{}> = () => {
    return (
      <El>
        <HeroBannerEl>
          <ContainerEl>
            <H1>UNDP Data Futures Exchange</H1>
            <H2>Global resource to empower decision-makers with state-of-the-art data and insights for a transformative impact.</H2>
            <Subnote><span className="bold">Client</span>: UNDP</Subnote>
          </ContainerEl>
        </HeroBannerEl>
        <TopSectionEl>
          <MetaDataColumn>
            <SideColumnHeadEl>Client</SideColumnHeadEl>
            <div>UNDP</div>
            <SideColumnHeadEl>Year</SideColumnHeadEl>
            <div>2024</div>
          </MetaDataColumn>
          <RoleColumn>
            <SideColumnHeadEl>My Role</SideColumnHeadEl>
            <div>Front-End Development</div>
            <div>Project Management</div>
            <div>Data Visualization</div>
            <div>UX Design</div>
            <div>UI Design</div>
            <div>Information Architecture</div>
            <div>Visual Design</div>
            <div>Interaction Design</div>
          </RoleColumn>
          <AboutColumn>
            <SideColumnHeadEl>
              About the Project
            </SideColumnHeadEl>
            <div>
              Data Futures Exchange (DFx) is a global resource to empower decision-makers with state-of-the-art data and insights for a transformative impact. An open-source data innovation, the DFx connects development needs with cutting-edge solutions. Its comprehensive suite of resources empowers practitioners by fostering data partnerships and collaborations, creating opportunities, offering resources, and enhancing data literacy.
            </div>
          </AboutColumn>
        </TopSectionEl>
        <div style={{width: '100%'}}>
          <ImageGallery 
            items={[
              {
                original: './img/UiUx/mockups/DFx/01.jpg',
              },
              {
                original: './img/UiUx/mockups/DFx/02.jpg',
              },
              {
                original: './img/UiUx/mockups/DFx/03.jpg',
              },
              {
                original: './img/UiUx/mockups/DFx/04.jpg',
              },
              {
                original: './img/UiUx/mockups/DFx/05.jpg',
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
        <FeatureSectionEl>
          <FeatureSectionHead>
            <HeadEl>
              Key Features & Information Architecture
            </HeadEl>
            <BodyEl>
              The platform features 5 main sections or features, allowing users to access data and information relevant to innovation for development.
            </BodyEl>
          </FeatureSectionHead>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">80+ case studies and data led insights</div>
              <div>
                Insights combines data visualizations and analysis with storytelling techniques to convey insights and information in a compelling and easily understandable way. It helps audiences grasp complex data, understand trends, and make informed decisions by presenting the data in a relatable and engaging manner.
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/UiUx/mockups/DFx/06.png' alt="Insights" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/UiUx/mockups/DFx/08.png' alt="Regions" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">5 Region</div>
              <div>
                Lets users in the Regional offices plan by using regional data and allocate resources to ensure these are directed to areas where they are most needed. Also lets users compare across regions by conducting  comparative analyses identifying disparities and similarities and prioritize areas for intervention
              </div>
            </TextColumn>
          </FeatureEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">250+ Country pages</div>
              <div>
                Let's zoom into geographically specific challenges. Let's users in country offices gain an overview by finding essential statistics and data about a selected country for a quick snapshot of the current situation and track progress by accessing historical data, and help assess the effectiveness of development policies and initiatives.
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/UiUx/mockups/DFx/09.png' alt="Country" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/UiUx/mockups/DFx/07.png' alt="Topics" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">6 Topics pages</div>
              <div>
                Helps policy makers accelerate commitments to the UNDP moonshots by providing essential statistics and data about a topic for a quick snapshot of the current situation and track progress using historical data.</div>
            </TextColumn>
          </FeatureEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">10+ Tools</div>
              <div>
                Platform also provides tools for decision intelligences. Tools like <a href="https://data.undp.org/access-all-data" target='_blank'  style={{color: 'var(--magenta)'}} rel="noopener noreferrer">Access All Data</a> and <a href="https://data.undp.org/tools/viz-tool" target='_blank' rel="noopener noreferrer" style={{color: 'var(--magenta)'}}>UNDP Viz Tool</a> lets user combine and analyze data from 60+ different sources using easy to use interface and visually appealing visualizations and also allow users to create charts and graph. <br /><br /><a style={{color: 'var(--magenta)'}} href='https://www.figma.com/community/file/1371940840508081255/data-futures-exchange-data-visualization-guide' target='_blank' rel="noopener noreferrer">Data visualization design guidelines</a> and <a href='https://www.npmjs.com/package/@undp-data/undp-visualization-library' target='_blank' rel='noopener noreferrer' style={{color: 'var(--magenta)'}}>UNDP visualization NPM package</a> was also created for capacity building.
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/UiUx/mockups/DFx/10.png' alt="Tools" width="100%" />
            </ImgColumn>
          </FeatureEl>
        </FeatureSectionEl>
        <SeperatorBannerEl />
        <SectionContainer>
          <FeedbackSectionEl>
            <HeadEl>
              Results
            </HeadEl>
            <BodyEl>
              Data Futures Exchange was re-launched in early 2024. It plays a key role in UNDP's digital strategy leveraging data and knowledge as strategic assets.
              <br />
              <br />
              Since its launch the platform has already being visited by more than 175,00 users over 1 Million time. It has been accessed globally and overall received positive feedback.
          </BodyEl>
          </FeedbackSectionEl>
        </SectionContainer>
        <LinkBannerEl>
          <LinkBanner>
            <a href='https://data.undp.org' target={'_black'}>
              <ButtonEl>See Interactive Version</ButtonEl>
            </a>
          </LinkBanner>
        </LinkBannerEl>
        <RelatedCasesEl>
            <CardsEl>
              <Link to={'/vr-ohjus'}>
                <LinkEl>
                  ← VR Ohjus
                </LinkEl>
              </Link>
            </CardsEl>
            <CardsEl>
              <Link to={'/oma-fingrid'}>
                <LinkEl>
                 Oma Fingrid →
                </LinkEl>
              </Link>
            </CardsEl>
        </RelatedCasesEl>
      </El>
    );
};

export default UNDPDfx;
