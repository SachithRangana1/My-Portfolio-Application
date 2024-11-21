import React from 'react';
import "./ProjectCard.css";
import { AiOutlineShareAlt } from 'react-icons/ai';

interface ProjectCardProp {
    title: string;
    image: string;
    description: string;
    stack: {name: string, icon: React.ReactElement, iconColor?: string}[];
    demoLink: string;
    className?: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProp> = ({ title, image, stack, demoLink, className }) => {
    return (
      <div className={`project-card ${className ? className : ' '}`}>
        <div className="picture">
            <img src={image} alt={title} />
        </div>
        <div className="details">
            <div className="top">
                <h2 className="title">{title}</h2>
            </div>
            {/* <div className="middle">
                <p className="muted description">{description}</p>
            </div> */}
            <div className="bottom">
                <div className="stack-container">
                    <div className="stack-tech">Tech-Stack</div>
                    <div className="stack">
                        <div className="stack-box-container">
                            {
                                stack.map((list, index)=>(
                                    <div className='stack-box' key={index}>
                                        <div className="stack-icon-container">
                                            <span className="stack-icon"
                                            style={{color:list.iconColor}}>
                                                {list.icon}
                                            </span>
                                            <span className="stack-name">{list.name}</span>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="bottons-container">
                    <a href={demoLink} target='_blank' className='btn primary'>GitHub</a>
                    <div className="d-flex justify-content-center btn btn-share"><AiOutlineShareAlt/></div>
            </div>
        </div>
      </div>
    );
  };


export default ProjectCard;