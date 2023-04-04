import React from "react";
import MyPageRecipeBlock from "./MyPageRecipeBlock";

const MyPageRecipe = ({ myRecipe }) => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-lg font-extrabold">내가 작성한 레시피</p>
        <p className="font-extrabold text-lg text-#FF6B6C ml-10">13</p>
      </div>
      <div className="flex justify-center py-30">
        <div className="grid grid-cols-3 gap-20 ">
          {myRecipe.map((recipe) => (
            <MyPageRecipeBlock
              imgPath={recipe.thumbnail_image_url}
              recipeTitle={recipe.title}
              recipeId={recipe.id}
              key={`recipe-${recipe.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPageRecipe;
