import "../styles/DashboardCount.css";

const DashboardCount = () => {
  return (
    <div className="dashboard-count">
      <div className="dashboard-count-one">Quick Loan Applicants</div>
      <div className="dashboard-count-two">
        <span>Quick Loan Total</span>
        <span className="dashboard-count-num">N1.25K</span>
        <span>
          Export file in <span>Excel, PDF</span>
        </span>
      </div>
    </div>
  );
};

export default DashboardCount;
