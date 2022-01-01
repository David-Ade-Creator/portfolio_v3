/* eslint-disable @next/next/no-img-element */
import React from "react";

function About({ userData }) {

  return (
    <section className="section" id="about">
      <div className="about">
        <h2 className="section_title">
          About Me
        </h2>
        <span className="section_subtitle">
          {userData.aboutMeSubheader}
        </span>
        <div
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
            <div className="about_info">
              {userData.skills.map((skill, index) => {
                return (
                  <div className="about_info-title" key={index}>
                    <i className="uil uil-angle-double-right about_icon"></i>
                    <p className="about_skill">{skill}</p>
                  </div>
                );
              })}
            </div>

            {/* <div className="about_buttons">
              <a href="softwarecv.pdf" className="button button-flex">
                Download CV
                <i className="uil uil-download-alt button_icon"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
