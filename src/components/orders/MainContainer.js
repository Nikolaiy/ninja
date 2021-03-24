import React from "react";


export const MainContainer = ({ children, ...props }) => {

  return (
    <div
      className="conteiner"
      {...props}
    >
      {children}
    </div>
  );
};
