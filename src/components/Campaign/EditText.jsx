import { useDispatch } from "react-redux";
import Modal from "../ui/Modal";
import { uiActions } from "../../store";
import { useState } from "react";
import TextBox from "../Single-Components/TextItem";

const auto = [1, 2, 3];

function EditText() {
  const dispatch = useDispatch();
  return (
    <Modal>
      <i
        onClick={() => {
          dispatch(uiActions.toggleEditText(false));
        }}
        class="fa-solid fa-circle-xmark"
      ></i>
      <h2>Change ad text</h2>
      <p>Enter text or choose from template</p>

      <div>
        <h5>Enter text or choose from template</h5>
        <textarea rows={2} />
      </div>

      <div>
        <h5>Auto Suggestions</h5>
        <div className="autoSuggestions row">
          {auto.map((item) => {
            return <TextBox />;
          })}
        </div>
      </div>
    </Modal>
  );
}

export default EditText;
