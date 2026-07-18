import { Link } from "react-router-dom";
import { getDecodedToken } from "../../../utils/auth";

function Forbidden() {
    const decodeToken = getDecodedToken();
    let accountRole = "";

    if (decodeToken && decodeToken.Role && decodeToken.Role[0].authority) {
        accountRole = decodeToken.Role[0].authority;
    } else {
        console.error("Role not found in token");
    }

    let redirectUrl = "/";

    if (accountRole === "ADMIN" || accountRole === "") {
        redirectUrl = "/";
    } else if (accountRole === "") {
        redirectUrl = "/";
    } else if (accountRole === "") {
        redirectUrl = "/";
    }

    return (
        <div className="maintenance-block">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card error-card">
                            <div className="card-body">
                                <div className="error-image-block">
                                    <img className="img-fluid" src="../assets/images/pages/img-cunstruct-2.svg" alt="" />
                                </div>
                                <div className="text-center">
                                    <h1 className="mt-5">
                                        <b>Access Denied!</b>
                                    </h1>
                                    <p className="mt-2 mb-4 text-muted">
                                        You don't have access to this page.
                                        <br />
                                        Please contact your administrator if you believe this is an error.
                                    </p>
                                    <p className="mb-4"></p>
                                    <Link to={redirectUrl} className="btn btn-primary mb-3">
                                        Go Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forbidden;