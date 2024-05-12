import { useState } from "react"
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaGooglePay } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { FaApplePay } from "react-icons/fa";
import { LiaAmazonPay } from "react-icons/lia";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaAngleDown } from "react-icons/fa6";
import { RiArrowUpWideLine } from "react-icons/ri";
import "./index.css"


const Footer=()=>{
    const [emailValue,setEmailValue]=useState("")
    const [toggle,setToggle]=useState(false);
    const [linkToggle,setLinkToggle]=useState(false);
    const [followToggle,setFollowToggle]=useState(false);
    return(
    <footer>
        <div className="subscribe-contactus-details-section">
            <div className="subscribe-section">
                <div className="subscribe-description">
                    <h2 className="footer-heading">BE THE FIRST TO KNOW</h2>
                    <p className="subscribe-description-details">Signup for updates from metta muse</p>
                </div>
                <div className="subscription-email-section">
                    <input 
                    className="email-input"
                    type="text"
                    placeholder="Enter your e-mail..."
                    onChange={(e)=>setEmailValue(e.target.value)}
                    value={emailValue}
                    />
                    <button type="button" className="subscribe-button">Subscribe</button>
                </div>
            </div>

             <hr className="line-view"/>

            <div className="contact-us-details-section">
                <section className="phone-number-emaild-details-section">
                    <h2 className="footer-heading">CONTACT US</h2>
                    <p className="phone-no">+44 221 133 5360</p>
                    <p className="email">customercare@mettamuse.com</p>
                </section>
                <hr className="line-view"/>
                <div className="currency-details">
                <h2 className="footer-heading">CURRENCY</h2>
                    <div className="flag-currency-name">
                       <LiaFlagUsaSolid className="usa-flag" size={16}/>
                        <p className="currency-name">.USD</p>
                    </div>
                    <p className="message">Transactions will completed in Euros and a currency reference is availabe on hover</p>
                </div>
            </div>
        </div>

        <hr className="line-view"/>

        <div className="pages-quick-links-follow-us-section">
            <section className="metta-muse-pages">
                <h2 className="footer-heading">metta muse</h2>
                <p className="page-names">About Us</p>
                <p className="page-names">Stories</p>
                <p className="page-names">Artisans</p>
                <p className="page-names">Boutiques</p>
                <p className="page-names">Contact Us</p>
                <p className="page-names">EU Compliance Docs</p>
            </section>
            <section className="metta-muse-mobile-view">
                <div className="name-toggle">
                      <h2 className="footer-heading">metta muse</h2>
                      <div>
                                {toggle===false?<FaAngleDown size={18} onClick={(e)=>setToggle(prevState=>!prevState)}/>:
                                <RiArrowUpWideLine size={18} onClick={(e)=>setToggle(prevState=>!prevState)}/>}
                      </div>
                </div>      
                <div>
                        {toggle===true?<>
                            <p className="page-names">About Us</p>
                            <p className="page-names">Stories</p>
                            <p className="page-names">Artisans</p>
                            <p className="page-names">Boutiques</p>
                            <p className="page-names">Contact Us</p>
                            <p className="page-names">EU Compliance Docs</p>
                        </>:""}
                 </div>
                
            </section>
            <hr className="line-view"/>
            <section className="quick-links">
            <h2 className="footer-heading">QUICK LINKS</h2>
                <p className="link">Orders & Shipping</p>
                <p className="link">Join?Login as Seller</p>
                <p className="link">Payment & Pricing</p>
                <p className="link">Return & Refunds</p>
                <p className="link">FAQ's</p>
                <p className="link">Privacy Policy</p>
                <p className="link">Terms & Conditions</p>
            </section>

            <section className="metta-muse-mobile-view">
                <div className="name-toggle">
                      <h2 className="footer-heading">QUICK LINKS</h2>
                      <div>
                                {linkToggle===false?<FaAngleDown size={18} onClick={(e)=>setLinkToggle(prevState=>!prevState)}/>:
                                <RiArrowUpWideLine size={18} onClick={(e)=>setLinkToggle(prevState=>!prevState)}/>}
                      </div>
                 </div>
                <div>
                        {linkToggle===true?<>
                            <p className="link">Orders & Shipping</p>
                            <p className="link">Join?Login as Seller</p>
                            <p className="link">Payment & Pricing</p>
                            <p className="link">Return & Refunds</p>
                            <p className="link">FAQ's</p>
                            <p className="link">Privacy Policy</p>
                            <p className="link">Terms & Conditions</p>
                        </>:""}
                </div>
                
            </section>
               
            <hr className="line-view"/>

            <section className="follow-us-section">
            <h2 className="footer-heading">FOLLOW US</h2>
            <section className="social-media-links">
                <TiSocialYoutube size={32} className="media" fill="blue" />
                <TiSocialLinkedin size={32} className="media" fill="blue"/>
            </section>
            
            <section className="metta-muse-mobile-view">
                <div className="name-toggle">
                      <h2 className="footer-heading">FOLLOW US</h2>
                      <div>
                                {followToggle===false?<FaAngleDown fill="white" size={18} onClick={(e)=>setFollowToggle(prevState=>!prevState)}/>:
                                <RiArrowUpWideLine fill="white" size={18} onClick={(e)=>setFollowToggle(prevState=>!prevState)}/>}
                      </div>
                </div>      
                <div>
                        {followToggle===true?<>
                            <TiSocialYoutube size={32} className="media" fill="blue" />
                            <TiSocialLinkedin size={32} className="media" fill="blue"/>
                        </>:""}
                </div>
                
            </section>

            <section>
                <h2 className="footer-heading">metta muse ACCEPTS</h2>
                <a href="" target="_blank"><FaGooglePay className="media"  size={56}/></a>
                <a href="" target="_blank"><BsPaypal className="media"  size={36}/></a>
                <a href="" target="_blank"><FaApplePay className="media"  size={56}/></a>
                <a href="" target="_blank"><LiaAmazonPay className="media"  size={56}/></a>
            </section>
            </section>
        </div>
        <p className="copyright">Copyright @ 2023 mettamuse. All rights reserved</p>
    </footer>
)
}

export default Footer