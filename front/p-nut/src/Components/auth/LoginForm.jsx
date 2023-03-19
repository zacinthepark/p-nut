import { Fragment } from "react";

const LoginForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    return;
  };
  return (
    <Fragment>
      <p className="font-nanum font-semibold text-xl ml-11 mt-11 mb-8">
        로그인
      </p>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            placeholder="이메일 주소를 입력하세요."
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="text" id="password" placeholder="********" />
        </div>
      </form>
    </Fragment>
  );
};

export default LoginForm;
