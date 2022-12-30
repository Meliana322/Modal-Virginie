import React from "react";

import "./modal.css";

const Modal = (props) => (
  <>
    {props.isOpen && (
      <>
        {props.background && <div className="background"></div>}
        <div className ="modal">
          {props.close && (
            <section className="modal-close">
              <button className="btn" onClick={props.onClose}>
                ✖
              </button>
            </section>
          )}
          <section className="modal-content">{props.children}</section>
        </div>
      </>
    )}
  </>
);

export default Modal;