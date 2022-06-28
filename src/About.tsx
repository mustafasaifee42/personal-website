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
            I’m Mustafa Saifee, a designer and developer with 7+ years of
            experience. My interests include{" "}
            <span className="bold">data visualization</span>{" "}
            <span className="bold">Information Design</span>, and{" "}
            <span className="bold">UI/UX Design</span>.
            <br />
            <br />I enjoy doing projects which helps make data more relatable
            and understandable. I have workded with{" "}
            <a
              href="http://www.iitb.ac.in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              United Nations Developemnet Programme
            </a>
            {" "}and{" "}
            <a
              href="https://www.unicef-irc.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              UNICEF Office of Research - Innocenti
            </a>
            , to make complex and large data sets more presentable and
            communicable to a large and varied audience. There I have worked on
            designing and developing dashboards and maps to communicate complex
            data.
            <br />
            <br />
            Currently I am working at{" "}
            <a
              href="https://aiven.io/"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              Aiven
            </a>{" "}
            as Sr. UX Designer designing data intensive applications. At Aiven,
            I am responsible for designing and prototyping information
            architecture, user flow and journey, and UI/UX for Clickhouse for
            Aiven (fully managed cloud database) and Apache Flink for Aiven
            (fully managed data streaming service). At Aiven, I also worked on
            Account and Identity {"&"} Access Management (IAM) for Aiven Web
            Console (service that helps admins better manage their projects,
            services, and user access).
            <br />
            <br />
            Before that, I was working as designer with{" "}
            <a
              href="https://www.futurice.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Futurice
            </a>
            , Helsinki, focused on helping organizations use their data more
            efficiently and effectively. I have vast experience designing
            complex applications and tools used in data-driven decision-making.
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
