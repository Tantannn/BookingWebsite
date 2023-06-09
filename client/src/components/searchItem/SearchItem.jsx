import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = (items) => {
  return (
    <div className="searchItem">
      <img
        src={items.item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{items.item.name}</h1>
        <span className="siDistance">{items.item.distance}m from center</span>
        <span className="siTaxiOp">{items.item.tag}</span>
        <span className="siSubtitle">
          {items.item.desc}
        </span>
        <span className="siFeatures">
          {items.item.type}
        </span>
        {/* If can cancel */}
        {items.item.free_cancel ? (
          <div>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
        ) : (<div></div>)}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{items.item.rate_text}</span>
          <button>{items.item.rate}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${items.item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          
          <Link to={"./" + items.item._id}><button className="siCheckButton">See availability</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
