import React, { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(SWIGGY_MENU_API_URL + resId);
        const json = await data.json();

        console.log(json.data);

        setResInfo(json.data);
    };

    if (resInfo === null) {
        return <Shimmer />;
    }
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    const menu =
        resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card
            .itemCards;
    console.log(menu);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {menu?.map((item) => {
                    return (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {" Rs. "}{" "}
                            {item.card.info.price / 100 ||
                                item.card.info.defaultPrice / 100}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
