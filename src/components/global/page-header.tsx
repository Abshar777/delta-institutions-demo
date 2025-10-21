import React from "react";

const PageHeader = ({
  description1,
  description2,
  firstTitle,
  secondTitle,
  maskTitle,
}: {
  description1: string;
  description2: string;
  firstTitle: string;
  secondTitle: string;
  maskTitle: string;
}) => {
  return (
    <div
      id="page-header"
      className="ph-full ph-full-m ph-cap-xxxxlg ph-center ph-image-parallax ph-caption-parallax"
    >
      {/* Page header image (commented out) */}
      {/*
      <div className="ph-image ph-image-cover-1">
        <div className="ph-image-inner">
          <img src="assets/img/page-header/ph-1.jpg" alt="Image" />
        </div>
      </div>
      */}

      {/* Page header video (commented out) */}
      {/*
      <div className="ph-video ph-video-cover-1">
        <div className="ph-video-inner">
          <video loop muted autoPlay playsInline preload="metadata" poster="assets/vids/1920/video-1-1920.jpg">
            <source src="assets/vids/placeholder.mp4" data-src="assets/vids/1920/video-1-1920.mp4" type="video/mp4" />
            <source src="assets/vids/placeholder.webm" data-src="assets/vids/1920/video-1-1920.webm" type="video/webm" />
          </video>
        </div>
      </div>
      */}


      <div className="page-header-inner gridAnim  tt-wrap">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <h2 className="ph-caption-subtitle">{firstTitle}</h2>
            <h1 className="ph-caption-title">{secondTitle}</h1>
            <div className="ph-caption-description max-width-700">
              {description1}
              <br /> {description2}
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PageHeader;
