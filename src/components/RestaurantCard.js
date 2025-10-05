import { CDN_URL } from "../utils/constant.js";

//3. Restaurant Card
const RestaurantCard = (props) => {
    console.log(props.info);
    
    const { resData } = props;
    console.log(resData);

    return (
        <div className="res-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
            <img
                className="res-logo rounded-lg w-56 h-56"
                src={CDN_URL + resData.cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
            <h4>{resData?.cuisines?.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.deliveryTime} mins</h4>
            <h4>{resData.costForTwo}</h4>
        </div>
    );
};

//RestaurantCard is an input component
export const withPromotedLabel = (RestaurantCard) => {
    //This returns RestaurantCardPromoted component where it receives props sent from Body.js

    return (props) => {
        return (
            <div>
                <label className="absolute w-30 bg-black text-slate-200 m-3 ml-8 mt-4 p-1 rounded-md">
                    Promoted
                </label>
                <RestaurantCard  {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
