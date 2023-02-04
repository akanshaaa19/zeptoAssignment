import { Fragment } from "react";
import ReactDOM from "react-dom";

import "../../styles/modal.css";
import Heading from "./Heading";
import { uiActions } from "../../store";
import { useDispatch } from "react-redux";

function Backdrop() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(uiActions.toggleEditImage(false));
        dispatch(uiActions.toggleEditText(false));
      }}
      className="backdrop"
    ></div>
  );
}

function ModalOverlay(props) {
  return <div className="modal-divv">{props.children}</div>;
}

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-hook")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-hook")
      )}
    </Fragment>
  );
}

export default Modal;
