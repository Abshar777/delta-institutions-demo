import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "6rem",
        background: "#000",
      }}
      className=""
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          
        }}
        className="absolute bg-black/30"
      ></div>

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
        }}
        className=""
      >
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "40%",
          }}
        >
          <source src="/assets/video/hero2.mp4" />
        </video>
      </div>

      <header style={{ color: "white" }} className="hero-style2">
        <div className="container">
          <div className="row justify-content-between mb-80px">
            <div className="col-lg-12">
              <div className="caption mb-40px">
                <h2
                  style={{ textAlign: "center" }}
                  className="fs-80 text-uppercase"
                >
                  Unlock Your
                  <br /> Potential with <br /> Delta
                </h2>
              </div>
            </div>

            {/* Optional right-side text blocks (commented in original HTML) */}
            {/* 
            <div className="col-lg-3 d-flex justify-content-end">
              <div className="pt-50px text-uppercase md-hide">
                <span className="mb-10px d-block">BUILDING</span>
                <span className="mb-10px d-block">OUTSTANDING</span>
                <span className="mb-10px d-block">DESIGN &</span>
                <span>DEVELOPMENT</span>
              </div>
            </div>

            <div className="col-lg-2 offset-lg-4 col-md-4">
              <h6 className="fs-18 sm-mb30">
                From 1994-2025 <br />
                we’re growing fast
              </h6>
            </div> 
            */}

            <div
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="d-flex"
            >
              <div className="col-lg-5 col-md-8">
                <div className="text">
                  <p
                    style={{
                      textTransform: "capitalize",
                      textAlign: "center",
                      color: "rgb(167, 166, 166)",
                    }}
                    className="fs-18"
                  >
                    Delta International Institution blends education, technology,
                    and hands-on learning to help students build future-ready
                    skills.
                  </p>
                  {/* 
                  <a href="#0" className="butn-arrow-circle fs-14 mt-15px">
                    Get Started{" "}
                    <span className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a> 
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </header>
    </div>
  );
};

export default HeroSection;
