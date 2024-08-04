import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_COMMON_API_URL } from "../utils/constant";
function RestaurantMenu() {

    const [resInfo, setResInfo] = useState([]);

    const {resId} = useParams();

    const fetchData = async () => {
        const response = await fetch (RESTAURANT_MENU_COMMON_API_URL + resId);
        const json = await response.json();
        setResInfo(json?.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(resInfo.length === 0){
        return <Shimmer/>
    }

    const items = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const {costForTwoMessage, totalRatingsString, avgRatingString, name, cuisines} = resInfo?.cards[2]?.card.card.info;

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{`${avgRatingString} (${totalRatingsString}) ${costForTwoMessage}`}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h2>Menu</h2>
        <h3>Recommended</h3>
        <ul>
            {items.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu;