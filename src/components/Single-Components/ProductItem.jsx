import { useState } from "react";

function ProductItem(props) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => {
        setSelected(!selected);
      }}
      className={`productItem col-4 ${selected && "selected-procuct"}`}
    >
      <div className="left-div">
        <img src={props.src} />
        <div>
          <h6>{props.title}</h6>
          <p>Rs. {props.price}</p>
        </div>
      </div>
      <i class="fa-solid fa-circle-check"></i>
    </div>
  );
}

export default ProductItem;
