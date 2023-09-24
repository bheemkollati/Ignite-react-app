import { useState ,useEffect } from "react"
import { restaurantList } from "./constants"
import RestaurantCard from "./RestaurantCard"
import Shrimmer from "./Shrimmer"

function fetchData(searchText,restaurants){
    const filterData =  restaurants.filter( restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
    return filterData
}

const Body = () => {
    const [searchText,setSearchText] =useState("");

    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])

    useEffect(()=>{
        console.log('useEffect called...')
        getAllRestaurants().catch((error) => {
            return error.message
        })
    },[]);
    console.log("render()")

    async function getAllRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
        setAllRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return (allRestaurants.length === 0) ? <Shrimmer /> :  (
        <>
            <div>
                <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                <button onClick={() =>{
                    //update the restaurant list
                    const data = fetchData(searchText,allRestaurants)
                    console.log(data,'searhc cli')
                    //update the list based on result
                    setFilteredRestaurants(data)
                }}>search</button>
            </div>
            <div className="cart-list">
            {
                filteredRestaurants.map(restaurant => (
                    <RestaurantCard data={restaurant} key={restaurant?.info?.id}/>  
                ))
            }
            </div>
        </>
    )
}

export default Body