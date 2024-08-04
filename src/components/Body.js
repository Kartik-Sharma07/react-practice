import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_CARDS_API_URL } from "../utils/constant";
// import restaurant_data from "../utils/mock_data"; (NOT REQUIRED AS WE ARE NOW FETCHING THE DATA FROM SWIGGY'S API) 

const Body = () => {

    const [restaurant_details, setlistOfRestaurant] = useState([]);
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);

    const [searchtext, setSearchtext] = useState("");

    const fetchData = async () => {
        let response = await fetch(RESTAURANT_CARDS_API_URL);
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
                    <Link key={restaurant_obj.info.id} to={"/restaurant/" + restaurant_obj.info.id}><RestaurantCard restaurant_obj={restaurant_obj}/></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;