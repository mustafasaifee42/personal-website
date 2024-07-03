import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import DataVizProjectList from "./dataViz.json";
import ToolsProjectList from "./dataVizTools.json";
import UiUxList from "./ui-ux.json";
import TalksList from "./talks.json";
import DashboardList from "./dashboards.json";
import styled from "styled-components";

interface SectionTitleElProps {
  fill: string;
}

const SectionTitleEl = styled.div<SectionTitleElProps>`
  background-color: ${props => props.fill};
  margin: 2rem 0;
  padding: 1rem;
  display: inline-flex;
  color: var(--white);
`;

const HeaderEl = styled.div`
  margin: 11rem 0 2rem 0;
`;

const H2 = styled.h2<SectionTitleElProps>`
  color: ${props => props.fill};
  margin: 0;
`;

const FeatureEl = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const A  = styled.a<SectionTitleElProps>`
  color: ${props => props.fill};
  font-style: normal;
  &:hover {
    text-decoration: underline;
  }
`;

interface LinkElProp {
  color: string,
}

const LinkEl = styled.div<LinkElProp>`
  margin-right: 2rem;
  a {
    font-style: normal;
    color: ${props => props.color};
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface SizeProps {
  size: 'big' | 'medium';
}

const SectionEl = styled.div<SizeProps>`
  width: ${props => props.size === 'big' ? '100%' : 'calc(50% - 2rem)'};
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => props.size === 'big' ? '4rem' : '3rem'};
`;

const ImageEl = styled.div<SizeProps>`
  width: ${props => props.size === 'big' ? 'calc(70% - 2rem)' : '100%'};
  margin-right: ${props => props.size === 'big' ? '2rem' : '0'};
  margin-bottom: ${props => props.size === 'big' ? '0' : '1rem'};
`;

const ContentEl = styled.div<SizeProps>`
  width: ${props => props.size === 'big' ? '30%' : '100%'};
  flex-shrink: 0;
`;

const ImgLink = styled.img`
  transform: scale(1);
  opacity: 0.8;
  transition: 0.5s;
  &:hover{
    opacity: 1;
    transform: scale(1.03);
    transition: 0.5s;
  }
`;

const SeperatorEl = styled.div`
  height: 0.2rem;
  background-color: var(--black-400);
  width: 100%;
`;

const H1  = styled.h1`
  font-family: 'Baloo Tamma 2', sans-serif;
  font-size: 48px;
  color: var(--blue);
  margin: 0;  
