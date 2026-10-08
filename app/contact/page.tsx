import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '../../components/PageHeader';
import { CLINIC, SITE_NAME, WHATSAPP_BOOKING_URL } from '../../lib/site';
import '../inner-pages.css';

const title = 'Contact Neulife Homoeopathy Clinic | Jogeshwari West, Mumbai';
const description =
  'Address, phone, WhatsApp and clinic hours of Neulife Homoeopathy Clinic, Range Height Tower, opp. Kajupada, Jogeshwari West, Mumbai 400102. Book with Dr. A. Qadir Shaikh.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { type: 'website', locale: 'en_IN', url: '/contact', siteName: SITE_NAME, title, description },
};

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
const mapDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC.mapQuery)}`;

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" crumbs={[{ name: 'Contact', href: '/contact' }]} />

      <div className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-us-box">
                <div className="contact-info-box">
                  <div className="section-title">
                    <h3>get in touch</h3>
                    <h2>Visit our clinic in Jogeshwari West</h2>
                  </div>

                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <div className="icon-box"><i className="fa-solid fa-location-dot"></i></div>
                      <div className="contact-info-content">
                        <h3>Address</h3>
                        <address style={{ margin: 0, fontStyle: 'normal' }}>
                          <p>{CLINIC.streetAddress}, {CLINIC.locality}, {CLINIC.region} {CLINIC.postalCode}</p>
                        </address>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="icon-box"><i className="fa-solid fa-phone"></i></div>
                      <div className="contact-info-content">
                        <h3>Phone</h3>
                        <p><a href="tel:+918082408887">+91 80824 08887</a></p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="icon-box"><i className="fa-brands fa-whatsapp"></i></div>
                      <div className="contact-info-content">
                        <h3>WhatsApp</h3>
                        <p><a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer">Book an appointment on WhatsApp</a></p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="icon-box"><i className="fa-solid fa-envelope"></i></div>
                      <div className="contact-info-content">
                        <h3>Email</h3>
                        <p><a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="icon-box"><i className="fa-solid fa-clock"></i></div>
                      <div className="contact-info-content">
                        <h3>Clinic Hours</h3>
                        <p>Mon to Sat: 10:00 AM - 9:00 PM (by appointment)<br />Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <a href={mapDirectionsLink} target="_blank" rel="noopener noreferrer" className="btn-default">
                    Get Directions
                  </a>
                </div>

                <div className="contact-map-box">
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
          </div>
        </div>
      </div>
    </>
  );
}
