import React from "react";

const Footer = () => {
  const socialIcons = [
    { icon: "fab fa-x-twitter", href: "#" },
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-youtube", href: "#" },
  ];

  const contactInfo = [
    "Gold souq,Metro station- One Deira Building ,410. Dubai-United Arab Emirates",
    "info@deltainstitutions.com",
    "+971507528009", 
  ];

  const links = ["Delta Digital Academy", "Delta Trading Academy", "Delta Destinations", "Delta Blockchain Academy"];

  return (
    <footer className="pb-50px rounded-t-3xl backdrop-blur-3xl bg-black/5 pt-10">
      <div className="container">
        <div className="row">
          {/* Social Icons */}
          <div className="col-lg-4">
            <a style={{ width: "6rem" }} className="logo scale-200" href="#">
              <img
                style={{ filter: "contrast(0) brightness(100);  ;" }}
                src="/assets/imgs/our/logo.png"
                alt="logo"
              />
            </a>
            <div className="social-icon-circle md-mb30">
              {socialIcons.map((item, index) => (
                <a key={index} href={item.href}>
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="item d-flex text-uppercase md-mb30">
              <h6 className="mr-25px fs-18">Find Us</h6>
              <div>
                {contactInfo.map((info, index) => (
                  <p
                    key={index}
                    className={
                      index !== contactInfo.length - 1 ? "mb-10px" : ""
                    }
                  >
                    {info}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3">
            <div className="item d-flex text-uppercase">
              <h6 className="mr-25px fs-18">Links</h6>
              <div>
                {links.map((link, index) => (
                  <p
                    key={index}
                    className={index !== links.length - 1 ? "mb-10px" : ""}
                  >
                    <a href="#0">{link}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-align-center mt-80px">
          <p className="fs-14">© 2025 Delta Institutions. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
