import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Thêm axios để gọi API
import { setAccessToken } from "../../../utils/auth"; // Để lưu token nếu cần
import config from "../../../config/index";
import '../../../public/css/register.css';
import api from "../../../services/api";
import url from "../../../services/url";

function Register() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Trạng thái đăng ký
    const [apiError, setApiError] = useState(null); // Lỗi từ API

    const navigate = useNavigate();

    const validateForm = () => {
        let errors = {};
        if (formData.fullname === '') {
            errors.fullname = 'Name is required';
        }
        if (formData.email === '') {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (formData.password === '') {
            errors.password = 'Password is required';
        }
        if (formData.confirmPassword === '') {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setApiError(null); // Xóa lỗi API trước khi đăng ký
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                // Gọi API tới endpoint đăng ký người dùng
                const response = await api.post(url.AUTH.SIGNUP, {
                    fullname: formData.fullname,
                    email: formData.email,
                    password: formData.password
                });
                
                // Nếu đăng ký thành công, lưu token (nếu có) và điều hướng
                setAccessToken(response.data.token); // Nếu backend trả về token
                navigate('/login'); // Điều hướng đến trang dashboard hoặc trang mong muốn
                
            } catch (error) {
                // Xử lý lỗi trả về từ API
                setApiError(error.response?.data?.message || 'An error occurred during registration');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-card">
                    <div className="register-header">
                        <h2 className="register-title">Let's Get Started</h2>
                        <p className="register-subtitle">Sign Up to continue to Restran.</p>
                    </div>
                    <div className="register-form">
                        <form onSubmit={handleRegister}>
                            {apiError && <div className="alert alert-danger">{apiError}</div>}
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                                    </div>
                                    <input
                                        type="text"
                                        name="fullname"
                                        className={`form-control ${formErrors.fullname ? "is-invalid" : ""}`}
                                        placeholder="Name"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                    />
                                    {formErrors.fullname && <div className="invalid-feedback">{formErrors.fullname}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text view-password" onClick={handleTogglePassword}>
                                            {!showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                        </span>
                                    </div>
                                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        className={`form-control ${formErrors.confirmPassword ? "is-invalid" : ""}`}
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text view-password" onClick={handleTogglePassword}>
                                            {!showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                        </span>
                                    </div>
                                    {formErrors.confirmPassword && <div className="invalid-feedback">{formErrors.confirmPassword}</div>}
                                </div>
                            </div>
                            <div className="form-actions">
                                <div className="checkout-button">
                                    <button type="submit" className="register-home" disabled={isSubmitting}>
                                        {isSubmitting ? "Registering..." : "SIGN UP"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="register-footer text-center">
                        <p>Already have an account? <Link to={config.routes.SIGNUP} className="sign-up-link">Sign In</Link></p>
                    </div>
                    <div className="social-register text-center">
                        <p>- Sign With -</p>
                        <div className="social-buttons">
                            <a className="btn btn-social btn-facebook"><i className="fa-brands fa-facebook"></i></a>
                            <a className="btn btn-social btn-twitter"><i className="fa-brands fa-twitter"></i></a>
                            <a className="btn btn-social btn-instagram"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
