const ArticleCreatePage = () => {
  return (
    <>
      <div className="flex items-center justify-evenly w-full h-100px px-auto border-b border-solid border-#AEAFAE">
        <div className="text-23px text-center ml-48">
          자신의 레시피에 대해 자유롭게 이야기 해주세요!
        </div>
        <button
          type="button"
          className="bg-#2F80ED rounded-20px text-prettywhite font-semibold px-50px py-5px text-xl"
        >
          글 등록하기
        </button>
      </div>
      <div className="w-1200px mx-auto border-x border-solid border-#7F807F px-204px">
        <div className="w-794px h-354px mt-41px bg-[#F5F5F5]">
          <img src="./assets/plus.png" alt="plus" />
        </div>
      </div>
    </>
  );
};

export default ArticleCreatePage;
