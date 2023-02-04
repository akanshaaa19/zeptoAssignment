import { Fragment, useEffect } from "react";
import ad from "../../ad";
import AdCampaignItem from "../Single-Components/AdCampaignItem";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { progressActions } from "../../store";
function Part1() {

  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(()=>{
    dispatch(progressActions.setStep(1))
  // }, [])

  return (
    <Fragment>
      <Heading heading="What you want to do?" muted="(Step 1 of 4)" />
      <div className="row ads">
        {ad.map((item) => {
          return (
            <AdCampaignItem
              icon={item.icon}
              heading={item.heading}
              content={item.content}
            />
          );
        })}
      </div>
      <div className="btn-div"><Button onClick={()=>{history.push('/campaign/new/step2')}} className="continue">Continue</Button></div>
    </Fragment>
  );
}

export default Part1;
