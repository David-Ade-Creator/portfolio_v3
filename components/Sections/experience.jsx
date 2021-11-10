import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Experience({experience}) {
    const [companyInfo, setCompanyInfo] = React.useState(experience[0]);
    return (
        <section className="experience section" id="experience">
        <h2 className="section_title">My Experience</h2>
        <span className="section_subtitle">Where I’ve Worked</span>
        <div className="experience_container container">
          <div className="experience_tab_container">
            {experience.map((singleExp, i) => (
              <div
              className={companyInfo.name === singleExp.name ? "experience_tab_list experience_tab_active" : "experience_tab_list" }
                key={i}
                onClick={() => setCompanyInfo(singleExp)}
              >
                <p>{singleExp.name}</p>
              </div>
            ))}
          </div>
          <AnimatePresence exitBeforeEnter>
          <motion.div className="experience_tab_data" 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.30 }}
          key={companyInfo ? companyInfo.name : "empty"}
          >
            <h3 className="experience_title">{companyInfo.companyName}</h3>
            <p className="experience_date">{companyInfo.duration}</p>
            {companyInfo.responsibilities.map((responsibility, i) => (
              <div className="experience_list" key={i}>
                <span>
                  <i className="uil uil-angle-double-right experience_icon"></i>
                </span>
                <span>
                  <p className="experience_description">{responsibility}</p>
                </span>
              </div>
            ))}
          </motion.div>
          </AnimatePresence>
        </div>
      </section>
    )
}

export default Experience
