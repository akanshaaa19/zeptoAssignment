import { Fragment } from "react";
import CampaignItem from "../Single-Components/CampaignItem";

import "../../styles/campaign.css";

import campaigns from "../../campaigns";


function Campaign() {


  return (
    <Fragment>

      <div className="campaign-header">
        <i class="fa-regular fa-square one"></i>
        <p className="two">On/Off</p>
        <p className="three">Campaign</p>
        <p className="four">Date Range</p>
        <p className="five">Clicks</p>
        <p className="six">Budgets</p>
        <p className="seven">Location</p>
        <p className="eight">Platform</p>
        <p className="nine">Status</p>
        <p className="ten">Actions</p>
      </div>
      <div className="campaigns">
        {campaigns.map((campaign) => {
          return (
            <CampaignItem
              title={campaign.title}
              createdOn={campaign.createdOn}
              date={campaign.date}
              price={campaign.price}
              clicks={campaign.clicks}
              city={campaign.city}
              button={campaign.button}
              platform={campaign.platform}
              toggle={campaign.toggle}
              src={campaign.src}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default Campaign;
