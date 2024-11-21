import React, { useEffect, useRef, useState } from 'react';
import './ProjectNavigation.css';

interface NavProps {
    tabs: string[];
    onChange: (tab: string) => void;
}

const ProjectNavigation: React.FC<NavProps> = ({tabs, onChange}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [indicatorWidth, setindicatorWidth] = useState(0);
    const itemEls = useRef<(HTMLButtonElement | null)[]>(new Array());
    const sumArray = (arr:number[]): number=> {
        let sum = 0;
        for (let i =0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
    useEffect(()=>{
        const preElm = itemEls.current.filter((_, index)=> index < activeIndex);
        setOffset(
            sumArray(preElm.map(item=> item?.offsetWidth || 0))
        )
        setindicatorWidth(itemEls.current[activeIndex]?.offsetWidth || 0)
    })

  return (
    <nav className="project-navigation">
        {
            tabs.map((tab, index)=>(
                <button
                ref={(el)=>itemEls.current[index] = el}
                onClick={()=>{
                    setActiveIndex(index);
                    onChange(tab)
                }}
                key={index}
                >
                    {tab}
                </button>
            ))
        }
        <span 
        className="indicator"
        style={{left: `${offset}px`, width: `${indicatorWidth}px`}}></span>
    </nav>
  );
};

export default ProjectNavigation;