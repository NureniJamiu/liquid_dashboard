import Sidenav from "./Sidenav";
import Dashboard from "./Dashboard";

import "../styles/Interface.css";

const Interface = () => {
  return (
    <div className="interface-container">
      <div className="interface-container-div">
        <Sidenav />
        <Dashboard />
      </div>
    </div>
  );
};

export default Interface;
