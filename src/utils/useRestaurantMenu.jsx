import { useEffect, useState } from "react";
import { MENU_API, PROXY_URL } from "../utils/constants";


const useRestaurantMenu = (resId) => {
 
  const [resInfo, setResInfo] = useState(null); 
  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const CORS_PROXY = "https://corsproxy.io/?";

    const SWIGGY_API =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10582";

    const data = await fetch(CORS_PROXY + encodeURIComponent(SWIGGY_API));
    console.log(data.status);
    console.log(data.ok);
    console.log(data.type);

    const text = await data.text();
    // setResInfo(text);   Error is coming due to invalid text.
    console.log(text);
  }
  return resInfo;
};

export default useRestaurantMenu;