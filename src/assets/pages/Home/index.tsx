import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectGrid from "../../components/ProjectGrid";
import TechStack from "../../components/TechStack";

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <TechStack />
            <ProjectGrid />
            <Footer />
        </>
    )
}
export default Home;