import { uiActions } from "../../store";
import { useDispatch } from "react-redux";
import Modal from "../ui/Modal";

const suggestions = [
  "Cake",
  "Chocolate",
  "Cookies",
  "Biscuits",
  "Pasteries",
  "Doughnuts",
  "Crackers",
  "Bread",
  "Coffee & Tea",
];

function EditImage() {
  const dispatch = useDispatch();
  return (
    <Modal>
      <i
        onClick={() => {
          dispatch(uiActions.toggleEditImage(false));
        }}
        class="fa-solid fa-circle-xmark"
      ></i>
      <h2>Change ad images</h2>
      <p>
        Search and select image from zocket library or upload from your device
      </p>
      <div className="input-div">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search for the image" />
      </div>
      <div className="suggestions">
        {suggestions.map((suggested) => {
          return <div className="suggested-div col-4">{suggested}</div>;
        })}
      </div>
      <div className="or">
        <div className="left"></div>
        <p>OR</p>
        <div className="right"></div>
      </div>
      <div class="mb-3">

        <input
          class="form-control form-control-sm"
          id="formFileSm"
          type="file"
        />
      </div>
    </Modal>
  );
}

export default EditImage;
