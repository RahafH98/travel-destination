import { Link } from "react-router-dom"
import data from "../../../data/data.json"
import './Tour.css'
export default function Tour() {
    return (
    <>
    
    <div className="flex-container" >
    {data.map((data,i)=>(<>
     
        {console.log(data.id)}
      <div key={data.id} className="flex-item">
      <Link  to={`/Details/${data.id}`}>
     <img className="tour-img" src={data.image} alt="" />
     <h4 >{data.name}</h4>
     </Link>
    </div>
    
    </>))}
    </div>
     
    </>
    )
  }