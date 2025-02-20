import { useState ,useEffect } from "react"

const RestauranteMenu= () =>{
     
    const[restData,setrestData]=useState();

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu= async () =>{
        // const data= await fetch("https://www.swiggy.com/?utm_source=affiliate&utm_medium=admitad_591217_lh_441eubp&utm_campaign=perf_Food_NU_Webaffiliates_Saatchi_NUA_Interest_2023-03_timeslot_android_74af6f8c60acd860deb461efc5dea575");
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=105237&catalog_qa=undefined&submitAction=ENTER");
    }
    return(
        <div className="menu">
            <h1>{restData?.name}</h1>
            <h2>menu</h2>
            <ul>
            <li>biryan</li>
            <li>burgers</li>
            <li>coke</li>
            </ul>
        </div>
    )
}

export default RestauranteMenu;