import Loading from "./Loading"
import HeaderTop from "./HeaderTop";
import Header from "./Header"
import Footer from "./Footer";
import Banner from "./Banner";
function Layout({ children }) {
    return (
        <div className="bg-dark">
            {/* <Loading /> */}
            <HeaderTop />
            <Header />
            <Banner />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;