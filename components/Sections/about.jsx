/* eslint-disable @next/next/no-img-element */
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  animationContainer,
  slideUpContainer,
  slideUpItems,
} from "../../utils/animation";

function About({ userData }) {
  const animationControl = useAnimation();
  const { inView, ref } = useInView();

  React.useEffect(() => {
    if (inView) {
      animationControl.start({
        y: 0,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animationControl.start({
        y: "-100vh",
      });
    }
  }, [animationControl, inView]);

  return (
    <section className="section" id="about" ref={ref}>
      <motion.div className="about" variants={slideUpContainer} initial="hidden" animate="visible">
        <motion.h2 variants={slideUpItems} className="section_title">
          About Me
        </motion.h2>
        <motion.span variants={slideUpItems} className="section_subtitle">
          {userData.aboutMeSubheader}
        </motion.span>
        <motion.div
          variants={slideUpItems}
          className="about_container container grid"
        >
          <div className="about_img">
            <img
              src={userData.aboutPhoto}
              alt="A guy putting on glasses in a printed shirt"
            />
          </div>

          <div className="about_data">
            <p className="about_description">{userData.aboutMeDescription1}</p>
            <p className="about_description">
              Here are a few technologies I’ve been working with recently:
            </p>
            <motion.div variants={slideUpItems} className="about_info">
              {userData.skills.map((skill, index) => {
                return (
                  <motion.div className="about_info-title" key={index}>
                    <i className="uil uil-angle-double-right about_icon"></i>
                    <p className="about_skill">{skill}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div className="about_buttons">
              <a href="" className="button button-flex">
                Download CV
                <i className="uil uil-download-alt button_icon"></i>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
