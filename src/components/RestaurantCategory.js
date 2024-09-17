import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({category, setShowItems, showItems, index}) => {
    const name = category?.card?.card?.title;
    const items = category?.card?.card?.itemCards;

    /*const [showItems, setShowItems] = useState(false);*/

    const handleClick = () => {
        /*setShowItems(!showItems);*/
        setShowItems();
        console.clear();
    };

    return (
        <div className="category-card">
            <div className="category-heading" onClick={handleClick}>
                <h3>{name}</h3>
                <span>{showItems ? "-" : "+"}</span>
            </div>
            
            {showItems && <div>
                {items.map((item) => <ItemList key={item?.card?.info?.id} item={item}/>)}
            </div>}
        </div>
    );
}

export default RestaurantCategory;