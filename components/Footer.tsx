'use client';

import { CampaignConfig } from '@/content/campaign';
import styles from './Footer.module.css';

interface FooterProps {
  campaign: CampaignConfig;
}

export default function Footer({ campaign }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <div className={styles.logo}>{campaign.club.name}</div>
          <p className={styles.copyright}>© 2024 {campaign.club.name}. All rights reserved.</p>
        </div>

        <div className={styles.socials}>
          <h3 className={styles.socialsHeading}>Follow Us</h3>
          <div className={styles.socialLinks}>
            {campaign.socialLinks.youtube && (
              <a href={campaign.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            )}
            {campaign.socialLinks.twitter && (
              <a href={campaign.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
            {campaign.socialLinks.instagram && (
              <a href={campaign.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            )}
            {campaign.socialLinks.facebook && (
              <a href={campaign.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            )}
          </div>
        </div>

        <div className={styles.shopCta}>
          <a href={campaign.shopLinks.online} target="_blank" rel="noopener noreferrer" className={styles.shopButton}>
            SHOP NOW
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.disclaimer}>
          This is a demonstration website. For official {campaign.club.name} merchandise, visit the official shop.
        </p>
      </div>
    </footer>
  );
}
