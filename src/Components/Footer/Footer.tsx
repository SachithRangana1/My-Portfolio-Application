import React from 'react';
import './Footer.css'
import { footer } from '../../Source';
import { Link } from 'react-scroll';
import { FaRegCopyright } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id='footer'>
      <div className="wrapper">
      {
        footer.map((list, index)=>(
          <div className="column" key={index}>
            <Link to={list.id} smooth={true} className='route' key={index}>
                  {list.name}
            </Link>
          </div>
        ))
      }
      </div>
      <div className="copy-rights">
        <span>Copyright <FaRegCopyright /> 2024 Sachith Rangana All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;