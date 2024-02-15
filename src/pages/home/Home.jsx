import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/> 
            <div className="homeContainer">
                <div>
                    <h1 className="homeTitle">Trending Destination</h1>
                    <h3 className="homeTitleDesc">Most popular choices for travelers from Indonesia</h3>
                    <Featured/>
                </div>
                <div>
                    <h1 className="homeTitle">Browse by property type</h1>
                    <PropertyList/>
                </div>
                <div>
                    <h1 className="homeTitle">Explore Indonesia</h1>
                    <h3 className="homeTitleDesc">These popular destinations have a lot to offer</h3>
                    <FeaturedProperties/>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home