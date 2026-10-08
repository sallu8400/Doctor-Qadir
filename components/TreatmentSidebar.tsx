import React from 'react';
import { treatments } from '../lib/treatments';
import { WHATSAPP_BOOKING_URL } from '../lib/site';

// Treatment / About pages ke side me - saari treatments ki list + appointment box
const TreatmentSidebar = ({ activeSlug }: { activeSlug?: string }) => {
  return (
    <div className="service-sidebar">
      <div className="service-catagery-list">
        <h3>Our Treatments</h3>
        <ul>
          {treatments.map((treatment) => (
            <li key={treatment.slug}>
              <a
                href={`/treatments/${treatment.slug}`}
                style={treatment.slug === activeSlug ? { color: 'var(--accent-color)' } : undefined}
              >
                {treatment.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-cta-box">
        <div className="icon-box">
          <img src="/images/icon-cta.svg" alt="" />
        </div>
        <div className="cta-contact-content">
          <h3>Book a Visit</h3>
          <p>Clinic visit or online video consultation with Dr. A. Qadir Shaikh</p>
        </div>
        <div className="cta-contact-btn">
          <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-default btn-phone">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSidebar;
