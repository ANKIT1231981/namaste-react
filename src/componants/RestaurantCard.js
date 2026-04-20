import listOfRes from "../utils/RowData";
import star from "../utils/star.png";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, avgRating, cuisines, cloudinaryImageId, } =
    resData?.info;
  // console.log(star);
  const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="card-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <div className="res-card-info">
        <h5>{name}</h5>
      <h6>{cuisines?.join(" , ")}</h6>
      <h6>{costForTwo}</h6>
      <div className="rating">
        <h6>{avgRating} stars</h6>
        <h6>{deliveryTime} Min</h6>
      </div>
      {/* <img src={star} alt="star" /> */}
      </div>
    </div>
    
  );
};

export default RestaurantCard;
