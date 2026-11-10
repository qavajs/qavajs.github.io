import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const INSTALL_CMD = 'npm init @qavajs';

const SCRIPT = [
  {kind: 'kw', text: 'Feature: Wikipedia'},
  {kind: 'blank'},
  {kind: 'tag', text: '  @wikipedia'},
  {kind: 'kw', text: '  Scenario: Search in wikipedia'},
  {kind: 'step', kw: 'Given', text: " I open '$wikipediaUrl' url"},
  {kind: 'step', kw: 'When', text: " I type 'JavaScript' to 'Wikipedia > Search Input'"},
  {kind: 'step', kw: 'And', text: " I click 'Wikipedia > Search Button'"},
  {kind: 'step', kw: 'Then', text: " I expect text of 'Article > Title' equals 'JavaScript'"},
  {kind: 'step', kw: 'And', text: " I expect 'Article > Title' to be visible"},
];

function highlight(text) {
  // Highlight quoted params, memory values ($...) and page-object aliases
  const parts = text.split(/('[^']*')/g);
  return parts.map((part, i) => {
    if (!part.startsWith("'")) return <span key={i}>{part}</span>;
    const inner = part.slice(1, -1);
    const cls = inner.startsWith('$')
      ? styles.tMemory
      : inner.includes(' > ')
        ? styles.tAlias
        : styles.tString;
    return (
      <span key={i} className={cls}>
        {part}
      </span>
    );
  });
}

function Terminal() {
  const [visible, setVisible] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(SCRIPT.length);
      setDone(true);
      return undefined;
    }
    let cancelled = false;
    let i = 0;
    let timer;
    const tick = () => {
      if (cancelled) return;
      i += 1;
      setVisible(i);
      if (i < SCRIPT.length) {
        timer = setTimeout(tick, SCRIPT[i - 1].kind === 'step' ? 520 : 180);
      } else {
        timer = setTimeout(() => {
          if (cancelled) return;
          setDone(true);
          // loop the demo
          timer = setTimeout(() => {
            if (cancelled) return;
            i = 0;
            setVisible(0);
            setDone(false);
            timer = setTimeout(tick, 400);
          }, 5000);
        }, 600);
      }
    };
    timer = setTimeout(tick, 500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.terminal} aria-label="Example qavajs scenario">
      <div className={styles.terminalBar}>
        <span className={styles.dot} style={{background: '#ff5f57'}} />
        <span className={styles.dot} style={{background: '#febc2e'}} />
        <span className={styles.dot} style={{background: '#28c840'}} />
        <span className={styles.terminalTitle}>features/wikipedia.feature</span>
      </div>
      <pre className={styles.terminalBody}>
        {SCRIPT.map((line, idx) => {
          const shown = idx < visible;
          const passed = line.kind === 'step' && (idx < visible - 1 || done);
          return (
            <div
              key={idx}
              className={clsx(styles.line, shown && styles.lineShown)}>
              {line.kind === 'blank' && ' '}
              {line.kind === 'kw' && <span className={styles.tKeyword}>{line.text}</span>}
              {line.kind === 'tag' && <span className={styles.tTag}>{line.text}</span>}
              {line.kind === 'step' && (
                <>
                  <span className={clsx(styles.status, passed && styles.statusPassed)}>
                    {passed ? '✓' : '•'}
                  </span>
                  <span className={styles.tKeyword}>{'  ' + line.kw}</span>
                  {highlight(line.text)}
                </>
              )}
            </div>
          );
        })}
        <div className={clsx(styles.summary, done && styles.summaryShown)}>
          <span className={styles.tPassed}>1 scenario (1 passed)</span>
          {'\n'}
          <span className={styles.tMuted}>5 steps (5 passed) · 0m02.418s</span>
        </div>
      </pre>
    </div>
  );
}

function InstallPill() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      // clipboard unavailable — ignore
    }
  };
  return (
    <button type="button" className={styles.install} onClick={copy} title="Copy to clipboard">
      <span className={styles.prompt}>$</span>
      <code>{INSTALL_CMD}</code>
      <span className={styles.copy}>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.glowA} />
      <div className={styles.glowB} />
      <div className={styles.grid} />
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroText}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} /> Built on Cucumber · Web · API · Mobile
          </span>
          <h1 className={styles.title}>
            Test automation that{' '}
            <span className={styles.gradientText}>reads like English</span>
          </h1>
          <p className={styles.subtitle}>
            <b>qavajs</b> is a modular, low-code framework with a built-in page object engine and
            hundreds of ready-to-use steps. Write tests in Gherkin, run them on Playwright,
            WebdriverIO or Cypress — and ship in minutes, not weeks.
          </p>
          <div className={styles.ctaRow}>
            <Link className={clsx('button button--primary button--lg', styles.ctaPrimary)} to="/docs/intro">
              Get Started →
            </Link>
            <Link
              className={clsx('button button--lg', styles.ctaSecondary)}
              href="https://github.com/qavajs">
              GitHub
            </Link>
          </div>
          <InstallPill />
        </div>
        <div className={styles.heroDemo}>
          <Terminal />
        </div>
      </div>
    </header>
  );
}

