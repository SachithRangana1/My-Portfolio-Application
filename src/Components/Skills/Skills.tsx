import React from 'react';
import './Skills.css';
import { skills } from '../../Source';
import SkillCard from './SkillCard/SkillCard';

const Skill: React.FC = () => {
  return (
    <section id='skills'>
      <div className="wrapper-skill">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="sub-head">Explore my experience</span>
            <span className="gradient-text">Experiece</span>
          </h1>
        </div>
        <div className="skills-container">
          {
            skills.map((list,index)=>(
              <SkillCard 
              {...list} 
              key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skill;