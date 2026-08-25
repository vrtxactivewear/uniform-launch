'use client';

import { CampaignConfig } from '@/content/campaign';
import styles from './SizeGuide.module.css';

interface SizeGuideProps {
  campaign: CampaignConfig;
}

export default function SizeGuide({ campaign }: SizeGuideProps) {
  return (
    <section className={styles.section} id="size">
      <div className={styles.container}>
        <h2 className={styles.heading}>SIZE</h2>

        <div className={styles.tablesContainer}>
          <div className={styles.tableSection}>
            <h3 className={styles.tableHeading}>ADULTS (cm)</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>XS</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                    <th>2XL</th>
                    <th>3XL</th>
                  </tr>
                </thead>
                <tbody>
                  {campaign.sizeChart.adults.map((row, i) => (
                    <tr key={i}>
                      <td className={styles.label}>{row.label}</td>
                      {row.measurements.map((m, j) => (
                        <td key={j}>{m}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.tableSection}>
            <h3 className={styles.tableHeading}>JUNIOR (cm)</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>120</th>
                    <th>130</th>
                    <th>140</th>
                    <th>150</th>
                    <th>160</th>
                  </tr>
                </thead>
                <tbody>
                  {campaign.sizeChart.junior.map((row, i) => (
                    <tr key={i}>
                      <td className={styles.label}>{row.label}</td>
                      {row.measurements.map((m, j) => (
                        <td key={j}>{m}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={styles.diagramPlaceholder}>
          <span>Measurement diagram would appear here</span>
        </div>
      </div>
    </section>
  );
}
