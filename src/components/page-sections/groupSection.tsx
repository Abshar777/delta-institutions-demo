import React from "react";

const DeltaGroupSection = () => {
  const groups = [
    {
      img: "./assets/imgs/our/d2.png",
      title: "Delta Blockchain Academy",
      subtitle: "Blockchain Academy",
    },
    {
      img: "./assets/imgs/our/d6.png",
      title: "Delta Academy",
      subtitle: "Language Academy",
    },
    {
      img: "./assets/imgs/our/d4.png",
      title: "Delta Digital Academy",
      subtitle: "Digital Marketing",
    },
    {
      img: "./assets/imgs/our/d5.png",
      title: "Delta Trading Academy",
      subtitle: "Trading Academy",
    },
  ];

  return (
    <section className="gridAnim">
      <div className="container">
        <div style={{ marginBottom: "2rem" }} className="sec-head-crev">
          <div className="row">
            <div className="col-lg-8">
              <div className="relative">
                <h2 className="fs-75 text-uppercase tt-text-reveal">
                  The Delta Group
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="d-lg-flex tt-anim-fadeinup justify-content-end wrapper-imgs">
          {groups.map((group, index) => (
            <div
              key={index}
              className="fit-img overflow-hidden  "
              style={{ borderRadius: "15px" }}
            >
              <div className="tt-anim-zoomin w-full h-full">
                <img
                  style={{ borderRadius: "15px" }}
                  src={group.img}
                  alt={group.title}
                />
              </div>
              <div className="info" style={{ opacity: 1 }}>
                <h6 style={{ color: "white" }} className="fw-100">
                  {group.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeltaGroupSection;
