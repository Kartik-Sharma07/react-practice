import { RESTAURANT_COMMON_URL } from "../utils/constant";

const RestaurantCard = ({restaurant_obj}) => {
    const {name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId} = restaurant_obj?.info;
    return (
        <div className="restaurant-card">
            <div className="restaurant-image-container">
                <img alt="restaurant-image" src={RESTAURANT_COMMON_URL + cloudinaryImageId}/>
            </div>
            <div className="restaurant-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.slaString}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;