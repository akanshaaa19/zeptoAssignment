import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Progress() {

    const step1 = useSelector(state=>state.progress.step1)
    const step2 = useSelector(state=>state.progress.step2)
    const step3 = useSelector(state=>state.progress.step3)
    const step4 = useSelector(state=>state.progress.step4)

    const history = useHistory()

  return (
    <div className="progress-bar-div">
      <div onClick={()=>history.push('/campaign/new/step1')}>
        <i class={`fa-2x fa-solid fa-lightbulb ${step1 && "done"}`}></i>
        <p>What do you want to do?</p>
      </div>
      <div onClick={()=>history.push('/campaign/new/step2')}>
        <i class={`fa-2x fa-solid fa-basket-shopping ${step2 && "done"}`}></i>
        <p>Choose Products</p>
      </div>
      <div onClick={()=>history.push('/campaign/new/step3')}>
        <i class={`fa-2x fa-solid fa-calendar-days ${step3 && "done"}`}></i>
        <p>Campaign Settings</p>
      </div>
      <div onClick={()=>history.push('/campaign/new/step4')}>
        <i class={`fa-2x fa-solid fa-circle-check ${step4 && "done"}`}></i>
        <p>Ready to go?</p>
      </div>
    </div>
  );
}

export default Progress;
