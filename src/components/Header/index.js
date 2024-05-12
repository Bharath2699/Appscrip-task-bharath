import {Link} from "react-router-dom"
import { useState } from "react";
import { GiFlowerEmblem } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoLogoXbox } from "react-icons/io";
import "./index.css"

const Header=()=>{
   const [menuToggle,setMenuToggle]=useState(false);
    return(
        <header>
          <div className="top-header-bar">
            <div className="top-header-image-name">
               <IoLogoXbox fill="red" size={16}/>
               <p className="top-header-name">Lorem ipsum dolor</p>
            </div>
            <div className="top-header-image-name ">
               <IoLogoXbox fill="red" size={16}/>
               <p className="top-header-name ">Lorem ipsum dolor</p>
            </div>
            <div className="top-header-image-name ">
               <IoLogoXbox fill="red" size={16}/>
               <p className="top-header-name">Lorem ipsum dolor</p>
            </div>
          </div>

          <div className="mobile-top-header-bar">
          <div className="top-header-image-name">
               <IoLogoXbox fill="red" size={16}/>
               <p className="top-header-name">Lorem ipsum dolor</p>
            </div>
          </div>

          <div className="logo-serach-account-cart-section">
            <div className="toggle-menu"><CiMenuBurger onClick={()=>{setMenuToggle(prevState=>!prevState)}} size={20}/></div>
            <div className="logo-img"><GiFlowerEmblem  style={{paddingLeft:10}} size={36}/></div>
            <h1 className="logo">LOGO</h1>
            <div className="search-account-cart-icons">
                <CiSearch  size={24}/>
                <MdFavoriteBorder size={24}/>
                <BsCart size={24}/>
                <div className="account-mobile-view"><VscAccount  size={24}/></div>
                <div className="language"><p >ENG <span><FaAngleDown size={16} /></span></p></div>
            </div>
            </div>
       
             <nav className={menuToggle===true?"show":"hide"}>
                  <Link to="/"><li className="page-link">SHOP</li></Link>
                  <Link to="/"><li className="page-link">SKILLS</li></Link>
                  <Link to="/"><li className="page-link">STORIES</li></Link>
                  <Link to="/"><li className="page-link">ABOUT</li></Link>
                  <Link to="/"><li className="page-link">CONTACT US</li></Link>
               </nav>
        </header>
        
    )
}
export default Header