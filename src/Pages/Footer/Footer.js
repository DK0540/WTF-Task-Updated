import React from 'react';
import "./footer.css";




const Footer = () => {
  return (
    <footer>
      <div className='footer-final'>
        <div className='head'>
        <img className='logo' src={require("../../Images/logo2.png")} alt="logo" />
        </div>
        <div className='icon'>
        
        </div>
        <div className='head2'>
          <h1>Quick links</h1>
          <br /><br />
          <p>About</p>
          <br /><br />
          <p>FAQs</p>
          <br /><br />
          <p>Privacy Policy</p>
          <br /><br />
          <p>WTF in News</p>
          <br /><br />
          <p>Terms & conditions</p>
          <br /><br />
          <p>Refund & Cancellation</p>
        </div>
        <div className='head3'>
          <h1>Explore</h1>
          <br /><br />
          <p>Arenas</p>
          <br /><br />
          <p>Studios</p>
          <br /><br />
          <p>Ntrition</p>
          
        </div>
        <div className='head4'>
          <h1>Contact</h1>
          <br /><br />
          <p>Ro:S1502, Amrapali Silicon city, sector 76, Noida, Uttar Pradesh, India</p>
          <br /><br />
          <p>Ho:C-86 B, Ground Floor, Sector 8, Noida, Uttara Pradesh, India</p>
          <br /><br />
          <p>+919090639005</p>
          <br /><br />
          <p>support@wtfup.me</p>
        </div>
        {/* <h1 className='head'>WTF fitness exportxperiance</h1> */}
      </div>
</footer>
     
 
  )
}



export default Footer
