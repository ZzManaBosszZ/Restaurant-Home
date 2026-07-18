import Layout from "../../layouts";
import TopFeature from "../../views/Home/TopFeature";
import WhyChoose from "../../views/Home/WhyChoose";
import BigDeal from "../../views/Home/BigDeal";
import Menu from "../../views/Home/Menu";
import DownloadApp from "../../views/Home/DownloadApp";
import Opening from "../../views/Home/OpeningHours";
import Chef from "../../views/Home/Chefs";
import Blog from "../../views/Home/Blog";
function Home() {
    return (
        <Layout title="Home Page">
        <TopFeature/>
        <WhyChoose/>
        <BigDeal/>
        <Menu/>
        <DownloadApp/>
        <Opening/>
        <Chef/>
        <Blog/>
        </Layout>
    );
}

export default Home;