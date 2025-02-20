
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,avgRatingString,cuisines,costForTwo}=resData?.info
  
    return(
      <div className='res-card'>
        <img className='res-log' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{avgRatingString}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  }

export default RestaurantCard;