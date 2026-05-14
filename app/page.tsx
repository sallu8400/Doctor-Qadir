'use client'; 

import React, { useState } from 'react';

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [activeFaq, setActiveFaq] = useState("collapse1");

  // Ye function click karne par Accordion open/close karega
  const toggleFaq = (faqId) => {
    if (activeFaq === faqId) {
      setActiveFaq(""); // Agar pehle se wahi open hai toh use band kar do
    } else {
      setActiveFaq(faqId); // Naya click kiya toh use open kar do
    }
  }
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
        {/* Background Video Start (Bina sound wala, pehle jaisa) */}
        <div className="hero-bg-video">
          <video autoPlay muted loop id="myVideo">
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Background Video End */}

        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="section-title dark-section">
                  <h3 className="wow fadeInUp">your health our priority</h3>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Expert medical care you can rely on
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                  </p>
                </div>

                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="book-appointment.html" className="btn-default">book a appointment</a>
                  <a href="#" className="btn-default">about us</a>
                </div>

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
              </div>
            </div>

            {/* Right Side - Rotating Play Button */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="play-button-wrapper" onClick={() => setIsModalOpen(true)}>
                <div className="rotating-text">
                  {/* SVG for curved rotating text */}
                  <svg viewBox="0 0 100 100" width="120" height="120">
                    <defs>
                      <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text fontSize="12" fill="#ffffff" letterSpacing="2.5">
                      <textPath href="#circle">
                        WATCH VIDEO • WATCH VIDEO •
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Center Play Icon */}
                <div className="play-icon">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Video Modal Popup */}
      {isModalOpen && (
        <div className="video-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            {/* Yahan se width="100%" hata diya hai, ab CSS height handle karegi */}
            <video autoPlay controls>
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
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
            <h3 className="wow fadeInUp">about our clinic</h3>
            <h2 className="text-anime-style-3" data-cursor="-opaque">
              Natural Healing with Dr. Qadir Shaikh
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.25s">
              Welcome to our Homeopathic Clinic. Led by Dr. Qadir Shaikh, we believe in treating the root cause of your illness with safe, natural, and side-effect-free homeopathic remedies.
            </p>
          </div>
          {/* Section Title End */}

          {/* About Us Body Start */}
          <div className="about-us-body">
            {/* About Info Item Start */}
            <div className="about-info-item wow fadeInUp">
              <div className="icon-box">
                <img src="/images/icon-about-info-1.svg" alt="Holistic Care" />
              </div>
              <div className="about-info-item-content">
                <h3>Holistic Treatment</h3>
                <p>We don't just treat symptoms; we heal the person. Our remedies are customized to your unique health history and body type.</p>
              </div>
            </div>
            {/* About Info Item End */}

            {/* About Info Item Start */}
            <div className="about-info-item wow fadeInUp" data-wow-delay="0.25s">
              <div className="icon-box">
                <img src="/images/icon-about-info-2.svg" alt="Natural Remedies" />
              </div>
              <div className="about-info-item-content">
                <h3>Safe & Natural Medicine</h3>
                <p>Experience the power of homeopathy. Our medicines are 100% natural, safe for all ages, and completely free from harmful side effects.</p>
              </div>
            </div>
            {/* About Info Item End */}

            {/* About Info Item Start */}
            <div className="about-info-item wow fadeInUp" data-wow-delay="0.5s">
              <div className="icon-box">
                <img src="/images/icon-about-info-3.svg" alt="Root Cause" />
              </div>
              <div className="about-info-item-content">
                <h3>Root Cause Healing</h3>
                <p>Instead of temporary relief, Dr. Qadir focuses on identifying and curing the underlying cause of your illness for long-lasting health.</p>
              </div>
            </div>
            {/* About Info Item End */}
          </div>
          {/* About Us Body End */}

          {/* About Us Button Start */}
          <div className="about-us-btn wow fadeInUp" data-wow-delay="0.75s">
            <a href="about.html" className="btn-default">Learn more about us</a>
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
              {/* Aapki clinic ya Dr. Qadir ki photo yahan aayegi */}
              <img src="/img/homo.png" alt="Clinic Clinic" />
            </figure>
          </div>
          {/* About Image 1 End */}

          {/* About Image 2 Start */}
          <div className="about-img-2">
            <figure className="image-anime">
              <img src="/img/suport-1.jpg" alt="Video Support" />
              {/* Thoda professional word use kiya hai video call ke liye */}
              <h3>Video  Consultation Support</h3>
            </figure>
          </div>
          {/* About Image 2 End */}

          {/* Company Timing Start */}
          <div className="company-timing">
            <h3>Clinic Hours</h3>
            <ul>
              {/* Aap apne hisaab se timing change kar lena yahan */}
              <li><span>Mon To Sat</span> 10:00 PM-9:00 PM</li>
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
      <div className="our-services bg-section hidden">
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
        <h2 className="text-anime-style-3" data-cursor="-opaque">
          Why patients trust Us for their healing
        </h2>
        <p className="wow fadeInUp" data-wow-delay="0.25s">
          Our commitment to natural healing, compassion, and finding the root cause of diseases has earned the trust of countless patients. Discover the gentle yet powerful approach of classical homeopathy.
        </p>
      </div>
      {/* Section Title End */}
    </div>

    <div className="col-lg-5">
      {/* Why Choose List Start */}
      <div className="why-choose-list wow fadeInUp">
        <ul>
          <li>Detailed case taking to understand your complete health profile.</li>
          <li>100% natural, safe, and easy-to-take sweet pills for all ages.</li>
          <li>Focus on permanent cure rather than just suppressing symptoms.</li>
          <li>Effective treatment for both acute and long-term chronic diseases.</li>
        </ul>
      </div>
      {/* Why Choose List End */}
    </div>
  </div>

          <div className="row hidden">
            <div className="col-lg-12 hidden">
              {/* Intro Video Image Start */}
              <div className="intro-video-box ">
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
      <div className="our-excellence hidden">
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
   <div className="our-faqs bg-section" style={{ background: "white" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="our-faqs-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">frequently asked questions</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Clear your doubts about Homeopathy
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are here to make your healing journey smooth. Explore answers to the most common questions about homeopathic treatment, medicines, and our consultation process.
                </p>
              </div>

              <div className="faq-cta-box wow fadeInUp" data-wow-delay="0.5s">
                <div className="icon-box">
                  <img src="/images/icon-faq-cta.svg" alt="Support Icon" />
                </div>
                <div className="faq-cta-content">
                  <p>Your health is our first priority</p>
                  <h3>Clinic Helpline</h3>
                  <p><a href="tel:+919876543210">+91 80824 08887</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
        {/* FAQ Accordion Start */}
<div className="faq-accordion" id="faqaccordion">
  
  {/* FAQ Item 1 */}
  <div className="accordion-item wow fadeInUp">
    <h2 className="accordion-header" id="heading1">
      <button 
        className={`accordion-button ${activeFaq === "collapse1" ? "" : "collapsed"}`} 
        type="button" 
        onClick={() => toggleFaq("collapse1")}
      >
        Is homeopathic medicine safe? Does it have side effects?
      </button>
    </h2>
    <div 
      id="collapse1" 
      className={`accordion-collapse collapse ${activeFaq === "collapse1" ? "show" : ""}`}
      style={{ display: activeFaq === "collapse1" ? "block" : "none" }}
    >
      <div className="accordion-body">
        <p>Yes, homeopathic medicines are absolutely safe, highly diluted, and 100% natural. They do not cause any harmful side effects and are perfectly safe for everyone, including infants, pregnant women, and the elderly.</p>
      </div>
    </div>
  </div>

  {/* FAQ Item 2 */}
  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
    <h2 className="accordion-header" id="heading2">
      <button 
        className={`accordion-button ${activeFaq === "collapse2" ? "" : "collapsed"}`} 
        type="button" 
        onClick={() => toggleFaq("collapse2")}
      >
        Does homeopathy take a very long time to work?
      </button>
    </h2>
    <div 
      id="collapse2" 
      className={`accordion-collapse collapse ${activeFaq === "collapse2" ? "show" : ""}`}
      style={{ display: activeFaq === "collapse2" ? "block" : "none" }}
    >
      <div className="accordion-body">
        <p>This is a common myth. For acute conditions like fever, cold, or diarrhea, homeopathy works very fast. For chronic (old) diseases, it takes some time because the medicine works to eliminate the root cause of the disease, not just suppress the symptoms.</p>
      </div>
    </div>
  </div>

  {/* FAQ Item 3 */}
  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
    <h2 className="accordion-header" id="heading3">
      <button 
        className={`accordion-button ${activeFaq === "collapse3" ? "" : "collapsed"}`} 
        type="button" 
        onClick={() => toggleFaq("collapse3")}
      >
        What should I expect during my first visit?
      </button>
    </h2>
    <div 
      id="collapse3" 
      className={`accordion-collapse collapse ${activeFaq === "collapse3" ? "show" : ""}`}
      style={{ display: activeFaq === "collapse3" ? "block" : "none" }}
    >
      <div className="accordion-body">
        <p>During your first visit, Dr. Qadir Shaikh will take a detailed case history. We will ask about your physical symptoms, past medical history, lifestyle, diet, and emotional state. This helps us find a remedy specifically tailored to your unique constitution.</p>
      </div>
    </div>
  </div>

  {/* FAQ Item 4 */}
  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
    <h2 className="accordion-header" id="heading4">
      <button 
        className={`accordion-button ${activeFaq === "collapse4" ? "" : "collapsed"}`} 
        type="button" 
        onClick={() => toggleFaq("collapse4")}
      >
        Are there any dietary restrictions while taking these medicines?
      </button>
    </h2>
    <div 
      id="collapse4" 
      className={`accordion-collapse collapse ${activeFaq === "collapse4" ? "show" : ""}`}
      style={{ display: activeFaq === "collapse4" ? "block" : "none" }}
    >
      <div className="accordion-body">
        <p>Generally, we advise avoiding strong-smelling items like raw onion, garlic, camphor, or coffee right before or after taking the medicine, as strong odors can neutralize the effect of the sweet pills. A gap of 20-30 minutes before and after eating is recommended.</p>
      </div>
    </div>
  </div>

  {/* FAQ Item 5 */}
  <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
    <h2 className="accordion-header" id="heading5">
      <button 
        className={`accordion-button ${activeFaq === "collapse5" ? "" : "collapsed"}`} 
        type="button" 
        onClick={() => toggleFaq("collapse5")}
      >
        Can I take homeopathic medicines along with allopathic medicines?
      </button>
    </h2>
    <div 
      id="collapse5" 
      className={`accordion-collapse collapse ${activeFaq === "collapse5" ? "show" : ""}`}
      style={{ display: activeFaq === "collapse5" ? "block" : "none" }}
    >
      <div className="accordion-body">
        <p>Yes, you can. It is usually safe to take them together without stopping your regular allopathic medicines. However, it is best to maintain a gap of at least 30-40 minutes between the two. Always inform the doctor about all the medications you are currently taking.</p>
      </div>
    </div>
  </div>

  {/* FAQ Item 6 */}
  <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
    <h2 className="accordion-header" id="heading6">
      <button 
        className={`accordion-button ${activeFaq === "collapse6" ? "" : "collapsed"}`} 
        type="button" 
        onClick={() => toggleFaq("collapse6")}
      >
        How do I schedule an appointment with Dr. Qadir Shaikh?
      </button>
    </h2>
    <div 
      id="collapse6" 
      className={`accordion-collapse collapse ${activeFaq === "collapse6" ? "show" : ""}`}
      style={{ display: activeFaq === "collapse6" ? "block" : "none" }}
    >
      <div className="accordion-body">
        <p>You can easily book an appointment by calling our clinic helpline, sending us a message on WhatsApp, or using the 'Book Appointment' button on our website. We offer both in-clinic visits and online video consultations.</p>
      </div>
    </div>
  </div>

</div>
{/* FAQ Accordion End */}
          </div>
        </div>
      </div>
    </div>
  );
      {/* Our Faqs Section End */}


      <div className="our-health hidden">
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
          <div className="row d-flex justify-between gap-3" >
            <div className="col-lg-4 col-md-3 col-6 order-lg-1 order-md-1 order-2">
              {/* CTA Box img 1 Start */}
              <div className="cta-img-1">
                {/* <img src="/images/cta-img-1.png" alt="" /> */}
                      <img src="img/6.png" alt="" />
              </div>
              {/* CTA Box img 1 End */}
            </div>

            <div className="col-lg-6 col-md-6 order-lg-2 order-md-2 order-1">
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
          <h2 className="text-anime-style-3" data-cursor="-opaque">
            Patient stories of healing and recovery
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.25s">
            Discover inspiring stories of natural healing and recovery from patients who trusted Dr. Qadir Shaikh for their healthcare.
          </p>
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
              
              {/* Testimonial Slide 1 Start */}
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
                    <p>"I suffered from severe migraines for years. Allopathic medicines only gave temporary relief. Dr. Qadir's homeopathic treatment cured it completely from the root within 3 months."</p>
                  </div>

                  <div className="testimonial-footer">
                    <div className="author-image">
                      {/* Image hata kar Profile Icon laga diya */}
                      <i className="fa-solid fa-circle-user" style={{ fontSize: "45px", color: "#1fa4a2" }}></i>
                    </div>
                    <div className="author-content">
                      <h3>Rahul Sharma</h3>
                      <p>Patient</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Slide 1 End */}

              {/* Testimonial Slide 2 Start */}
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
                    <p>"My 5-year-old daughter used to get frequent colds and coughs. Since we started treatment here, her immunity has improved drastically. Best part? She loves the sweet pills!"</p>
                  </div>

                  <div className="testimonial-footer">
                    <div className="author-image">
                       {/* Profile Icon */}
                      <i className="fa-solid fa-circle-user" style={{ fontSize: "45px", color: "#1fa4a2" }}></i>
                    </div>
                    <div className="author-content">
                      <h3>Priya Desai</h3>
                      <p>Mother of Patient</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Slide 2 End */}

              {/* Testimonial Slide 3 Start */}
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
                    <p>"I had terrible skin allergies and eczema. Creams just suppressed it. The personalized remedies provided by Dr. Qadir worked wonders. My skin is clear with zero side effects."</p>
                  </div>

                  <div className="testimonial-footer">
                    <div className="author-image">
                       {/* Profile Icon */}
                      <i className="fa-solid fa-circle-user" style={{ fontSize: "45px", color: "#1fa4a2" }}></i>
                    </div>
                    <div className="author-content">
                      <h3>Amit Verma</h3>
                      <p>Patient</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Slide 3 End */}

              {/* Testimonial Slide 4 Start */}
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
                    <p>"Dr. Qadir takes a lot of time to listen to your problems patiently. His classical homeopathy approach is genuine. Our entire family now relies on his clinic for any health issues."</p>
                  </div>

                  <div className="testimonial-footer">
                    <div className="author-image">
                       {/* Profile Icon */}
                      <i className="fa-solid fa-circle-user" style={{ fontSize: "45px", color: "#1fa4a2" }}></i>
                    </div>
                    <div className="author-content">
                      <h3>Sneha Patil</h3>
                      <p>Patient</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Slide 4 End */}

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