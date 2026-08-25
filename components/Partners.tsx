'use client';

import { CampaignConfig } from '@/content/campaign';
import styles from './Partners.module.css';

interface PartnersProps {
  campaign: CampaignConfig;
}

export default function Partners({ campaign }: PartnersProps) {
  return (
    <section className={styles.section} id="partners">
      <div className={styles.container}>
        <h2 className={styles.heading}>PARTNER</h2>

        <div className={styles.grid}>
          {campaign.partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerCard}
              title={partner.name}
            >
              <span className={styles.partnerName}>{partner.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
