import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6";
import { RiArrowUpWideLine } from "react-icons/ri";
import "./index.css"

const OptionSelection=(props)=>{
  const {customizeName}=props;
  const [isCustomize,setCustomize]=useState(false)
    const [value,setValue]=useState("All")
    return(
      <div className="customize-card">
      <div className="name-togglebar">
          <p className="customize-name">{customizeName}</p>
          <div>{isCustomize===false?<FaAngleDown onClick={(e)=>setCustomize(prevState=>!prevState)} size={16} fill="#292D32"/>:<RiArrowUpWideLine onClick={(e)=>setCustomize(prevState=>!prevState)} size={16} fill="#292D32"/>}</div>
      </div>
      <div className="selcetion-card">
            <p className="selected-value">{value}</p>
            {isCustomize===true?<><div>
            <input 
            type="radio"
            onChange={(e)=>setValue(e.target.id)}
            className="check-box"
            id="Men"
            name="selction"
            vaule={value}
            />
            <label htmlFor="Men">Men</label>
            </div>

            <div>
            <input 
            type="radio"
            onChange={(e)=>setValue(e.target.id)}
            className="check-box"
            id="Women"
            name="selction"
            vaule={value}
            />
            <label htmlFor="Women">Women</label>
            </div>

            <div>
            <input 
            type="radio"
            onChange={(e)=>setValue(e.target.id)}
            className="check-box"
            id="Baby & Kids"
            name="selction"
            vaule={value}
            />
            <label htmlFor="Bab & Kids">Baby & Kids</label>
            </div>

            <div>
            <input 
            type="radio"
            onChange={(e)=>setValue(e.target.id)}
            className="check-box"
            id="All"
            name="selction"
            vaule={value}
            />
            <label htmlFor="All">All</label>
            </div></>:""}
          </div>
  </div>
         
    )
}

export default OptionSelection