import React from 'react';
// Apni CSS file import kar lena (jaise './Footer.css' ya jo bhi aap use kar rahe ho)
import  "./footer.css";
const Footer = () => {
  // WhatsApp par connect karne ke liye number aur message
  const whatsappNumber = "918082408887"; // Country code 91 ke sath
  const whatsappMessage = encodeURIComponent("Hello Dr. Qadir, I would like to book an appointment.");

  return (
    <>
      <footer className="main-footer bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              {/* About Footer Start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <img src="/images/homopath-remove-bg.png" alt="Dr. Qadir Homeopathy Logo" />
                </div>
                {/* Footer Logo End */}

                {/* About Footer Content Start */}
                <div className="about-footer-content">
                  <p>Experience safe, natural, and effective homeopathic care with Dr. Qadir Shaikh. We believe in treating the root cause for permanent healing.</p>
                </div>
                {/* About Footer Content End */}
              </div>
              {/* About Footer End */}
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Our Treatments</h3>
                <ul>
                  <li><a href="#">Chronic Diseases</a></li>
                  <li><a href="#">Skin & Hair Care</a></li>
                  <li><a href="#">Child Immunity</a></li>
                  <li><a href="#">Respiratory Issues</a></li>
                  <li><a href="#">Joint & Body Pain</a></li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="index-2.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="faqs.html">FAQs</a></li>
                  <li><a href="blog.html">Health Blogs</a></li>
                  <li><a href="#">Book Appointment</a></li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-3 col-md-4">
              {/* Footer Contact Box Start */}
              <div className="footer-contact-box footer-links">
                <h3>Contact Us</h3>

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-mail.svg" alt="Email" />
                  </div>
                  <div className="footer-contact-content">
                    <p><a href="mailto:qadir1197@gmail.com" style={{color:"inherit"}}>qadir1197@gmail.com</a></p>
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-phone.svg" alt="Phone" />
                  </div>
                  <div className="footer-contact-content">
                    <p><a href="tel:+918082408887" style={{color:"inherit"}}>+91 80824 08887</a></p>
                    {/* <p><a href="tel:09324462425" style={{color:"inherit"}}>093244 62425</a></p> */}
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-location.svg" alt="Location" />
                  </div>
                  <div className="footer-contact-content">
                    <p>Range Heights, 102, New Link Rd, opp. Kajupada,Behram Baug ,Jogeshwari West</p>
                    {/* <p style={{fontSize: "14px", marginTop: "5px", color: "#1fa4a2"}}>Opens 8 am Mon</p> */}
                  </div>
                </div>
                {/* Footer Contact Item End */}
              </div>
              {/* Footer Contact Box End */}
            </div>

            <div className="col-lg-12">
              {/* Footer Social Links Start */}
              <div className="footer-social-link">
                <hr />
                <ul>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
                <hr />
              </div>
              {/* Footer Social Links End */}
            </div>
          </div>

          {/* Footer Copyright Section Start */}
          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="footer-copyright-text">
                  <p>Copyright © 2024 Dr. Qadir Shaikh. All Rights Reserved.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-terms-condition">
                  <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Copyright Section End */}
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Footer;