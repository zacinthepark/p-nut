import React, { useState } from "react";

const SearchRecommendPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const data = [
    "계란",
    "닭고기",
    "두부",
    "햄",
    "김치",
    "치즈",
    "감자",
    "소고기",
    "돼지고기",
    "참치",
  ];

  const first = data.slice(0, 5);
  const second = data.slice(5);

  return (
    <div>
      {/* 동영상 헤더 */}
      <div className="relative mx-auto overflow-hidden h-500 ">
        <video
          loop
          muted
          autoPlay
          className="object-cover"
          src="\assets\searchplayback.mp4"
          type="video/mp4"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute text-center text-white inset-9">
          <div className="h-1/5" />
          <p className="text-2xl font-semibold ">음식을 검색해보세요!</p>
          <div className="h-50 " />
          <div className="w-full flex justify-center">
            <form className="relative">
              <input
                className="w-700 h-60 block py-2 pl-50 pr-3 text-xl text-white font-bold placeholder-gray-200 bg-white/20 border border-gray-300 rounded-full shadow-md"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <img
                src="public\assets\Search.png"
                alt=""
                className="absolute top-1 mt-15 right-50 h-30 text-gray-400"
              />
            </form>
          </div>
          <div className="h-50 " />
          <div className="flex flex-col justify-center space-y-20">
            <div className="flex mx-auto space-x-30">
              {first.map((item, index) => (
                <div key={index}>
                  <p className="border border-white rounded-full w-fit px-15 py-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex mx-auto space-x-30">
              {second.map((item, index) => (
                <div key={index}>
                  <p className="border border-white rounded-full w-fit px-15 py-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRecommendPage;
