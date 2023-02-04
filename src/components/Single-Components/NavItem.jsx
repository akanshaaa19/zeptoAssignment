import { NavLink } from "react-router-dom";

function NavItem(props) {
  return (
    <div className="nav-item">
      <NavLink to={props.path} className='nav-a'>
        <div>{props.icon}</div>
        <p>{props.name}</p>
      </NavLink>
    </div>
  );
}

export default NavItem;
