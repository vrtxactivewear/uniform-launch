'use client';

import { CampaignConfig } from '@/content/campaign';
import styles from './NameAndNumber.module.css';

interface NameAndNumberProps {
  campaign: CampaignConfig;
}

export default function NameAndNumber({ campaign }: NameAndNumberProps) {
  return (
    <section className={styles.section} id="name-and-number">
      <div className={styles.container}>
        <h2 className={styles.heading}>{campaign.nameAndNumber.title}</h2>
        <p className={styles.description}>{campaign.nameAndNumber.description}</p>

        <div className={styles.fontSamplePlaceholder}>
          <span>Font sample: 0-9 A-Z</span>
        </div>

        <div className={styles.examplesGrid}>
          {campaign.nameAndNumber.playerExamples.map((player, i) => (
            <div key={i} className={styles.example}>
              <div className={styles.playerImagePlaceholder}>
                <span>Player #{player.number}</span>
              </div>
              <div className={styles.playerInfo}>
                <span className={styles.playerNumber}>No. {player.number}</span>
                <span className={styles.playerName}>{player.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