`;

const Home: React.FunctionComponent<{}> = () => {
  let UiUx = UiUxList.map(
    (
      d: {
        title: string;
        img: string;
        size: string;
        description: string;
        link?: string;
        caseStudy: string;
      },
      i: number
    ) => {
      return (
        <SectionEl size={d.size as 'medium' | 'big'} key={i}>
          <ImageEl size={d.size as 'medium' | 'big'}>
            
                <Link to={`/${d.caseStudy}`}>
                  <picture>
                    <source type="image/webp" srcSet={`${d.img}.webp`} />
                    <source type="image/jpg" srcSet={`${d.img}.jpg`} />
                    <ImgLink
                      src={`${d.img}.jpg`}
                      alt="title"
                      width="100%"
                    />
                  </picture>
                </Link>
          </ImageEl>
          <ContentEl size={d.size as 'medium' | 'big'} >
            <H2 fill='var(--magenta)'>{d.title}</H2>
            <span>
              <ReactMarkdown
                className="projectDetailsMd"
                source={d.description}
              />
            </span>
            <br />
            <div style={{ display: 'flex'}}>
              <LinkEl  color='var(--magenta)'>
                <Link to={`/${d.caseStudy}`}>
                  View Case Study →
                </Link>
              </LinkEl>
              {
                d.link ? 
                <A
                  fill='var(--magenta)'
                  href={d.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Site →
                </A> : null
              }
            </div>
          </ContentEl>
        </SectionEl>
      );
    }
  );
  let projects = DataVizProjectList.map(
    (
      d: {
        title: string;
        img: string;
        size: string;
        description: string;
        link: string;
        caseStudy?: string;
      },
      i: number
    ) => {
      return (
        <SectionEl size={d.size as 'medium' | 'big'} key={i}>
          <ImageEl size={d.size as 'medium' | 'big'}>
            <a href={d.link} rel="noopener noreferrer" target="_blank">
              <picture>
                <source type="image/webp" srcSet={`${d.img}.webp`} />
                <source type="image/jpg" srcSet={`${d.img}.jpg`} />
                <ImgLink
                  src={`${d.img}.jpg`}
                  alt="title"
                  width="100%"
                />
              </picture>
            </a>
          </ImageEl>
          <ContentEl size={d.size as 'medium' | 'big'} >
            <H2 fill='var(--green)'>{d.title}</H2>
            <span>
              <ReactMarkdown
                className="projectDetailsMd"
                source={d.description}
              />
            </span>
            <br />
            <div style={{ display: 'flex'}}>
              {
                d.caseStudy ? 
                <LinkEl  color='var(--green)'>
                  <Link to={`/${d.caseStudy}`}>
                    View Case Study →
                  </Link>
                </LinkEl> : null
              }
              <A
                fill='var(--green)'
                href={d.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Site →
              </A>
            </div>
          </ContentEl>
        </SectionEl>
      );
    }
  );
  let Dashboards = DashboardList.map(
    (
      d: {
        title: string;
        img: string;
        size: string;
        description: string;
        link: string;
        caseStudy?: string;
      },
      i: number
    ) => {
      return (
        <SectionEl size={d.size as 'medium' | 'big'} key={i}>
          <ImageEl size={d.size as 'medium' | 'big'}>
            {
              d.caseStudy ? 
                <Link to={`/${d.caseStudy}`}>
                  <picture>
                    <source type="image/webp" srcSet={`${d.img}.webp`} />
                    <source type="image/jpg" srcSet={`${d.img}.jpg`} />
                    <ImgLink
                      src={`${d.img}.jpg`}
                      alt="title"
                      width="100%"
                    />
                  </picture>
                </Link>
              : <a href={d.link} rel="noopener noreferrer" target="_blank">
                <picture>
                  <source type="image/webp" srcSet={`${d.img}.webp`} />
                  <source type="image/jpg" srcSet={`${d.img}.jpg`} />
                  <ImgLink
                    src={`${d.img}.jpg`}
                    alt="title"
                    width="100%"
                  />
                </picture>
              </a>
            }
          </ImageEl>
          <ContentEl size={d.size as 'medium' | 'big'} >
            <H2 fill='var(--green)'>{d.title}</H2>
            <span>
              <ReactMarkdown
                className="projectDetailsMd"
                source={d.description}
              />
            </span>
            <br />
            <div style={{ display: 'flex'}}>
              {
                d.caseStudy ? 
                <LinkEl  color='var(--green)'>
                  <Link to={`/${d.caseStudy}`}>
                    View Case Study →
                  </Link>
                </LinkEl> : null
              }
              <A
                fill='var(--green)'
                href={d.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Site →
              </A>
            </div>
          </ContentEl>
        </SectionEl>
      );
    }
  );
  let tools = ToolsProjectList.map(
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
      return (
        <SectionEl size={d.size as 'medium' | 'big'} key={i}>
          <ImageEl size={d.size as 'medium' | 'big'}>
            <a href={d.link} rel="noopener noreferrer" target="_blank">
              <picture>
                <source type="image/webp" srcSet={`${d.img}.webp`} />
                <source type="image/jpg" srcSet={`${d.img}.jpg`} />
                <ImgLink
                  src={`${d.img}.jpg`}
                  alt="title"
                  width="100%"
                />
              </picture>
            </a>
          </ImageEl>
          <ContentEl size={d.size as 'medium' | 'big'} >
            <H2 fill='var(--green)'>{d.title}</H2>
            <span>
              <ReactMarkdown
                className="projectDetailsMd"
                source={d.description}
              />
            </span>
            <br />
            <A
              fill='var(--green)'
              href={d.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Site →
            </A>
          </ContentEl>
        </SectionEl>
      );
    }
  );
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
        <A
          fill='var(--purple)'
          rel="noopener noreferrer"
          target="_blank"
          href={d.link}
        >
          Watch Video →
        </A>
      ) : null;
      return (
        <SectionEl size={d.size as 'medium' | 'big'} key={i}>
          <ImageEl size={d.size as 'medium' | 'big'}>
            {img}
          </ImageEl>
          <ContentEl size={d.size as 'medium' | 'big'} >
            <H2 fill='var(--purple)'>{d.title}</H2>
            <span className="projectDescription">
              <ReactMarkdown className="projectDetailsMd" source={d.event} />
              <span className="italics">{d.date}</span>
            </span>
            <br />
            <br />
            {link}
          </ContentEl>
        </SectionEl>
      );
    }
  );
  return (
    <div className="container">
      <HeaderEl>
        <H1>mustafa saifee</H1>
        <div>
          Hello!
          <br />
          <br />
          I'm Mustafa Saifee, designer + developer based in Helsinki who enjoys
          telling data stories. Currently I work with United Nations Development Programme as Data Visualization Analyst.
          <br />
          <br />
          Feel free to get in touch, if you want to work together or just to say
          hi!
          <SocialMedia align="left" forAbout={false} />
        </div>
      </HeaderEl>
      <SeperatorEl />
      <div>
        <SectionTitleEl fill='var(--magenta)'>
          <h4>
            UI / UX
          </h4>
        </SectionTitleEl>
        <FeatureEl>{UiUx}</FeatureEl>
      </div>
      <SeperatorEl />
      <div>
        <SectionTitleEl fill='var(--green)'>
          <h4>
            Dashboards
          </h4>
        </SectionTitleEl>
        <FeatureEl>{Dashboards}</FeatureEl>
      </div>
      <SeperatorEl />
      <div>
        <SectionTitleEl fill='var(--green)'>
          <h4>
            Data Stories
          </h4>
        </SectionTitleEl>
        <FeatureEl>{projects}</FeatureEl>
      </div>
      <SeperatorEl />
      <div>
        <SectionTitleEl fill='var(--green)'>
          <h4>
            Data Visualization Tools
          </h4>
        </SectionTitleEl>
        <FeatureEl>{tools}</FeatureEl>
      </div>
      <SeperatorEl />
      <div>
        <SectionTitleEl fill='var(--purple)'>
          <h4>
            Talks / Workshops
          </h4>
        </SectionTitleEl>
        <FeatureEl>{talks}</FeatureEl>
      </div>
    </div>
  );
};

export default Home;
