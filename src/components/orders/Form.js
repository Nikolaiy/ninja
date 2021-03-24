import React from "react";

export const Form = ({children, ...props}) => {

  return (
    <form {...props} className="form" noValidate>
      {children}
    </form>
  );
};
