import "../styles/Dashboard.css";
import DashboardCount from "./DashboardCount";
import DashboardSearch from "./DashboardSearch";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-greeting">
        Welcome Back, <span>Emerson Joseph</span>
      </div>

      <DashboardCount />
      <DashboardSearch />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
