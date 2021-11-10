/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationContainer,slideUpItems } from "../../utils/animation";


function WebDesignCard({ webdesigns }) {
  const animationControl = useAnimation();
    const {inView, entry, ref} = useInView();
  
    if (inView) {
      animationControl.start("visible")
    }

  return (
    <div className="design_container container" >
      <div>
        <motion.div
          className="design_content"
          variants={animationContainer}
          initial="hidden"
          animate="visible"
          ref={ref}
        >
          {webdesigns.map((design, index) => (
            <motion.div
              className="design_grid grid"
              key={index}
              variants={slideUpItems}
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
