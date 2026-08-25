'use client';

import { useState } from 'react';
import { Uniform, CampaignConfig } from '@/content/campaign';
import styles from './UniformShowcase.module.css';

interface UniformShowcaseProps {
  uniform: Uniform;
  campaign: CampaignConfig;
}

export default function UniformShowcase({ uniform, campaign }: UniformShowcaseProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDesignPoint, setSelectedDesignPoint] = useState<string | null>(null);

  const galleryImages = uniform.galleryImages.length > 0 ? uniform.galleryImages : ['/images/placeholder.jpg'];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className={styles.uniform}
      id={uniform.id}
      style={{
        '--primary-color': campaign.colors.primary,
        '--secondary-color': campaign.colors.secondary,
      } as React.CSSProperties}
    >
      <div className={styles.container}>
        {/* Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.gallery}>
            <div className={styles.imagePlaceholder}>
              <span>Uniform imagery: {uniform.label}</span>
            </div>
            <div className={styles.controls}>
              <button className={styles.navButton} onClick={handlePrevImage} aria-label="Previous image">
                ←
              </button>
              <span className={styles.counter}>
                {currentImageIndex + 1} / {galleryImages.length}
              </span>
              <button className={styles.navButton} onClick={handleNextImage} aria-label="Next image">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className={styles.detailsSection}>
          <div className={styles.header}>
            <span className={styles.label}>{uniform.label}</span>
            <h2 className={styles.title}>{uniform.title}</h2>
          </div>

          <p className={styles.description}>{uniform.conceptDescription}</p>

          <div className={styles.pricing}>
            <span className={styles.price}>{uniform.price}</span>
            <span className={styles.tax}>(tax included)</span>
          </div>

          <a href={uniform.buyUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            {uniform.buttonText}
          </a>

          {/* Design Points */}
          {uniform.designPoints.length > 0 && (
            <div className={styles.designPoints}>
              <div className={styles.pointsGrid}>
                {uniform.designPoints.map((point) => (
                  <button
                    key={point.id}
                    className={`${styles.designPoint} ${selectedDesignPoint === point.id ? styles.active : ''}`}
                    onClick={() => setSelectedDesignPoint(selectedDesignPoint === point.id ? null : point.id)}
                  >
                    <span>{point.title}</span>
                  </button>
                ))}
              </div>

              {selectedDesignPoint && (
                <div className={styles.designDetail}>
                  {uniform.designPoints.find((p) => p.id === selectedDesignPoint) && (
                    <>
                      <h3 className={styles.detailTitle}>
                        {uniform.designPoints.find((p) => p.id === selectedDesignPoint)?.title}
                      </h3>
                      <p className={styles.detailDescription}>
                        {uniform.designPoints.find((p) => p.id === selectedDesignPoint)?.description}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Product Lineup */}
          {uniform.variants.length > 0 && (
            <div className={styles.lineup}>
              <h3 className={styles.lineupTitle}>LINEUP</h3>
              <div className={styles.productList}>
                {uniform.variants.map((variant) => (
                  <a
                    key={variant.id}
                    href={variant.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.productItem}
                  >
                    <span className={styles.variantLabel}>{variant.label}</span>
                    <span className={styles.variantType}>{variant.type}</span>
                    <span className={styles.variantPrice}>{variant.price}</span>
                    <span className={styles.tax}>(tax included)</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
