import React from 'react';
import { SITE_URL } from '../lib/site';

type Crumb = { name: string; href: string };

// Andar ke pages ka header - title + breadcrumb (Home / Treatments / ...)
// Breadcrumb schema bhi saath me jata hai taaki Google result me path dikhe
const PageHeader = ({ title, crumbs }: { title: string; crumbs: Crumb[] }) => {
  const trail = [{ name: 'Home', href: '/' }, ...crumbs];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href === '/' ? '' : crumb.href}`,
    })),
  };

  return (
    <div className="page-header">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1>{title}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {trail.map((crumb, i) =>
                    i === trail.length - 1 ? (
                      <li className="breadcrumb-item active" aria-current="page" key={crumb.href}>{crumb.name}</li>
                    ) : (
                      <li className="breadcrumb-item" key={crumb.href}><a href={crumb.href}>{crumb.name}</a></li>
                    )
                  )}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
