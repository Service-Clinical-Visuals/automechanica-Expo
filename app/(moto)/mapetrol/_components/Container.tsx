"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`custom-container ${className}`}>
      {children}
    </div>
  );
};

export default Container;
