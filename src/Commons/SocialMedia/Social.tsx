import React from 'react';
import { socialHandles } from '../../Source';
import './Social.css';

const Social: React.FC = () => {
  return (
    <div className='handles-container'>
        {
            socialHandles.map((handle, index)=>(
                <a href={handle.link} target='_blank' className='social-wrapper' key={index}>
                    {handle.icon}
                </a>
            ))
        }
    </div>
  );
};

export default Social;