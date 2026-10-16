import { useState } from 'react'
import portrait from './assets/simran-gupta.png'
import './App.css'

const contactEmail = 'simran92297@gmail.com'

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
    title: 'Paid advertising',
    skills: ['Meta Ads', 'Google Ads', 'Campaign setup', 'Ad optimization'],
    description:
      'Plan, launch and optimize Meta and Google ad campaigns to reach the right audience and support business goals.',
    icon: '✳',
  },
  {
    number: '02',
    title: 'SEO & organic growth',
    skills: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Content SEO'],
    description:
      'Improve search visibility with keyword research, on-page improvements and a considered SEO content strategy.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Web development',
    skills: ['Web development', 'Responsive design', 'Landing pages'],
    description:
      'Create polished, responsive web experiences and landing pages that give brands a stronger online presence.',
    icon: '⌘',
  },
  {
    number: '04',
    title: 'Creative, social & AI',
    skills: ['Canva design', 'Social media', 'AI tools'],
    description:
      'Bring brand stories to life with social content, Canva design and practical AI-assisted creative workflows.',
    icon: '◈',
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
        <a className="nav-contact" href={`mailto:${contactEmail}`}>
          Let’s talk <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-card card-main">
        <img className="visual-portrait" src={portrait} alt="Simran Gupta, digital marketing and creative professional" />
        <div className="visual-card-caption">
          <span><small>DIGITAL MARKETING · SEO · WEB</small>Ideas into impact</span>
          <span className="caption-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
      <div className="floating-chip chip-ads">
        <span className="chip-icon chip-icon-lime">↗</span>
        <span><small>PAID CAMPAIGNS</small>Meta & Google Ads</span>
      </div>
      <div className="floating-chip chip-design">
        <span className="chip-icon chip-icon-lilac">⌕</span>
        <span><small>ORGANIC GROWTH</small>SEO strategy</span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> ADS · SEO · WEB · CREATIVE</p>
        <h1>
          Making digital
          <span className="headline-second">feel <em>different.</em></span>
        </h1>
        <p className="hero-description">
          Hi, I’m Simran — I bring together Meta and Google Ads, SEO, web
          development and creative thinking to grow brands online.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#expertise">
            Explore what I do <ArrowIcon />
          </a>
          <a className="text-link" href={`mailto:${contactEmail}`}>
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
              I’m Simran Gupta, a digital marketing and creative professional
              working across Meta Ads, Google Ads, SEO, web development, Canva
              design, social media and AI tools. I bring these skills together
              to help brands build a thoughtful, consistent online presence.
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
          From launching paid campaigns and improving search visibility to
          building websites and creating content, everything works together
          to move your brand forward.
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
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone') || 'Not provided'
    const service = formData.get('service')
    const message = formData.get('message')
    const subject = `Portfolio enquiry from ${name}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interested in: ${service}`,
      '',
      'Project details:',
      message,
    ].join('\n')

    setFormStatus('Your email app should open with your details ready. Review and send the email to connect.')
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="connect-section" id="connect">
      <div className="section-wrap">
        <div className="connect-topline">
          <span>HAVE A PROJECT IN MIND?</span>
          <span>LET’S MAKE SOMETHING MEANINGFUL.</span>
        </div>
        <div className="connect-content">
          <div className="connect-copy">
            <h2>Let’s create your<br /><em>next digital thing.</em></h2>
            <p>Tell me a little about yourself and what you’re looking for. I’ll be in touch to talk through your project.</p>
            <p className="connect-email-note">
              Prefer email? <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-fields">
              <label className="form-field">
                <span>Your name</span>
                <input autoComplete="name" name="name" placeholder="Jane Smith" required />
              </label>
              <label className="form-field">
                <span>Email address</span>
                <input autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label className="form-field">
                <span>Phone number <small>optional</small></span>
                <input autoComplete="tel" name="phone" type="tel" placeholder="+91 98765 43210" />
              </label>
              <label className="form-field">
                <span>What can I help with?</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option>Meta Ads or Google Ads</option>
                  <option>SEO and organic growth</option>
                  <option>Website development</option>
                  <option>Social media or Canva design</option>
                  <option>AI tools</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="form-field form-field-message">
                <span>A little about your project</span>
                <textarea name="message" placeholder="What are you hoping to create?" rows="3" required />
              </label>
            </div>
            <button className="button button-form" type="submit">
              Send project details <ArrowIcon diagonal />
            </button>
            <p className="form-privacy">
              This form prepares an email on your device. Your details aren’t stored here, and nothing is sent until you send the email.
            </p>
            <p className="form-status" aria-live="polite">{formStatus}</p>
          </form>
        </div>
        <div className="connect-bottom">
          <a className="email-address" href={`mailto:${contactEmail}`}>
            {contactEmail}
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
