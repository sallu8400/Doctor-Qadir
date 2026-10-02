import React from 'react';

const Header = () => {
  return (
    <>
      {/* Topbar Section Start */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-9">
              <div className="topbar-contact-info">
                <ul>
                  <li><a href="/#about"><i className="fa-solid fa-clock"></i> <span>Working Hour:</span> Mon-Sat 10:00am to 9:00pm</a></li>
                  <li><a href="mailto:qadir1197@gmail.com"><i className="fa-solid fa-envelope"></i> <span>Email:</span> qadir1197@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-3">
              <div className="topbar-social-details">
                <div className="topbar-social-icons">
                  <ul>
                    {/* Instagram / Facebook page ban jaye toh yahan unke links laga dena */}
                    <li><a href="https://wa.me/918082408887" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a></li>
                    <li><a href="tel:+918082408887" aria-label="Call clinic"><i className="fa-solid fa-phone"></i></a></li>
                    <li><a href="/#contact" aria-label="Clinic location"><i className="fa-solid fa-location-dot"></i></a></li>
                  </ul>
                </div>
                <div className="topbar-contact-info topbar-contact-details">
                  <ul>
                    <li><a href="tel:+918082408887"><span>Contact:</span>+91 80824 08887</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar Section End */}

      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand  w-42" href="/">
                <img src="/images/neulife-logo.webp" alt="Neulife Homoeopathy Clinic - Dr. A. Qadir Shaikh Logo" />
              </a>
              
              {/* Note: d-lg-flex wala fix yahan zaroor rakhna */}
              <div className="collapse navbar-collapse main-menu d-lg-flex">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item "><a className="nav-link" href="/">Home</a>
                      {/* <ul>
                        <li className="nav-item"><a className="nav-link" href="index-2.html">Home - Main</a></li>
                        <li className="nav-item"><a className="nav-link" href="index-video.html">Home - Video</a></li>
                      </ul> */}
                    </li>
                    <li className="nav-item"><a className="nav-link" href="/#about">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#why-choose-us">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#contact">Contact Us</a></li>
<li className="nav-item highlighted-menu">
  <a 
    className="nav-link" 
    href="https://wa.me/918082408887?text=Hello%20Dr.%20Qadir,%20I%20would%20like%20to%20book%20an%20appointment." 
    target="_blank" 
    rel="noopener noreferrer"
  >
    book appointment
  </a>
</li>
                  </ul>
                </div>
                <div className="header-btn">
                  <a href="https://wa.me/918082408887?text=Hello%20Dr.%20Qadir,%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="btn-default">book appointment</a>
                </div>
              </div>
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
};

export default Header;