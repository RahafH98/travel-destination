import data from "../../data/data.json"
import './Tour.css'
export default function Tour() {
    return (
    <>
    
    <div className="flex-container" >
    {data.map((data,i)=>(<>
    
      <div className="flex-item">
      
     <img className="tour-img" src={data.image} alt="" />
     <h4 >{data.name}</h4>
    </div>
    </>))}
    </div>
     
    </>
    )
  }