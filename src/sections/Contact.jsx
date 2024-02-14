
import { FaPhoneSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
function Contact() {
    return (
        <section class="contact-section" id="contact">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Contact <span>Me</span></h2>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="contact-info-item">
                        <div className="icon"><FaPhoneSquare style={{'font-size': '30px' , color: '#F39C12'}}/></div>
                        <h4>Phone No</h4>
                        <p>+91 9176235680</p>
                    </div>
                    <div class="contact-info-item">
                        <div class="icon"><FaMailBulk style={{'font-size': '30px' , color: '#F39C12'}}/></div>
                        <h4>Email Id</h4>
                        <p>srinilavan7@gmail.com</p>
                    </div>
                </div>
                <div className="row">
                <div class="social-media">
                        <a href="https://www.linkedin.com/in/nilavan11/" className="icon"><FaLinkedin style={{'font-size': '50px' , color: '#F39C12'}}/></a>
                        <a href="https://github.com/nilavan11" className="icon"><FaGithubSquare style={{'font-size': '50px' , color: '#F39C12'}}/></a>
                        <a href="https://github.com/nilavan11" className="icon"><SiLeetcode style={{'font-size': '50px' , color: '#F39C12'}}/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;