const ArticleListThumbnailComponent = (props) => {
  let rankDiv = null;
  if (props.rank) {
    rankDiv = (
      <div className="absolute -bottom-50 -left-10 text-#F5F5F5 font-semibold text-119 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        {props.rank}
      </div>
    );
  }

  return (
    <div className="h-342">
      <div className="relative">
        <img src={props.imgSrc} alt="" className="w-390 h-240 rounded-8" />
        {rankDiv && rankDiv}
      </div>
      <div className="font-bold text-22 mt-15 mb-9 ml-20">{props.title}</div>
      <div className="flex items-center ml-20">
        <img src={props.profileImg} alt="" className="w-22 h-22" />
        <div className="font-medium text-14 ml-5">{props.author}</div>
      </div>
    </div>
  );
};

export default ArticleListThumbnailComponent;
