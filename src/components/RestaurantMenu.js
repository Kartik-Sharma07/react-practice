import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showItems, setShowItems] = useState(0);

    if(resInfo.length === 0){
        return <Shimmer/>
    }

    const items = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    
    const {costForTwoMessage, totalRatingsString, avgRatingString, name, cuisines} = resInfo?.cards[2]?.card.card.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
  return (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{`${avgRatingString} (${totalRatingsString}) ${costForTwoMessage}`}</h3>
        <h3>{cuisines.join(", ")}</h3>
        
        {categories.map((category, index) => <RestaurantCategory key={category?.card?.card.title} category={category} showItems={index === showItems ? true : false} setShowItems={() => Number.isInteger(showItems) ? setShowItems(null) : setShowItems(index)} index={index}/>)}
        {/*<h2>Menu</h2>
        <h3>Recommended</h3>
        <ul>
            {items.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
        </ul>*/}
    </div>
  )
}

export default RestaurantMenu;