const PAGE_OBJECT = `import { locator } from '@qavajs/steps-playwright/po';

class Wikipedia {
  SearchInput = locator('#searchInput');
  SearchButton = locator('button[type=submit]');
}

class Article {
  Title = locator('#firstHeading');
}

export default class App {
  Wikipedia = locator('body').as(Wikipedia);
  Article = locator('#content').as(Article);
}`;

const CONFIG = `import Memory from './memory';
import App from './page_object';

export default {
  paths: ['features/**/*.feature'],
  require: ['node_modules/@qavajs/steps-playwright/index.js'],
  browser: { capabilities: { browserName: 'chromium' } },
  memory: new Memory(),
  pageObject: new App(),
  parallel: 4,
};`;

const STEPS = [
  {
    n: '01',
    title: 'Scaffold',
    text: 'One command asks a few questions and installs exactly the modules you need.',
    lang: 'bash',
    code: `npm init @qavajs\n\n? Choose language: TypeScript\n? Choose step libraries: playwright, api, memory\n? Choose formatters: html, junit\n✔ config.ts created`,
  },
  {
    n: '02',
    title: 'Describe your app',
    text: 'Map UI to a page object once. Reference it in tests as "Wikipedia > Search Input".',
    lang: 'typescript',
    code: PAGE_OBJECT,
  },
  {
    n: '03',
    title: 'Configure & run',
    text: 'Pick a driver, memory and reporters. Then run with npx qavajs — or open UI mode.',
    lang: 'typescript',
    code: CONFIG,
  },
];

function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>How it works</span>
          <h2>From zero to green in three steps</h2>
        </div>
        <div className={styles.how}>
          <div className={styles.howList} role="tablist">
            {STEPS.map((s, i) => (
              <button
                key={s.n}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={clsx(styles.howItem, i === active && styles.howItemActive)}
                onClick={() => setActive(i)}>
                <span className={styles.howNum}>{s.n}</span>
                <span>
                  <span className={styles.howTitle}>{s.title}</span>
                  <span className={styles.howText}>{s.text}</span>
                </span>
              </button>
            ))}
          </div>
          <div className={styles.howCode}>
            <CodeBlock language={step.lang}>{step.code}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

const ECOSYSTEM = [
  {name: 'Playwright', to: '/docs/Steps/playwright'},
  {name: 'WebdriverIO', to: '/docs/Steps/wdio'},
  {name: 'Cypress', to: '/docs/StandaloneSolutions/cypress'},
  {name: 'REST API', to: '/docs/Steps/api'},
  {name: 'SQL', to: '/docs/Steps/sql'},
  {name: 'Files', to: '/docs/Steps/files'},
  {name: 'Gmail', to: '/docs/Steps/gmail'},
  {name: 'Lighthouse', to: '/docs/Steps/lighthouse'},
  {name: 'Accessibility', to: '/docs/Steps/accessibility'},
  {name: 'Visual testing', to: '/docs/Steps/visual-testing'},
  {name: 'Memory', to: '/docs/Steps/memory'},
  {name: 'HTML report', to: '/docs/Formatters/html-formatter'},
  {name: 'ReportPortal', to: '/docs/Formatters/report-portal'},
  {name: 'Xray', to: '/docs/Formatters/xray-formatter'},
  {name: 'JUnit', to: '/docs/Formatters/junit-formatter'},
  {name: 'VS Code', to: '/docs/Guides/vscode'},
];

function Ecosystem() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Ecosystem</span>
          <h2>Plug in what you need</h2>
          <p>Drivers, step libraries and reporters — each one a single npm package.</p>
        </div>
        <div className={styles.pills}>
          {ECOSYSTEM.map((e) => (
            <Link key={e.name} to={e.to} className={styles.pill}>
              {e.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.cta}>
          <h2>Ready to write your first scenario?</h2>
          <p>Set up a full-featured test framework in under five minutes.</p>
          <div className={styles.ctaRowCenter}>
            <Link className={clsx('button button--lg', styles.ctaLight)} to="/docs/intro">
              Read the docs
            </Link>
            <Link
              className={clsx('button button--lg', styles.ctaGhost)}
              href="https://github.com/qavajs/core/issues/new">
              Ask a question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — ${siteConfig.tagline}`}
      description="qavajs is a modular low-code test automation framework built on Cucumber with a page object engine and ready-to-use steps for web, API and mobile testing.">
      <Hero />
      <main>
        <HomepageFeatures />
        <HowItWorks />
        <Ecosystem />
        <FinalCta />
      </main>
    </Layout>
  );
}
