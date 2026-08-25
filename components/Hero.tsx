'use client';

import { useEffect, useRef } from 'react';
import { CampaignConfig } from '@/content/campaign';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  campaign: CampaignConfig;
}

export default function Hero({ campaign }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const primaryTextRef = useRef<HTMLHeadingElement>(null);
  const secondaryTextRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Staggered entrance animation
      tl.from(primaryTextRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
      }, 0.2)
        .from(
          secondaryTextRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
          },
          0.5
        )
        .from(
          sponsorsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out',
          },
          0.8
        )
        .from(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: -15,
            duration: 0.8,
            ease: 'power3.out',
          },
          1
        );

      // Continuous scroll indicator pulse
      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        yoyo: true,
        repeat: -1,
        duration: 1.8,
        ease: 'sine.inOut',
      });

      // Subtle background parallax on scroll
      gsap.to(backgroundRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: 100,
        ease: 'none',
      });

      // Fade out content on scroll
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        opacity: 0,
        y: -40,
        ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div
        className={styles.background}
        ref={backgroundRef}
        style={{
          background: `linear-gradient(135deg, ${campaign.colors.gradientStart} 0%, ${campaign.colors.gradientEnd} 100%)`,
        }}
      >
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <span>HERO IMAGERY</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleSection} ref={titleRef}>
          <div className={styles.mainTitle}>
            <h1 className={styles.primaryText} ref={primaryTextRef}>
              {campaign.hero.title}
            </h1>
            <p className={styles.secondaryText} ref={secondaryTextRef}>
              {campaign.hero.subtitle}
            </p>
          </div>

          <div className={styles.sponsors} ref={sponsorsRef}>
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
