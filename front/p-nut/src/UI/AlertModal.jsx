import React from "react";

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

const AlertModal = (props) => {
  // 열기 닫기 모달 텍스트를 부모로부터 받아옴
  const { open, close } = props;

  // background div만 close
  const preventionClose = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`${
        open ? "flex items-center animate-modalBgShow" : "hidden"
      } fixed top-0 right-0 bottom-0 left-0 z-50 bg-black bg-opacity-60 transition-all duration-300`}
      style={{ animation: open ? modalBgShow : "" }}
      onClick={close}
    >
      {open ? (
        <section
          onClick={preventionClose}
          className="mx-auto bg-white rounded-lg w-500 h-200"
          style={{ animation: open ? `modalShow 0.3s` : "" }}
        >
          <style>{modalShow}</style>
          <main className="flex flex-col p-4 m-50">
            {props.children}
            <button
              type="button"
              className="px-4 py-2 text-white bg-gray-600 rounded w-100 h-30 mx-auto my-50"
              onClick={close}
            >
              close
            </button>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default AlertModal;