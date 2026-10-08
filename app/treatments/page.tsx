import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '../../components/PageHeader';
import { treatments } from '../../lib/treatments';
import { SITE_NAME, WHATSAPP_BOOKING_URL } from '../../lib/site';
import '../treatments.css';
import '../inner-pages.css';

const title = 'Homeopathy Treatments in Jogeshwari West, Mumbai | Neulife Clinic';
const description =
  'Homeopathic treatment for skin problems, hair fall, allergy, migraine, child immunity, joint pain, PCOD, stress and chronic diseases at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/treatments' },
  openGraph: { type: 'website', locale: 'en_IN', url: '/treatments', siteName: SITE_NAME, title, description },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHeader title="Our Treatments" crumbs={[{ name: 'Treatments', href: '/treatments' }]} />

      <div className="our-treatments" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>conditions we treat</h3>
                <h2>Homeopathy treatment for the whole family</h2>
                <p>
                  Dr. A. Qadir Shaikh (BHMS, MD) treats acute and chronic health problems with personalised homeopathic medicine at Neulife Homoeopathy Clinic, Jogeshwari West. Select a condition to learn more.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {treatments.map((treatment) => (
              <div className="col-lg-4 col-md-6" key={treatment.slug}>
                <a href={`/treatments/${treatment.slug}`} className="treatment-card">
                  <div className="icon-box">
                    <i className={treatment.icon}></i>
                  </div>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.summary}</p>
                  <span className="read-more">Read more →</span>
                </a>
              </div>
            ))}
          </div>

          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-lg-12">
              <div className="inner-cta-box">
                <h2>Can&apos;t visit the clinic?</h2>
                <p>
                  Book an online video consultation with Dr. A. Qadir Shaikh from anywhere in India. Medicines and follow-up guidance are provided after the consultation.
                </p>
                <div className="inner-cta-btns">
                  <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-default">
                    Book on WhatsApp
                  </a>
                  <a href="tel:+918082408887" className="btn-default btn-outline">
                    Call +91 80824 08887
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
