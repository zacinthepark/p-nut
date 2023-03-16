import React from "react";

const LoginSignupForm = (props) => {
  return (
    <div className="flex flex-row w-616">
      <div className="w-1/2 bg-stone-200">
        <p className="font-nanum font-semibold">Welcome !</p>
        <img src="src\assets\Logo.png" alt="Logo Image" />
        <span>{props.phrase}</span>
        <span className="mx-8">{props.direction}</span>
      </div>
      <div className="w-1/2 bg-white ">{props.children}</div>
    </div>
  );
};

export default LoginSignupForm;
