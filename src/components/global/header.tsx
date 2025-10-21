import React from "react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Hiring", href: "/hiring" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: ".5rem",
        zIndex: 999999,
      }}
      className=""
    >
      <nav
        style={{
          width: "98%",
          left: ".3rem",
          position: "relative",
          padding: 0,
        }}
        className="navbar navbar-expand-lg bord blur1"
      >
        <div className="container o-hidden">
          {/* Logo */}
          <a className="logo w-100px" href="#">
            <img
              style={{
                filter: "contrast(0) brightness(100)",
                scale: "1.4",
              }}
              src="/assets/imgs/our/logo.png"
              alt="logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          {/* Navbar links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={item.href}>
                    <span className="rolling-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-button">
            <a href="page-contact.html" className="butn border-radius-5px">
              <span className="text">Let's contact</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
