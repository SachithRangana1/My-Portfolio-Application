import React from 'react';
import './Hero.css';
import me from '../../assets/image (25).jpeg'
import Social from '../../Commons/SocialMedia/Social';
import Achivements from '../../Commons/Achivements/Achivements';
import CvFile from '../../assets/cv-file/sachith-rangana-cv.pdf'

const Hero: React.FC = () => {
  return (
    <section id='about'>
      <div id='about-container'>
        <div className='column prof-pic'>
          <img src={me} alt="" id='pic'/>
        </div>
        <div className="info-container wrapper">
          <div className="column1 lh-sm">
            <h3 className='sub-title text-secondary lh-lg'>Hello, I'm</h3>
            <span className='primary'>Sachith Rangana</span>
            <h3 className='heading-1 text-secondary fw-bolder'>Fullstack Web Developer</h3>
            <div className='btn-wrapper d-flex justify-content-center'>
              <a href={CvFile} download="./src/assets/cv-file/sachith-rangana-cv.pdf" target='-blank' smooth={true} className='btn btn-outline-dark'>Download CV</a>
              {/* <Link to='contact' smooth={true} className='btn btn-secondary'>Contact info</Link> */}
            </div>
            <div className='social-media'>
               <Social />
            </div>
          </div>
        </div>
      </div>
      <div className="achivements-cluster">
        <div className="wrapper">
          <Achivements/>
        </div>
      </div>
    </section>
  );
};

export default Hero;