import React from 'react';
import "./SkillCard.css";
import { BsPatchCheckFill } from 'react-icons/bs';

interface Skill {
    skill: string;
    level: string;
  }
  
  interface SkillCardProps {
    title: string;
    data: Skill[];
  }

const SkillCard: React.FC<SkillCardProps> = ({data,title}) => {
  return (
<div className='card-wrapper'>
    <div className='skill-card'>
        <div className='title-wrapper'>
            <h3 className="title gradient-text">{title}</h3>
        </div>
            
            <div className="skill-content">
            {
                data.map((list,index)=>(
                    <div className="skill-details" key={index}>
                        <div id='icon'>
                            <BsPatchCheckFill className='skill-icon'/>
                        </div>
                        <div className="details">
                            <h4 className="skill-name">{list.skill}</h4>
                            <small className="muted skill-level">{list.level}</small>
                        </div>
                    </div>
                ))
            }
            </div>
    </div>
</div>
  );
};

export default SkillCard;