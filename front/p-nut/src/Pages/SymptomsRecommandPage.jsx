import React from "react";

const SymptomsRecommandPage = () => {
  const btnIcons = [
    "전체",
    "마음",
    "피부",
    "구강관리",
    "다이어트",
    "뼈/관절",
    "피로/활력",
    "간 건강",
    "장 건강",
    "모발/두피",
    "위/소화",
    "면역력",
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center">
        <div className="text-40 font-bold">
          고민이 있으신가요? 피넛에게 물어보세요!
        </div>
        <div className="text-22 font-bold text-#AEAFAE">
          궁금한 카테고리를 선택하면 증상별로 맞춤 음식을 볼 수 있어요
        </div>
      </div>
      <div className="flex">
        {btnIcons.map((values) => (
          <div className="flex flex-col items-center justify-center mx-14">
            <div
              className="rounded-25 bg-#F2F2F2 w-72 h-72 flex items-center justify-center"
              key={`symptoms-${values}`}
            >
              이미지
            </div>
            <div>{values}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-65"></div>
    </div>
  );
};

export default SymptomsRecommandPage;
