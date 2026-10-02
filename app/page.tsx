'use client'; 

import React, { useState } from 'react';
import './treatments.css';

// "Conditions We Treat" section ka data
const treatments = [
  {
    icon: "fa-solid fa-hand-dots",
    title: "Skin Problems",
    text: "Homeopathic treatment for eczema, psoriasis, acne, pimples, fungal infections and skin allergies, without steroid creams.",
  },
  {
    icon: "fa-solid fa-user",
    title: "Hair Fall & Dandruff",
    text: "Natural homeopathy for hair fall, thinning hair, dandruff and alopecia, focused on the internal cause of hair loss.",
  },
  {
    icon: "fa-solid fa-lungs",
    title: "Allergy & Respiratory Issues",
    text: "Relief from sneezing, sinusitis, allergic rhinitis, recurring cold, cough and asthma-related breathing problems.",
  },
  {
    icon: "fa-solid fa-head-side-virus",
    title: "Migraine & Headache",
    text: "Personalised homeopathic remedies to reduce the frequency and intensity of migraine and chronic headaches.",
  },
  {
    icon: "fa-solid fa-child",
    title: "Child Immunity",
    text: "Gentle, sweet homeopathic pills for children with frequent cold, cough, tonsillitis and low immunity.",
  },
  {
    icon: "fa-solid fa-bone",
    title: "Joint & Body Pain",
    text: "Homeopathy for arthritis, knee pain, back pain, neck pain and other long-standing joint problems.",
  },
  {
    icon: "fa-solid fa-heart-pulse",
    title: "Chronic Diseases",
    text: "Root-cause homeopathic treatment for long-term health problems, alongside your regular medical care.",
  },
  {
    icon: "fa-solid fa-video",
    title: "Online Video Consultation",
    text: "Consult Dr. A. Qadir Shaikh online from anywhere in India and get homeopathic medicines with proper guidance.",
  },
];

