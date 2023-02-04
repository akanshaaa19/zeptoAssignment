import { useState } from "react";
import india from '../../assets/India.png'

function SettingItem(props) {

    const [select, setSelect] = useState(false)

    function changeButton(){
        setSelect(!select)
    }

  return (
    <div>
      <h5>{props.title}</h5>
      <p>{props.p}</p>
      <div className="button-group">
        <button onClick={changeButton} className={select ? 'bottom' : 'top'}>{props.btn1}</button>
        <button onClick={changeButton} className={!select ? 'bottom' : 'top'}>{props.btn2}</button>
      </div>

      <div className="part2-date">
        {props.date === "true" ? (
          <div className="row">
            <div className="col-6 label-div">
              <label>Start Date</label> <input type="date" />
            </div>
            <div className="col-6 label-div">
              <label>End Date</label> <input type="date" />
            </div>
          </div>
        ) : (
          <div className="col-12"><input type="tel" /></div>
        )}
      </div>
      {/* {!props.date === 'true' && <input />} */}
      <div>
        <label for="customRange1" class="form-label">
          {props.rangeTitle}
          <p>
            <img src={india} />
            INR
          </p>
        </label>
        <input type="range" class="formrange" id="customRange1" max={100} />
        <div className="range-label">
          <p>{props.min}</p>
          <p>{props.max}</p>
        </div>
      </div>
    </div>
  );
}

export default SettingItem;
