'use client';

import { CampaignConfig } from '@/content/campaign';
import styles from './RetailLocations.module.css';

interface RetailLocationsProps {
  campaign: CampaignConfig;
}

export default function RetailLocations({ campaign }: RetailLocationsProps) {
  return (
    <section className={styles.section} id="shop">
      <div className={styles.container}>
        <h2 className={styles.heading}>OFFICIAL SHOP</h2>

        <div className={styles.grid}>
          {campaign.retailLocations.map((location, i) => (
            <a
              key={i}
              href={location.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationCard}
            >
              <div className={styles.locationPlaceholder}>
                <span>{location.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
