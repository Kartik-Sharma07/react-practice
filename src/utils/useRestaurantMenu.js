import {useEffect, useState} from "react";
import { RESTAURANT_MENU_COMMON_API_URL } from './constant';

function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState([]);

    const fetchData = async () => {
        const response = await fetch (RESTAURANT_MENU_COMMON_API_URL + resId);
        const json = await response.json();
        setResInfo(json?.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return resInfo;
}

export default useRestaurantMenu;