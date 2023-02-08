import { Link } from "react-router-dom";
import  logo  from "./images/logo.png";
import barber from "./images/barber-man1.jpg"
import img4 from "./images/img4.jpg"
import "./Meetus.css";
import "./Style.css"


function Meetus() {
    return(
        <div>
 <section id="banner">
    <div className="navbar">
        <img src={logo} alt="" class="logo" />
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><a href="#">FEATURES</a></li>
            <li><Link to="/Service">SERVICE</Link></li>
            <li><a href="#">TESTIMONIALS</a></li>
            <li><Link to="/MeetUs">MEET US</Link></li>
        </ul> 
        </div>
        <div class="banner-text">
    <h1>Chill and Barb</h1>
    <p>Style tour Hair is Stylr your Life</p>

    <div class="banner-btn">
        <a href="#"> out</a>
        <a href="#"> More</a>
    </div>
</div>
        </section>
        <section id="feature1">
        <div class="title-text">
            <p>Contact Us</p>
            <h1>I AM THE PERSON</h1>
        </div>
         
        <div class="feature-box">
            <div class="features">
            <h1></h1>
                <div class="feature-desc">
                   
                    <div class="feature-text">
{/*  */}
                    <div className="testimonial-col1">
                <div className="user">
   <img src={img4} alt=""></img>
   
   <div className="user-info">
    <h4>Arun<i class="fa fa-twitter"></i> </h4>
    <small>@arunChillandbarb</small>
   </div>
                </div>
                <p>NAME : Arun <br/>CONTACT : 1234567890 <br/>(Monday to friday,9am to 10pm) </p>

            </div>

{/*  */}
                  
                    </div>
                </div>
                   
            </div>
            <div class="features-img1">
                <img  src={barber} alt=""></img>
            </div>
            </div>
                    </section>

        </div>
    )
}
export default Meetus;