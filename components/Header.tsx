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
                  <li><a href="#"><i className="fa-solid fa-clock"></i> <span>Working Hour:</span> 08:00am to 09:00pm</a></li>
                  <li><a href="#"><i className="fa-solid fa-envelope"></i> <span>Email:</span> info@domainname.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-3">
              <div className="topbar-social-details">
                <div className="topbar-social-icons">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                  </ul>
                </div>
                <div className="topbar-contact-info topbar-contact-details">
                  <ul>
                    <li><a href="#"><span>Contact:</span> +123 (456) 789</a></li>
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
                <img src="/images/homoepath-logo.jpg" alt="Logo"    />
              </a>
              
              {/* Note: d-lg-flex wala fix yahan zaroor rakhna */}
              <div className="collapse navbar-collapse main-menu d-lg-flex">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item submenu"><a className="nav-link" href="/">Home</a>
                      <ul>
                        <li className="nav-item"><a className="nav-link" href="index-2.html">Home - Main</a></li>
                        <li className="nav-item"><a className="nav-link" href="index-video.html">Home - Video</a></li>
                      </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
                    <li className="nav-item highlighted-menu"><a className="nav-link" href="book-appointment.html">book appointment</a></li>
                  </ul>
                </div>
                <div className="header-btn">
                  <a href="book-appointment.html" className="btn-default">book appointment</a>
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