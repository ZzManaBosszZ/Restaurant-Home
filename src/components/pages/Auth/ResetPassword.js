import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import config from "../../../config/index";

function ResetPassword() {

  const { resetToken } = useParams();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    newPassword: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.email) {
      valid = false;
      newErrors.email = "Please enter your email.";
    } else if (!isEmailValid(formData.email)) {
      valid = false;
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "Please enter a new password.";
      valid = false;
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "New password must be at least 6 characters.";
      valid = false;
    } else if (formData.newPassword.length > 50) {
      newErrors.newPassword = "New password must be less than 50 characters.";
      valid = false;
    }

    setFormErrors(newErrors);

    return valid;
  };

  const submitResponse = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await api.post(url.AUTH.RESET_PASSWORD + `/${resetToken}`, formData);
        if (response.status === 200) {
          setTimeout(() => {
            toast.success("Password reset successful. Please login again.", {
              position: "top-right",
              autoClose: 5000,
            });
          }, 1500);
          navigate(`${config.routes.login}`);
        }
      } catch (error) {
        toast.error("Error! An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <body className="hold-transition theme-primary bg-img" style={{ backgroundImage: "url(../images/auth-bg/bg-2.jpg)" }}>
      <div className="container h-p100">
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded30 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <h3 className="mb-0 text-primary">Recover Password</h3>
                    <Link to="/login" classNameName="text-primary" style={{ fontWeight: 300, fontSize: 14 }}>
                      Back to Login
                    </Link>
                  </div>
                  <div className="p-40">
                    <form onSubmit={submitResponse}>

                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent"><i className="ti-email"></i></span>
                          </div>
                          <input
                            type="email"
                            className={`form-control pl-15 bg-transparent ${formErrors.email ? "is-invalid" : ""}`}
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoFocus />
                          {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent">
                              <i className="ti-lock"></i>
                            </span>
                          </div>
                          <input
                              type={showPassword ? "text" : "password"}
                              className={`form-control pl-15 bg-transparent ${formErrors.newPassword ? "is-invalid" : ""}`}
                              name="newPassword"
                              id="newPassword"
                              placeholder="******"
                              value={formData.newPassword}
                              onChange={handleChange}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text bg-transparent view-password" onClick={handleTogglePassword}>
                              {!showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                            </span>
                          </div>
                          {formErrors.newPassword && <div className="invalid-feedback">{formErrors.newPassword}</div>}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-info margin-top-10">Reset Password </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default ResetPassword;