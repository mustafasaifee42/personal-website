import React from "react";
import SocialMedia from "./SocialMedia";
import "./css/about.css";
import { Link } from "react-router-dom";

const Home: React.FunctionComponent<{}> = () => {
  return (
    <div className="container aboutPage">
      <Link to={`/`}>
        <div className="backButton sansSerif">← Back to home</div>
      </Link>

      <div className="header about">
        <div>
          <div className="headerTitle bold blue">
            Hello! Nice to see you here!
          </div>
          <div className="headerBody">
            <br />
            My name is Mustafa Saifee, I’m a{" "}
            <span className="bold">data visualization</span> and{" "}
            <span className="bold">UI / UX designer</span>, based in{" "}
            <span className="bold">Helsinki</span>, Finland.
            <br />
            <br />
            In 2012 I graduated as an electrical engineer from{" "}
            <a
              href="http://www.iitb.ac.in/"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              Indian Institute of Technology, Bombay
            </a>
            . Since I was interested in design, I started working as UI / UX
            designers in small studios in India. I worked for a couple of years,
            and then decided to pursue masters in design.
            <br />
            <br />
            In 2014 I joined{" "}
            <a
              href="https://aaltovcd.fi/"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              Aalto University
            </a>
            , Helsinki to pursue my masters in design. It was here, I stated
            designing and developing data visualization.
            <br />
            <br />
            Currently I am working at <a
              href="https://aiven.io/"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              Aiven
            </a> as Sr. UX Designer designing data intensive applications.
            Before that, I was working as designer with{" "}
            <a
              href="https://www.futurice.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              Futurice
            </a>
            , Helsinki, focused on helping organizations use their data more
            efficiently and effectively. I have vast experience designing
            complex applications and tools used in data-driven decision-making.
            <br />
            <br />I have also worked with the{" "}
            <a
              href="https://www.unicef-irc.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              UNICEF Office of Research - Innocenti
            </a>
            , designing and developing dashboards for{" "}
            <a
              href="https://www.unicef-irc.org/research/multidimensional-overlapping-deprivation-analysis-moda-201-2015/"
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              National Multiple Overlapping Deprivation Analysis
            </a>
            , a policy tool used to identify and quantify child deprivation.
            <br />
            <br />
            My interests include data visualization, information design, UX/UI
            and designing for new technologies. In my free time I enjoy
            designing and developing web-based interactive visualizations and
            communicate stories using data.
            <br />
            <br />
            If you’re interested in my projects, feel free to contact me!
            <div style={{ margin: "20px" }} />
            <SocialMedia align="left" forAbout={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
