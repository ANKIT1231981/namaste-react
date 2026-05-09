import { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCard";
import mockMenu from "../utils/mockMenu.json";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  
  // Wrong data extraction
  // const { name, city, locality, costForTwoMessage, cuisines, avgRating, sla } = resInfo?.cards?.card?.card?.info;

  if (resInfo === null) return <ShimmerCards />;

  // ✅ Correct data extraction
  const info = resInfo?.cards[2]?.card?.card;

  const { name, city, locality, costForTwoMessage, cuisines, avgRating } = info;


  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>city : {city}</h3>
      <h3>locality : {locality}</h3>
      <h3>costForTwo : {costForTwoMessage}</h3>
      <h3>cuisines : {cuisines}</h3>
      <h3>avgRating : {avgRating}</h3>
    </div>
  )
}

export default RestaurantMenu;