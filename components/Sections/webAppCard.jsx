/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function WebAppCard({ featuredProjects }) {
  return (
    <motion.div className="portfolio_container container" variants={container} initial="hidden" animate="visible">
    
        {featuredProjects.map((project, index) => (
          <motion.div className="portfolio_content" key={index} variants={item}>
            <div className="portfolio_img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="portfolio_data">
              <p className="featured_portfolio">Featured Project</p>
              <h3 className="porfolio_title">{project.title}</h3>
              <p className="portfolio_description">
                {project.description}
              </p>
              <div className="portfolio_stack">
                {project.stacks.map((stack, i) => (
                  <span key={i}>{stack}</span>
                ))}
              </div>
              <div>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <i className="uil uil-github-alt portfolio_icon"></i>
                </a>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <i className="uil uil-external-link-alt portfolio_icon"></i>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
  );
}

export default WebAppCard;
