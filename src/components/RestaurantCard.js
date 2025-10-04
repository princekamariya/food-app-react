import { CDN_URL } from "../utils/constant.js";

//3. Restaurant Card
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);

    return (
        <div className="res-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
            <img
                className="res-logo rounded-lg w-56 h-56"
                src={CDN_URL + resData.cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.deliveryTime} mins</h4>
            <h4>{resData.costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;
