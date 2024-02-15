import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/183759096.webp?k=b78f9f083dad7d9d788d0bb04bf60b650c232267d3636bafcdd3a0cdbd1021b9&o=" alt="" className="searchItemImage" />
        <div className="siDesc">
            <h1 className="siTitle">Batu Agung Villa Ubud</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Very nice villa</span>
            <span className="siFeatures">Deluxe double room</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="siDetailText">
              <span className="siPrice">$123</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem