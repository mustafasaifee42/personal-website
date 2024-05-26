import React from "react";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerEl = styled.div`
  margin-top: 11rem;
`;

const BackButton = styled.div`
  a {
    font-style: normal;
    color: var(--primary);
  }
  margin-bottom: 2rem;
  width: fit-content;
`;

const Home: React.FunctionComponent<{}> = () => {
  return (
    <ContainerEl className="container">
      <BackButton>
        <Link to={`/`}>← Back to home</Link>
      </BackButton>
      <div>
        <div>
          <h1>
            Hello! Nice to see you here!
          </h1>
          <div>
            <br />
            I'm Mustafa Saifee, a designer and developer with 7+ years of
            experience. My interests include{" "}
            <span className="bold">data visualization</span>,{" "}
            <span className="bold">information design</span>, and{" "}
            <span className="bold">UI/UX Design</span>.
            <br />
            <br />
            I am originally from India but currently based in Helsinki, Finland.
            <br />
            <br />I enjoy doing projects which helps make data more relatable
            and understandable. I have vast experience designing and developing
            complex applications and tools used in data-driven decision-making.
            <br />
            <br />
            <h3 style={{marginBottom: '12px'}}>
              Past employers or clients
            </h3>
            <div style={{marginBottom: '12px'}}>
              <a
                href="https://data.undp.org/"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >              
                United Nations Development Programme
              </a> - Data visualization analyst
            </div>
            <div style={{marginBottom: '12px'}}>
              <a
                href="https://www.iceye.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >              
                Lumo Analytics (a company that develops laser-based scanning and analysis technology for the mineral exploration and mining industry)
              </a> - Front-end development freelance
            </div>
            <div style={{marginBottom: '12px'}}>
              <a
                href="https://www.iceye.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >              
                ICEYE (a company that operates a constellation of synthetic-aperture radar satellites, providing hi-res. earth observation data)
              </a> - Sr. UI/UX Designer
            </div>
            <div style={{marginBottom: '12px'}}>
              <a
                href="https://aiven.io/"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                Aiven (unified platform to managed cloud services for open-source data infrastructure)
              </a> - Sr. UX Designer
            </div>
            <div style={{marginBottom: '12px'}}>
              <a
                href="https://futurice.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                Futurice (consulting company specializing in digital transformation, combining strategy, design, and technology)
              </a> - Sr. Designer (worked with client in financial sector, energy sector, transport and logistic sector)
            </div>
            <div style={{marginBottom: '12px'}}>
              <a
                href="https://www.unicef-irc.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                UNICEF Office of Research - Innocenti
              </a> - Data visualization intern
            </div>
            <br />
            <br />
            If you’re interested in my projects, feel free to contact me!
            <div style={{ margin: "20px" }} />
            <SocialMedia align="left" forAbout={true} />
          </div>
        </div>
      </div>
    </ContainerEl>
  );
};

export default Home;
