import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../../Source";
import ProjectCard from "./ProjectCard/ProjectCard";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import ProjectNavigation from "./ProjectNavigation/ProjectNavigation";


const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeProjects, setactiveProjects] = useState(projects);
  
  const getTabs = ()=>{
    const tabs = ["All"];
    projects.map((item)=>{
      if(!tabs.includes(item.category)){
        tabs.push(item.category);
      }
    });
    return tabs;
  }
  const setProjects = (value:string)=> {
    if (value === "All"){
      setactiveProjects(showMore ? projects : projects.slice(0, 3));
    }else{
      const new_projects = projects.filter(item=> item.category === value);
      setactiveProjects(showMore ? new_projects : new_projects.slice(0, 3));;
    }
  }
  const visibleProjects = showMore ? activeProjects : activeProjects.slice(0, 3);

  return (
    <section id="projects">
      <div className="wrapper">
        <div className="section-header">
          <div className="heading-1">
            <h4 className="sub-text">Browse My Recent</h4>
            <h2 className="gradient-text">Projects</h2>
          </div>
        </div>
        <ProjectNavigation tabs={getTabs()} onChange={setProjects}/>
        <div className="projects-container">
          {visibleProjects.map((activeProjects:any, index:number) => (
            <ProjectCard {...activeProjects} key={index} />
          ))}
          <div className="btn-toggle">
          <button onClick={()=> setShowMore(!showMore)}>
            {!showMore ? <FaAnglesDown />: <FaAnglesUp />}
          </button>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
