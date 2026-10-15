import { useState } from 'react'
import './App.css'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/rise_with__simran/?hl=en',
    handle: '@rise_with__simran',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/simran-gupta-753173426/',
    handle: 'Connect professionally',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61592553718593',
    handle: 'Follow on Facebook',
  },
]

const specialties = [
  {
    number: '01',
    title: 'Digital marketing',
    skills: ['Meta Ads', 'Google Ads', 'SEO'],
    description:
      'Plan and support digital campaigns that help brands show up where their audience is.',
    icon: '✳',
  },
  {
    number: '02',
    title: 'Web development',
    skills: ['Web development'],
    description:
      'Build thoughtful web experiences that bring a brand’s ideas and online presence together.',
    icon: '⌘',
  },
  {
    number: '03',
    title: 'Creative & social',
    skills: ['Canva design', 'Social media'],
    description:
      'Create visual content and social pages with a clear, consistent point of view.',
    icon: '◈',
  },
  {
    number: '04',
    title: 'AI tools',
    skills: ['AI tools'],
    description:
      'Explore practical AI tools to support creative ideas and everyday digital workflows.',
    icon: '✴',
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Simran Gupta, home">
        <span className="brand-mark">S<span>G</span></span>
        <span className="brand-name">simran gupta<span className="brand-dot">.</span></span>
      </a>

      <button
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`main-nav${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#expertise" onClick={closeMenu}>Expertise</a>
        <a href="#connect" onClick={closeMenu}>Connect</a>
        <a className="nav-contact" href="mailto:simran92297@gmail.com">
          Let’s talk <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Digital marketing and creative skills">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-spark spark-one">✳</div>
      <div className="visual-spark spark-two">✦</div>
      <div className="visual-card card-main">
        <div className="visual-card-top">
          <span className="visual-live"><span /> DIGITAL PRESENCE</span>
          <span className="card-menu">•••</span>
        </div>
        <div className="visual-monogram">S<span>G</span></div>
        <div className="visual-card-caption">
          <span>Ideas into impact</span>
          <span className="caption-arrow">↗</span>
        </div>
      </div>
      <div className="floating-chip chip-ads">
        <span className="chip-icon chip-icon-lime">↗</span>
        <span><small>GROWTH</small>Meta Ads</span>
      </div>
      <div className="floating-chip chip-design">
        <span className="chip-icon chip-icon-lilac">✳</span>
        <span><small>CREATIVE</small>Canva design</span>
      </div>
      <div className="visual-index">01 <span>/</span> 04</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> DIGITAL MARKETING · WEB · CREATIVE</p>
        <h1>
          Making digital
          <span className="headline-second">feel <em>different.</em></span>
        </h1>
        <p className="hero-description">
          Hi, I’m Simran — I bring together marketing, web development and
          creative thinking to shape a thoughtful online presence.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#expertise">
            Explore what I do <ArrowIcon />
          </a>
          <a className="text-link" href="mailto:simran92297@gmail.com">
            Get in touch <ArrowIcon diagonal />
          </a>
        </div>
        <div className="hero-note">
          <span className="note-star">✳</span>
          <span>Curious by nature. Creative by choice.</span>
        </div>
      </div>
      <HeroVisual />
      <a className="scroll-cue" href="#about">
        <span className="scroll-line" /> SCROLL TO EXPLORE
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-wrap about-layout">
        <div className="section-label">
          <span className="section-number">01</span>
          <span>THE PERSON<br />BEHIND THE WORK</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Digital has many sides.<br />I like bringing them <em>together.</em></h2>
          <div className="about-bottom">
            <p>
              I’m Simran Gupta. My interests span digital marketing, web
              development, design and social media. I enjoy exploring how each
              can work together to create a more considered digital experience.
            </p>
            <a className="round-link" href="#connect" aria-label="Go to contact section">
              <ArrowIcon diagonal />
            </a>
          </div>
        </div>
        <div className="about-aside">
          <span className="aside-star">✳</span>
          <p>Strategy meets creativity.<br />Curiosity connects the dots.</p>
          <span className="aside-tag">SIMRAN GUPTA · DIGITAL</span>
        </div>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section className="expertise-section section-wrap" id="expertise">
      <div className="expertise-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> WHAT I BRING</p>
          <h2>Different skills.<br /><em>One digital mindset.</em></h2>
        </div>
        <p className="expertise-intro">
          A mix of hands-on skills for building, growing and expressing a
          brand online.
        </p>
      </div>
      <div className="specialty-grid">
        {specialties.map((item) => (
          <article className="specialty-card" key={item.number}>
            <div className="specialty-top">
              <span className="specialty-number">{item.number}</span>
              <span className="specialty-icon" aria-hidden="true">{item.icon}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="specialty-description">{item.description}</p>
            <div className="skill-list">
              {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Connect() {
  return (
    <section className="connect-section" id="connect">
      <div className="section-wrap connect-inner">
        <div className="connect-topline">
          <span>HAVE A PROJECT IN MIND?</span>
          <span>LET’S MAKE SOMETHING MEANINGFUL.</span>
        </div>
        <h2>Let’s create your<br /><em>next digital thing.</em></h2>
        <a className="button button-light" href="mailto:simran92297@gmail.com">
          Email me <ArrowIcon diagonal />
        </a>
        <div className="connect-bottom">
          <a className="email-address" href="mailto:simran92297@gmail.com">
            simran92297@gmail.com
          </a>
          <div className="social-links" aria-label="Social profiles">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.name}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.name}: ${link.handle}`}
              >
                {link.name}<ArrowIcon diagonal />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="footer-brand" href="#home">SG<span>.</span></a>
      <p>Designed with curiosity by Simran Gupta.</p>
      <a className="back-to-top" href="#home">BACK TO TOP ↑</a>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Connect />
      </main>
      <Footer />
    </>
  )
}

export default App
