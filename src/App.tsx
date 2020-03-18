import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from  './About';
import ProjectPage from  './ProjectPage';
import SocialMedia from './SocialMedia';
import './css/style.css';
import './css/navBar.css';
import './css/footer.css';
import UiUxList from './ui-ux.json';

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
        <div className="attributes sansSerif">Icons made by <a href="https://www.flaticon.com/authors/freepik" className="italics" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/pixel-perfect" className="italics"  title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" className="italics"  title="Flaticon">www.flaticon.com</a></div>        
      </div>
    </Router>
  );
}

export default App;
