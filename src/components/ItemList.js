import { useDispatch } from "react-redux";
import { RESTAURANT_COMMON_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({item}) => {
    
    console.log(item, item?.card?.info)
    const {name, description, defaultPrice, price, imageId} = item?.card?.info;

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem(item));
    };

    return (
            <div className="category-name-img-container">
                <div className="category-name">
                    <h4>{name}</h4>
                    <div>{description}</div>
                    <div>₹ {(price) ? price / 100 : defaultPrice / 100}</div>
                </div>
                <div className="category-img">
                    <button className="category-add-button" onClick={handleAddItem}>Add +</button>
                    {imageId && <img alt="item-image" src={RESTAURANT_COMMON_URL + imageId}/>}
                </div>
            </div>
    );
};

export default ItemList;