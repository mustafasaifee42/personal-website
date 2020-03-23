import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import ReactGA from 'react-ga';
import Home from './Home';
import About from  './About';
import ProjectPage from  './ProjectPage';
import SocialMedia from './SocialMedia';
import './css/style.css';
import './css/navBar.css';
import './css/footer.css';
import UiUxList from './ui-ux.json';


ReactGA.initialize('UA-32895936-1');
ReactGA.set({ anonymizeIp: true });
ReactGA.pageview('/');

function App() {
  let UiUxRoute = UiUxList.map((d:{"title":string, "img":string, "size":string,"description":string , "link":string, "markDownFile":string,"role":string , "year":string, "client":string, 'images':string[] }, i:number) => {
    return (
      <Route path={`/${d.link}`} key={i} exact render={
        () => {
        return(<ProjectPage 
          markDownFileLink={d.markDownFile}
          title={d.title}
          year={d.year}
          role={d.role}
          client={d.client}
          images={d.images}
        />)
        }
      }/>
    )
  })
  return (
    <Router>
      <div className={`topNav`}>
        <Link to={`/`} >
          <div className="backToHome">
            mustafa saifee
          </div> 
        </Link>
        <Link to={`/about`} >
          <div className="navItem sansSerif">
            About
          </div>
        </Link>
      </div>
      <Route path={`/`} exact render={
        () => {
        return( <Home /> )
        }
      }/>
      <Route path={`/about`} exact render={
        () => {
        return( <About /> )
        }
      }/>
      {UiUxRoute}
      <div className={`footer`}>
        <div className="footerTitle">
          Let's have a chat!
        </div> 
        <SocialMedia align="center" />
        <br />
        <div className='container footerNote sansSerif'>
        <span className="bold">PRIVACY POLICY</span> <br />This website does not save any information about you. We do not directly use cookies or other tracking technologies. We do, however, use Google Analytics for mere statistical reasons. It is possible that Google Analytics sets cookies or uses other tracking technologies, but this data is not directly accessible by us.
        <br />
        <br />
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" className="italics" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/pixel-perfect" className="italics"  title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" className="italics"  title="Flaticon">www.flaticon.com</a></div>        
        </div>      
      </div>
    </Router>
  );
}

export default App;
