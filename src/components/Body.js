import { useEffect, useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { SWIGGY_API } from "../utils/Constant.js";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

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

    if (onlineStatus === false) {
        return <h1>Looks like you are offline</h1>;
    }
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="search-box border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-1 bg-green-100 m-4 rounded-lg"
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
                <div className="flex items-center">
                    <button
                        className="filter-btn px-4 py-1 bg-gray-100 m-4 rounded-lg"
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
            </div>
            <div className="res-container flex flex-wrap rounded-lg">
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
