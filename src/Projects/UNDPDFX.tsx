import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const El = styled.div`
  margin-top: 7.2rem;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/ProjectHero/vrOhjus.png");
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
  background-image: url("./img/UiUx/mockups/VROhjus/img5.jpg");
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

const ColumnEl = styled.div`
  width: calc(50% - 4rem);
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
  padding: 8rem 2rem;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
            <div>2022</div>
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
                original: './img/UiUx/mockups/VROhjus/img6.jpg',
              },
              {
                original: './img/UiUx/mockups/VROhjus/img7.jpg',
              },
              {
                original: './img/UiUx/mockups/VROhjus/img9.jpg',
              },
              {
                original: './img/UiUx/mockups/VROhjus/img8.jpg',
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
          <ColumnEl>
            <HeadEl>
              The Challenge
            </HeadEl>
            <BodyEl>
              On average, two trains leave Helsinki railway station every minute during the rush hours. The operations center for commuter traffic manages disturbances in the commuter train traffic caused by, e.g. rail infrastructure issues, technical problems with trains, drivers or other staff availability. Disturbance management requires fast decision-making, so support systems and tools play a central role.
              <br />
              <br />
              VR wanted to develop a system that provides real-time situational awareness for different user groups, automates simple tasks as well as communication and supports operations center decision-making by using models based on analytics. VR also wanted to combine functionality of multiple different apps into a single interface so that users don’t have to manage multiple workflows.
            </BodyEl>
          </ColumnEl>
          <ColumnEl>
            <HeadEl>
              Approach
            </HeadEl>
            <BodyEl>
              The main objective of the project was to create a visual real-time situational awareness on rolling stock and personnel and use alerts to ensure that disturbances are noticed before they affect customers.
              <br />
              <br />
              We defined an MVP for Ohjus for a chosen user group (operators) and prioritised user needs which were identified by interviewing them. Designs were validated by the end-users and iterated until all user need were met.
              <br />
              <br />
              As the domain is both complex and multifunctional, it’s important that the UI communicates all the possibilities and shortcomings of the data as transparently as possible. We designed a UI that is very vocal when the data is stale or otherwise not correct. 
            </BodyEl>
          </ColumnEl>
        </SectionTwoColumnEl>
        <FeatureSectionEl>
          <FeatureSectionHead>
            <HeadEl>
              Key features & Information Architecture
            </HeadEl>
            <BodyEl>
              The new application creates a visual real-time situational awareness on rolling stock and personnel and use alerts to ensure that disturbances are noticed before they affect customers. It decentralizes operation by different parties based on the same situational awareness in disturbance situations, enabling faster problem solving and reducing unnecessary communication.
            </BodyEl>
          </FeatureSectionHead>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Railyard View</div>
              <div>
                Visualizes the scheduling of all the commuter train at the Helsinki Central railways station and visualizes if there are any delays in any trains and different scheduling conflicts that might arise because of these conflicts.
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/UiUx/mockups/VROhjus/img1.jpg' alt="Railyard View" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/UiUx/mockups/VROhjus/img2.jpg' alt="Line Map" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">Live Map of Commuter Train Traffic</div>
              <div>
                Visualizes live data of the location of different trains, their status and if the trains have a conductor or not. Line Map was designed and used since the map is meant to be used by operators for disruption management. The interface also allows user to see the status and location of trains in the past.
              </div>
            </TextColumn>
          </FeatureEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Messaging System</div>
              <div>
                Let’s operators contact drivers and conductor to inform them about changes in the schedule and also ask them for status of the train they are in. It also lets the operator know if the driver or conductor has seen and acknowledged the message, as then the operators can call them if the situation is urgent.
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/UiUx/mockups/VROhjus/img3.jpg' alt="Messaging System" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/UiUx/mockups/VROhjus/img4.jpg' alt="Conflict Solver" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">Conflict Solver</div>
              <div>
                Supports decision-making at the operations center by offering automated proposals and showing their implications to costs, customer experience etc. It also lets user compare the different proposals and also accept the best proposal.
              </div>
            </TextColumn>
          </FeatureEl>
        </FeatureSectionEl>
        <SeperatorBannerEl />
        <SectionContainer>
          <FeedbackSectionEl>
            <HeadEl>
              Evaluation
            </HeadEl>
            <BodyEl>
              The app was also evaluated with end-users in user interviews. The end-users were asked to explore clickthrough prototypes and perform some realistic tasks while thinking-aloud. Users were asked questions about how easy to use and intuitive they thought the prototype was and if there are any features they would like to have more in the application.
              <br />
              <br />
              The result from the user interviews was analysed and necessary improvements were made to the application.
            </BodyEl>
            <br />
            <HeadEl>
              Results
            </HeadEl>
            <BodyEl>
              VR estimates that in some issue areas it can achieve up to 60% less train cancellations caused by the particular issue type if Ohjus would have been in place in 2018.
              <br />
              <br />
              The first version of the Ohjus situational awareness system is already in operative use and receives good feedback from users.
              <br />
              <br />
              The conflict detection engine analyses incoming data and flags potential issues in real-time, based on a pre-determined set of rules. The approach allows VR to react to potential problems and mitigate the effects even before the actual event has happened.
          </BodyEl>
          </FeedbackSectionEl>
        </SectionContainer>
        <RelatedCasesEl>
            <CardsEl>
              <Link to={'/fortum-apollo'}>
                <LinkEl>
                  ← Fortum Apollo
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
