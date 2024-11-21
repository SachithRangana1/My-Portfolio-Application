import React, { useEffect, useState } from 'react';
import "./Achivements.css";
import Odometer from "react-odometerjs"

const Achivements: React.FC = () => {
    const [experience, setExperience] =useState(0);
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClients(500);
            setExperience(1);
            setProjects(15);
        }, 3000)

        return ()=> clearTimeout(timeOutId);
    },[]);


  return (
    <div className='achievements-container'>
        <div className="card">
            <div className="d-flex justify-content-center">
                <Odometer value={experience} className='title' />
                <h1 className='title'>+</h1>
            </div>
            <p className='muted name'>Years Experience</p>
        </div>

        <div className="card">
            <div className="d-flex justify-content-center">
                <Odometer value={clients} className='title' />
            </div>
            <p className='muted name'>Client</p>
        </div>

        <div className="card">
            <div className="d-flex justify-content-center">
                <Odometer value={projects} className='title' />
                <h1 className='title'>+</h1>
            </div>
            <p className='muted name'>Completed Projects</p>
        </div>
    </div>
  );
};

export default Achivements;