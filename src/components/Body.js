import { useEffect, useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const getRestaurants = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();

        //Optional chaining
        console.log(
            json.data?.cards[4].card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setListOfRestaurant(
            json.data?.cards[4].card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRestaurants(
            json.data?.cards[4].card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };
    useEffect(() => {
        getRestaurants();
    }, []);

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filterdRestaurant = listOfRestaurants.filter(
                                (res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText)
                            );
                            console.log(filterdRestaurant);
                            setFilteredRestaurants(filterdRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants?.map((restaurant) => (
                    <Link
                        to={"/restaurants/" + restaurant.info.id}
                        key={restaurant.info.id}
                    >
                        <RestaurantCard
                            key={restaurant.info.id}
                            resData={restaurant.info}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
