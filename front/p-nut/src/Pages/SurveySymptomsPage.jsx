import React, { createRef, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import symptomsAPI from "../api/symptomsAPI";

const SurveySymptomsPage = () => {
  const token = useSelector((state) => state.auth.authentication.token);
  const [data, setData] = useState();
  const [nickname, setNickname] = useState();
  const [clickedCnt, setClickedCnt] = useState(0);
  const [symptomsRef, setSymptomsRef] = useState([]);

  const checkedList = {};

  const sympHandler = useCallback(async (token) => {
    const res = await symptomsAPI(token);
    setData(res.slice(1));
    setNickname(res[0]);
    for (let i = 1; i < res.length; i += 1) {
      setSymptomsRef((prev) => {
        return [...prev, createRef(null)];
      });
    }
    return res;
  }, []);

  useEffect(() => {
    sympHandler(token);
  }, [sympHandler, token]);

  const symptomsDivClickHandler = (e) => {
    console.log(clickedCnt);
    const { id } = e.target;
    if (!id) {
      return;
    }

    const inputTag = symptomsRef[id].current;
    const isChecked = inputTag.checked;

    if (isChecked) {
      inputTag.checked = false;
      setClickedCnt((prev) => {
        return prev - 1;
      });
      return;
    }

    if (clickedCnt >= 3) {
      return;
    }

    inputTag.checked = !isChecked;

    setClickedCnt((prev) => {
      return prev + 1;
    });
  };

  const symptomsInputChangeHandler = (e) => {
    const id = e.target.id.split("-")[1];

    if (!e.target.checked) {
      setClickedCnt((prev) => {
        return prev - 1;
      });
      return;
    }

    if (clickedCnt >= 3) {
      e.target.checked = false;
      return;
    }

    setClickedCnt((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="w-674">
      {data && (
        <>
          <div className="text-22 font-bold text-#7F807F mb-18">질문 1</div>
          <div className="text-22 font-bold mb-18">
            {nickname}님이 불편하시고 걱정되는 3가지를 선택하세요.
          </div>
          <div className="text-22 text-#7F807F pb-18">
            우선적으로 관리가 필요한 곳을 선택하세요.
          </div>
          <div className="grey-underbar" />
          {data.map((val, idx) => (
            <div className="mt-15 flex flex-row" key={val}>
              <input
                type="checkbox"
                name=""
                id={`input-${idx}`}
                ref={symptomsRef[idx]}
                onChange={symptomsInputChangeHandler}
              />
              <div
                className="text-19 ml-13"
                id={idx}
                onClick={symptomsDivClickHandler}
              >
                {val}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SurveySymptomsPage;