// FAQ ka data - accordion aur Google FAQ schema dono isi se bante hain
const faqs = [
  {
    question: "Is homeopathic medicine safe? Does it have side effects?",
    answer: "Yes, homeopathic medicines are absolutely safe, highly diluted, and 100% natural. They do not cause any harmful side effects and are perfectly safe for everyone, including infants, pregnant women, and the elderly.",
  },
  {
    question: "Does homeopathy take a very long time to work?",
    answer: "This is a common myth. For acute conditions like fever, cold, or diarrhea, homeopathy works very fast. For chronic (old) diseases, it takes some time because the medicine works to eliminate the root cause of the disease, not just suppress the symptoms.",
  },
  {
    question: "What should I expect during my first visit?",
    answer: "During your first visit, Dr. Qadir Shaikh will take a detailed case history. We will ask about your physical symptoms, past medical history, lifestyle, diet, and emotional state. This helps us find a remedy specifically tailored to your unique constitution.",
  },
  {
    question: "Are there any dietary restrictions while taking these medicines?",
    answer: "Generally, we advise avoiding strong-smelling items like raw onion, garlic, camphor, or coffee right before or after taking the medicine, as strong odors can neutralize the effect of the sweet pills. A gap of 20-30 minutes before and after eating is recommended.",
  },
  {
    question: "Can I take homeopathic medicines along with allopathic medicines?",
    answer: "Yes, you can. It is usually safe to take them together without stopping your regular allopathic medicines. However, it is best to maintain a gap of at least 30-40 minutes between the two. Always inform the doctor about all the medications you are currently taking.",
  },
  {
    question: "How do I schedule an appointment with Dr. Qadir Shaikh?",
    answer: "You can easily book an appointment by calling our clinic helpline, sending us a message on WhatsApp, or using the 'Book Appointment' button on our website. We offer both in-clinic visits at Jogeshwari West, Mumbai and online video consultations.",
  },
  {
    question: "Where is Neulife Homoeopathy Clinic located?",
    answer: "Neulife Homoeopathy Clinic is located at Range Height Tower, 102, New Link Road, opposite Kajupada, Behram Baug, Jogeshwari West, Mumbai, Maharashtra 400102. It is easy to reach from Jogeshwari, Oshiwara, Andheri West, Lokhandwala and Goregaon.",
  },
  {
    question: "Which diseases are treated with homeopathy at your clinic?",
    answer: "Dr. A. Qadir Shaikh treats skin problems like eczema, psoriasis and acne, hair fall and dandruff, allergies, sinusitis, recurring cold and cough, migraine, low immunity in children, joint pain, arthritis and many other chronic health problems with homeopathy.",
  },
  {
    question: "Do you offer online homeopathy consultation?",
    answer: "Yes. If you cannot visit our Jogeshwari West clinic, you can book an online video consultation with Dr. A. Qadir Shaikh from anywhere in India. Just message us on WhatsApp at +91 80824 08887 to book a slot.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [activeFaq, setActiveFaq] = useState("collapse1");

  // Ye function click karne par Accordion open/close karega
  const toggleFaq = (faqId:string) => {
    if (activeFaq === faqId) {
      setActiveFaq(""); 
    } else {
      setActiveFaq(faqId); 
    }
  }
  return (
    <>


   

      
     
      {/* Hero Section Start */}
   <div className="hero hero-bg-image hero-video bg-section">
        {/* Background Video Start - 20 sec ka chhota bina sound wala loop (0.45MB), taaki page fast khule */}
        <div className="hero-bg-video">
          <video autoPlay muted loop playsInline preload="auto" poster="/img/hero-poster.jpg" id="myVideo">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Background Video End */}

        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="section-title dark-section">
                  <h3 className="wow fadeInUp">Neulife Homoeopathy Clinic</h3>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Best Homeopathy Doctor in Jogeshwari West, Mumbai
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Dr. A. Qadir Shaikh (M.D.) offers safe, natural and side-effect-free homeopathic treatment for skin, hair, allergy, migraine, child immunity and chronic diseases.
                  </p>
                </div>

                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a
                    href="https://wa.me/918082408887?text=Hello%20Dr.%20Qadir,%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-default"
                  >
                    book a appointment
                  </a>
                  <a href="#about" className="btn-default">about us</a>
                </div>

                <div className="google-rating wow fadeInUp" data-wow-delay="0.75s">
                  <ul>
                    <li>Google Rating <span>4.9</span></li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>based on 123+ reviews</li>
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
            <video autoPlay controls playsInline>
              <source src="/clinic-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {/* Hero Section End */}

      {/* About Us Section Start */}
     <div className="about-us" id="about">
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
                Welcome to Neulife Homoeopathy Clinic in Jogeshwari West, Mumbai. Led by Dr. A. Qadir Shaikh (M.D.), we believe in treating the root cause of your illness with safe, natural, and side-effect-free homeopathic remedies.
              </p>
            </div>
            {/* Section Title End */}

            {/* About Us Body Start */}
            <div className="about-us-body">
              {/* About Info Item Start */}
              <div className="about-info-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/images/icon-about-info-1.svg" alt="Holistic Care" loading="lazy" />
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
                  <img src="/images/icon-about-info-2.svg" alt="Natural Remedies" loading="lazy" />
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
                  <img src="/images/icon-about-info-3.svg" alt="Root Cause" loading="lazy" />
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
              <a href="#faqs" className="btn-default">Learn more about us</a>
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
              {/* 'reveal' class hata di - wo GSAP script ke load hone tak image ko hidden rakhti thi,
                  isliye image refresh ke baad hi dikhti thi. 1.5MB PNG ki jagah 21KB WebP lagaya. */}
              <figure className="image-anime">
                <img
                  src="/img/homeopathy-medicine.webp"
                  alt="Homeopathic medicine pills at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai"
                  fetchPriority="high"
                  loading="eager"
                />
              </figure>
            </div>
            {/* About Image 1 End */}

            {/* About Image 2 Start */}
            <div className="about-img-2">
              <figure className="image-anime">
                <img 
                  src="/img/suport-1.jpg"
                  alt="Dr. A. Qadir Shaikh, homeopathy doctor - online video consultation"
                  loading="lazy" 
                />
                <h3>Video Consultation Support</h3>
              </figure>
            </div>
            {/* About Image 2 End */}

            {/* Company Timing Start */}
            <div className="company-timing">
              <h3>Clinic Hours</h3>
              <ul>
                <li><span>Mon To Sat</span> 10:00 AM - 9:00 PM</li>
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

      

      {/* Intro Video Section Start */}
      <div className="intro-video" id="why-choose-us">
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
          Our commitment to natural healing, compassion, and finding the root cause of diseases has earned the trust of countless patients across Jogeshwari, Andheri and Mumbai. Discover the gentle yet powerful approach of classical homeopathy.
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

          
        </div>
      </div>
      {/* Intro Video Section End */}

      {/* Conditions We Treat Section Start */}
      <div className="our-treatments" id="treatments">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">conditions we treat</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Homeopathy treatment in Jogeshwari West, Mumbai
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  At Neulife Homoeopathy Clinic, Dr. A. Qadir Shaikh (M.D.) treats acute and chronic health problems with personalised homeopathic medicine, for children and adults alike.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {treatments.map((treatment, i) => (
              <div className="col-lg-3 col-md-6" key={treatment.title}>
                <div className="treatment-card wow fadeInUp" data-wow-delay={`${(i % 4) * 0.2}s`}>
                  <div className="icon-box">
                    <i className={treatment.icon}></i>
                  </div>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Conditions We Treat Section End */}

      {/* Our Faqs Section Start */}
   <div className="our-faqs bg-section" id="faqs" style={{ background: "white" }}>
      {/* FAQ schema - Google search me FAQ dikhane ke liye */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                  <p><a href="tel:+918082408887">+91 80824 08887</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
        {/* FAQ Accordion Start */}
<div className="faq-accordion" id="faqaccordion">
  {faqs.map((faq, i) => {
    const faqId = `collapse${i + 1}`;
    return (
      <div className="accordion-item wow fadeInUp" data-wow-delay={i ? `${i * 0.2}s` : undefined} key={faqId}>
        <h2 className="accordion-header" id={`heading${i + 1}`}>
          <button
            className={`accordion-button ${activeFaq === faqId ? "" : "collapsed"}`}
            type="button" 
            onClick={() => toggleFaq(faqId)}
          >
            {faq.question}
          </button>
        </h2>
        <div 
          id={faqId} 
          className={`accordion-collapse collapse ${activeFaq === faqId ? "show" : ""}`}
          style={{ display: activeFaq === faqId ? "block" : "none" }}
        >
          <div className="accordion-body">
            <p>{faq.answer}</p>
          </div>
        </div>
      </div>
    );
  })}
</div>
{/* FAQ Accordion End */}
          </div>
        </div>
      </div>
    </div>

      {/* Our Faqs Section End */}


      

      {/* CTA Section Start */}
      <div className="cta-section bg-section">
        <div className="container">
    <div className="row d-flex justify-content-between gap-3">
  {/* Yahan maine col-6 ko col-12 kiya hai taaki mobile me perfect center aaye */}
  <div className="col-lg-4 col-md-3 col-12 order-lg-1 order-md-1 order-2 text-center text-md-start">
    {/* CTA Box img 1 Start */}
    <div className="cta-img-1 d-flex justify-content-center justify-content-md-start">
      {/* className="img-fluid" add kiya hai responsive ke liye */}
      <img src="/img/book-appointment.webp" alt="Book homeopathy treatment with Dr. A. Qadir Shaikh in Jogeshwari West" className="img-fluid" loading="lazy" />
    </div>
    {/* CTA Box img 1 End */}
  </div>

  <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-md-2 order-1 text-center text-md-start">
    {/* CTA Box Content Start */}
    <div className="cta-box-content">
      {/* Section Title Start */}
      <div className="section-title">
        <h2 className="text-anime-style-3" data-cursor="-opaque">
          Take the first step to better health
        </h2>
      </div>
      {/* Section Title End */}

      {/* CTA Box Button Start */}
      <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.25s">
  <a 
    className="nav-link btn-default" 
    href="https://wa.me/918082408887?text=Hello%20Dr.%20Qadir,%20I%20would%20like%20to%20book%20an%20appointment." 
    target="_blank" 
    rel="noopener noreferrer"
  >
          Book an appointment now
        </a>
      </div>

   
      {/* CTA Box Button End */}

      {/* CTA Box Text Start */}
      <div className="cta-box-text wow fadeInUp" data-wow-delay="0.5s">
        <p>
          It only <span>takes 2 minutes</span> to complete
        </p>
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