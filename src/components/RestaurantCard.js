import { CDN_URL } from "../utils/constant.js";

//3. Restaurant Card
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={CDN_URL + resData.cloudinaryImageId}
            />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.deliveryTime} mins</h4>
            <h4>{resData.costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;
