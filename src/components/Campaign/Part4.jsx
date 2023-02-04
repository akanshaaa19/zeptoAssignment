import { Fragment, useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Card from "../ui/Card";

import user from "../../assets/userpfp.png";
import cupcake1 from "../../assets/cupcake1.png";
import cupcake2 from "../../assets/cupcake2.png";
import cupcake3 from "../../assets/cupcake3.png";
import cupcake4 from "../../assets/cupcake4.png";
import Button from "../ui/Button";

import EditImage from "./EditImage";
import { useDispatch, useSelector } from "react-redux";
import EditText from "./EditText";
import { useHistory } from "react-router-dom";
import { progressActions } from "../../store";

const images = [cupcake1, cupcake2, cupcake3, cupcake4];

function Part4() {
  const openImage = useSelector((state) => state.ui.editImage);
  const openText = useSelector((state) => state.ui.editText);

  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(()=>{
    dispatch(progressActions.setStep(4))
  // }, [])


  return (
    <Fragment>
      {openImage && <EditImage />}

      {openText && <EditText />}

      <Heading heading="Ready to go" muted="(Step 3 of 4)" />
      <div className="row cards">
        {images.map((image) => {
          return <Card name="Mukund Cake Shop" pfp={user} cardImg={image} />;
        })}{" "}
        <div className="btn-div"><Button>Start Campaign</Button></div>
      </div>
    </Fragment>
  );
}

export default Part4;
