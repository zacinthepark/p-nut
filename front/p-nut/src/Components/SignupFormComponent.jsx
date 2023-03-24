import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import createUserAPI from "../api/createUserAPI";

const SignupFormComponent = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.authentication.token);

  const [userInputNickname, setUserInputNickname] = useState("");
  const [userInputName, setUserInputName] = useState("");
  const [userInputEmail, setUserInputEmail] = useState("");
  const [userInputAge, setUserInputAge] = useState("");
  const [userInputGender, setUserInputGender] = useState("");
  // const [userInputCode, setUserInputCode] = useState("");
  const [userInputPassword1, setUserInputPassword1] = useState("");
  // const [userInputPassword2, setUserInputPassword2] = useState("");

  const nicknameChangeHandler = (event) => {
    setUserInputNickname(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setUserInputName(event.target.value);
  };
  const genderChangeHandler = (event) => {
    setUserInputGender(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserInputAge(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setUserInputEmail(event.target.value);
  };
  // const codeChangeHandler = (event) => {
  //   setUserInputCode(event.target.value);
  // };
  const password1ChangeHandler = (event) => {
    setUserInputPassword1(event.target.value);
  };
  // const password2ChangeHandler = (event) => {
  //   setUserInputPassword2(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    createUserAPI(
      userInputAge,
      userInputEmail,
      userInputGender,
      userInputName,
      userInputNickname,
      userInputPassword1
    );
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Fragment>
      <p className="mx-75 my-25 text-2xl font-bold">이메일로 가입하세요</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="nickname" className="mx-75">
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            className="px-10 mx-75 my-10 w-464 h-40 border border-gray-300 rounded-10"
            onChange={nicknameChangeHandler}
          />
        </div>

        <div className="mx-75 my-10 flex">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name" className="mb-7">
              이름 (실명)
            </label>
            <input
              type="text"
              id="name"
              className="px-10 w-120 h-40 border border-gray-300 rounded-10"
              onChange={nameChangeHandler}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="gender" className="mb-7">
              성별
            </label>
            <select
              name="gender"
              className="px-10 w-120 h-40 border border-gray-300 rounded-10"
              onChange={genderChangeHandler}
            >
              <option value="0">남성</option>
              <option value="1">여성</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="age" className="mb-7">
              나이 (만)
            </label>
            <input
              type="text"
              id="age"
              className="px-10 w-120 h-40 border border-gray-300 rounded-10"
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <div className="flex">
          <div className="ml-75 my-10 flex-1 flex flex-col">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              className="px-15 mt-10 w-330 h-40 border border-gray-300 rounded-10"
              placeholder="이메일 주소를 입력해주세요."
              onChange={emailChangeHandler}
            />
          </div>
          <div className="flex-1">
            <button
              type="button"
              className="mx-15 mt-44 w-120 h-40 bg-red-400 rounded-xl text-white font-semibold"
            >
              인증번호 받기
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="ml-75 mt-5 flex-1 flex flex-col">
            <input
              type="text"
              id="code"
              className="px-15 w-330 h-40 border border-gray-300 rounded-10"
              placeholder="인증 코드를 입력해주세요."
            />
          </div>
          <div className="flex-1">
            <button
              type="button"
              className="mx-15 mt-5 w-120 h-40 bg-#2F80ED rounded-xl text-white font-semibold"
            >
              인증번호 확인
            </button>
          </div>
        </div>
        <div className="ml-75 mt-20 inline-flex">
          <div className="flex flex-col">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className="px-10 mt-10 w-200 h-40 border border-gray-300 rounded-10 text-gray-400 font-noto"
              placeholder="********"
              onChange={password1ChangeHandler}
            />
          </div>
          <div className="flex flex-col ml-62">
            <label htmlFor="passwordcheck">비밀번호 확인</label>
            <input
              type="password"
              id="passwordcheck"
              className="px-10 mt-10 w-200 h-40 border border-gray-300 rounded-10 text-gray-400 font-noto"
              placeholder="********"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mx-75 mt-50 w-464 h-50 bg-red-400 rounded-xl text-white font-semibold"
        >
          회원가입
        </button>
      </form>
    </Fragment>
  );
};

export default SignupFormComponent;
