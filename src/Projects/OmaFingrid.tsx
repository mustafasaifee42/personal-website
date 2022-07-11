import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const El = styled.div`
  margin-top: 7.2rem;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/ProjectHero/omaFingrid.jpg");
  height: 50%;
  min-height: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`;

const ColumnEl = styled.div`
  width: calc(50% - 4rem);
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
  padding: 0 2rem 16rem 2rem;
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

const OpportunityColumnContainer = styled.div`
  display: flex;
  max-width: 96rem;
  margin: 0 auto;
`;

interface BGImageProps {
  img: string;
}

const OpportunityColumn = styled.div<BGImageProps>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), ${props => `url(${props.img})`};
  padding: 4rem;
  width: calc(50% - 8rem);
  color: var(--white);
  text-align: left;
`

const BannerEl = styled.div`
  max-width: 128rem;
  margin: 0 auto;
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

const Ul = styled.ul`
  margin: 0;
  padding-left: 2rem;
`;

const OmaFingrid: React.FunctionComponent<{}> = () => {
    return (
      <El>
        <HeroBannerEl>
          <ContainerEl>
            <H1>Oma Fingrid</H1>
            <H2>Customer portal for the electricity grids of tomorrow.</H2>
            <Subnote><span className="bold">Client</span>: Fingrid | <span className="bold">Agency</span>: Futurice</Subnote>
          </ContainerEl>
        </HeroBannerEl>
        <TopSectionEl>
          <MetaDataColumn>
            <SideColumnHeadEl>Client</SideColumnHeadEl>
            <div>Fingrid</div>
            <SideColumnHeadEl>Agency</SideColumnHeadEl>
            <div>Futurice</div>
            <SideColumnHeadEl>Year</SideColumnHeadEl>
            <div>2019</div>
          </MetaDataColumn>
          <RoleColumn>
            <SideColumnHeadEl>My Role</SideColumnHeadEl>
            <div>UX Design</div>
            <div>UI Design</div>
            <div>Visual Design</div>
            <div>Interaction Design</div>
            <div>Data Visualization</div>
          </RoleColumn>
          <AboutColumn>
            <SideColumnHeadEl>
              About the Project
            </SideColumnHeadEl>
            <div>
              Oma Fingrid is a user-friendly, scalable, self-serving customer portal with a positive impact on its users’ everyday work. Oma Fingrid takes staggering amounts of data on Finland’s nationwide grid and visualizes them clearly and comprehensively for Fingrid customers.
            </div>
          </AboutColumn>
        </TopSectionEl>
        <div style={{width: '100%'}}>
          <ImageGallery 
            items={[
              {
                original: './img/UiUx/mockups/Fingrid/img1.jpg',
              },
              {
                original: './img/UiUx/mockups/Fingrid/img2.jpg',
              },
              {
                original: './img/UiUx/mockups/Fingrid/img3.jpg',
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
              To communicate with their stakeholders, Fingrid had numerous extranets. The user experience of using multiple extranet was not good because of the following reasons: 
              <Ul>
                <li>All the extranets had their own user management, therefore same user had mULtiple accounts. Because of this the user were also not able to switch between the extranets easily.</li>
                <li>All the extranets didn’t had a consistent design.</li>
                <li>The extranet's didn't have a self-service interface i.e. it didn't suppoort role-based access control, user management, or data download.</li>
              </Ul>
              <br />
              To improve the experience for the end users, Fingrid wanted to replace the numerous extranets with one user-friendly, scalable customer portal with a self-service UI.
            </BodyEl>
          </ColumnEl>
          <ColumnEl>
            <HeadEl>
              Approach
            </HeadEl>
            <BodyEl>
              To combine different extranets into single customer portal we first reimagined the information architecture of all the extranets based on user interviews and workshop involving the stakeholders. We grouped all the functionality in different application within the portal based on a card sorting workshop with the stake holders.
              <br />
              <br />
              The portal has digitized many manual tasks performed by humans and promotes self-service philosophy in a positive way. To promote self service philosophy we also conceptualized and designed user management system where admins were able to  manage user for their companies. We also added features that let users to download reports and raw data which they could then use for further analysis.
            </BodyEl>
          </ColumnEl>
        </SectionTwoColumnEl>
        <BannerEl>
          <img src='./img/UiUx/mockups/Fingrid/architectureChange.jpg' alt="Information Architecture" width="100%" />
        </BannerEl>
        <FeatureSectionEl>
          <HeadEl>
            Opportunities
          </HeadEl>
          <BodyEl>
            Self-serving customer portal present values to both fingrid’s customer and employees alike.
          </BodyEl>
          <OpportunityColumnContainer>
            <OpportunityColumn img={'./img/UiUx/mockups/Fingrid/customers.jpg'}>
              <HeadEl>Customer</HeadEl>
              <BodyEl>
                Quick, user-specific access to the necessary information in real time, be it electricity consumption by trends or by position, billing, contracts, grid distractions or fieldwork notes. Also, no passwords are required, new operators can easily join, and organizations can add or remove users simply.
              </BodyEl>
            </OpportunityColumn>
            <OpportunityColumn img={'./img/UiUx/mockups/Fingrid/employee.jpg'}>
              <HeadEl>Fingrid Employees</HeadEl>
              <BodyEl>
                Less no. of extranets to manage and fewer request from customer for data and adding new users via emails.
              </BodyEl>
            </OpportunityColumn>
          </OpportunityColumnContainer>
        </FeatureSectionEl>        
        <img src='./img/UiUx/mockups/Fingrid/designs.jpg' alt="Information Architecture" width="100%" />
        <SectionContainer>
          <FeedbackSectionEl>
            <HeadEl>
              Evaluation
            </HeadEl>
            <BodyEl>
              The portal was also evaluated with end-users and Fingrid employees in user interviews. The end-users were asked to explore clickthrough prototypes and perform some realistic tasks while thinking-aloud. Users were asked questions about how easy to use and intuitive they thought the prototype was.
              <br />
              <br />
              Users were also asked to explore the navigation and information architecture of the portal and were asked if they felt the information heirarchy was intuitive.
              <br />
              <br />
              The result from the user interviews was analysed and necessary improvements were made to the design of application.
            </BodyEl>
            <br />
            <HeadEl>
              Results
            </HeadEl>
            <BodyEl>
            Oma Fingrid proved to be an important step towards answering the needs of the dispersed electricity market and a carbon-neutral Finland, as the new operators can join in it easily and the information flow gets close to real-time. 
            <br/>
            <br />
            Visualization of data in easy to understand graphs and quick and easy access to the necessary information helped decision-making and in daily tasks, bringing competitive advantage and results to Fingrid`s customers. 
            <br />
            <br />
            The new User Access Managment also helped reduce load on Fingrid staff, as now the admins could manage user themselves and Fingrid staff didn't had to add and remove users for them.  
          </BodyEl>
          </FeedbackSectionEl>
        </SectionContainer>
        <RelatedCasesEl>
            <CardsEl>
              <Link to={'/vr-ohjus'}>
                <LinkEl>
                  ← VR Ohjus
                </LinkEl>
              </Link>
            </CardsEl>
            <CardsEl>
              <Link to={'/fortum-apollo'}>
                <LinkEl>
                  Fortum Apollo →
                </LinkEl>
              </Link>
            </CardsEl>
        </RelatedCasesEl>
      </El>
    );
};

export default OmaFingrid;
