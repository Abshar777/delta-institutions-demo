"use client";

"use client";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  return (
    <div
      style={{ zIndex: 999999999 }}
      id="tt-page-transition"
    >
      <div className="tt-ptr-overlay-top tt-noise"></div>
      <div className="tt-ptr-overlay-bottom tt-noise"></div>
      <div className="tt-ptr-preloader">
        <div className="tt-ptr-prel-content">
          {/* <h1 className="text-white">Delta</h1> */}
          {/* Hint: You may need to change the img height and opacity to match your logo type.
              You can do this from the "theme.css" file (find: ".tt-ptr-prel-image"). */}
          <img
            src="/assets/imgs/our/logo.png"
            className="tt-ptr-prel-image"
            alt="Logo"
          />
        </div>
        {/* /.tt-ptr-prel-content */}
      </div>
      {/* /.tt-ptr-preloader */}
    </div>
  );
};

export default Preloader;
