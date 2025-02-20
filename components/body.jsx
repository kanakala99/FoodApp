import RestaurantCard from "./Restaurante"
import { useEffect, useMemo, useState } from "react";
import Shimmer from "./Shimmer";
import userOnlineStatus from "./userOnlineStatus";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [displayList, setdisplayList] = useState([]);
  const [searchText, setsearchText] = useState("");

   useEffect(() => {
   fetchData();
   },[]);

  useEffect(() => {
    setdisplayList(
      listOfRes
    )
  }, [listOfRes])




  const fetchData = async () => {
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5679146&lng=73.91434319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setlistOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const onlineStatus=userOnlineStatus();

  if(onlineStatus === false) return <h1>Look like you're offline!! please check your internet connection</h1>

  console.log(listOfRes)
  if (listOfRes.length === 0) {
    return <Shimmer />
  }
  return (
    <div className='body'>

      <div className="button-filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setsearchText(e.target.value)
          }} />
          <button onClick={() => {
            console.log(listOfRes)
            const filterRestaurent = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            console.log(filterRestaurent)
            setdisplayList(filterRestaurent)

          }}>search</button>
        </div>
        <div className="filter">
          <button className="button" onClick={() => {
            const filterList =
              listOfRes.filter((res) => res.info.avgRating > "4.2");
            setlistOfRes(filterList)
          }}>Top Rated restaurant</button>
        </div>
      </div>
      <div className='res-container'>
        {displayList.map(res => <RestaurantCard key={res.info.id} resData={res} />)}
      </div>
    </div>
  )
}
export default Body