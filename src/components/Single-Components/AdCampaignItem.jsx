import { useState } from "react";

function AdCampaignItem(props) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`adItem col-4 ${selected && "selected"}`}
      onClick={() => {
        console.log(props.heading);
        setSelected(!selected);
      }}
    >
      {selected && <i class="fa-solid fa-circle-check select-card"></i>}
      <div>{props.icon}</div>
      <div>
        <h5>{props.heading}</h5>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default AdCampaignItem;
