/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
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


function WebDesignCard({ webdesigns }) {
  return (
    <div className="design_container container" >
      <div>
        <motion.div
          className="design_content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {webdesigns.map((design, index) => (
            <motion.div
              className="design_grid grid"
              key={index}
              variants={item}
            >
              <div className="design_img">
                <img src={design.image} alt={design.title} />
              </div>

              <div className="design_data">
                <h3 className="design_title">{design.title}</h3>
                <p className="design_description">{design.description}</p>
                <div className="design_stack">
                  {design.stacks.map((stack, i) => (
                    <span key={i}>{stack}</span>
                  ))}
                </div>
                <div>
                  <a href={design.url} target="_blank" rel="noreferrer">
                    <i className="uil uil-external-link-alt design_icon"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default WebDesignCard;
