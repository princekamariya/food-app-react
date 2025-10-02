import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestrauntMenu from "../utils/useRestrauntMenu";
const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestrauntMenu(resId);

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
