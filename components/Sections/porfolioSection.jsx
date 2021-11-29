import React from 'react'
import { userData } from '../Data';
import WebAppCard from './webAppCard'
import WebDesignCard from './webDesignCard';
import {useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


function PortfolioSection() {
    const [porfolioTab,setPorfolioTab] = React.useState(1);
    const [featuredProjects] = React.useState(
      userData.projects.filter((project) => project.isFeatured === true)
    );
    const animationControl = useAnimation();
    const {inView, ref} = useInView();
  
    if (inView) {
      animationControl.start({
        x: 0,
        transition: {
          delay: 0.7,
        }
      });
    }
    return (
        <section ref={ref} className="portfolio section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle" style={{marginBottom:"0"}}>Most recent web design work</span>
        <div className="porfolio_tab_buttons container">
          <span className={`${porfolioTab === 1 ? "porfolio_tab_btn_active" : "porfolio_tab_btn" }`}  onClick={()=>setPorfolioTab(1)}>Web Applications</span><span className={`${porfolioTab === 2 ? "porfolio_tab_btn_active" : "porfolio_tab_btn" }`} onClick={()=>setPorfolioTab(2)}>Web Design</span>
        </div>

       {porfolioTab === 1 && <WebAppCard featuredProjects={featuredProjects} />}

       {porfolioTab === 2 && <WebDesignCard webdesigns={userData.webdesigns} />}
      </section>
    )
}

export default PortfolioSection
