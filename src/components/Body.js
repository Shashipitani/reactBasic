
import React from "react";
import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/MockData";




const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([...resObj]);
    return(
        <div className="body">
        <div className="filter">
            <button  onClick={()=>{
                const filteredList= listOfRestaurants.filter((restuarant)=>restuarant.info.avgRating>4.3);
                console.log(filteredList);
                setListOfRestaurants(filteredList);

            }} className="filter-btn">Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {listOfRestaurants.map((restaurant,index) => {
        return (<RestaurantCard {...restaurant.info} key={restaurant?.info?.id || "restro"+{index}} />)}
      )}

        </div>
        </div>
    )
}

export default Body;
