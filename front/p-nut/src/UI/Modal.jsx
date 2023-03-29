import React from "react";

const Modal = (props) => {
  const { open, close, foodId } = props;

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

  return (
    <div
      className={`${
        open ? "flex items-center animate-modalBgShow" : "hidden"
      } fixed top-0 right-0 bottom-0 left-0 z-50 bg-black bg-opacity-60 transition-all duration-300
    `}
      style={{ animation: open ? modalBgShow : "" }}
    >
      {open ? (
        <section
          className="mx-auto bg-white rounded-sm max-w-450 w-1100 h-800"
          style={{ animation: open ? `modalShow 0.3s` : "" }}
        >
          <style>{modalShow}</style>
          <main className="p-4 border-b border-gray-300 bordet-t">
            {props.children}
            {/* 형준오빠 여따가 넣어놓으면 돼 */}

            {/* 여기입니다 */}
          </main>
          <footer className="p-4 text-right">
            <button
              onClick={close}
              className="px-4 py-2 text-white bg-gray-600 rounded focus:outline-none"
            >
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
