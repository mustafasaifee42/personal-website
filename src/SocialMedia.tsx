import React from "react";
import styled from "styled-components";
import LinkedIn from "./imgs/linkedin.svg";
import Github from "./imgs/github.svg";
import Email from "./imgs/email.svg";

interface SocialMediaContainerProps {
  isAbout: boolean;
  align: string;
}

const SocialMediaContainer = styled.div<SocialMediaContainerProps>`
  display: flex;
  margin:${props => !props.isAbout ? '3rem 0' : '3rem 0 7rem 0'};
  justify-content: ${props => props.align === 'center' ? 'center' : 'flex-start'};;
`;


const IconsEl = styled.img`
  margin:0 5px; 
  width:36px;
  height:36px;
  &:hover{
    filter: grayscale(100%);
    transition: 0.5s;
  }
`;


const SocialMedia: React.FunctionComponent<{
  align: string;
  forAbout: boolean;
}> = (props) => {
  return (
    <SocialMediaContainer isAbout={props.forAbout} align={props.align}>
      <a
        href="mailto:saifee.mustafa@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconsEl src={Email} alt="email-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/mustafasaifee/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconsEl src={LinkedIn} alt="linkedin-icon" />
      </a>
      <a
        href="https://github.com/mustafasaifee42/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconsEl src={Github} alt="github-icon" />
      </a>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
