import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import "./css/introSection.css";
import "./css/section.css";
import "./css/home.css";
import DataVizProjectList from "./dataViz.json";
import UiUxList from "./ui-ux.json";
import TalksList from "./talks.json";

const Home: React.FunctionComponent<{}> = () => {
  let odd = true;
  let UiUx = UiUxList.map(
    (
      d: {
        title: string;
        img: string;
        size: string;
        description: string;
        link: string;
      },
      i: number
    ) => {
      let clss = odd ? "odd" : "even";
      odd = d.size === "medium" ? !odd : odd;
      return (
        <div className={`${d.size} ${clss}`} key={i}>
          <div className={`${d.size}-img`}>
            <Link to={`/${d.link}`}>
              <picture>
                <source type="image/webp" srcSet={`${d.img}.webp`} />
                <source type="image/jpg" srcSet={`${d.img}.jpg`} />
                <img
                  src={`${d.img}.jpg`}
                  className="imgLink"
                  alt="title"
                  width="100%"
                />
              </picture>
            </Link>
          </div>
          <div className={`projectContent${d.size}`}>
            <h3 className="projectTitle">{d.title}</h3>
            <span className="projectDescription">
              <ReactMarkdown
                className="projectDetailsMd"
                source={d.description}
              />
            </span>
            <br />
            <Link to={`/${d.link}`} className="viewSite">
              Read More →
            </Link>
          </div>
        </div>
      );
    }
  );
  odd = true;
  let projects = DataVizProjectList.map(
    (
      d: {
        title: string;
        img: string;
        size: string;
        description: string;
        link: string;
      },
      i: number
    ) => {
      let clss = odd ? "odd" : "even";
      odd = d.size === "medium" ? !odd : odd;
      return (
        <div className={`${d.size} ${clss}`} key={i}>
          <div className={`${d.size}-img`}>
            <a href={d.link} rel="noopener noreferrer" target="_blank">
              <picture>
                <source type="image/webp" srcSet={`${d.img}.webp`} />
                <source type="image/jpg" srcSet={`${d.img}.jpg`} />
                <img
                  src={`${d.img}.jpg`}
                  className="imgLink"
                  alt="title"
                  width="100%"
                />
              </picture>
            </a>
          </div>
          <div className={`projectContent${d.size}`}>
            <h3 className="projectTitle">{d.title}</h3>
            <span className="projectDescription">
              <ReactMarkdown
                className="projectDetailsMd"
                source={d.description}
              />
            </span>
            <br />
            <a
              href={d.link}
              rel="noopener noreferrer"
              className="viewSite"
              target="_blank"
            >
              View Site →
            </a>
          </div>
        </div>
      );
    }
  );
  odd = true;
  let talks = TalksList.map(
    (
      d: {
        title: string;
        size: string;
        event?: string;
        link?: string;
        date: string;
        site?: string;
        img?: string;
      },
      i: number
    ) => {
      let clss = odd ? "odd" : "even";
      odd = d.size === "medium" ? !odd : odd;
      let img = d.link ? (
        <a href={d.link} rel="noopener noreferrer" target="_blank">
          <picture>
            <source type="image/webp" srcSet={`${d.img}.webp`} />
            <source type="image/jpg" srcSet={`${d.img}.jpg`} />
            <img
              src={`${d.img}.jpg`}
              className="imgLink"
              alt="title"
              width="100%"
            />
          </picture>
        </a>
      ) : (
        <picture>
          <source type="image/webp" srcSet={`${d.img}.webp`} />
          <source type="image/jpg" srcSet={`${d.img}.jpg`} />
          <img
            src={`${d.img}.jpg`}
            className="imgLink"
            alt="title"
            width="100%"
          />
        </picture>
      );
      let link = d.link ? (
        <a
          href={d.link}
          rel="noopener noreferrer"
          target="_blank"
          className="viewSite"
        >
          Watch Video →
        </a>
      ) : null;
      return (
        <div className={`${d.size} ${clss}`} key={i}>
          <div className={`${d.size}-img`}>{img}</div>
          <div className={`projectContent${d.size}`}>
            <h3 className="projectTitle">{d.title}</h3>
            <span className="projectDescription">
              <ReactMarkdown className="projectDetailsMd" source={d.event} />
              <span className="italics">{d.date}</span>
            </span>
            <br />
            <br />
            {link}
          </div>
        </div>
      );
    }
  );
  return (
    <div className="container">
      <div className="header">
        <h1 className="headerTitle blue">mustafa saifee</h1>
        <div className="headerBody">
          Hello!
          <br />
          <br />
          I’m Mustafa Saifee, designer + developer based in Helsinki who enjoys
          telling data stories.
          <br />
          <br />
          Currently I am working working with{" "}
          <a
            href="https://www.futurice.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            Futurice
          </a>
          .
          <br />
          <br />
          Feel free to get in touch, if you want to work together or just to say
          hi!
          <SocialMedia align="left" forAbout={false} />
        </div>
      </div>
      <div className="seperator" />
      <div className="section dataViz">
        <h2 className="sectionTitle sansSerif bold">Data Visualization</h2>
        <div className="features">{projects}</div>
      </div>
      <div className="seperator" />
      <div className="section UiUx">
        <h2 className="sectionTitle sansSerif bold">UI / UX</h2>
        <div className="features">{UiUx}</div>
      </div>
      <div className="seperator" />
      <div className="section talks">
        <h2 className="sectionTitle sansSerif bold">Talks / Workshops</h2>
        <div className="features">{talks}</div>
      </div>
    </div>
  );
};

export default Home;
