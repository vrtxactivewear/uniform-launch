'use client';

import { CampaignConfig } from '@/content/campaign';
import styles from './PurchaseSchedule.module.css';

interface PurchaseScheduleProps {
  campaign: CampaignConfig;
}

export default function PurchaseSchedule({ campaign }: PurchaseScheduleProps) {
  return (
    <section className={styles.section} id="schedule">
      <div className={styles.container}>
        <h2 className={styles.heading}>SCHEDULE TO BUY</h2>

        <div className={styles.phasesGrid}>
          {campaign.purchaseSchedule.map((phase, i) => (
            <div key={i} className={styles.phaseCard}>
              <span className={styles.phaseLabel}>{phase.phase}</span>
              <h3 className={styles.phaseHeading}>{phase.heading}</h3>

              <div className={styles.phaseDetails}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Reception</span>
                  <span className={styles.detailValue}>{phase.reception}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Official Online Shop Delivery Date</span>
                  <span className={styles.detailValue}>{phase.deliveryDate}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Official Shop In-Store Pickup Available Date</span>
                  <span className={styles.detailValue}>{phase.pickupDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
