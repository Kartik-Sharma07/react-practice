import { RESTAURANT_COMMON_URL } from "../utils/constant";

const ItemList = ({item}) => {
    
    const {name, description, defaultPrice, price, imageId} = item?.card?.info
    return (
            <div className="category-name-img-container">
                <div className="category-name">
                    <h4>{name}</h4>
                    <div>{description}</div>
                    <div>₹ {(price) ? price / 100 : defaultPrice / 100}</div>
                </div>
                <div className="category-img">
                    {imageId && <img alt="item-image" src={RESTAURANT_COMMON_URL + imageId}/>}
                </div>
            </div>
    );
};

export default ItemList;