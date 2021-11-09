/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { userData } from "../components/Data";

export default function Home() {
  const [currentUrl,setCurrentUrl] = React.useState(userData.links[0].link)
  const [showNavMenu, setNavMenu] = React.useState(false);
  const [porfolioTab,setPorfolioTab] = React.useState(1);
  const [featuredProjects] = React.useState(
    userData.projects.filter((project) => project.isFeatured === true)
  );
  const [noteworthyProjects] = React.useState(
    userData.projects.filter((project) => project.isFeatured !== true)
  );
  const [companyInfo, setCompanyInfo] = React.useState(userData.experience[0]);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <header
        className={`header ${scrollPosition >= "80" ? "scroll-header" : ""}`}
        id="header"
      >
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Dave
          </a>
          <div
            className={`nav_menu ${showNavMenu ? "show_menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav_list grid">
              {userData.links.map((link,i) =>
              <li className="nav_item" onClick={() => setNavMenu(false)} key={i}>
              <a href={link.link} className={`${currentUrl === link.link ?  "nav_link active-link" : "nav_link"}`} onClick={()=>setCurrentUrl(link.link)}>
                <i className={`uil ${link.icon} nav_icon`}></i>{link.title}
              </a>
            </li>
              )}
            </ul>

            <i
              className="uil uil-times nav_close"
              id="nav-close"
              onClick={() => setNavMenu(false)}
            ></i>
          </div>

          <div className="nav_btns">
            <div
              className="nav_toggle"
              id="nav-toggle"
              onClick={() => setNavMenu(true)}
            >
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>

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
        <section className="about section" id="about">
          <h2 className="section_title">About Me</h2>
          <span className="section_subtitle">{userData.aboutMeSubheader}</span>
          <div className="about_container container grid">
            <div className="about_img">
            <img
              src={userData.aboutPhoto}
              alt="A guy putting on glasses in a printed shirt"
            />
            </div>
            

            <div className="about_data">
              <p className="about_description">
                {userData.aboutMeDescription1}
              </p>
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

              <div className="about_buttons">
                <a href="" className="button button-flex">
                  Download CV
                  <i className="uil uil-download-alt button_icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="experience section" id="experience">
          <h2 className="section_title">My Experience</h2>
          <span className="section_subtitle">Where I’ve Worked</span>
          <div className="experience_container container">
            <div className="experience_tab_container">
              {userData.experience.map((singleExp, i) => (
                <div
                className={companyInfo.name === singleExp.name ? "experience_tab_list experience_tab_active" : "experience_tab_list" }
                  key={i}
                  onClick={() => setCompanyInfo(singleExp)}
                >
                  <p>{singleExp.name}</p>
                </div>
              ))}
            </div>
            <div className="experience_tab_data">
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
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section" id="services">
          <h2 className="section_title">Services</h2>
          <span className="section_subtitle">What i offer</span>

          <div className="services_container container grid">
            {userData.services.map((service, index) => (
              <div className="services_content" key={index}>
                <div>
                  <i className={`uil ${service.icon} services_icon`}></i>
                  <h3 className="services_title">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="portfolio section" id="portfolio">
          <h2 className="section_title">Portfolio</h2>
          <span className="section_subtitle" style={{marginBottom:"0"}}>Most recent web design work</span>
          <div className="porfolio_tab_buttons container">
            <span className={`${porfolioTab === 1 ? "porfolio_tab_btn_active" : "porfolio_tab_btn" }`}  onClick={()=>setPorfolioTab(1)}>Web Applications</span><span className={`${porfolioTab === 2 ? "porfolio_tab_btn_active" : "porfolio_tab_btn" }`} onClick={()=>setPorfolioTab(2)}>Web Design</span>
          </div>

         {porfolioTab === 1 && <div className="portfolio_container container">
            <div>
              {featuredProjects.map((project, index) => (
                <div className="portfolio_content" key={index}>
                  <div className="portfolio_img">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="portfolio_data">
                    <p className="featured_portfolio">Featured Project</p>
                    <h3 className="porfolio_title">{project.title}</h3>
                    <p className="portfolio_description">
                      Designing of websites and web apps is something i love to
                      do, making pixel perfect designs
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
                </div>
              ))}
            </div>
          </div>}

         {porfolioTab === 2 && <div className="design_container container">
            <div>
              <div className="design_content">
                {userData.webdesigns.map((design, index) => (
                  <div className="design_grid grid" key={index}>
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
                        <i className="uil uil-external-link-alt design_icon"></i></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>}
        </section>

        {/* other noteworthy projects */}
        <section className="noteworthy section" id="portfolio">
          <h2 className="section_title">Other Noteworthy Projects</h2>
          <span className="section_subtitle">Most recent web design work</span>

          <div className="noteworthy_container container">
            {noteworthyProjects.map((project, index) => (
              <div className="noteworthy_project" key={index}>
                <div className="noteworthy_project_icons">
                  <i className="uil uil-folder noteworthy_icon_1"></i>
                  <div className="noteworthy_project_sub_icons">
                    <a href={project.repo} target="_blank" rel="noreferrer"><i className="uil uil-github-alt noteworthy_icon_2"></i></a>
                    <a href={project.url} target="_blank" rel="noreferrer"><i className="uil uil-external-link-alt noteworthy_icon_2"></i></a>
                  </div>
                </div>
                <h3 className="noteworthy_project_title">{project.title}</h3>
                <p className="noteworthy_project_description">
                  Can help in increasing the quantity and quality of traffic to
                  your website through organic search engine results, and rank
                  your site higher in search results
                </p>
                <div className="noteworthy_project_stack">
                  {project.stacks.map((stack, index) => (
                    <span key={index}>{stack}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

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

      <a
        href="#"
        className={`scrollup ${scrollPosition >= "520" ? "show-scroll" : ""}`}
      >
        <i className="uil uil-arrow-up scrollup_icon"></i>
      </a>
    </div>
  );
}
