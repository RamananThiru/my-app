import React from "react";

type AuthSVGProps =  {
  className?: string;
  style?: React.CSSProperties;
}

const AuthSVG: React.FC<AuthSVGProps> = ({ className = "", style = {} }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M6 10C6 5.58172 9.58172 2 14 2C18.4183 2 22 5.58172 22 10V11C22 15.4183 18.4183 19 14 19H10C4.47715 19 0 14.5228 0 9C0 6.79086 1.79086 5 4 5H6V10Z"
      stroke="#6366f1"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="9" cy="9" r="2" fill="#6366f1" />
  </svg>
);

export default AuthSVG;
