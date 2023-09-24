import { IMG_CDN_URL } from "./constants"

const RestaurantCard = (props) => {
    console.log(props)
    const {cloudinaryImageId,name,address} = props.data?.info
    return (
        <>
            <div className="cart-container">
                <img src={IMG_CDN_URL+cloudinaryImageId} height="150px" width="150px" alt="cartImage"></img>
                <h2>{name}</h2>
                <p>{address}</p>
            </div>
        </>
    )
}

export default RestaurantCard