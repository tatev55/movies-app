import Navbar from "../navbar/navbar"
import "./footer.css"


const Footer =() => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-text">
                    <p className = "about-text">© 2025 MovieHub. All Rights Reserved.
                    Disclaimer: The content on this site is for entertainment purposes only. All movie titles, posters, and images are the property of their respective owners.</p>
                    <p className="phoneNumber"><strong>Phone: </strong>+3377990011</p>
                    <p className="emailAddress"><strong>Email:</strong>moviespage@gmail.com</p>
                </div>
                <Navbar />
            </div>
        </div>
    )
}

export default Footer;