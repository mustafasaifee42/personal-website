import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const SectionEl = styled.div`
  padding: 8rem 2rem;
  max-width: 96rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  h3 {
    font-size: 3.6rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-Weight: bold;
    margin: 2rem 0;
  }
  h4 {
    font-size: 2.4rem;
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 2rem 0;
    line-height: 4rem;
    font-weight: normal;
    text-transform: none;
  }
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


const SectionBgContainer = styled.div`
  background-color: var(--primary);
`;

const SectionElBG = styled.div`
  padding: 8rem 2rem;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  color: var(--white);
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

const HeadColumnEl = styled.div`
  font-size: 3rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-Weight: bold;
  margin: 2rem 0;
`;

const BodyColumnEl = styled.div`
  font-size: 1.8rem;
  font-family: 'IBM Plex Sans', sans-serif;
  margin: 2rem 0;
  line-height: 2.8rem;
`;

const RoleContainer = styled.div`
  display: flex;     
  margin-bottom: 2rem; 
`;

const RoleEl = styled.div`
  padding: 1rem;
  background-color: rgba(255,255,255,0.75);
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'IBM Plex Sans', sans-serif;
  margin-right: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  color: var(--primary);
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
        <SectionEl>
          <h3>
            About the Project
          </h3>
          <h4>
            Oma Fingrid is a customer-centric service portal with a positive impact on its users’ everyday work. Together with Fingrid, we co-created an extranet service that visualizes the data for their customers. Oma Fingrid takes staggering amounts of data on Finland’s nationwide grid and visualizes them clearly and comprehensively for Fingrid customers. Oma Fingrid is a single user-friendly, scalable customer portal that replaces numerous different extranets.
          </h4>
        </SectionEl>
        <SectionBgContainer>
          <SectionElBG>
            <HeadColumnEl>
              My Role
            </HeadColumnEl>
            <BodyColumnEl>
              I worked in a team of 5 developers and designers to design a single user-friendly, scalable customer portal.  
            </BodyColumnEl>
            <RoleContainer>
              <RoleEl>
                UX design
              </RoleEl>
              <RoleEl>
                UI Design
              </RoleEl>
              <RoleEl>
                Interaction Design
              </RoleEl>
              <RoleEl>
                Data Visualization 
              </RoleEl>
            </RoleContainer>
          </SectionElBG>
        </SectionBgContainer>
        <SectionTwoColumnEl>
          <ColumnEl>
            <HeadEl>
              The Challenge
            </HeadEl>
            <BodyEl>
              Faced with a rapidly changing regulatory environment and electricity market, Fingrid has chosen customer-centricity as the core of its strategy. To communicate with their stakeholders Fingrid had numerous extranets. This caused numerous issues:
              <br />
              <br />
              All the extranets had their own user management, therefore same user had multiple accounts. Because of this the user were also not able to switch between the extranets easily.
              <br />
              All the extranets didn’t had a consistent design. 
              <br />
              The information and interactions in each extranets were governed by the user groups rather than the function of the extranet. That caused a lot of redundancy as same information was present in multiple extranets with different terminology.
            </BodyEl>
          </ColumnEl>
          <ColumnEl>
            <HeadEl>
              Approach
            </HeadEl>
            <BodyEl>
              The first step in offering the best service to its customers, Finnish power plants, industrial plants and regional electricity distribution networks was to replace the numerous extranets with one user-friendly, scalable customer portal. 
              <br />
              <br />
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
              Results
            </HeadEl>
            <BodyEl>
            According to the product owner from Fingrid, Oma Fingrid is an important step towards answering the needs of the dispersed electricity market and a carbon-neutral Finland, as the new operators can join in it easily and the information flow gets close to real-time. 
            <br/>
            <br />
            Clearly visualized and detailed data to help decision-making and in daily tasks, bringing competitive advantage and results to Fingrid`s customers. 
            <br />
            <br />
            Quick and easy access to the necessary information, be it electricity consumption by trends or by position, billing, contracts, grid distractions or fieldwork notes.
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
