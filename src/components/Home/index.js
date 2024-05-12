import Header from "../Header"
import Footer from "../Footer"
import ProductCard  from "../ProductCard";
import OptionSelection from "../OptionSelection";
import { useState, useEffect } from "react"
import { FaAngleLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import "./index.css"

const Home=()=>{
    const [prodcutsData,setProductsData]=useState([]);
    const [isFilterShows,setFilterShows]=useState(false);
    const [filterOptionValue,setFilterOptionValue]=useState("")
    

    const getProductData=async()=>{
        const response=await fetch("https://dummyjson.com/products");
        const data=await response.json()
        console.log(data.products)
        setProductsData(data.products)
    }
    
    useEffect(()=>{getProductData()},[])
    return(
        <div className="home-page">
            <Header/>
            <main>
                <div className="main-heading-description">
                    <h2 className="main-heading-name">DISCOVER OUR PRODUCTS</h2>
                    <p className="main-description">
                        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br/>
                        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor
                    </p>
                </div>

               

                <div className="filter-features-toggle-bar">
                    <div className="total-item-count-filter-showing-toggle">
                        <p className="count">{prodcutsData.length} ITEMS</p>
                        <div>
                        {isFilterShows===false?<FaAngleLeft onClick={(e)=>setFilterShows(prevState=>!prevState)} size={15}/>:<FaChevronRight onClick={(e)=>setFilterShows(prevState=>!prevState)} size={15} />}</div>
                        <p className="filter-status">{isFilterShows===false?"SHOW FILTER":"HIDE FILTER"}</p>
                        
                    </div>
                    <div className="recommended-toggle-bar">
                        <select className="filter-options" value={filterOptionValue} onChange={(e)=>setFilterOptionValue(e.target.value)}>
                            <option value="RECOMMENDED">RECOMMENDED</option>
                            <option value="NEWEST FIRST">NEWEST FIRST</option>
                            <option value="POPULAR">POPULAR</option>
                            <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
                            <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
                        </select>
                       
                    </div>
                </div>

                <div className="filter-features-mobile-toggle-bar">
                   <button type="button" onClick={(e)=>setFilterShows(prevState=>!prevState)} className="mobile-filters-button">FILTER</button>
                   <select className="mobile-filter-options" value={filterOptionValue} onChange={(e)=>setFilterOptionValue(e.target.value)}>
                            <option value="RECOMMENDED">RECOMMENDED</option>
                            <option value="NEWEST FIRST">NEWEST FIRST</option>
                            <option value="POPULAR">POPULAR</option>
                            <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
                            <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
                        </select>
                </div>

               

                <div className="filter-and-products-container">
                    {isFilterShows===true?<div className="filter-container">
                            <div className="customize">
                                <input 
                                type="checkbox"
                                id="customize"
                                className="customize-checkbox"/>
                                <label className="checkbox-label" htmlFor="customize">CUSTOMIZABLE</label>
                            </div>
                            <hr className="line" />     
                                <OptionSelection customizeName="IDEAL FOR" />
                            <hr className="line" />
                                <OptionSelection customizeName="OCCASION" />
                            <hr className="line" />
                                <OptionSelection customizeName="WORK" />
                            <hr className="line"/>
                                <OptionSelection customizeName="FABRIC" />
                            <hr className="line"/>
                                <OptionSelection customizeName="SEGMENT" />
                            <hr className="line"/>
                                <OptionSelection customizeName="SUSTAINABLE FOR"/>
                            <hr className="line"/>
                                <OptionSelection customizeName="RAW MATERIALS"/>  
                            <hr className="line" />                        
                                <OptionSelection customizeName="PATTERN" />
                    </div>:""}

                    <div className="products-container">
                        <ul>
                            {prodcutsData.map(product=>(
                                <ProductCard productDetails={product} key={product.id}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
       )
    }

export default Home