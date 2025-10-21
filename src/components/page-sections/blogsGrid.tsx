import React from "react";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      category: "Lifestyle",
      title: "5 Surprising Techniques to Improve Your Creativity",
      date: "February 26, 2025",
      author: "John Doe",
      image: "/assets/imgs/our/g2.jpg",
      desc: "For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire...",
      link: "blog-post.html",
    },
    {
      id: 2,
      category: "Tutorials",
      title: "Avoid the Top 10 Mistakes Made by Beginners",
      date: "February 24, 2025",
      author: "John Doe",
      image: "/assets/imgs/our/g6.jpg",
      desc: "Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal brought minuter raising invited gay. Contented consisted continual curiosity contained get sex. Forth child dried in in aware do pursuit regular...",
      link: "blog-post.html",
    },
    {
      id: 3,
      category: "Lifestyle",
      title: "Why Some People Save Money With This Method",
      date: "February 23, 2025",
      author: "John Doe",
      image: "/assets/imgs/our/g5.jpg",
      desc: "Indulgence announcing uncommonly met she continuing two unpleasing terminated. Now busy say down the shed eyes roof paid her. Of shameless collected suspicion existence in. Share walls stuff think but the arise guest course to advice...",
      link: "blog-post.html",
    },
    {
      id: 4,
      category: "Inspiration",
      title: "Want to Step Up Your Skills? You Need to Read This First",
      date: "February 21, 2025",
      author: "John Doe",
      image: "/assets/imgs/our/g7.jpg",
      desc: "Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained...",
      link: "blog-post.html",
    },
    {
      id: 5,
      category: "Tutorials",
      title: "Secrets to Getting Your Project to Complete Quickly",
      date: "February 19, 2025",
      author: "John Doe",
      image: "/assets/imgs/our/g8.jpg",
      desc: "On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest ecstatic an suitable finished of oh entered at excited at forming hearted be of justice...",
      link: "blog-post.html",
    },
  ];

  return (
    <div id="tt-page-content gridAnim">
      <div className="tt-section padding-bottom-xlg-120">
        <div className="tt-section-inner tt-wrap max-width-1000">
          <div id="blog-list" className="bli-image-cropped">
            {blogs.map((blog) => (
              <article className="blog-list-item" key={blog.id}>
                <a href={blog.link} className="bli-image-wrap" data-cursor="Read<br>More">
                  <figure className="bli-image tt-anim-zoomin">
                    <img src={blog.image} loading="lazy" alt="Image" />
                  </figure>
                </a>

                <div className="bli-info">
                  <div className="bli-categories">
                    <a href="blog-archive.html">{blog.category}</a>
                  </div>
                  <h2 className="bli-title">
                    <a href={blog.link}>{blog.title}</a>
                  </h2>
                  <div className="bli-meta">
                    <span className="published">{blog.date}</span>
                    <span className="posted-by">
                      - by{" "}
                      <a href="blog-archive.html" title={`View all posts by ${blog.author}`}>
                        {blog.author}
                      </a>
                    </span>
                  </div>
                  <div className="bli-desc">{blog.desc}</div>
                  <a href={blog.link} className="tt-btn tt-btn-primary">
                    <span data-hover="Read More">Read More</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="tt-pagination">
            <div className="tt-pagin-prev">
              <a href="#" className="tt-pagin-item tt-magnetic-item">
                <i className="fas fa-arrow-left"></i>
              </a>
            </div>
            <div className="tt-pagin-numbers">
              <a href="#" className="tt-pagin-item tt-magnetic-item active">
                1
              </a>
              <a href="#" className="tt-pagin-item tt-magnetic-item">
                2
              </a>
              <a href="#" className="tt-pagin-item tt-magnetic-item">
                3
              </a>
              <a href="#" className="tt-pagin-item tt-magnetic-item">
                4
              </a>
            </div>
            <div className="tt-pagin-next">
              <a href="#" className="tt-pagin-item tt-pagin-next tt-magnetic-item">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
