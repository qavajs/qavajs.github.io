import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const Icon = ({children}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const FEATURES = [
  {
    title: 'Plain-English tests',
    text: 'Write scenarios in Gherkin from hundreds of ready-made steps. Anyone on the team can read — and write — them.',
    to: '/docs/Commons/writing-tests',
    icon: (
      <Icon>
        <path d="M4 5h16M4 10h10M4 15h16M4 20h7" />
      </Icon>
    ),
  },
  {
    title: 'Page object engine',
    text: 'Describe your UI once and reference elements by alias like "Header > Login Button". Selectors stay out of tests.',
    to: '/docs/Commons/page-object',
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M14 17.5h7M17.5 14v7" />
      </Icon>
    ),
  },
  {
    title: 'Memory & data',
    text: "Resolve '$values' at runtime, compute dynamic data and override any value from the CLI for every environment.",
    to: '/docs/Commons/memory',
    icon: (
      <Icon>
        <ellipse cx="12" cy="5.5" rx="8" ry="2.5" />
        <path d="M4 5.5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6M4 11.5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
      </Icon>
    ),
  },
  {
    title: 'Any driver',
    text: 'Playwright, WebdriverIO or Cypress — for web and native mobile. Switch engines without rewriting scenarios.',
    to: '/docs/Steps/playwright',
    icon: (
      <Icon>
        <rect x="2.5" y="4" width="19" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </Icon>
    ),
  },
  {
    title: 'Scale in CI',
    text: 'Parallel workers, sharding, retries and tag filters out of the box. Drop it into any pipeline.',
    to: '/docs/Guides/parallel',
    icon: (
      <Icon>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
      </Icon>
    ),
  },
  {
    title: 'Reports that matter',
    text: 'HTML, JUnit, ReportPortal and Xray formatters, plus an interactive UI mode to debug runs live.',
    to: '/docs/Formatters/html-formatter',
    icon: (
      <Icon>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </Icon>
    ),
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>Why qavajs</span>
          <h2>Everything a test framework needs, already wired up</h2>
          <p>Stop gluing tools together. Start testing.</p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <Link key={f.title} to={f.to} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <span className={styles.more}>Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
