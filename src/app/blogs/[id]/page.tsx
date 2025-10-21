import React from "react";

const BlogPost = () => {
  return (
    <main  id="body-inner">
        <div id="tt-content-wrap">
      {/* ======================== ///// Begin page header ///// ============================= */}
      <div
        id="page-header"
        className="ph-cap-lg ph-image-parallax ph-caption-parallax"
      >
        {/* Begin page header image */}
        <div className="ph-image ph-image-cover-5">
          <div className="ph-image-inner">
            <img src="/assets/imgs/our/g3.png" alt="Image" />
          </div>
        </div>
        {/* End page header image */}

        <div className="page-header-inner tt-wrap">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <div className="ph-caption-categories">
                <a href="blog-archive.html" className="ph-caption-category">
                  Lifestyle
                </a>
              </div>
              <h1 className="">
                5 Surprising Techniques to Improve Your Creativity
              </h1>
              <div className="ph-caption-meta">
                <span className="ph-cap-meta-published">February 26, 2025</span>
                <span className="ph-cap-meta-posted-by">
                  by:{" "}
                  <a
                    href="blog-archive.html"
                    title="View all posts by John Doe"
                  >
                    John Doe
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Begin page header share */}
     
        {/* End page header share */}

        {/* Scroll down */}
      
      </div>
      {/* End page header */}

      {/* ************************************* *********** Begin page content *********** ************************************** */}
      <div id="tt-page-content">
        <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
          <div className="tt-section-inner tt-wrap max-width-1000">
            {/* Begin blog post */}
            <article className="tt-blog-post">
              <div className="tt-blog-post-content">
                <p className="">
                  This is a creative portfolio showcase HTML website template...
                </p>

                <p>
                  Manor we shall merit by chief wound no or would. Oh towards
                  between subject passage sending mention or it...
                </p>

                <br />

                <h4>Heading</h4>

                <br />

                <p>
                  Eat imagine you chiefly few end ferrars compass. Be visitor
                  females am ferrars inquiry...
                </p>

              

                <p>
                  Offices parties lasting outward nothing age few resolve...
                </p>

                {/* <blockquote className="open-quote">
                  <cite>
                    Your time is limited, so don't waste it living someone else's
                    life...
                  </cite>
                  <footer>
                    <cite title="Source Title">Steve Jobs</cite>
                  </footer>
                </blockquote> */}

                <p>
                  Ladyship it daughter securing procured or am moreover mr...
                </p>
              </div>

              {/* Begin blog post tags */}
              <div className="tt-blog-post-tags">
                <ul>
                  <li>
                    <span>Tags:</span>
                  </li>
                  <li>
                    <a href="blog-archive.html">#photography</a>
                  </li>
                  <li>
                    <a href="blog-archive.html">#travel</a>
                  </li>
                  <li>
                    <a href="blog-archive.html">#motion</a>
                  </li>
                </ul>
              </div>

              {/* Blog share */}
              <div className="tt-blog-post-share">
                <div className="tt-bps-text">Share:</div>
                <div className="tt-social-buttons">
                  <ul>
                    <li>
                      <a href="#0" className="tt-magnetic-item" title="Share on Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="tt-magnetic-item" title="Share on Twitter">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="tt-magnetic-item" title="Share on Pinterest">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            {/* End blog post */}

            {/* Blog navigation */}
        

            {/* Comments */}
       
          </div>
        </div>
      </div>

      {/* ====================== ///// Begin tt-footer ///// =========================== */}
    

  
    </div>
    </main>
  );
};

export default BlogPost;
