import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              {/* About Footer Start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <img src="/images/homopath-remove-bg.png" alt="Logo-Homopathy" />
                </div>
                {/* Footer Logo End */}

                {/* About Footer Content Start */}
                <div className="about-footer-content">
                  <p>We offer a wide range of healthcare services to meet your needs.</p>
                </div>
                {/* About Footer Content End */}
              </div>
              {/* About Footer End */}
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>healthcare</h3>
                <ul>
                  <li><a href="doctors.html">doctors</a></li>
                  <li><a href="#">diagnostics</a></li>
                  <li><a href="#">caregiver</a></li>
                  <li><a href="#">hospitality</a></li>
                  <li><a href="#">emergency</a></li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>quick links</h3>
                <ul>
                  <li><a href="index-2.html">home</a></li>
                  <li><a href="about.html">about us</a></li>
                  <li><a href="faqs.html">faqs</a></li>
                  <li><a href="blog.html">blogs</a></li>
                  <li><a href="projects.html">facilities</a></li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-3 col-md-4">
              {/* Footer Contact Box Start */}
              <div className="footer-contact-box footer-links">
                <h3>contact us</h3>

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-mail.svg" alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>info@domain.com</p>
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-phone.svg" alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>+1 (213) 465 789</p>
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-location.svg" alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>2464 Royal Ln. Mesa, New Jersey</p>
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
                  <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
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
                {/* Footer Copyright Start */}
                <div className="footer-copyright-text">
                  <p>Copyright © 2024 All Rights Reserved.</p>
                </div>
                {/* Footer Copyright End */}
              </div>

              <div className="col-md-6">
                {/* Footer Terms Condition Start */}
                <div className="footer-terms-condition">
                  <ul>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">terms & conditions</a></li>
                  </ul>
                </div>
                {/* Footer Terms Condition End */}
              </div>
            </div>
          </div>
          {/* Footer Copyright Section End */}
        </div>
      </footer>
  );
};

export default Footer;