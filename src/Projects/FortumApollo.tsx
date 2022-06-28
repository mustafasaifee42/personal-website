import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const El = styled.div`
  margin-top: 7.2rem;
`;

const HeroBannerEl  = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./img/ProjectHero/apolloHeroImg.jpg");
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
  background-image: url("./img/UiUx/mockups/FortumApollo/img4.jpg");
  height: 50%;
  min-height: 55rem;
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

const FortumApollo: React.FunctionComponent<{}> = () => {
    return (
      <El>
        <HeroBannerEl>
          <ContainerEl>
            <H1>Fortum Apollo</H1>
            <H2>A forecasting tool that lets users do mid-term horizon hydropower forecasts and pricing.</H2>
            <Subnote><span className="bold">Client</span>: Fortum | <span className="bold">Agency</span>: Futurice</Subnote>
          </ContainerEl>
        </HeroBannerEl>
        <SectionEl>
          <h3>
            About the Project
          </h3>
          <h4>
            Apollo is a forecasting tool that runs the optimizations automatically, unlike the old, manual hydro optimization process. This allows Fortum to spend more time on analyzing the actual results rather than creating them. Apollo models a horizon that ranges from one to several years. This improves the company’s ability to optimize resource utilization and energy production based on seasonal inflow changes relevant to rivers and allows Fortum to react to market volatility in a much more flexible manner.
          </h4>
        </SectionEl>
        <SectionBgContainer>
          <SectionElBG>
            <HeadColumnEl>
              My Role
            </HeadColumnEl>
            <BodyColumnEl>
              I worked in a cross functional team of 7+ developers and designers to design a web app that visualizes result from different models and generate reports which are then used for power generation and pricing forecasting.  
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
              Hydropower is among the quickest and most efficient ways to regulate the amount of energy the company is making available to the market, thus offering a very good avenue to optimize energy production to increase profitability and reduce the likelihood of environmental impacts.
              <br />
              <br />
              In 2015, Fortum began using a new stochastic model to optimize the production of hydropower in the medium term. The improved optimization model produces a staggering volume of data and required a completely new way of presenting the results.
              <br />
              <br />
              One optimization may involve tens of thousands of different time series. The data model includes the asset models with time series attributes describing, for example, input data required for optimizations and optimization results.
            </BodyEl>
          </ColumnEl>
          <ColumnEl>
            <HeadEl>
              Approach
            </HeadEl>
            <BodyEl>
              The collaboration with Fortum started with a vision project, where our team explored both the user and business needs, followed by co-creating a vision and set of features in order to make sure we are meeting all the user expectations.
              <br />
              <br />
              When it comes to designing system for expert systems, there’s a lot of detail in how expert operates and fulfil their tasks. Feedback is one of the most important inputs in a user-centered project like Apollo. We also gather ideas from end users and discussed those with them in order to understand the “why” and the need behind them. All the designs were shown and discussed with the end users to make sure the system is not adding any additional cognitive load. As the domain is both complex and multifunctional, it was important to gather feedback from the users frequently to make sure we were on the right track.
            </BodyEl>
          </ColumnEl>
        </SectionTwoColumnEl>
        <FeatureSectionEl>
          <HeadEl>
            Key features
          </HeadEl>
          <BodyEl>
            Apollo is an expert system that requires a lot of flexibility for the end-user - i.e. all the bells and whistles potentially available.
          </BodyEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Creation of Optimization</div>
              <div>
                The basic process for creating operative optimization requires creating a snapshot of the inputs, running the optimizations, and generating predefined reports. This is a cumbersome task and requires a lot of input from the user. 
                <br />
                <br />
                To reduce the load on the users the system lets the user automate the process based on pre-defined templates.
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/UiUx/mockups/FortumApollo/img1.jpg' alt="Case Creation" width="100%" />
            </ImgColumn>
          </FeatureEl>
          <FeatureEl>
            <ImgColumn>
              <img src='./img/UiUx/mockups/FortumApollo/img2.jpg' alt="Visualizations" width="100%" />
            </ImgColumn>
            <TextColumn align='left'>
              <div className="bold">Visualize the Result of the Optimizations</div>
              <div>
                The data model for Apollo is very complex. One optimization may involve tens of thousands of different time series. There is a need to analyze different combinations of time series and results, different detail levels of the results, for different asset models and their combinations, and so on. 
                <br />
                <br />
                For this purpose, a domain-specific visual templating language was created, which makes it theoretically possible to create an endless number of different visualizations.
              </div>
            </TextColumn>
          </FeatureEl>
          <FeatureEl>
            <TextColumn align='right'>
              <div className="bold">Analyze the Result</div>
              <div>
              The user is provided with an intuitively understandable view of the resulting scenarios, both via the visualization tool used to create interactive charts and tables for the browser. This lets user do some basic analysis in the system itself. For deeper analysis the system lets the user download data in different formats like excel.  
              </div>
            </TextColumn>
            <ImgColumn>
              <img src='./img/UiUx/mockups/FortumApollo/img3.jpg' alt="Excel tabal and Visualizations" width="100%" />
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
            According to the product owner from Fortum the mid-term horizon hydropower forecasts and pricing of water have notably better quality after the implementation of the system.
            <br />
            <br />
            There was significant reduction in human errors because of process automation. This also led to users have much more time to analyse the results and make more kinds of different analyses. 
            <br />
            <br />
            New users are able to get started with only a brief introduction because of the visual and simplified UI.
          </BodyEl>
          </FeedbackSectionEl>
        </SectionContainer>
        <RelatedCasesEl>
            <CardsEl>
              <Link to={'/oma-fingrid'}>
                <LinkEl>
                  ← Oma Fingrid 
                </LinkEl>
              </Link>
            </CardsEl>
            <CardsEl>
              <Link to={'/vr-ohjus'}>
                <LinkEl>
                  VR Ohjus →
                </LinkEl>
              </Link>
            </CardsEl>
        </RelatedCasesEl>
      </El>
    );
};

export default FortumApollo;
