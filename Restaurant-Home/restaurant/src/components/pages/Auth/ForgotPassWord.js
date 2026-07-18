import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from 'react-toastify';

function ForgotPassword() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
  });

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

    setFormErrors(newErrors);

    return valid;
  };

  const submitResponse = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setSubmitting(true);

        await api.post(url.AUTH.FORGOT_PASSWORD, formData);
        setTimeout(() => {
          setFormSubmitted(true);
          setSubmitting(false);
          toast.success("Submitted successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }, 1500);
      } catch (error) {
        setTimeout(() => {
          setFormSubmitted(true);
          setSubmitting(false);
          toast.success("Submitted successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }, 1500);
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
                            name="email"
                            className={`form-control pl-15 bg-transparent ${formErrors.email ? "is-invalid" : ""}`}
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            autoFocus
                          />
                          {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                        </div>
                      </div>

                      {submitting && (
                        <div className="row">
                          <button type="button" className="rbt-btn btn-md fw-normal btn-block btn-not__hover w-100" disabled>
                            <i className="fa fa-spinner fa-spin p-0"></i> Submitting...
                          </button>
                        </div>
                      )}

                      {!submitting && !formSubmitted && (
                        <div className="row">
                          <div className="col-12 text-center">
                            <button type="submit" className="btn btn-info margin-top-10"> Reset Email</button>
                          </div>
                        </div>
                      )}

                      {formSubmitted && (
                        <div className="row">
                          <div className="col-12 text-center">
                            <p className="text-success fw-300 fz-15">Your password reset email has been sent.</p>
                          </div>
                        </div>
                      )}
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

export default ForgotPassword;