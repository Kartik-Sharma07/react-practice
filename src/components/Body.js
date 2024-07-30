import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import restaurant_data from "../utils/mock_data"; (NOT REQUIRED AS WE ARE NOW FETCHING THE DATA FROM SWIGGY'S API) 

const Body = () => {

    const [restaurant_details, setlistOfRestaurant] = useState([]);
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);

    const [searchtext, setSearchtext] = useState("");

    const fetchData = async () => {
        let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0801065&lng=77.5479823&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await response.json();
        setlistOfRestaurant(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(()=>{
        fetchData();
    }, []);
    
    return (restaurant_details.length === 0) ? (<Shimmer/>) :  (
        <div className="body">
            <input type="text" value={searchtext} onChange={(e) => {
                setSearchtext(e.target.value);
            }}/>
            <button onClick={() => {
                if(searchtext.trim()){
                    const filteredList = restaurant_details.filter((restaurant_obj) => restaurant_obj.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                    console.log(searchtext,filteredList);
                    setFilterdRestaurants(filteredList);
                } 
            }}>Search</button>
            <button onClick={() => {
                const filteredList = restaurant_details.filter((restaurant_obj) => restaurant_obj.info.avgRating > 4.5);
                setFilterdRestaurants(filteredList);
            }}>Top restaurants</button>
            <div className="restaurant-card-container">
                {filterdRestaurants.map((restaurant_obj,index) => (
                    <RestaurantCard key={restaurant_obj.info.id} restaurant_obj={restaurant_obj}/>
                ))}
            </div>
        </div>
    );
};

export default Body;