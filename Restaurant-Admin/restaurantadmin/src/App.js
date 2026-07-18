import { useLocation, Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { privateRoutes, authenticationRoutes } from "./routes/routes";
import { isLoggedIn, getDecodedToken } from "./utils/auth";
import Forbidden from "./components/pages/Other/Forbidden";

const checkUserRole = (userRole, allowedRoles) => {
    if (!allowedRoles || allowedRoles.length === 0) return true;
    return allowedRoles.includes(userRole);
};

const ProtectedRoute = ({ element, allowedRoles }) => {
    const [forbidden, setForbidden] = useState(false);
    const isAuthenticated = isLoggedIn();
    const location = useLocation();

    useEffect(() => {
        const decodeToken = getDecodedToken();
        let accountRole = "";

        if (decodeToken && decodeToken.Role && decodeToken.Role.length > 0 && decodeToken.Role[0].authority) {
            accountRole = decodeToken.Role[0].authority;
        } else {
            console.error("Role not found in token");
        }

        if (!checkUserRole(accountRole, allowedRoles)) {
            setForbidden(true);
        } else {
            setForbidden(false);
        }
    }, [allowedRoles, location.pathname]);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (forbidden) {
        return <Forbidden />;
    }

    return element;
};

const ProtectedAuthRoute = ({ element }) => {
    const isAuthenticated = isLoggedIn();
    return isAuthenticated ? <Navigate to="/" replace /> : element;
};

function App() {

    return (
        <div className="App">
            <Router>
            <Routes>
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<ProtectedRoute element={<Page />} />} />;
                })}
                {authenticationRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<ProtectedAuthRoute element={<Page />} />} />;
                })}
            </Routes>
            </Router>
        </div>
    );
}

export default App;