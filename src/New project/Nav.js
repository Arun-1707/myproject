
import { Link } from "react-router-dom";
import  logo  from "./images/logo.png";
import barber from "./images/barber-man.jpg"
import pic1 from "./images/pic-1.jpg"
import pic2 from "./images/pic-2.jpg"
import pic3 from "./images/pic-3.jpg"
import pic4 from "./images/pic-4.jpg"
import img3 from "./images/img-3.jpg"
import img2 from "./images/img-2.jpg"
import img1 from "./images/img-1.jpg"


import "./Style.css";
function Nav() {






    return(

        <div>
 <section id="banner">
    <div className="navbar">
        <img src={logo} alt="" class="logo" />
        <ul>
            <li><a href="#">HOME</a></li>
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
    {/* Features */}
    <section id="feature">
        <div class="title-text">
            <p>FEATURES</p>
            <h1>Why Choose Us</h1>
        </div>
         
        <div class="feature-box">
            <div class="features">
                <h1>Expericenced Staff</h1>
                <div class="feature-desc">
                    <div class="feature-icon">
                        <i class="fa fa-shield" ></i>
                    </div>
                    <div class="feature-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aut quam aliquam possimus quibusdam quo magnam nemo ducimus quod nulla.</p>
                    </div>
                </div>
                <h1>Pre Booking Online</h1>
                <div class="feature-desc">
                    <div class="feature-icon">
                        <i class="fa fa-check-square" ></i>
                    </div>
                    <div class="feature-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus impedit iure cum voluptatibus, enim dicta magnam ipsam.</p>
                    </div>
                </div>
                   
            </div>
            <div class="features-img">
                <img src={barber} alt=""></img>
            </div>
        </div>
</section>
{/* service */}
<section id="service">
    <div class="title-text">
        <p>Service</p>
        <h1>We Provider Better</h1>

    </div>
    <div class="service-box">
        <div class="single-service">
            <img src={pic1} alt=""/>
            <div class="overlay"></div>
            <div class="service-decs">
                <h3>Hair Styling</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae, qui odit laboriosam eaque officiis consequatur enim laborum ratione?</p>
            </div>
        </div>
        <div class="single-service">
            <img src={pic2} alt=""/>
            <div class="overlay"></div>
            <div class="service-decs">
                <h3>Beard Trim</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae, qui odit laboriosam eaque officiis consequatur enim laborum ratione?</p>
            </div>
        </div>
        <div class="single-service">
            <img src={pic3} alt="" />
            <div class="overlay"></div>
            <div class="service-decs">
                <h3>Hair Cut</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae, qui odit laboriosam eaque officiis consequatur enim laborum ratione?</p>
            </div>
        </div>
        <div class="single-service">
            <img src={pic4} alt="" />
            <div class="overlay"></div>
            <div class="service-decs">
                <h3>Drt Shampoo</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae, qui odit laboriosam eaque officiis consequatur enim laborum ratione?</p>
            </div>
        </div>
        

    </div>
    </section>
    {/* testimonial */}
    <section id="testimonial">
            <div class="title-text">
            <p>Testimonial</p>
            <h1>What Client says</h1>
        </div>
        <div className="testimonial-row">
            <div className="testimonial-col">
                <div className="user">
   <img src={img3} alt=""></img>
   
   <div className="user-info">
    <h4>KAMAL HASSAN<i class="fa fa-twitter"></i> </h4>
    <small>@kamal hassan</small>
   </div>
                </div>
                <p>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief,  </p>
            </div>
            <div className="testimonial-col">
                <div className="user">
   <img src={img1} alt=""></img>
   
   <div className="user-info">
    <h4>VIJAY SETHUPATHI<i class="fa fa-twitter"></i> </h4>
    <small>@vijay sethupathi </small>
   </div>
                </div>
                <p>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief,  </p>
            </div>
            <div className="testimonial-col">
                <div className="user">
   <img src={img2} alt=""></img>
   
   <div className="user-info">
    <h4>ARUN VIJAY<i class="fa fa-twitter"></i> </h4>
    <small>@arun vijay</small>
   </div>
                </div>
                <p>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief,  </p>
            </div>
            


           

        </div>

            </section>
            {/* footer */}
            <section id="footer">
    <div class="title-text">
        <p>Contact</p>
        <h1>Made With By Arun</h1>

    </div>
    <div className="footer-row">
        <div className="footer-left">
         <h1>opening hours</h1>
         <p><i class="fa fa-clock-o"></i> Monday-friday - 9am to 9pm</p>
         <p><i class="fa fa-clock-o"></i> Saturday-Sunday - 8am to 10pm</p>
        </div>
        <div className="footer-right">
         <h1>get in touch</h1>
         <p>300k, EBP colony, Erode-638004 <i class="fa fa-map-marker"></i> </p>
         <p>ChillBarb@gmail.com <i class="fa fa-paper-plane"></i></p>
         <p>+91-1234567890 <i class="fa fa-phone"></i></p>

        </div>

    </div>
</section>
        </div>
    )
    
}
export default Nav;
   

   

   
 

   
     
 










   
    
 