import { motion } from 'framer-motion'
import React from 'react'
import { animationContainer, slideUpItems } from '../../utils/animation'

function Services({services}) {
    return (
        <section className="services section" id="services">
          <h2 className="section_title">Services</h2>
          <span className="section_subtitle">What i offer</span>

          <motion.div
          variants={animationContainer}
          initial="hidden"
          animate="visible"
           className="services_container container grid">
            {services.map((service, index) => (
              <motion.div className="services_content" key={index} variants={slideUpItems}>
                <div>
                  <i className={`uil ${service.icon} services_icon`}></i>
                  <h3 className="services_title">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
    )
}

export default Services
