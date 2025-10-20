"use client";

import React from "react";

const testimonials = [
  {
    text: `“A rebrand is not typically done in a chaotic, archaic industry like ours, so their work has really set us apart. 10/10 for Hub’s team."`,
    name: "B. Gordon",
    role: "CEO Founder, Archin Studio",
    image: "assets/imgs/testim/1.jpeg",
    colorClass: "cls-1",
    bgClass: "",
  },
  {
    text: `“A rebrand is not typically done in a chaotic, archaic industry like ours, so their work has really set us apart. 10/10 for Hub’s team."`,
    name: "B. Gordon",
    role: "CEO Founder, Archin Studio",
    image: "assets/imgs/testim/1.jpeg",
    colorClass: "cls-1",
    bgClass: "",
  },
  {
    text: `“A rebrand is not typically done in a chaotic, archaic industry like ours, so their work has really set us apart. 10/10 for Hub’s team."`,
    name: "B. Gordon",
    role: "CEO Founder, Archin Studio",
    image: "assets/imgs/testim/1.jpeg",
    colorClass: "cls-3",
    bgClass: "bg-light",
  },
  {
    text: `“A rebrand is not typically done in a chaotic, archaic industry like ours, so their work has really set us apart. 10/10 for Hub’s team."`,
    name: "B. Gordon",
    role: "CEO Founder, Archin Studio",
    image: "assets/imgs/testim/1.jpeg",
    colorClass: "cls-1",
    bgClass: "",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testim-style2 gridAnim p-0 mb-80px">
      <div className="container">
        <div className="sec-head-stand text-align-center mb-80px">
          <h2 className="fs-65 tt-text-reveal fw-400">What our client say?</h2>
        </div>

        <div className="testim-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((item, index) => (
              <div className={`swiper-slide ${item.bgClass}`} key={index}>
                <svg
                  className="w-90px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 800"
                >
                  <defs>
                    <style>{`
                      .cls-1 { fill: #fff; }
                      .cls-2 { fill: none; }
                      .cls-3 { fill: #333; }
                    `}</style>
                  </defs>
                  <path
                    className={item.colorClass}
                    d="M225.87,344.5a233.54,233.54,0,0,1,66.2-60.93l7.93-4.9v-64.1l-19.77,3.76C77,256.67,66.67,421.53,66.67,454.17,66.67,524.4,108.37,600,199.9,600A128.53,128.53,0,0,0,333.24,476.46q.12-2.88.09-5.76A130.2,130.2,0,0,0,225.87,344.5Zm-26,222.17c-73.73,0-99.9-60.6-99.9-112.5,0-37.84,12.4-160.24,166.67-198.77v4.87a266.2,266.2,0,0,0-84,89.83L171.37,375H200a98,98,0,0,1,100,95.7,95.94,95.94,0,0,1-95.81,96.06Q202,566.76,199.9,566.67Zm426-222.17a233.71,233.71,0,0,1,66.17-60.93l7.93-4.9v-64.1l-19.77,3.76C477,256.67,466.67,421.53,466.67,454.17,466.67,524.4,508.37,600,599.9,600A128.53,128.53,0,0,0,733.24,476.46q.12-2.88.09-5.76A130.2,130.2,0,0,0,625.87,344.5Zm-26,222.17c-73.7,0-99.87-60.6-99.87-112.5,0-37.84,12.4-160.24,166.67-198.77v4.87a266.2,266.2,0,0,0-84,89.83L571.37,375H600a98,98,0,0,1,100,95.7,95.94,95.94,0,0,1-95.81,96.06q-2.15,0-4.29-.09Z"
                  />
                  <path className="cls-2" d="M0,0H800V800H0Z" />
                </svg>

                <p className={
                    item.bgClass !== "bg-light" ? "text-white" : "text-black"
                }>{item.text}</p>

                <div className="info-text d-flex align-items-center mt-80px">
                  <div>
                    <div className="img fit-img h-60px w-60px border-radius-50 o-hidden">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  <div className="ml-15px">
                    <h6 className={
                        item.bgClass !== "bg-light" ? "fs-18 mb-10px text-white" : "fs-18 mb-10px text-black"
                    }>{item.name}</h6>
                    <p style={{
                        color:item.bgClass !== "bg-light" ? "white" : "black",
                        opacity: 0.8,
                    }} className="fs-14 ">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
