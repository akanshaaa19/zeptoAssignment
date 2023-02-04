import '../../styles/nav.css'

import home from "../../assets/home.svg";
import customers from "../../assets/users.svg";
import products from "../../assets/basket.svg";
import logo from "../../assets/logo.png";
import NavItem from "../Single-Components/NavItem";

const navComponents = [
  { path: "/home", icon: <img src={home} />, name: "Home" },
  {
    path: "/campaign",
    icon: <i className="fa-solid fa-volume-high fa-xl"></i>,
    name: "Campaign",
  },
  { path: "/products", icon: <img src={products} />, name: "Products" },
  { path: "/customers", icon: <img src={customers} />, name: "Customers" },
];
function SideNav() {
  return (
    <nav className="sidebar">
      <img className="logo" src={logo} />
      {navComponents.map((nav) => {
        return (
          
            <NavItem path={nav.path} icon={nav.icon} name={nav.name} />
        );
      })}
    </nav>
  );
}

export default SideNav;
