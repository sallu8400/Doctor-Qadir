import React from 'react';
// Apni CSS file import kar lena (jaise './Footer.css' ya jo bhi aap use kar rahe ho)
import "./footer.css";
import { CLINIC } from "../lib/site";

const Footer = () => {
  // WhatsApp par connect karne ke liye number aur message
  const whatsappNumber = "918082408887"; // Country code 91 ke sath
  const whatsappMessage = encodeURIComponent("Hello Dr. Qadir, I would like to book an appointment.");

  const treatments = ["Chronic Diseases", "Skin & Hair Care", "Child Immunity", "Respiratory Issues", "Joint & Body Pain"];

  // Bina API key ke free Google Maps embed link - Google listing ke naam se search hota hai
  // taaki map par seedha "Neulife homoeopathy clinic" ka pin aaye
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    CLINIC.mapQuery
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  // "Get Directions" button is link par le jayega (Google Maps app/website)
  const mapDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    CLINIC.mapQuery
  )}`;

  return (
    <>
      <footer className="main-footer bg-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              {/* About Footer Start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <img src="/images/neulife-logo-footer.webp" alt="Neulife Homoeopathy Clinic Logo" loading="lazy" />
                </div>
                {/* Footer Logo End */}

                {/* About Footer Content Start */}
                <div className="about-footer-content">
                  <p>Experience safe, natural, and effective homeopathic care with Dr. A. Qadir Shaikh (M.D.) at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai. We believe in treating the root cause for permanent healing.</p>
                </div>
                {/* About Footer Content End */}
              </div>
              {/* About Footer End */}
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Our Treatments</h3>
                {/* Treatment pages ban jayein toh in links ko un pages par point kar dena */}
                <ul>
                  {treatments.map((treatment) => (
                    <li key={treatment}>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          `Hello Dr. Qadir, I would like to book an appointment for ${treatment} treatment.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {treatment}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-5 col-md-6 col-12">
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
                    <address style={{ margin: 0, fontStyle: "normal" }}>
                      <p>{CLINIC.streetAddress}, {CLINIC.locality}, {CLINIC.region} {CLINIC.postalCode}</p>
                    </address>
                    {/* <p style={{fontSize: "14px", marginTop: "5px", color: "#1fa4a2"}}>Opens 8 am Mon</p> */}
                  </div>
                </div>
                {/* Footer Contact Item End */}
              </div>
              {/* Footer Contact Box End */}
            </div>

            {/* ===== Map Section - neeche full width ===== */}
            <div className="col-lg-12">
              <div className="footer-links footer-map-box">
                <div className="footer-map-header">
                  <h3>Find Us on Map</h3>
                  <a
                    href={mapDirectionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-map-link"
                  >
                    <i className="fa-solid fa-diamond-turn-right"></i> Get Directions
                  </a>
                </div>
                <div className="footer-map-wrapper">
                  <iframe
                    src={mapEmbedSrc}
                    title="Neulife Homoeopathy Clinic location - Jogeshwari West, Mumbai"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* ===== Map Section End ===== */}

      
            <div className="col-lg-12">
              {/* Footer Social Links Start */}
              <div className="footer-social-link">
                <hr />
                <ul>
                  {/* Facebook / Instagram / YouTube page ban jaye toh yahan unke links laga dena */}
                  <li><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a></li>
                  <li><a href="tel:+918082408887" aria-label="Call clinic"><i className="fa-solid fa-phone"></i></a></li>
                  <li><a href="mailto:qadir1197@gmail.com" aria-label="Email clinic"><i className="fa-solid fa-envelope"></i></a></li>
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
                  <p>Copyright © {new Date().getFullYear()} Neulife Homoeopathy Clinic - Dr. A. Qadir Shaikh. All Rights Reserved.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-terms-condition">
                  <ul>
                    <li><a href="/#faqs">FAQs</a></li>
                    <li><a href="/#contact">Contact Us</a></li>
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
