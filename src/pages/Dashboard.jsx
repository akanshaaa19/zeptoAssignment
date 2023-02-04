import Button from "../components/ui/Button";

import plus from "../assets/plus.svg";

import "../styles/dashboard.css";
import Dropdown from "../components/ui/Dropdown";
import Campaign from "../components/Campaign/Campaign";
import { useHistory } from "react-router-dom";

function Dashboard() {

  const history = useHistory();

  return (
    <section id="dashboard">
      <div className="sec-1">
        <div>
          <h1>Your Campaigns</h1>
          <p>Check the list of campaigns you created </p>
        </div>
        <Button onClick={()=>{
          history.replace("/campaign/new/step1")
        }}>
          <img src={plus} />
          Create new campaign
        </Button>
      </div>

      <div className="sec-2">
        <div className="sec-2-p1">
          <div className="input-div">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search for your campaign" />
          </div>
          <div className="dropdowns">
            <Dropdown
              title="Platform:"
              btnTitle="All Platform"
              actions={["Action 1", "Action 2"]}
            />

            <Dropdown
              title="Status:"
              btnTitle="All Status"
              actions={["Action 1", "Action 2"]}
            />

            <Dropdown
              btnTitle="Last 30 Days"
              actions={["Action 1", "Action 2"]}
            />
          </div>
        </div>
        {/* <div> */}
          <Campaign />
        {/* </div> */}
      </div>
    </section>
  );
}

export default Dashboard;
