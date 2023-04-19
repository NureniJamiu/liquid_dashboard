import { useState } from "react";

import "../styles/Sidenav.css";

// icons
import { RiDashboardFill, RiFolderUserFill } from "react-icons/ri";
import { FaCoins, FaServer } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { MdManageAccounts, MdMail } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  BsFillStopwatchFill,
  BsFillBarChartLineFill,
  BsDatabase,
  BsFillFolderFill,
} from "react-icons/bs";

const Sidenav = () => {
  const [toggleNav, setToggleNav] = useState(true);

  const icons = [
    { icon: BiMenuAltLeft },
    { name: "Description", icon: RiDashboardFill },
    { name: "Quick Loan", icon: BsFillStopwatchFill },
    { name: "Loan", icon: FaCoins },
    { name: "Investments", icon: BsFillBarChartLineFill },
    { name: "Account setting", icon: MdManageAccounts },
    { name: "Payment", icon: BsDatabase },
    { name: "Setting", icon: GoSettings },
    { name: "Additional Reports", icon: BsFillFolderFill },
    { name: "Document", icon: RiFolderUserFill },
    { name: "Email Reports", icon: MdMail },
    { name: "System activities", icon: FaServer },
  ];

  const handleClick = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-icon">
        <ul>
          {icons.map((i, index) => {
            const Icon = i.icon;
            return (
              <li key={index}>
                <span
                  className={i.name == null && "menu"}
                  onClick={i.name == null && handleClick}
                >
                  <Icon />
                </span>
                <span
                  className={`${toggleNav ? "active" : ""} sidebar-icon-name`}
                >
                  {i.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
