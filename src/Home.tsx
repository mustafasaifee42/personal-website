import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";
import SocialMedia from './SocialMedia';
import './css/introSection.css';
import './css/section.css';
import './css/home.css';
import DataVizProjectList from './dataViz.json';
import UiUxList from './ui-ux.json';
import TalksList from './talks.json';

const Home: React.FunctionComponent<{}> = () => {
  let odd = true;
  let UiUx = UiUxList.map((d:{"title":string, "img":string, "size":string,"description":string , "link":string }, i:number) => {
    let clss = odd ? 'odd' : 'even'
    odd = d.size === 'medium' ? !odd : odd
    return (
      <div className={`${d.size} ${clss}`} key={i}>
        <div className={`${d.size}-img`}>
          <Link to={`/${d.link}`} >
            <img src={d.img} className="imgLink" alt="title" width="100%" />
          </Link>
        </div>
        <div className={`projectContent${d.size}`}>
          <span className="projectTitle">
            {d.title}
          </span>
          <br />
          <span className="projectDescription">
            <ReactMarkdown className="projectDetailsMd" source={d.description}/>
          </span>
          <br />
          <Link to={`/${d.link}`} className="viewSite" >
            Read More →
          </Link>
        </div>
      </div>
    )
  })
  odd = true;
  let projects = DataVizProjectList.map((d:{"title":string, "img":string, "size":string,"description":string , "link":string }, i:number) => {
    let clss = odd ? 'odd' : 'even'
    odd = d.size === 'medium' ? !odd : odd
    return (
      <div className={`${d.size} ${clss}`} key={i}>
        <div className={`${d.size}-img`}>
          <a href={d.link} rel="noopener noreferrer" target="_blank">
            <img src={d.img} className="imgLink" alt="title" width="100%" />
          </a>
        </div>
        <div className={`projectContent${d.size}`}>
          <span className="projectTitle">
            {d.title}
          </span>
          <br />
          <span className="projectDescription">
            <ReactMarkdown className="projectDetailsMd" source={d.description}/>
          </span>
          <br />
          <a href={d.link} rel="noopener noreferrer" className="viewSite" target="_blank">
            View Site →
          </a>
        </div>
      </div>
    )
  })
  odd = true;
  let talks = TalksList.map((d:{"title":string, "size":string,"event"?:string , "link"?:string, "date":string , "site"?:string, "img"?:string }, i:number) => {
    let clss = odd ? 'odd' : 'even'
    odd = d.size === 'medium' ? !odd : odd
    let img = d.link ? <a href={d.link} rel="noopener noreferrer" target="_blank"> <img src={d.img} alt="title"  className="imgLink" width="100%" /> </a> : <img src={d.img} alt="title" width="100%" />
    let link = d.link ? <a href={d.link} rel="noopener noreferrer" target="_blank" className="viewSite">Watch Video →</a> : null
    return (
      <div className={`${d.size} ${clss}`} key={i}>
      <div className={`${d.size}-img`}>
        {img}
      </div>
        <div className={`projectContent${d.size}`}>
          <span className="projectTitle">
            {d.title}
          </span>
          <br />
          <span className="projectDescription">
            <ReactMarkdown className="projectDetailsMd" source={d.event}/>
            <span className="italics">{d.date}</span>
          </span>
          <br />
          <br />
          {link}
        </div>
      </div>
    )
  })
  return (
    <div className="container">
      <div className="header">
        <div className="headerTitle blue">mustafa saifee</div>
        <div className="headerBody">
          Hello!
          <br />
          <br />
          I am a part designer and part developer who enjoys telling data stories.
          <br />
          <br />
          Currently I am based in Helsinki, Finland and working in Futurice.
          <br />
          <br />
          Feel free to get in touch, if you want to work together or just to say hi!
          <SocialMedia align="left"/>
        </div>
      </div>
      <div className="seperator" />
      <div className="section dataViz">
        <div className="sectionTitle sansSerif bold">
          Data Visualization
        </div>
        <div className='features'>
          {projects}
        </div>
      </div>
      <div className="seperator" />
      <div className="section UiUx">
        <div className="sectionTitle sansSerif bold">
          UI / UX
        </div>
        <div className='features'>
          {UiUx}
        </div>
      </div>
      <div className="seperator" />
      <div className="section talks">
        <div className="sectionTitle sansSerif bold">
          Talks / Workshops
        </div>
        <div className="features">
          {talks}
        </div>
      </div>
    </div>
  );
}

export default Home;
