import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDecodedToken, removeAccessToken, setAccessToken } from "../../../utils/auth";
import config from "../../../config/index";
import api from "../../../services/api";
import url from "../../../services/url";

function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
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
                            password: "Invalid email or password.",
                        });
                    }

                    navigate(redirectUrl);
                } else {
                    setFormErrors({
                        email: "Invalid email or password.",
                        password: "Invalid email or password.",
                    });
                }
            } catch (error) {
                setFormErrors({
                    email: "Invalid email or password.",
                    password: "Invalid email or password.",
                });
            }
        }
    };
    
    return (
        <div className="hold-transition theme-primary bg-img" style={{ backgroundImage: "url(../images/auth-bg/bg-1.jpg)" }}>
            <div className="container h-p100">
                <div className="row align-items-center justify-content-md-center h-p100">
                    <div className="col-12">
                        <div className="row justify-content-center no-gutters">
                            <div className="col-lg-5 col-md-5 col-12">
                                <div className="bg-white rounded30 shadow-lg">
                                    <div className="content-top-agile p-20 pb-0">
                                        <h2 className="text-primary">Let's Get Started</h2>
                                        <p className="mb-0">Sign in to continue to Restran.</p>
                                    </div>
                                    <div className="p-40">
                                        <form onSubmit={handleLogin}>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent"><i className="ti-user"></i></span>
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className={`form-control pl-15 bg-transparent ${formErrors.email ? "is-invalid" : ""}`}
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        autoFocus
                                                    />
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
                                                        name="password"
                                                        className={`form-control pl-15 bg-transparent ${formErrors.password ? "is-invalid" : ""}`}
                                                        placeholder="Password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text bg-transparent view-password" onClick={handleTogglePassword}>
                                                            {!showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                                        </span>
                                                    </div>
                                                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="checkbox">
                                                        <input type="checkbox" id="basic_checkbox_1" />
                                                        <label htmlFor="basic_checkbox_1">Remember Me</label>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="fog-pwd text-right">
                                                        <Link to={config.routes.forgot_password} className="hover-warning"><i className="icon icon-locked"></i> Forgot pwd?</Link><br />
                                                    </div>
                                                </div>

                                                <div className="col-12 text-center">
                                                    <button type="submit" className="btn btn-danger mt-10">SIGN IN</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <p className="mt-15 mb-0">Don't have an account? <a href="auth_register.html" className="text-warning ml-5">Sign Up</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="mt-20 text-white">- Sign With -</p>
                                    <p className="gap-items-2 mb-20">
                                        <a className="btn btn-social-icon btn-round btn-facebook"><i className="fa fa-facebook"></i></a>
                                        <a className="btn btn-social-icon btn-round btn-twitter"><i className="fa fa-twitter"></i></a>
                                        <a className="btn btn-social-icon btn-round btn-instagram"><i className="fa fa-instagram"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
