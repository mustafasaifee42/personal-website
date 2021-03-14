import React from "react";
import "./css/socialMedia.css";
import Twitter from "./imgs/twitter.svg";
import LinkedIn from "./imgs/linkedin.svg";
import Github from "./imgs/github.svg";
import Email from "./imgs/email.svg";

const SocialMedia: React.FunctionComponent<{
  align: string;
  forAbout: boolean;
}> = (props) => {
  return (
    <div
      className={`${
        props.forAbout ? "socialMediaContainerForAbout" : "socialMediaContainer"
      } ${props.align}`}
    >
      <a
        href="mailto:saifee.mustafa@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Email} alt="email-icon" className="icons" />
      </a>
      <a
        href="https://twitter.com/mustafasaifee42"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Twitter} alt="twitter-icon" className="icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/mustafasaifee/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={LinkedIn} alt="linkedin-icon" className="icons" />
      </a>
      <a
        href="https://github.com/mustafasaifee42/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Github} alt="github-icon" className="icons" />
      </a>
    </div>
  );
};

export default SocialMedia;
