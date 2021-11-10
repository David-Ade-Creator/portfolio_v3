/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { userData } from "../components/Data";
import WebDesignCard from "../components/Sections/webDesignCard";
import WebAppCard from "../components/Sections/webAppCard";
import NoteWorthyCard from "../components/Sections/noteworthycard";
import Experience from "../components/Sections/experience";
import PortfolioSection from "../components/Sections/porfolioSection";
import Services from "../components/Sections/services";
import About from "../components/Sections/about";
import Header from "../components/Sections/header";

export default function Home() {
 
  const [noteworthyProjects] = React.useState(
    userData.projects.filter((project) => project.isFeatured !== true)
  );


  return (
    <div>
      <Head>
        <title>Dave the creator</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <meta name="description" content="Dave the creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
     <Header userData={userData} />

      {/* MAIN */}
      <main className="main">
        {/* HOME */}
        <section className="home section" id="home">
          <div className="home_container container grid">
            <div className="home_content grid">
              <div className="home_data">
                <p className="home_intro">{userData.intro}</p>
                <h3 className="home_title">{userData.name}</h3>
                <h3 className="home_title_1">{userData.header}</h3>
                <h3 className="home_subtitle">{userData.title}</h3>
                <p className="home_description">{userData.description}</p>

                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button_icon"></i>
                </a>

                <div className="home_social">
                  <a
                    href={userData.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="home_social-icon"
                  >
                    <i className="uil uil-linkedin-alt"></i>
                  </a>
                  <a
                    href={userData.gitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="home_social-icon"
                  >
                    <i className="uil uil-github-alt"></i>
                  </a>
                  <a
                    href={`https://wa.me/${userData.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="home_social-icon"
                  >
                    <i className="uil uil-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="home_scroll">
              <a href="#about" className="home_scroll-button button--flex">
                <i className="uil uil-mouse-alt home_scroll-mouse"></i>{" "}
                <span className="home_scroll-name">Scroll down</span>{" "}
                <i className="uil uil-arrow-down home_scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <About userData={userData} />

        {/* Experience */}
       <Experience experience={userData.experience} />

        {/* SERVICES */}
        <Services services={userData.services} />

        {/* PORTFOLIO */}
        <PortfolioSection />

        {/* other noteworthy projects */}
        <NoteWorthyCard noteworthyProjects={noteworthyProjects} />

        {/* PROJECT IN MIND*/}
        <section className="project section">
          <div className="project_bg">
            <div className="project_container container grid">
              <div className="project_data">
                <div className="project_title">
                  <h2 className="project_title">Get In Touch</h2>
                  <p className="project_description">
                    Contact me now and let's start building or creating
                    something
                  </p>
                  <a
                    href="#contact"
                    className="button button--flex button--white"
                  >
                    Contact Me{" "}
                    <i className="uil uil-message project_icon button_icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="testimonial section"></section>

        {/* CONTACT ME */}
        <section className="contact section" id="contact">
          <h2 className="section_title">Contact Me</h2>
          <span className="section_subtitle">Get in touch</span>

          <div className="contact_container container grid">
            <div>
              <div className="contact_information">
                <i className="uil uil-phone contact_icon"></i>
                <div>
                  <h3 className="contact_title">Call Me</h3>
                  <span className="contact_subtitle">8971558784</span>
                </div>
              </div>

              <div className="contact_information">
                <i className="uil uil-envelope contact_icon"></i>
                <div>
                  <h3 className="contact_title">Email</h3>
                  <span className="contact_subtitle">
                    dv.davidadeyemi@gmail.com
                  </span>
                </div>
              </div>

              <div className="contact_information">
                <i className="uil uil-map-marker contact_icon"></i>
                <div>
                  <h3 className="contact_title">Location</h3>
                  <span className="contact_subtitle">
                    Bangalore,Karnataka - India
                  </span>
                </div>
              </div>
            </div>

            <form action="" className="contact_form grid">
              <div className="contact_inputs grid">
                <div className="contact_content">
                  <label htmlFor="" className="contact_label">
                    Name
                  </label>
                  <input type="text" className="contact_input" />
                </div>
                <div className="contact_content">
                  <label htmlFor="" className="contact_label">
                    Email
                  </label>
                  <input type="email" className="contact_input" />
                </div>
                <div className="contact_content">
                  <label htmlFor="" className="contact_label">
                    Project
                  </label>
                  <input type="text" className="contact_input" />
                </div>
                <div className="contact_content">
                  <label htmlFor="" className="contact_label">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="0"
                    rows="7"
                    className="contact_input"
                  ></textarea>
                </div>

                <div>
                  <a href="" className="button button--flex">
                    Send Message{" "}
                    <i className="uil uil-message button_icon"> </i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer_bg">
          <div className="footer_social">
            <a href={userData.linkedIn} target="_blank"
                    rel="noreferrer" className="footer_social-icon">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href={userData.gitHub} target="_blank"
                    rel="noreferrer" className="footer_social-icon">
              <i className="uil uil-github-alt"></i>
            </a>
            <a href={`https://wa.me/${userData.whatsapp}`}
                    target="_blank"
                    rel="noreferrer" className="footer_social-icon">
              <i className="uil uil-whatsapp"></i>
            </a>
          </div>
          <p className="footer_copy">
            &#169; Designed & Built by David Adeyemi{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}
