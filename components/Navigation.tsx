'use client';

import { useState, useEffect } from 'react';
import { CampaignConfig } from '@/content/campaign';
import styles from './Navigation.module.css';

interface NavigationProps {
  campaign: CampaignConfig;
}

export default function Navigation({ campaign }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { label: 'CONCEPT', href: '#concept' },
    { label: '1st UNIFORM', href: '#first-uniform' },
    { label: '2nd UNIFORM', href: '#second-uniform' },
    { label: 'GK UNIFORM', href: '#gk-uniform' },
    { label: 'SIZE', href: '#size' },
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'SHOP', href: '#shop' },
  ];

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>{campaign.club.name}</span>
          <span>{campaign.season}</span>
        </div>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <div className={styles.menuContent}>
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className={styles.menuItem}
                onClick={() => setIsOpen(false)}
              >
                {section.label}
              </a>
            ))}
            <a href={campaign.shopLinks.online} target="_blank" rel="noopener noreferrer" className={styles.shopLink}>
              SHOP
            </a>
          </div>
        </div>

        <div className={styles.rightNav}>
          <a href={campaign.shopLinks.online} target="_blank" rel="noopener noreferrer" className={styles.shopButton}>
            SHOP
          </a>
        </div>
      </div>
    </nav>
  );
}
