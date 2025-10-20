import React from "react";

const IntroSection = () => {
  const stats = [
    { number: "86+", label: "Projects Done" },
    { number: "98%", label: "Successful Rating" },
    { number: "223m", label: "Growth Net Worth" },
  ];

  return (
    <section className="intro-style2 gridAnim">
      <div className="container">
        {/* Heading Row */}
        <div className="row mb-80px">
          <div className="col-lg-3">
            <div className="text-uppercase fs-14">
              <span>How We Are?</span>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }} className="col-lg-9 relative">
            <h2
              style={{ textTransform: "capitalize" }}
              className="fs-60   tt-text-reveal"
            >
              We are a global institution of innovation and learning
            </h2>
          </div>
        </div>

        {/* About Row */}
        <div className="row mb-80px">
          <div className="col-lg-9 offset-lg-3">
            <div className="row">
              <div
                style={{ position: "relative",marginTop:"-5rem" }}
                className="col-md-5  pr-30px md-mb30"
              >
                <h2
                  style={{
                    display: "flex",
                    textWrap: "nowrap",
                    height: "100%",
                  }}
                  className="fs-250 h-full ph-caption-description"
                >
                  8K
                </h2>
                <span
                  style={{
                    marginTop: "-5rem",
                    position: "relative",
                    left: "60%",
                  }}
                  className="ph-caption-description"
                >
                  Happy Members
                </span>
              </div>

              <div className="col-lg-1 line-left border-color-transparent-white-light md-hide"></div>

              <div className="col-lg-6 d-flex v-align-between">
                <p className="ph-caption-description">
                  At Delta International Institute, trading is more than numbers
                  on a screen — it’s a life-changing skill. Founded by seasoned
                  traders and educators, Delta has become a global hub for
                  Forex, Crypto, and advanced market education.
                </p>
                <span>
                  <img src="assets/imgs/lg-arrow-top.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "col-lg-3"
                  : index === 1
                  ? "col-lg-3 offset-lg-1"
                  : "col-lg-4 offset-lg-1"
              }`}
            >
              <div className="number-clean pb-30px line-bottom border-color-transparent-white-light md-mb50">
                <h2 className="fs-100 ph-caption-description">{item.number}</h2>
                <span className="opacity-6 ph-caption-description">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
