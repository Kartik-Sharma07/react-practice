import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurant_data from "../utils/mock_data";

const Body = () => {
    const [restaurant_details, setlistOfRestaurant] = useState(restaurant_data);
    return (
        <div className="body">
            <button onClick={() => {
                const filteredList = restaurant_details.filter((restaurant_obj) => restaurant_obj.info.avgRating > 4);
                setlistOfRestaurant(filteredList);
            }}>Top restaurants</button>
            <div className="restaurant-card-container">
                {restaurant_details.map((restaurant_obj,index) => (
                    <RestaurantCard key={restaurant_obj.info.id} restaurant_obj={restaurant_obj}/>
                ))}
            </div>
        </div>
    );
};

export default Body;