import logo from "../assets/logo.png";

// STYLE
import "../styles/Signup.css";

const Login = () => {
  return (
    <section className="auth-hero">
      <div className="auth-background-image"></div>
      <div className="auth-content">
        <div className="auth-left-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="auth-form">
          <h2>Welcome Back</h2>
          <p>Login to enjoy unlimited financial operational freedom</p>
          <form>
            <input type="email" placeholder="Enter email address" />
            <input type="password" placeholder="Enter password" />
            <p className="forgot-passwd">Forgot Password?</p>
            <button>Login</button>
            <p className="auth-small">
              Don't have an account yet? <span>Sign up</span> today
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
