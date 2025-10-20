"use client";
import React from "react";

const VideoPopup = () => {
  return (
    <div className="tt-section gridAnim no-padding-top">
      <div className="tt-section-inner">
        {/* Begin Clipper */}
        <div className="tt-clipper p-[1rem]">
          <a
            href="https://deltainstitutions.com/images/my/aboutus.png"
            className="tt-clipper-inner"
            data-cursor="Play<br>Reel"
            data-fancybox
            data-caption="My awesome showreel. :)"
          >
            {/* Clipper background (video) */}
            <div className="tt-clipper-bg">
              <video
                loop
                muted
                autoPlay
                className="scale-105"
                playsInline
                preload="metadata"
                poster="https://deltainstitutions.com/images/my/aboutus.png"
              >
            
              </video>
            </div>

           
          </a>
        </div>
        {/* End Clipper */}
      </div>
    </div>
  );
};

export default VideoPopup;
