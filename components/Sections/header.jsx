import React from 'react'

function Header({userData}) {
    const [currentUrl,setCurrentUrl] = React.useState(userData.links[0].link)
    const [showNavMenu, setNavMenu] = React.useState(false);
  
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
        <a
        href="#"
        className={`scrollup ${scrollPosition >= "520" ? "show-scroll" : ""}`}
      >
        <i className="uil uil-arrow-up scrollup_icon"></i>
      </a>
      </header>
    )
}

export default Header
