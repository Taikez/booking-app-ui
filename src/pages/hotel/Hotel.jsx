import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291027695.jpg?k=cb1c514b84d32424e5ef54a91493b5c6aa6bf4d00546956a9c6838da5974c1fd&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/196572964.jpg?k=a2a0fe1e448c18c7d509177de9a7ac057efa9743e2e57dda5484175817d5aa5a&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/195264653.jpg?k=e9cdd1dab085a35eb84c397c04942de8ca8520feee7771f0d2a425cc3255731a&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/196991818.jpg?k=0a26557af02f2974db0ac7f6314062ec56a2ec63e7af8fbadf9e830e4d949cb6&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/222799058.jpg?k=048fbae317aceda802a07085f5bbff1bbc83de9fbde55d1a89ea0aa0e13e9de4&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/195264407.jpg?k=6e36bd178253db8d6343e51d0ae2f8acac00a3c138d613da1e81fedc26eca484&o=&hp=1"
        },
    ]

    const handleOpen = (i)=> {
        setSlideNumber(i)
        setOpen(true)
    }
    
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                { open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImage" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight}/>
                </div> }
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Jl. Taman Ratu Asia Baru 2</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        { photos.map((photo, i) =>(
                            <div className="hotelImageWrapper">
                                <img onClick={ ()=> handleOpen(i) } src={ photo.src } alt="" className="hotelImage" />
                            </div>
                        )) }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Hotel Aryaduta Menteng</h1>
                            <p className="hotelDescription">Hotel Aryaduta Menteng is located in Jakarta's business district and offers luxurious accommodations with spacious seating areas and a marble bathtub. It features a rejuvenating spa and an outdoor spa pool. Rooms are spacious and well decorated with fine furnishings. They all offer views of the city and come equipped with a work desk, cable TV and a safe. The hotel provides a 24-hour room service. Hotel Aryaduta Menteng is a short distance from government offices and embassies. It is also just a 5-minute drive from shopping, dining and entertainment areas, while Jakarta International Airport is a 35-minute drive away. Wine and dine at any of the hotel's 7 food and beverage options offering a range of international cuisine from Ambiente's Italian dishes to fresh Japanese dishes at Shima. 24-hour in-room dining is also available.</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>Top Location: Highly rated by recent guests (8.3)</span>
                            <h2>
                                <b>$940</b> 
                                <small>(9 nights)</small>
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}

export default Hotel