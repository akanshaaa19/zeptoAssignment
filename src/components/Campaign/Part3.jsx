import { Fragment, useEffect } from "react";
import Heading from "../ui/Heading";

import "../../styles/part2.css";

import SettingItem from "../Single-Components/SettingItem";

import Button from "../ui/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { progressActions } from "../../store";

function Part3() {
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(()=>{
    dispatch(progressActions.setStep(3))
  // }, [])

  return (
    <Fragment>
      <Heading heading="Campaign Settings" muted="(Step 2 of 4)" />
      <div className="part2">
        <SettingItem title='Budget and dates info' p='Budget Timeline' btn1='LifeTime' btn2='Daily' date='true' rangeTitle='Enter campaign budget' min='100' max='1000' />
        <SettingItem title='Location Info' p='Location type' btn1='Location' btn2='Radius'  rangeTitle='Select target radius' min='1' max='30' />
        <div className="btn-div"><Button onClick={()=>{history.push('/campaign/new/step4')}}>Continue</Button></div>

      </div>
    </Fragment>
  );
}

export default Part3;
