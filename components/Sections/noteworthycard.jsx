import React from 'react';

function NoteWorthyCard({noteworthyProjects}) {
    return (
        <section className="noteworthy section" id="portfolio">
          <h2 className="section_title">Other Noteworthy Projects</h2>
          <span className="section_subtitle">Most recent web design work</span>

          <div
           className="noteworthy_container container">
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
                  {project.description}
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
    )
}

export default NoteWorthyCard
