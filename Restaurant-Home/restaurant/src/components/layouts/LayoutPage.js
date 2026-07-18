import BreadCrumb from "./BreadCrumb";
import HeaderTopPages from "./HeaderTopPages";
import HeaderPages from "./HeaderPages";
import Footer from "./Footer";

function LayoutPages({ children, showBreadCrumb = true }) {
    return (
        <div className="bg-dark">
            {/* <Loading /> */}
            <HeaderTopPages />
            <HeaderPages />
            {showBreadCrumb && <BreadCrumb />}
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default LayoutPages;
