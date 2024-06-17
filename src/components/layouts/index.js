import Loading from "./Loading"
import HeaderTop from "./HeaderTop";
import Header from "./Header"
import Footer from "./Footer";
function Layout({children}) {
    return ( 
        <div className="bg-dark">
            <Loading/>
            <HeaderTop/>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
     );
}

export default Layout;