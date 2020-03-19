import React from 'react';
import SocialMedia from './SocialMedia';
import './css/about.css';
import {
  Link
} from "react-router-dom";

const Home: React.FunctionComponent<{}> = () => {
  return (
    <div className="container aboutPage">
      <Link to={`/`} >
        <div className="backButton sansSerif">
          ← Back to home
        </div>
      </Link>

      <div className="header about">
        <div>
          <div className="headerTitle bold blue">Hello! Nice to see you here!</div>
          <div className="headerBody">
            <br/>
            My name is Mustafa Saifee, I’m a <span className="bold">data visualization and UI / UX designer</span>, based in <span className="bold">Helsinki</span>, Finland. 
            <br />
            <br />
            In 2012 I graduated as an electrical engineer from <span className="bold">Indian Institute of Technology, Bombay</span>. Since I was interested in design, I started working as UI / UX designers in small studios in India. I worked for a couple of years, and then decided to pursue masters in design.
            <br />
            <br />
            In 2014 I joined <span className="bold">Aalto University, Helsinki</span> to pursue my masters in design. It was here stated designing and developing data visualization. 
            <br />
            <br />
            Currently I am working as designer in <span className="bold">Futurice, Helsinki</span>. Most of my project are data driven application which help the user to do their efficiently.
            <br />
            <br />
            In my free time I enjoy designing and developing web-based interactive visualizations and communicate stories using data.
            <br />
            <br />
            If you’re interested in my projects, please feel free to contact me!
            <SocialMedia align="left"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
