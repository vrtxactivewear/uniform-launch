'use client';

import { useEffect, useRef } from 'react';
import { CampaignConfig } from '@/content/campaign';
import styles from './Hero.module.css';
import gsap from 'gsap';

interface HeroProps {
  campaign: CampaignConfig;
}

export default function Hero({ campaign }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero on load
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from(scrollIndicatorRef.current, {
        opacity: 0,
        y: -10,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 6,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div
        className={styles.background}
        style={{
          background: `linear-gradient(135deg, ${campaign.colors.gradientStart} 0%, ${campaign.colors.gradientEnd} 100%)`,
        }}
      >
        {/* Hero imagery placeholder - replace with actual images */}
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <span>Replace with hero imagery</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleSection} ref={titleRef}>
          <div className={styles.mainTitle}>
            <h1 className={styles.primaryText}>{campaign.hero.title}</h1>
            <p className={styles.secondaryText}>{campaign.hero.subtitle}</p>
          </div>

          <div className={styles.sponsors}>
            {campaign.hero.sponsorLogos.map((logo, i) => (
              <div key={i} className={styles.sponsorItem}>
                <span>{logo.replace('/logos/', '').replace('.svg', '')}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollIndicator} ref={scrollIndicatorRef}>
          <span>SCROLL</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15L3 8H17L10 15Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
