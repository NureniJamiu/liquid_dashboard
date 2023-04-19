import { BsThreeDotsVertical } from "react-icons/bs";
import mockData from "../mockData";

import "../styles/DashboardTable.css";

const DashboardTable = () => {
  const headers = [
    "S/N",
    "Application ID",
    "Full name",
    "Loan Amount",
    "Status",
    "Disbursed",
    "Repayment",
    "Application Date",
    "Actions",
  ];
  return (
    <div className="dashboard-table">
      <div className="dashboard-table-head">
        {headers.map((header, index) => (
          <span className="index">{header}</span>
        ))}
      </div>
      <div className="dashboard-table-data-container-scroll">
        {mockData.map((data, index) => {
          return (
            <div key={index} className="dashboard-table-data-container">
              {Object.keys(data).map((key, index) => {
                // console.log(key);
                return (
                  <span
                    key={index}
                    className={`${
                      key === "status"
                        ? "status"
                        : key === "disbursed"
                        ? "disbursed"
                        : key === "repayment"
                        ? "disbursed"
                        : key === "actions"
                        ? "actions"
                        : ""
                    }`}
                  >
                    {key === "actions" && <BsThreeDotsVertical />}
                    {data[key]}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardTable;
