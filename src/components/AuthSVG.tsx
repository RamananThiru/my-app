import React from "react";

type AuthSVGProps =  {
  className?: string;
  style?: React.CSSProperties;
}

const AuthSVG: React.FC<AuthSVGProps> = ({ className = "", style = {} }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <circle cx="30" cy="30" r="28" stroke="#6366f1" strokeWidth="4" fill="#fff" />
    <rect x="18" y="18" width="24" height="24" rx="6" fill="#c3cfe2" stroke="#6366f1" strokeWidth="2" />
    <path d="M30 26v8" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="34" r="2" fill="#6366f1" />
  </svg>
);

export default AuthSVG;
