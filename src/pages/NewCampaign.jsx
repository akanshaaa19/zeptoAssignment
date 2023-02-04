import "../styles/newCampaign.css";

import Part1 from "../components/Campaign/Part1";
import Part3 from "../components/Campaign/Part3";
import Part4 from "../components/Campaign/Part4";
import Part2 from "../components/Campaign/Part2";
import { Route } from "react-router-dom";
import Progress from "../components/ui/Progress";

function NewCampaign() {
  return (
    <section id="newCampaign">
      <div className="heading">
        <h1>Your Ad Campaign</h1>
        <p>Launch your ad in just 4 easy steps</p>
      </div>
      <div className="section-1">
      <Progress />
      </div>
      <div className="section-2">
        <Route path='/campaign/new/step1'>
          <Part1 />
        </Route>
        <Route path='/campaign/new/step2'>
        <Part2 />
        </Route>
        <Route path='/campaign/new/step3'>
        <Part3 />
        </Route>
        <Route path='/campaign/new/step4'>
        <Part4 />
        </Route>
      </div>
    </section>
  );
}

export default NewCampaign;
