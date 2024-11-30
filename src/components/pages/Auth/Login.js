import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getDecodedToken,
  removeAccessToken,
  setAccessToken
} from "../../../utils/auth";
import config from "../../../config/index";
import api from "../../../services/api";
import url from "../../../services/url";
import "../../../public/css/login.css";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: ""
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Please enter your email address.";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Please enter your password.";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    } else if (formData.password.length > 50) {
      newErrors.password = "Password must be less than 50 characters.";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const loginRequest = await api.post(url.AUTH.LOGIN, formData);

        if (loginRequest.status === 200) {
          const token = loginRequest.data.token;
          setAccessToken(token);

          const decodeToken = getDecodedToken();
          let accountRole = decodeToken.Role[0].authority;

          let redirectUrl = "";
          if (accountRole === "ADMIN" || accountRole === "USER") {
            redirectUrl = "/";
          } else {
            removeAccessToken();
            setFormErrors({
              email: "Invalid email or password.",
              password: "Invalid email or password."
            });
            return;
          }

          navigate(redirectUrl);
          window.location.reload();
        } else {
          setFormErrors({
            email: "Invalid email or password.",
            password: "Invalid email or password."
          });
        }
      } catch (error) {
        setFormErrors({
          email: "Invalid email or password.",
          password: "Invalid email or password."
        });
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2 className="login-title">Let's Get Started</h2>
            <p className="login-subtitle">Sign in to continue to Restran.</p>
          </div>
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      formErrors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    autoFocus
                  />
                  {formErrors.email && (
                    <div className="invalid-feedback">{formErrors.email}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa-solid fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={`form-control ${
                      formErrors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text view-password"
                      onClick={handleTogglePassword}
                    >
                      {!showPassword ? (
                        <i class="fa-solid fa-eye-slash"></i>
                      ) : (
                        <i class="fa-solid fa-eye"></i>
                      )}
                    </span>
                  </div>
                  {formErrors.password && (
                    <div className="invalid-feedback">
                      {formErrors.password}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-actions">
                <div className="row">
                  <div className="col-6">
                    <div className="checkbox">
                      <input type="checkbox" id="rememberMe" />
                      <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-6 text-right">
                    <Link
                      to={config.routes.forgot_password}
                      className="forgot-password"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="checkout-button">
                  <button type="submit" className="login-home">
                    SIGN IN
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="login-footer text-center">
            <p>
              Don't have an account?{" "}
              <Link to={config.routes.register} className="sign-up-link">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="social-login text-center">
            <p>- Sign With -</p>
            <div className="social-buttons">
              <a className="btn btn-social btn-facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a className="btn btn-social btn-twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a className="btn btn-social btn-instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;