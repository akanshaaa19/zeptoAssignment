import { Fragment } from "react";
import "./App.css";
import SideNav from "./components/Layout/SideNav";
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Layout/Header";
import NewCampaign from "./pages/NewCampaign";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <SideNav />
      <Route path="/">
        <Redirect to="/campaign" />
      </Route>
      <Route path="/campaign" exact>
        <Dashboard />
      </Route>
      <Route path="/campaign/new">
        <NewCampaign />
      </Route>
    </Fragment>
  );
}

export default App;
