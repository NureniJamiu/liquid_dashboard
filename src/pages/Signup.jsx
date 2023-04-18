import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// STYLE
import "../styles/Signup.css";

const Signup = () => {
  return (
    <section className="auth-hero">
      <div className="auth-background-image"></div>
      <div className="auth-content">
        <div className="auth-left-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="auth-form">
          <h2>Get An Account Today</h2>
          <p>Start your unlimited financial operational freedom</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Create Account</button>
            <p className="auth-small">
              Already have an account? <Link to="/login">Login </Link> now
            </p>
            <p>
              <Link to="/dashboard">View Dashboard instead</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
