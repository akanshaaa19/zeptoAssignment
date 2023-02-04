import bell from "../../assets/bell.svg";
import gift from "../../assets/gift.svg";
import translate from "../../assets/translate.png";

import "../../styles/header.css";

import userIcon from "../../assets/user-icon.png";

function Header() {
  return (
    <header>
      <p>Free trial ends in 2 days</p>
      <button>
        <i className="fa-solid fa-crown"></i>Buy Plan
      </button>

      <div className="notifications">
        <img src={gift} />
        <img src={bell} />
      </div>
      <div className="user">
        <img src={userIcon} />
        <p className="name">Mukund cake shop</p>
      </div>
      <img className="translate" src={translate} />
    </header>
  );
}

export default Header;
