
import { CDN_IMG } from "../Utils/constants";
const RestaurantCard = ({ name,cuisines,cloudinaryImageId,costForTwo,avgRating,totalRatingsString }) =>{
    
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src={CDN_IMG+cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{totalRatingsString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default RestaurantCard;