import React from "react";

function Icon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={{ marginRight: 8 }}
    >
      <circle cx="9" cy="9" r="9" fill="#FB772F" />
      <circle cx="9" cy="9" r="9" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="9"
          y1="0"
          x2="9"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC6E4F" />
          <stop offset="1" stopColor="#FD5A37" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
