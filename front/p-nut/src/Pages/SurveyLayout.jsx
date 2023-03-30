import React from "react";
import { Outlet } from "react-router-dom";

const SurveyLayout = () => {
  return (
    <div className="bg-#ECECEC w-screen h-screen flex items-center justify-center">
      <main className="w-1024 h-768 bg-prettywhite shadow-md">
        <div className="flex flex-col items-center justify-center h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SurveyLayout;
