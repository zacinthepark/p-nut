import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalNutrientComponent from "../Components/ModalNutrientComponent";
import ModalRecipeComponent from "../Components/ModalRecipeComponent";
import foodTestAPI from "../api/foodTestAPI";

const Modal = (props) => {
  const state = JSON.parse(localStorage.getItem("persist:root"));
  const authentication = JSON.parse(state.auth);
  const userEmail = authentication.authentication.email;

  const { close, foodId, searchResult, foodTitle } = props;
  const open = true;

  const [food, setFood] = useState(null);

  console.log("searchResult: ", searchResult);
  // console.log(searchResult[0].id.videoId);

  // <iframe
  // id="ytplayer"
  // type="text/html"
  // width="720"
  // height="405"
  // src="https://www.youtube.com/embed/M7lc1UVf-VE"
  // frameborder="0"
  // allowfullscreen="allowfullscreen"></iframe>

  const modalShow = `
    @keyframes modalShow {
      from {
        opacity: 0;
        margin-top: -50px;
      }
      to {
        opacity: 1;
        margin-top: 0;
      }
    }
  `;

  const modalBgShow = `
    @keyframes modalBgShow {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  const foodTest = async () => {
    try {
      const response = await foodTestAPI(13, userEmail);
      console.log("test response: ", response.data.data);

      setFood(response.data.data);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    foodTest();
  }, []);

  // 탭
  const [activeTab, setActiveTab] = useState("영양성분");

  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    if (activeTab === "영양성분") {
      return (
        <div>
          <ModalNutrientComponent nutrientData={food.nutrient} />
        </div>
      );
    } else if (activeTab === "레시피") {
      return (
        <div>
          <ModalRecipeComponent />
        </div>
      );
    }
  };

  return (
    <div
      className={`${
        open ? "flex items-center animate-modalBgShow" : "hidden"
      } fixed top-0 right-0 bottom-0 left-0 z-50 bg-black bg-opacity-60 transition-all duration-300
    `}
      style={{ animation: open ? modalBgShow : "" }}
    >
      {open ? (
        <section
          className="mx-auto bg-white rounded-lg max-w-450 w-1100 h-800"
          style={{ animation: open ? `modalShow 0.3s` : "" }}
        >
          <style>{modalShow}</style>
          <main className="flex p-4 m-50">
            {food ? (
              <div>
                <div className="flex">
                  {/* 음식 사진 */}
                  <div className="flex items-center justify-center w-1/2">
                    <div className="relative overflow-hidden rounded-lg w-400 h-300">
                      <img
                        src={food.url}
                        alt=""
                        className="absolute object-cover object-center w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      />
                    </div>
                  </div>
                  {/* 음식 설명 */}
                  <div className="w-1/2 space-y-15">
                    <p className="text-lg text-gray-500">{food.desc}</p>
                    <div className="flex items-center space-x-10">
                      <p className="text-3xl font-bold">{food.name}</p>
                      <p className="px-10 py-5 bg-#FF6B6C/70 font-bold text-white rounded-full">
                        {food.cal}kcal
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-gray-500">
                      주 재료 : {food.ingredient}
                    </p>
                    <p className="text-xl font-medium">
                      &nbsp; &nbsp; &nbsp; &nbsp;{food.efficiency}
                    </p>
                  </div>
                </div>
                {/* 탭 */}
                <div className="flex mb-4 space-x-10 mt-50">
                  <button
                    type="button"
                    className={`${
                      activeTab === "영양성분"
                        ? "border-b-8 border-#FF6B6C  font-bold"
                        : "text-gray-400"
                    } px-4 py-2 text-xl text-bold focus:outline-none`}
                    onClick={() => switchTab("영양성분")}
                  >
                    영양성분
                  </button>
                  <button
                    type="button"
                    className={`${
                      activeTab === "레시피"
                        ? "border-b-8 border-#FF6B6C  font-bold"
                        : "text-gray-400"
                    } px-4 py-2 text-xl text-bold focus:outline-none`}
                    onClick={() => switchTab("레시피")}
                  >
                    레시피
                  </button>
                </div>
                <div className="w-1000 h-300">{renderTabContent()}</div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </main>
          <footer className="p-4 text-right">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 text-white bg-gray-600 rounded focus:outline-none"
            >
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default React.memo(Modal);
