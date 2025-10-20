import React from "react";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    img: "/assets/imgs/our/g2.jpg",
    date: "29 AUG",
    category: "Design",
    author: "Ethan Richards",
    title: "The top Digital Marketing strategies for business growth",
  },
  {
    img: "/assets/imgs/our/g6.jpg",
    date: "29 AUG",
    category: "Design",
    author: "Ethan Richards",
    title: "How to furnish and decorate a creative agency",
  },
  {
    img: "/assets/imgs/our/g5.jpg",
    date: "29 AUG",
    category: "Design",
    author: "Ethan Richards",
    title: "The top Digital Marketing strategies for business growth",
  },
  {
    img: "/assets/imgs/our/g7.jpg",
    date: "29 AUG",
    category: "Design",
    author: "Ethan Richards",
    title: "Simple tips for effective social media marketing",
  },
];

const BlogSection = () => {
  return (
    <section style={{ marginTop: "5rem" }} className="blog-style1 gridAnim pt-0">
      <div className="container">
        <div className="row mb-80px">
          <div className="col-lg-12">
            <div className="sec-head-modern flex justify-between items-center">
              <h2 className="fs-60 tt-text-reveal">
                Check our <br /> recent Newses{" "}
              </h2>
              <a href="#0" className="butn-arrow-circle fs-14 ml-15px">
                View All{" "}
                <span className="icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="swiper-container">
          <div className="swiper-wrapper">
            {blogPosts.map((post, index) => (
              <div className="swiper-slide" key={index}>
                <div className="item">
                  <div className="fit-img h-350px border-radius-15px o-hidden">
                    <img src={post.img} alt="" />
                    <a href="#0" className="date">
                      <div className="d-flex text-black align-items-center justify-content-center">
                        <span style={{ color: "black !important" }}>
                          <i>{post.date.split(" ")[0]}</i>{" "}
                          {post.date.split(" ")[1]}
                        </span>
                      </div>
                    </a>
                    <a href="#0" className="icon relative">
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="flex items-center justify-center"
                      >
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                  <div className="text">
                    <div className="info fw-300 mb-15px d-flex align-items-center">
                      <div className="sm-title-dote mr-30px">
                        <span className="opacity-6">{post.category}</span>
                      </div>
                      <div>
                        <span className="fs-14 opacity-6">
                          By : {post.author}
                        </span>
                      </div>
                    </div>
                    <h6>{post.title}</h6>
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

export default BlogSection;
