import Button from "../ui/Button";

import pen from "../../assets/edit.svg";
import trash from '../../assets/trash.svg'


function CampaignItem(props) {
  return (
    <div className="campaign-item">
      <i className="fa-regular fa-square one"></i>

      {props.toggle && <i class="fa-solid fa-toggle-off fa-2x two"></i>}
      {!props.toggle && <i class="fa-solid fa-toggle-on fa-2x two"></i>}

      <div className="img-div three">
        <img src={props.src} />
        <div>
          <p>{props.title}</p>
          <span>{props.createdOn}</span>
        </div>
      </div>

      <p className="four">{props.date}</p>

      <p className="five">{props.clicks}</p>

      <p className="six">INR {props.price}</p>

      <p className="seven">{props.city}</p>

      <p className="eight">
        {props.platform === "youtube" && <i class="fa-brands fa-youtube fa-2x"></i>}
        {props.platform === "facebook" && <i class="fa-brands fa-facebook fa-2x"></i>}
        {props.platform === "google" && <i class="fa-brands fa-google fa-2x"></i>}
      </p>

      {props.button === "green" && (
        <Button className={`${props.button} nine`}>Live Now</Button>
      )}
      {props.button === "red" && (
        <Button className={`${props.button} nine`}>Exhausted</Button>
      )}
      {props.button === "yellow" && (
        <Button className={`${props.button} nine`}>Paused</Button>
      )}

      <div className="ten actions">
        <img src={pen} />
        <img src={trash} />
      </div>
    </div>
  );
}

export default CampaignItem;
