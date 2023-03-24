import React, { useState } from "react";

const MyPageRecipeComponent = props => {
  const { imgPath, foodTitle } = props;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img className="object-cover shadow-md w-250" src={imgPath} alt="" />
      {isHovering && (
        <div className="absolute inset-0 grid content-between w-full h-full grid-cols-1 rounded-10 bg-gray-800/50">
          <div className="flex justify-end w-full p-10">
            <img className=" h-30" src="public\assets\Trash Can.png" alt="" />
          </div>
          <div className="flex justify-between p-10 text-center">
            <p className="text-lg text-white">{foodTitle}</p>
            <img className=" h-30" src="public\assets\Edit.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPageRecipeComponent;
