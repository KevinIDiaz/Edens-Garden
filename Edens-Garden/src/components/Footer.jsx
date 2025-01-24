import './Footer.css'
import Logo from '/logo.png'
import { Link } from "react-router-dom";

export function Footer(){
    return(
        <div id='footer'>
            <div id='section-1'>
                <img src={Logo}/>
                <p>311 West Road, Houston, TX 77038</p>
                <p>edensfinedining@gmail.com</p>
                <p>(281) 704 - 0240</p>

            </div>
            <div id='section-2'>
                <p>Business hours:</p>
                <p>Monday: CLOSED</p>
                <p>Tuesday - Thursday 8:00 AM - 9:30 PM</p>
                <p>Friday - Saturday 8:00 AM  - 10:30 PM</p>
                <p>Sunday: 10:00 AM - 9:00 PM</p>

            </div>
            <div id='section-3'>
                <Link to='/References'><p>References</p></Link>
                <Link to='/Contact'><p>Contact</p></Link>
                <Link to='/Menu'><p>Menu</p></Link>
                <Link to='/Dine'><p>Dine</p></Link>
                <Link to='/About'><p>About</p></Link>

            </div>
        </div>
        
    )
}