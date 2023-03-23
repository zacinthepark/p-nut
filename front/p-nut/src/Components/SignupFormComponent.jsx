import { Fragment } from "react";

const SignupFormComponent = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    return;
  };

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
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="gender" className="mb-7">
              성별
            </label>
            <select
              name="gender"
              className="px-10 w-120 h-40 border border-gray-300 rounded-10"
            >
              <option className="hidden" value="" disabled selected>
                남성 / 여성
              </option>
              <option value="m">남성</option>
              <option value="f">여성</option>
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
        <div className="ml-75 mt-5">
          <input
            type="text"
            id="codenumber"
            className="px-15 w-330 h-40 border border-gray-300 rounded-10"
            placeholder="인증 번호를 입력해주세요."
          />
        </div>
        <div className="ml-75 mt-20 inline-flex">
          <div className="flex flex-col">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className="px-10 mt-10 w-200 h-40 border border-gray-300 rounded-10 text-gray-400 font-noto"
              placeholder="********"
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
