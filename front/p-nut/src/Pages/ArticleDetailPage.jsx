import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import OrderBlockComponent from "../Components/OrderBlockComponent";

const ArticleDetailPage = () => {
  // content ingredients nickNAme quantity recipeSteps thumbnail_image_url time title visit
  const data = useLoaderData();

  const {
    content,
    ingredients,
    nickName,
    quantity,
    recipeSteps,
    thumbnailImageUrl,
    time,
    title,
    visit,
  } = data.data;

  const profileImgPath = "/assets/Article_circle.png";
  // const recipeSteps = [
  //   {
  //     orderDescription: "두부, 통조림햄, 소시지는 먹기 좋은 크기로 썰어주세요.",
  //     orderImgPath: "/assets/orderImg1.png",
  //   },
  //   {
  //     orderDescription: "끓이세요.",
  //     orderImgPath: "/assets/orderImg2.png",
  //   },
  // ];
  const commentIdList = [1234, 12345, 123456];
  const commentIdListCnt = commentIdList.length;
  const favoriteCnt = 13;
  const favoriteHeart = 1;

  return (
    <div className="flex w-1200 mx-auto flex-col">
      <div className="flex mb-85">
        <img
          src={`${thumbnailImageUrl}`}
          alt=""
          className="w-586 h-407 mx-7 my-auto"
        />
        <div className="w-600 pl-80">
          <div className="flex items-center mb-30">
            <img src={profileImgPath} alt="" className="w-51 h-51 mx-4" />
            <div className="mx-15 text-27">{nickName}</div>
          </div>
          <div className="text-33 font-bold mb-32 h-37">{title}</div>
          <div className="flex items-center pb-32 grey-underbar">
            <div className="border border-#2B2C2B text-26 px-10 py-5 font-semibold">
              {time}
            </div>
            <div className="ml-27 text-26 font-semibold">{quantity}</div>
          </div>
          <div className="my-26 text-22 font-medium">{content}</div>
          <div className="w-full flex place-content-between">
            <div className="text-22">
              댓글 {commentIdListCnt} 좋아요 {favoriteCnt}
            </div>
            <img
              src={`/assets/heart${favoriteHeart}.png`}
              alt=""
              className="mr-43"
            />
          </div>
        </div>
      </div>
      <div className="text-42 font-bold h-auto mb-21">재료</div>
      <div className="w-1200 px-65 pb-56 grey-underbar border-#2B2C2B">
        <div className="bg-#F2F2F2 text-26 w-1070 py-20 px-75">
          {ingredients}
        </div>
      </div>
      {Object.entries(recipeSteps).map(([key, value], idx) => (
        <OrderBlockComponent imgPath={key} text={value} idx={idx} />
      ))}
      <div className="mt-150 flex items-center w-1200 mx-auto">
        <div className="text-37 font-bold">댓글</div>
        <div className="text-55 text-#FF6B6C font-extrabold ml-22">
          {commentIdListCnt}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;

export async function loader({ params }) {
  const res = await axios.get(`/boards/board/${params.articleId}`);
  console.log(res);
  return res;
}
