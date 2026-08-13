import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`custom-container mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
