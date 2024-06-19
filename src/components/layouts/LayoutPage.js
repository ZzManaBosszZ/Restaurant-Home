import BreadCrumb from "./BreadCrumb";
import HeaderTopPages from "./HeaderTopPages";
import HeaderPages from "./HeaderPages";
import Footer from "./Footer";
function LayoutPages({children}) {
    return ( 
        <div className="bg-dark">
            {/* <Loading /> */}
            <HeaderTopPages />
            <HeaderPages />
            <BreadCrumb/>
            <div>{children}</div>
            <Footer />
        </div>
     );
}

export default LayoutPages;