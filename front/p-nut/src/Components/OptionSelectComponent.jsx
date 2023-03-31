import React from "react";

const OptionSelectComponent = (props) => {
  const { val, idx, inputChangeHandler, divClickHandler, refInfo } = props;
  return (
    <div className="mt-15 flex flex-row" key={val}>
      <input
        type="checkbox"
        name={val}
        id={`input-${idx}`}
        ref={refInfo}
        onChange={inputChangeHandler}
      />
      <div className="text-19 ml-13" id={idx} onClick={divClickHandler}>
        {val}
      </div>
    </div>
  );
};

export default OptionSelectComponent;
