'use client';

import { CampaignConfig } from '@/content/campaign';
import styles from './Concept.module.css';

interface ConceptProps {
  campaign: CampaignConfig;
}

export default function Concept({ campaign }: ConceptProps) {
  return (
    <section className={styles.concept} id="concept">
      <div className={styles.container}>
        <h2 className={styles.heading}>{campaign.concept.heading}</h2>
        <p className={styles.description}>{campaign.campaign.concept}</p>
      </div>
    </section>
  );
}
