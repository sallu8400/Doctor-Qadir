import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '../../components/PageHeader';
import TreatmentSidebar from '../../components/TreatmentSidebar';
import { CLINIC, SITE_NAME, SITE_URL, WHATSAPP_BOOKING_URL } from '../../lib/site';
import '../inner-pages.css';

const title = 'Dr. A. Qadir Shaikh (BHMS, MD) | Homeopathy Doctor in Jogeshwari, Mumbai';
const description =
  'Meet Dr. Shaikh Abdul Qadir (BHMS, MD Homoeopathy), consultant homeopath at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai. Personalised, root-cause homeopathic treatment for all ages.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about-dr-qadir-shaikh' },
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: '/about-dr-qadir-shaikh',
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: '/img/suport-1.jpg', alt: 'Dr. A. Qadir Shaikh, homeopathy doctor in Jogeshwari West' }],
  },
};

// Google ko doctor ki details - naam, degree, clinic
const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. A. Qadir Shaikh',
  alternateName: CLINIC.doctorFullName,
  description,
  url: `${SITE_URL}/about-dr-qadir-shaikh`,
  image: `${SITE_URL}/img/suport-1.jpg`,
  medicalSpecialty: 'Homeopathic',
  hasCredential: ['BHMS', 'MD (Homoeopathy)'].map((name) => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    name,
  })),
  telephone: CLINIC.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC.streetAddress,
    addressLocality: CLINIC.locality,
    addressRegion: CLINIC.region,
    postalCode: CLINIC.postalCode,
    addressCountry: CLINIC.country,
  },
  worksFor: { '@type': 'MedicalClinic', name: CLINIC.name, url: SITE_URL },
};

const firstVisitSteps = [
  {
    title: 'Detailed case taking',
    text: 'The first consultation takes time. Dr. Qadir asks about your present complaint, past illnesses, family history, diet, sleep, habits and emotional state.',
  },
  {
    title: 'Review of reports',
    text: 'Bring any old prescriptions, blood tests, X-rays or scans. They help in understanding your condition and tracking progress.',
  },
  {
    title: 'Your personalised remedy',
    text: 'A remedy is selected for you as an individual, along with simple diet and lifestyle advice. Medicines are usually sweet pills that are easy to take.',
  },
  {
    title: 'Regular follow-ups',
    text: 'Follow-ups help adjust the treatment as you improve. For long-standing problems, patients usually come every 3 to 4 weeks in the beginning.',
  },
];

export default function AboutDoctorPage() {
  return (
    <>
      <PageHeader title="About Dr. Qadir Shaikh" crumbs={[{ name: 'About Doctor', href: '/about-dr-qadir-shaikh' }]} />

      <div className="page-service-single">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2">
              <div className="row align-items-center doctor-intro">
                <div className="col-md-5">
                  <div className="doctor-profile-image">
                    <img src="/img/suport-1.jpg" alt="Dr. A. Qadir Shaikh, BHMS MD, homeopathy doctor in Jogeshwari West, Mumbai" />
                  </div>
                </div>
                <div className="col-md-7">
                  <h2>Dr. A. Qadir Shaikh</h2>
                  <p>
                    Dr. Shaikh Abdul Qadir is a consultant homeopath practising at Neulife Homoeopathy Clinic in Jogeshwari West, Mumbai.
                  </p>
                  <ul className="doctor-credentials">
                    <li><i className="fa-solid fa-graduation-cap"></i> {CLINIC.qualification}</li>
                    <li><i className="fa-solid fa-user-doctor"></i> Consultant Homeopath</li>
                    <li><i className="fa-solid fa-location-dot"></i> Jogeshwari West, Mumbai</li>
                    <li><i className="fa-solid fa-video"></i> Clinic visit &amp; online video consultation</li>
                  </ul>
                </div>
              </div>

              <div className="service-entry">
                <h2>Treating the person, not just the disease</h2>
                <p>
                  Dr. Qadir believes that two patients with the same disease can need completely different medicines. That is why every consultation starts with listening: understanding your symptoms, your body type, your daily routine and what you are going through emotionally.
                </p>
                <p>
                  His focus is on finding the root cause of the illness and choosing a homeopathic remedy that supports the body&apos;s own healing, so that relief lasts longer and the problem does not keep coming back. Patients of all ages, from babies to elderly parents, are treated at the clinic.
                </p>
              </div>

              <div className="service-entry">
                <h2>How does homeopathy work?</h2>
                <p>
                  Homeopathy is based on the principle of &ldquo;like cures like&rdquo;: a substance that can produce certain symptoms in a healthy person is used in a highly diluted form to treat similar symptoms in a patient. Because the medicines are so diluted, they are gentle and suitable for children, pregnant women and the elderly.
                </p>
                <p>
                  Homeopathy can be used for short-term problems like fever, cold and cough, and for long-standing conditions like skin diseases, allergies, joint pain and digestive problems. It can usually be taken alongside your regular medicines, which should never be stopped without your treating doctor&apos;s advice.
                </p>
              </div>

              <div className="service-entry">
                <h2>What to expect on your first visit</h2>
                <div className="visit-steps">
                  {firstVisitSteps.map((step) => (
                    <div className="visit-step" key={step.title}>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inner-cta-box">
                <h2>Book an appointment with Dr. Qadir</h2>
                <p>
                  Clinic: Range Height Tower, 102, New Link Road, opp. Kajupada, Jogeshwari West, Mumbai 400102. Monday to Saturday, by appointment.
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

            <div className="col-lg-4 order-lg-1">
              <TreatmentSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
