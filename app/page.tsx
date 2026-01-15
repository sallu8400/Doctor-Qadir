'use client'; 

import React from 'react';

export default function Home() {
  return (
    <>


      {/* Preloader Start */}
      {/* <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src="/images/loader.svg" alt="" />
          </div>
        </div>
      </div> */}
      {/* Preloader End */}


      
     
      {/* Hero Section Start */}
      <div className="hero hero-bg-image hero-video bg-section">
        {/* Video Start */}
        <div className="hero-bg-video">
          {/* Selfhosted Video Start */}
          <video autoPlay muted loop id="myVideo">
            <source src="https://demo.awaikenthemes.com/assets/videos/dispnsary-video.mp4" type="video/mp4" />
          </video>
          {/* Selfhosted Video End */}
        </div>
        {/* Video End */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Section Title Start */}
                <div className="section-title dark-section">
                  <h3 className="wow fadeInUp">your health our priority</h3>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">Expert medical care you can rely on</h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.</p>
                </div>
                {/* Section Title End */}

                {/* Hero Buttons Start */}
                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="book-appointment.html" className="btn-default">book a appointment</a>
                  <a href="about.html" className="btn-default">about us</a>
                </div>
                {/* Hero Buttons End */}

                {/* Google Rating Start */}
                <div className="google-rating wow fadeInUp" data-wow-delay="0.75s">
                  <ul>
                    <li>Google Rating <span>5.0</span></li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>based on 500 reviews</li>
                  </ul>
                </div>
                {/* Google Rating End */}
              </div>
              {/* Hero Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/* About Us Content Start */}
              <div className="about-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Professionals dedicated to your health</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">Our team of skilled professionals is committed to providing personalized, compassionate care. With a focus.</p>
                </div>
                {/* Section Title End */}

                {/* About Us Body Start */}
                <div className="about-us-body">
                  {/* About Info Item Start */}
                  <div className="about-info-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="/images/icon-about-info-1.svg" alt="" />
                    </div>
                    <div className="about-info-item-content">
                      <h3>patient-centered care</h3>
                      <p>Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                    </div>
                  </div>
                  {/* About Info Item End */}

                  {/* About Info Item Start */}
                  <div className="about-info-item wow fadeInUp" data-wow-delay="0.25s">
                    <div className="icon-box">
                      <img src="/images/icon-about-info-2.svg" alt="" />
                    </div>
                    <div className="about-info-item-content">
                      <h3>specialist doctors</h3>
                      <p>Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                    </div>
                  </div>
                  {/* About Info Item End */}

                  {/* About Info Item Start */}
                  <div className="about-info-item wow fadeInUp" data-wow-delay="0.5s">
                    <div className="icon-box">
                      <img src="/images/icon-about-info-3.svg" alt="" />
                    </div>
                    <div className="about-info-item-content">
                      <h3>24 hours service</h3>
                      <p>Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                    </div>
                  </div>
                  {/* About Info Item End */}
                </div>
                {/* About Us Body End */}

                {/* About Us Button Start */}
                <div className="about-us-btn wow fadeInUp" data-wow-delay="0.75s">
                  <a href="about.html" className="btn-default">view more about us</a>
                </div>
                {/* About Us Button End */}
              </div>
              {/* About Us Content End */}
            </div>

            <div className="col-lg-7">
              {/* About Us Images Start */}
              <div className="about-us-images">
                {/* About Image 1 Start */}
                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <img src="/images/about-img-1.jpg" alt="" />
                  </figure>
                </div>
                {/* About Image 1 End */}

                {/* About Image 2 Start */}
                <div className="about-img-2">
                  <figure className="image-anime">
                    <img src="/images/about-img-2.jpg" alt="" />
                    <h3>video call support</h3>
                  </figure>
                </div>
                {/* About Image 2 End */}

                {/* Company Timing Start */}
                <div className="company-timing">
                  <h3>Opening hours</h3>
                  <ul>
                    <li><span>Mon To Fri</span> 09:30 - 07:30</li>
                    <li><span>Saturday</span> 10:30 - 5:00</li>
                    <li><span>Sunday</span> Closed</li>
                  </ul>

                  <figure>
                    <i className="fa-solid fa-clock"></i>
                  </figure>
                </div>
                {/* Company Timing End */}
              </div>
              {/* About Us Images End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Our Service Section Start */}
      <div className="our-services bg-section">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Comprehensive services for your health</h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp">
                {/* Service Header Start */}
                <div className="service-header">
                  {/* Service Item Box Start */}
                  <div className="service-item-box">
                    <div className="icon-box">
                      <img src="/images/icon-service-1.svg" alt="" />
                    </div>
                    <div className="service-item-content">
                      <h3>urology</h3>
                    </div>
                  </div>
                  {/* Service Item Box End */}

                  {/* Service Readmore Start */}
                  <div className="service-readmore">
                    <a href="service-single.html"><img src="/images/arrow-dark.svg" alt="" /></a>
                  </div>
                  {/* Service Readmore End */}
                </div>
                {/* Service Header End */}

                {/* Service Body Start */}
                <div className="service-body">
                  <p>Our neurology department provides expert care for conditions affecting the brain, spine, and nervous system</p>
                </div>
                {/* Service Body End */}

                {/* Service Image Start */}
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/service-img-1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                {/* Service Header Start */}
                <div className="service-header">
                  {/* Service Item Box Start */}
                  <div className="service-item-box">
                    <div className="icon-box">
                      <img src="/images/icon-service-2.svg" alt="" />
                    </div>
                    <div className="service-item-content">
                      <h3>neurology</h3>
                    </div>
                  </div>
                  {/* Service Item Box End */}

                  {/* Service Readmore Start */}
                  <div className="service-readmore">
                    <a href="service-single.html"><img src="/images/arrow-dark.svg" alt="" /></a>
                  </div>
                  {/* Service Readmore End */}
                </div>
                {/* Service Header End */}

                {/* Service Body Start */}
                <div className="service-body">
                  <p>Our neurology department provides expert care for conditions affecting the brain, spine, and nervous system</p>
                </div>
                {/* Service Body End */}

                {/* Service Image Start */}
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/service-img-2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
                {/* Service Header Start */}
                <div className="service-header">
                  {/* Service Item Box Start */}
                  <div className="service-item-box">
                    <div className="icon-box">
                      <img src="/images/icon-service-3.svg" alt="" />
                    </div>
                    <div className="service-item-content">
                      <h3>eye care</h3>
                    </div>
                  </div>
                  {/* Service Item Box End */}

                  {/* Service Readmore Start */}
                  <div className="service-readmore">
                    <a href="service-single.html"><img src="/images/arrow-dark.svg" alt="" /></a>
                  </div>
                  {/* Service Readmore End */}
                </div>
                {/* Service Header End */}

                {/* Service Body Start */}
                <div className="service-body">
                  <p>Our neurology department provides expert care for conditions affecting the brain, spine, and nervous system</p>
                </div>
                {/* Service Body End */}

                {/* Service Image Start */}
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/service-img-3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-12">
              {/* More Services Content Start */}
              <div className="more-service-content">
                <p className="wow fadeInUp" data-wow-delay="0.25s">From preventive care to specialized treatments, our wide range of services is designed to support your health at every stage.</p>
                <a href="services.html" className="btn-default wow fadeInUp" data-wow-delay="0.5s">view all services</a>
              </div>
              {/* More Services Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Service Section End */}

      {/* Intro Video Section Start */}
      <div className="intro-video">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose us</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Why patients trust us with their care</h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">Our commitment to excellence, compassion, and personalized treatment has earned the trust of countless patients. Discover what sets our care apart. Discover what sets our care apart.</p>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-5">
              {/* Why Choose List Start */}
              <div className="why-choose-list wow fadeInUp">
                <ul>
                  <li>We offer flexible hours to fit your busy schedule.</li>
                  <li>Team is committed to making you feel comfortable.</li>
                  <li>We ensure you receive prompt and effective care.</li>
                  <li>Helping you manage your health at every stage of life.</li>
                </ul>
              </div>
              {/* Why Choose List End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Intro Video Image Start */}
              <div className="intro-video-box">
                {/* Intro Image Start */}
                <div className="intro-video-image">
                  <figure>
                    <img src="/images/intro-video-bg.jpg" alt="" />
                  </figure>
                </div>
                {/* Intro Image End */}

                {/* Video Play Button Start */}
                <div className="video-play-button">
                  <a href="https://www.youtube.com/watch?v=74DWwSxsVSs" className="popup-video" data-cursor-text="Play">
                    <img src="/images/icon-play.svg" alt="" />
                  </a>
                </div>
                {/* Video Play Button End */}

                <div className="why-choose-box">
                  {/* Why Choose Item Start */}
                  <div className="why-choose-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-1.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>50+ Expert Doctor</h3>
                      <p>Our team includes over 50 highly skilled doctors.</p>
                    </div>
                  </div>
                  {/* Why Choose Item End */}

                  {/* Why Choose Item Start */}
                  <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-2.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>24/7 Instant Support</h3>
                      <p>Our team includes over 50 highly skilled doctors.</p>
                    </div>
                  </div>
                  {/* Why Choose Item End */}

                  {/* Why Choose Item Start */}
                  <div className="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-3.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Expert Medical Team</h3>
                      <p>Our team includes over 50 highly skilled doctors.</p>
                    </div>
                  </div>
                  {/* Why Choose Item End */}
                </div>
              </div>
              {/* Intro Video Btn End */}
            </div>
          </div>
        </div>
      </div>

 

      {/* Our Excellence Section Start */}
      <div className="our-excellence">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our numbers</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">By the numbers: excellence in health</h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">Excellence in healthcare is our standard, and our numbers back it up. From patient satisfaction rates to successful treatment outcomes.</p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Excellence Counter Box Start */}
              <div className="excellence-counter-boxes">
                {/* Excellence Counter Item Start */}
                <div className="excellence-counter-item">
                  <h2><span className="counter">85</span>%</h2>
                  <p>Of our members start with moderate to serve symptom</p>
                </div>
                {/* Excellence Counter Item End */}

                {/* Excellence Counter Item Start */}
                <div className="excellence-counter-item">
                  <h2><span className="counter">72</span>%</h2>
                  <p>Of our members start with moderate to serve symptom</p>
                </div>
                {/* Excellence Counter Item End */}

                {/* Excellence Counter Item Start */}
                <div className="excellence-counter-item">
                  <h2><span className="counter">95</span>%</h2>
                  <p>Of our members start with moderate to serve symptom</p>
                </div>
                {/* Excellence Counter Item End */}

                {/* Excellence Counter Item Start */}
                <div className="excellence-counter-item">
                  <h2><span className="counter">76</span>%</h2>
                  <p>Of our members start with moderate to serve symptom</p>
                </div>
                {/* Excellence Counter Item End */}
              </div>
              {/* Excellence Counter Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Excellence Section End */}

      {/* Our Faqs Section Start */}
      <div className="our-faqs bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="our-faqs-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">frequently asked questions</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Helping you understand healthcare</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.</p>
                </div>
                {/* Section Title End */}

                {/* Faq CTA Box Start */}
                <div className="faq-cta-box wow fadeInUp" data-wow-delay="0.5s">
                  <div className="icon-box">
                    <img src="/images/icon-faq-cta.svg" alt="" />
                  </div>
                  <div className="faq-cta-content">
                    <p>We always take care of your smile</p>
                    <h3>24/7 Emergency</h3>
                    <p><a href="tel:659888589">659-888-589</a></p>
                  </div>
                </div>
                {/* Faq CTA Box End */}
              </div>
            </div>

            <div className="col-lg-6">
              {/* FAQ Accordion Start */}
              <div className="faq-accordion" id="faqaccordion">
                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      What should I bring to my first appointment?
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                    <div className="accordion-body">
                      <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                  <h2 className="accordion-header" id="heading2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      How do I schedule an appointment?
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                    <div className="accordion-body">
                      <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                  <h2 className="accordion-header" id="heading3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                      What insurance plan do you accept?
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                    <div className="accordion-body">
                      <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                  <h2 className="accordion-header" id="heading4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                      Can I get a prescription refill without an appointment?
                    </button>
                  </h2>
                  <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                    <div className="accordion-body">
                      <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                  <h2 className="accordion-header" id="heading5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                      What should I expect during my first visit?
                    </button>
                  </h2>
                  <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
                    <div className="accordion-body">
                      <p>Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                  <h2 className="accordion-header" id="heading6">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                      How are treatment plans customized for individual needs?
                    </button>
                  </h2>
                  <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqaccordion">
                    <div className="accordion-body">
                      <p>Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}
              </div>
              {/* FAQ Accordion End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Faqs Section End */}


      <div className="our-health">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our numbers</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Health is wealth, and the medical field</h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">Excellence in healthcare is our standard, and our numbers back it up. From patient satisfaction rates to successful treatment outcomes.</p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Our Health Boxes Start */}
              <div className="our-health-boxes">
                {/* Our Health Item Start */}
                <div className="our-health-item health-box-1">
                  <div className="health-item-content">
                    <img src="/images/icon-health-item-1.svg" alt="" />
                    <h3>Your Health, Our Priority in Wellcare</h3>
                    <a href="#" className="btn-default">read more</a>
                  </div>
                  <div className="health-item-image">
                    <img src="/images/health-item-img-1.png" alt="" />
                  </div>
                </div>
                {/* Our Health Item End */}

                {/* Our Health Item Start */}
                <div className="our-health-image health-box-2">
                  <figure className="image-anime reveal">
                    <img src="/images/health-item-img-2.jpg" alt="" />
                  </figure>
                </div>
                {/* Our Health Item End */}

                {/* Our Health Item Start */}
                <div className="our-health-image health-box-3">
                  <figure className="image-anime reveal">
                    <img src="/images/health-item-img-3.jpg" alt="" />
                  </figure>
                </div>
                {/* Our Health Item End */}

                {/* Our Health Item Start */}
                <div className="our-health-item health-box-4">
                  <div className="health-item-content">
                    <img src="/images/icon-health-item-2.svg" alt="" />
                    <h3><span className="counter">58</span>M+ Happy Clients</h3>
                  </div>
                  <div className="happy-client-images">
                    <div className="happy-client-img">
                      <figure className="image-anime reveal">
                        <img src="/images/happy-client-img-1.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="happy-client-img">
                      <figure className="image-anime reveal">
                        <img src="/images/happy-client-img-2.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="happy-client-img">
                      <figure className="image-anime reveal">
                        <img src="/images/happy-client-img-3.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="happy-client-img">
                      <figure className="image-anime reveal">
                        <img src="/images/happy-client-img-4.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="happy-client-img add-more">
                      <figure>
                        <a href="#"><i className="fa-solid fa-plus"></i></a>
                      </figure>
                    </div>
                  </div>
                </div>
                {/* Our Health Item End */}

                {/* Our Health Item Start */}
                <div className="our-health-item health-box-5">
                  <div className="health-item-content">
                    <h3>Healing Starts Here Caring for You Always</h3>
                    <a href="#" className="learn-btn">learn more</a>
                  </div>
                  <div className="health-item-image">
                    <img src="/images/health-item-img-4.png" alt="" />
                  </div>
                </div>
                {/* Our Health Item End */}
              </div>
              {/* Our Health Boxes End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Health Section End */}

      {/* CTA Section Start */}
      <div className="cta-section bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-6 order-lg-1 order-md-1 order-2">
              {/* CTA Box img 1 Start */}
              <div className="cta-img-1">
                <img src="/images/cta-img-1.png" alt="" />
              </div>
              {/* CTA Box img 1 End */}
            </div>

            <div className="col-lg-4 col-md-6 order-lg-2 order-md-2 order-1">
              {/* CTA Box Content Start */}
              <div className="cta-box-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Take the first step to better health</h2>
                </div>
                {/* Section Title End */}

                {/* CTA Box Button Start */}
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.25s">
                  <a href="book-appointment.html" className="btn-default">Book a appointment now</a>
                </div>
                {/* CTA Box Button End */}

                {/* CTA Box Text Start */}
                <div className="cta-box-text wow fadeInUp" data-wow-delay="0.5s">
                  <p>It only <span>takes 2 minutes</span> to complete</p>
                </div>
                {/* CTA Box Text End */}
              </div>
              {/* CTA Box Content End */}
            </div>

            <div className="col-lg-4 col-md-3 col-6 order-lg-3 order-md-3 order-3">
              {/* CTA Box img 2 Start */}
              <div className="cta-img-2">
                <img src="/images/cta-img-2.png" alt="" />
              </div>
              {/* CTA Box img 2 End */}
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section End */}

      {/* Our Testimonial Start */}
      <div className="our-testimonial">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Testimonials</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Patient stories of care and recovery</h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">Discover inspiring stories of recovery and healing from those we've had the privilege to serve.</p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Testimonial Slider Start */}
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="testimonial-content">
                          <p>My first appointment, but the staff was so welcoming. They took the time to listen to my concerns and made sure I felt comfortable.</p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-1.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Brooklyn simmons</h3>
                            <p>orthodontics</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}

                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="testimonial-content">
                          <p>My first appointment, but the staff was so welcoming. They took the time to listen to my concerns and made sure I felt comfortable.</p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-2.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>monika roy</h3>
                            <p>Dental hygienist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}

                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="testimonial-content">
                          <p>My first appointment, but the staff was so welcoming. They took the time to listen to my concerns and made sure I felt comfortable.</p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-3.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>albert flores</h3>
                            <p>senior dentist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}

                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="testimonial-content">
                          <p>My first appointment, but the staff was so welcoming. They took the time to listen to my concerns and made sure I felt comfortable.</p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-2.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>monika roy</h3>
                            <p>Dental hygienist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                  </div>
                  <div className="testimonial-btn">
                    <div className="testimonial-btn-prev"></div>
                    <div className="testimonial-btn-next"></div>
                  </div>
                </div>
              </div>
              {/* Testimonial Slider End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonial End */}


   

    </>
  );
}