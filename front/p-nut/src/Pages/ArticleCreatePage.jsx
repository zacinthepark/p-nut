import React, { useRef, useState } from "react";
import ArticleImgBlockComponent from "../Components/ArticleImgBlockComponent";

const ArticleCreatePage = () => {
  const subTitle = "font-semibold mb-24";
  const [orderArr, setOrderArr] = useState([1]);
  const [thumbnailImgFile, setThumbnailImgFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [cookingTime, setCookingTime] = useState(null);
  const [ingredients, setIngredient] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const cookingTimeRefArr = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [stepContent, setStepContent] = useState([""]);
  const stepContentRef = [useRef(null)];
  const stepImgFileRef = [useRef(null)];

  // 단계 추가 버튼 핸들러
  const addStepBtnHandler = () => {
    const lastIdx = orderArr.length + 1;
    setOrderArr((pre) => {
      return [...pre, lastIdx];
    });
  };

  // 요리시간 버튼 핸들러
  const cookingTimeBtnHandler = (idx) => {
    cookingTimeRefArr.forEach((ref) => {
      ref.current.classList.remove("border-#2F80ED");
      ref.current.classList.remove("text-#2F80ED");
    });

    cookingTimeRefArr[idx].current.classList.add("border-#2F80ED");
    cookingTimeRefArr[idx].current.classList.add("text-#2F80ED");

    setCookingTime(idx);
  };

  // 양 변경
  const quantityHandler = (type) => {
    if (type === "-" && quantity > 1) {
      setOrderArr((prev) => {
        return prev - 1;
      });
    } else {
      setQuantity((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <>
      <div className="flex items-center flex-col justify-evenly w-full h-100 px-auto grey-underbar">
        <div className="text-23 text-center ml-48">
          자신의 레시피에 대해 자유롭게 이야기 해주세요!
        </div>
        <button
          type="button"
          className="bg-#2F80ED rounded-20 text-prettywhite font-semibold px-50 py-5 text-xl"
        >
          글 등록하기
        </button>
      </div>
      <div className="w-1200 mx-auto border-x border-solid border-#7F807F px-203 pt-41">
        <ArticleImgBlockComponent
          division="thumbnail"
          setThumbnailImgFile={setThumbnailImgFile}
          text="대표 이미지 업로드"
          size="w-full h-354"
        />
        <div className="flex flex-col w-full text-21">
          <div className="w-full grey-underbar flex items-center">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="레시피의 이름이 무엇인가요?"
              className="py-26 w-full px-38 inline-block"
              onChange={setTitle}
            />
            <div className="inline">0/30</div>
          </div>
          <div className="w-full grey-underbar flex items-center">
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              className="resize-none py-26 px-38 w-full"
              placeholder="레시피에 대한 간단한 설명을 붙여주세요"
              onChange={setContent}
            />
            <div className="inline">0/30</div>
          </div>
          <div className="px-40 mt-24 pb-31 grey-underbar">
            <div className={subTitle}>예상 소요 시간</div>
            <button
              type="button"
              className="border border-#7F807F p-10 mr-20 border-#2F80ED text-#2F80ED"
              onClick={() => {
                cookingTimeBtnHandler(0);
              }}
              id="time0"
              ref={cookingTimeRefArr[0]}
            >
              15분 컷
            </button>
            <button
              type="button"
              className="border border-#7F807F p-10 mr-20"
              onClick={() => {
                cookingTimeBtnHandler(1);
              }}
              id="time1"
              ref={cookingTimeRefArr[1]}
            >
              30분 컷
            </button>
            <button
              type="button"
              className="border border-#7F807F p-10 mr-20"
              onClick={() => {
                cookingTimeBtnHandler(2);
              }}
              id="time2"
              ref={cookingTimeRefArr[2]}
            >
              45분 컷
            </button>
            <button
              type="button"
              className="border border-#7F807F p-10"
              onClick={() => {
                cookingTimeBtnHandler(3);
              }}
              id="time3"
              ref={cookingTimeRefArr[3]}
            >
              45분 이상
            </button>
          </div>
          <div className="px-40 mt-26 pb-31 grey-underbar">
            <div className={subTitle}>기준량</div>
            <div className="flex flex-row items-center mx-27-center">
              <button
                type="button"
                className="w-45 h-45 text-41 leading-none bg-#ECECEC"
                onClick={() => {
                  quantityHandler("-");
                }}
              >
                -
              </button>
              <div className="text-27 mx-20">{quantity}</div>
              <button
                type="button"
                className="w-45 h-45 text-41 leading-none bg-#ECECEC"
                onClick={() => {
                  quantityHandler("+");
                }}
              >
                +
              </button>
              <div className="text-27 mx-20">인분</div>
            </div>
          </div>
          <div className="px-40 w-full mt-26 pb-31 grey-underbar">
            <div className={subTitle}>재료</div>
            <div className="w-full flex items-center">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="resize-none w-full py-26"
                placeholder="재료를 입력해주세요"
                onChange={setIngredient}
              />
              <div className="inline">0/30</div>
            </div>
          </div>
          <div className="px-40 w-full mt-26 pb-31">
            <div className={subTitle}>만드는 방법</div>
            {orderArr.map((value) => (
              <div className="flex flex-row" key={`div-${value}`}>
                <div className="bg-#AEAFAE w-70 h-70 rounded-50 text-prettywhite flex items-center justify-center mr-24 text-30">
                  {value}
                </div>
                <div className="text-26">
                  <input
                    type="text"
                    id="howtomake"
                    className="h-70 p-3"
                    placeholder="만드는 방법을 입력하세요."
                  />
                  <ArticleImgBlockComponent size="w-624 h-120" />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="w-712 h-86 bg-#FFD1D1 mt-100"
              id="addStep"
              onClick={addStepBtnHandler}
            >
              단계 추가
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCreatePage;
