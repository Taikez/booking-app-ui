import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCar, faDice, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faDice} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Stays</span>
                    </div>
                </div>
                <h1 className="headerTitle">Your Gateway to Seamless Reservations.</h1>
                <p className="headerDesc">
                    Streamline your bookings with TaikezBooking - hassle-free, reliable, convenient.
                </p>
                <button className="headerBtn">Sign in / Register</button>
            </div>
        </div>
    )
}

export default Header