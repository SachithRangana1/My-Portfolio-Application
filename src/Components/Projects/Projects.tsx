import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../../Source";
import ProjectCard from "./ProjectCard/ProjectCard";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";

const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="projects">
      <div className="wrapper">
        <div className="section-header">
          <div className="heading-1">
            <h4 className="sub-text">Browse My Recent</h4>
            <h2 className="gradient-text">Projects</h2>
          </div>
        </div>
        <div className="projects-container">
          {visibleProjects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
          <div className="btn-toggle">
          <button onClick={()=> setShowMore(!showMore)}>
            {!showMore ? <MdOutlineExpandMore />: < MdExpandLess/>}
          </button>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
