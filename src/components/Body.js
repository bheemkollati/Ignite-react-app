import { useState } from "react"
import { restaurantList } from "./constants"
import RestaurantCard from "./RestaurantCard"

function fetchData(searchText,restaurants){
    if(searchText.length > 0){
        const filterData =  restaurants.filter( restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
        return filterData
    }
    return restaurantList
}

const Body = () => {
    const [searchText,setSearchText] =useState("");
    const [restaurants,setRestaurants] = useState(restaurantList)

    return (
        <>
            <div>
                <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                <button onClick={() =>{
                    //update the restaurant list
                    const data = fetchData(searchText,restaurants)
                    console.log(data,'searhc cli')
                    //update the list based on result
                    setRestaurants(data)
                }}>search</button>
            </div>
            <div className="cart-list">
            {
                restaurants.map(restaurant => (
                    <RestaurantCard data={restaurant} key={restaurant.data.id}/>  
                ))
            }
            </div>
        </>
    )
}

export default Body