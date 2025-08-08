import React from "react";
import { Card } from "antd";
import AuthSVG from "./AuthSVG";
import "./AuthCard.css";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ title, children }) => {
  return (
    <div className="auth-container">
      <Card title={title} className="auth-card">
        <div className="title-divider"></div>
        <AuthSVG className="auth-icon" />
        {children}
      </Card>
    </div>
  );
};

export default AuthCard;
