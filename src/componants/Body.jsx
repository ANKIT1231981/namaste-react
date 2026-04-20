import RestaurantCard from "./RestaurantCard";
// import listOfRes from "../utils/rowData";
import { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState("");
  const [textValue, setTextValue] = useState("");
  const [resForFilter, setResForFilter] = useState("");
  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setResForFilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfRestaurants?.length === 0 ? <ShimmerCards /> : (
    <div className="body">
      <div className="search-div">
        <input type="text" value={textValue} onChange={(e) => { setTextValue(e.target.value) }} />
        <button
          className="search-btn"
          onClick = { () => {
            const filteredRes = resForFilter.filter((e) => e.info.name.toLowerCase().includes(textValue.toLowerCase()));
            setListOfRestaurants(filteredRes);
          }}
        > Search </button>


      </div>
      <div className="btn">
        <button
          className="filter-btn"
          onClick={() => {
            // const filteredRestaurant = list.filter(
            //   (res) => res.data.avgRating > 4
            // );
            // setList(filteredRestaurant);
            setListOfRestaurants(resForFilter.filter((res) => res?.info?.avgRating > 4))
          }}
        >Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))
        }


      </div>
    </div >
  );
};

export default Body;