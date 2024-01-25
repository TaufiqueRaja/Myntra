import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <h3>ONLINE SHOPPING</h3>
        <ul>
          <li><p>Men</p></li>
          <li><p>Women</p></li>
          <li><p>Kids</p></li>
          <li><p>Home & Living</p></li>
          <li><p>Beauty</p></li>
          <li><p>Gift Cards</p></li>
          <li><p>Myntra Insider</p></li>
        </ul>
      </div>
      <div className="footer-links">
        <h3>CUSTOMER POLICIES</h3>
        <ul>
          <li><p>Contact Us</p></li>
          <li><p>FAQ</p></li>
          <li><p>T&C</p></li>
          <li><p>Terms Of Use</p></li>
          <li><p>Track Orders</p></li>
          <li><p>Shipping</p></li>
          <li><p>Cancellation</p></li>
          <li><p>Returns</p></li>
          <li><p>Privacy policy</p></li>
          <li><p>Grievance Officer</p></li>
        </ul>
      </div>
      <div className="footer-links">
        <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
        <ul>
          <img onClick={()=>window.location.href="https://play.google.com/store/apps/details?id=com.myntra.android&pli=1"} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
          <img onClick={()=> window.location.href="https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059"} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />

        </ul>

        <div className="footer-links">
            <h3>KEEP IN TOUCH</h3>
            <div className="social-links">
                <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" />
                <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" />
                <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" />
                <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="" />
            </div>
         </div>

      </div>


      <div className="footer-links">
       <div>
          <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />
              <div>
               <span className="bold">100% ORIGINAL  </span>    
                <p>guarantee for all products at myntra.com</p>
              </div>
          </div>
          <div>
                <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" />
               <div>
               <span  className="bold">Return within 30days  </span>
                <p>of receiving your order</p>
               </div>
          </div> 
       </div>



      <div className="footer-links">
        <h3>USEFUL LINKS</h3>
        <ul>
          <li><p>Blog</p></li>
          <li><p>Carrers</p></li>
          <li><p>Site Map</p></li>
          <li><p>Corporate Information</p></li>
          <li><p>Whitehat</p></li>
        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
