import { Fragment, useState } from "react";
import "../../styles/card.css";
import { uiActions } from "../../store";
import { useDispatch } from "react-redux";

function Card(props) {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();


  function openModal() {
    dispatch(uiActions.toggleEditImage(true));
  }

  return (
    <Fragment>
    <div className={`col-3 card ${selected && "selected-card"}`}>
      <div
        onClick={() => {
          setSelected(!selected);
        }}
      >
        {selected && <i class="fa-solid fa-circle-check checked"></i>}

        <div className="cardHeader">
          <img src={props.pfp} />
          <div>
            <h1>{props.name}</h1>
            <p>Sponsered</p>
          </div>
        </div>

        <div className="content">
          <p>
            We are the best bakery around you. Please like my page to get
            updates on exciting offers and discounts
          </p>
          <div>
            <img className="cardImg" src={props.cardImg} />
            <div className="like-div">
              <p>{props.name}</p>
              <button>
                <i class="fa-solid fa-thumbs-up"></i>Like
              </button>
            </div>
          </div>
        </div>
      </div>
      {selected && (
        <div className="div-footer">
          <button onClick={()=>{dispatch(uiActions.toggleEditImage(true));}}>Change Image</button>
          <button onClick={()=>{dispatch(uiActions.toggleEditText(true));}}>Edit Text</button>
        </div>
      )}
    </div>
    </Fragment>
  );
}

export default Card;
