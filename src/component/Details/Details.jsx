import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./Details.css"
import data from "../../data/data.json"
export default function Details() {
    const param = useParams()
   console.log(param.id);
   const [showmore, setshowmore] = useState(false)
    return (
    <>
    <div className="container" >
     {data.map((data,i)=>(<>
     
     {console.log(data.id)}
   <div className="item " key={data.id} >
   {data.id === param.id ? <div>
    <img className="details-img" src={data.image} alt="" />
    <p className="info">{showmore ? data.info : `${data.info.substring(0,250)}`}
    <button className="btn" onClick={()=>setshowmore(!showmore)}>
      {showmore ?"show less ":"show more"}
    </button>
    </p>
    </div>:null
       }
 </div>

 </>))}
   
 </div>
    </>
    )
  }