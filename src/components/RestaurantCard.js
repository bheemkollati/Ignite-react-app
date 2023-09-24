import { IMG_CDN_URL } from "./constants"

const RestaurantCard = ({data}) => {
    const {cloudinaryImageId,name,address} = data.data
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