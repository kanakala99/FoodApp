import { useEffect ,useState} from "react";

const userOnlineStatus= () =>{
    const[onlineStatus,setonlineStatus]=useState(true)
        useEffect( ()=>{
            window.addEventListener("offline",(event)=>{
                setonlineStatus(false)
            })

            window.addEventListener("online",(event)=>{
                setonlineStatus(true)
            })
        },[]);
        
    return onlineStatus;
}

export default userOnlineStatus;