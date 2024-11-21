import React, { useState } from 'react';
import './About.css'
import { GiAchievement } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import me from "../../assets/img1.jpeg"
import { MdOutlineExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { FaAnglesDown, FaAnglesUp } from 'react-icons/fa6';


const About: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(prevState => !prevState);
  };

  return (
    <section className='about-me'>
        
          <div className="wrapper">
            <div className="section-header">
              <h3 className="heading1"><span>Get to know more</span></h3>
              <h2>About me</h2>
            </div>
          </div>

    <div className='about-wrapper'>

      <div className='img-wrapper'>
        <img src={me} alt="" id="pic"/>
      </div>
      <div className='description'>
          <div className="card-container">
            <div className="card">
              <div className="inner-card">
                <div className='icon-wrapper'>
                  <GiAchievement />
                </div>
                  <h3>Experience</h3>
                  <span>1+ years</span>
                  <span>Fullstack Development</span>
                </div>
            </div>

            <div className="card">
              <div className="inner-card">
                <div className='icon-wrapper'>
                  <FaUserGraduate />
                </div>
                  <h3>Education</h3>
                  <span>B.Sc Bachelor Degree</span>
                  {/* <span>Fullstack Development</span> */}
              </div>
            </div>
          </div>
          <div className="about-content">
          <p>
              {showFullText ? (
                <>
                  I graduated as a Mechanical Engineer from De Montfort University and initially began my career as an Executive 
                  Mechanical Engineer, where I worked from 2021 to 2023. During this time, I developed strong analytical and problem-solving 
                  skills, working on various engineering projects. However, my passion for technology and software development led me to 
                  transition into the field of software engineering. With a solid foundation in engineering principles and hands-on experience
                   in software development, I bring a unique perspective to the tech industry. My journey reflects my adaptability and eagerness
                    to learn, and I am excited to continue growing in the dynamic world of software engineering.
                  <button onClick={toggleText} className="toggle-button">
                  <FaAnglesUp />
                  </button>
                </>
              ) : (
                <>
                  I graduated as a Mechanical Engineer from De Montfort University and initially began my career as an Executive 
                  Mechanical Engineer...
                  <button onClick={toggleText} className="toggle-button">
                  <FaAnglesDown />
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

    </div>

          
    </section>
    
  );
};

export default About;