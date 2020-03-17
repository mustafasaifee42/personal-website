import React , { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './css/projectPage.css';
import './css/mdFile.css';

const ProjectPage: React.FunctionComponent<{
  markDownFileLink: string,
  title: string,
  role: string,
  year: string,
  client: string,
  images: string[],
}> = (props) => {
  
  const [ mdFile , setmdFile ] = useState('')
  fetch(props.markDownFileLink)
    .then(res => res.text())
    .then(text => {
      setmdFile(text)
    });
  

  let img = props.images.map((d:string, i:number) => {
    return (
      <img src={d} alt="title" className="projectImage" width="100%" key={i} />
    )
  })
  
  if (mdFile === '')
    return (<div />)
  else
    return (
      <div>
        <div className="container">
          <div className="bold blue projectPageTitle">{props.title}</div>
          <div className="projectText">
            <div className="sideBar">
              <div className="capitalize textTitle bold sansSerif">
                Client
              </div>
              <div>
                {props.client}
              </div>
              <br/>
              <div className="capitalize textTitle bold sansSerif">
                Year
              </div>
              <div>
                {props.year}
              </div>
              <br />
              <div className="capitalize textTitle bold sansSerif">
                Role
              </div>
              <div>
                {props.role}
              </div>
            </div>
            <ReactMarkdown className="md" source={mdFile}/>
          </div>
        </div>
        <div className="projectImgContainer">
          {img}
        </div>
      </div>
    );
};

export default ProjectPage;