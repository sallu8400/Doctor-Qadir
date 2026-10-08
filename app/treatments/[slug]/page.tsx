import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHeader from '../../../components/PageHeader';
import TreatmentSidebar from '../../../components/TreatmentSidebar';
import { treatments, getTreatment } from '../../../lib/treatments';
import { SITE_NAME, WHATSAPP_BOOKING_URL } from '../../../lib/site';
import '../../inner-pages.css';

type Props = { params: Promise<{ slug: string }> };

// Build ke time saare treatment pages pehle se ban jayenge
export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};

  const path = `/treatments/${treatment.slug}`;
  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: path,
      siteName: SITE_NAME,
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      images: [{ url: '/img/homeopathy-remedies.webp', width: 736, height: 448, alt: `Homeopathy for ${treatment.title}` }],
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <PageHeader
        title={treatment.title}
        crumbs={[
          { name: 'Treatments', href: '/treatments' },
          { name: treatment.title, href: `/treatments/${treatment.slug}` },
        ]}
      />

      <div className="page-service-single">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2">
              <div className="service-single-content">
                <div className="service-featured-image">
                  <figure>
                    <img
                      src="/img/homeopathy-remedies.webp"
                      alt={`Homeopathy treatment for ${treatment.title.toLowerCase()} at Neulife Homoeopathy Clinic, Jogeshwari West`}
                      width={736}
                      height={448}
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <h2>Homeopathy for {treatment.title.toLowerCase()} in Jogeshwari, Mumbai</h2>
                  {treatment.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="service-entry">
                  <h2>Conditions we treat</h2>
                  <ul>
                    {treatment.conditions.map((condition) => (
                      <li key={condition}>{condition}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-entry">
                  <h2>How Dr. Qadir treats it</h2>
                  {treatment.approach.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="service-entry">
                  <h2>Common questions</h2>
                  <div className="inner-faq-list">
                    {treatment.faqs.map((faq) => (
                      <div className="inner-faq-item" key={faq.question}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="inner-cta-box">
                  <h2>Book your consultation</h2>
                  <p>
                    Visit Neulife Homoeopathy Clinic at Range Height Tower, opp. Kajupada, Jogeshwari West, or book an online video consultation with Dr. A. Qadir Shaikh (BHMS, MD).
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

            <div className="col-lg-4 order-lg-1">
              <TreatmentSidebar activeSlug={treatment.slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
