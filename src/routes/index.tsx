import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import headerLogo from "../assets/wix-header-logo.png";
import footerLogo from "../assets/wix-logo.png";
import scene from "../assets/wix-livingroom.jpg";
import portrait from "../assets/wix-portrait.jpg";
import anahataImg from "@/assets/icons/anahata.png"
import lotusImg from "@/assets/icons/lotus-1.png"
import shellImg from "@/assets/icons/shell-1.png"
import { dashboardUrl } from "@/lib/editor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aether Jyotish | Vedic Astrology" },
      {
        name: "description",
        content:
          "Acharya Vedant Sharma offers personalized Vedic astrology consultations for career, marriage, health, and spiritual guidance.",
      },
      { property: "og:title", content: "Aether Jyotish | Vedic Astrology" },
      {
        property: "og:description",
        content:
          "Ancient Vedic wisdom for modern life — discover your cosmic path through personalized astrology consultations.",
      },
    ],
  }),
  component: Index,
});

const WIX_LINKS = [
  { label: "Home", href: "#top", current: true },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const env =
  typeof process !== "undefined" && typeof process.env === "object" ? process.env : {};
const SUPERTALKS_URL = env.BUN_PUBLIC_SUPERTALKS_URL ?? "http://fake_supertalks.com";

function MenuIcon() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M180 138.25V151H20v-12.75h160z" />
      <path d="M180 49v12.75H20V49h160z" />
      <path d="M180 93.625v12.75H20v-12.75h160z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="20" aria-hidden="true">
      <path d="M40 100h120" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="34" height="44" viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 1 C35 12 36 27 26 42 C32 32 34 18 20 1 Z" />
      <path d="M20 1 C10 12 4 26 10 38 C3 26 6 12 20 1 Z" />
    </svg>
  );
}

function BloomIcon() {
  return (
    <svg width="44" height="34" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="18" cy="20" rx="17" ry="14" />
      <ellipse cx="32" cy="20" rx="17" ry="14" />
    </svg>
  );
}

function TeardropIcon() {
  return (
    <svg width="36" height="40" viewBox="0 0 40 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 1 C31 16 38 26 38 31 C38 38 31 43 20 43 C9 43 2 38 2 31 C2 26 9 16 20 1 Z" />
    </svg>
  );
}

function Quote(props: { children: React.ReactNode }) {
  return (
    <blockquote>
      <p>{props.children}</p>
    </blockquote>
  );
}

function Section(props: { children: React.ReactNode; cls: string; id?: string }) {
  return (
    <section id={props.id} className={props.cls}>
      {props.children}
    </section>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      id="top"
      className="wx-page"
      style={
        {
          "--site-maroon": "#771609",
          "--site-pink": "#FFF4F0",
          "--site-white": "#FFFCF8",
          "--site-dark": "#253039",
        } as React.CSSProperties
      }
    >
      {/* ---------------- Hero + header ---------------- */}
      <Section cls="wx-hero">
        <header className="wx-header">
          <a href="#top" aria-label="Home">
            <img src={headerLogo} alt="Aether Jyotish" width={179} height={39} />
          </a>
          <div className="wx-header-actions">
            <a className="wx-header-dash" href={dashboardUrl("/dashboard")}>
              My Dashboard
            </a>
            {/* <button
              type="button"
              className="wx-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </button> */}
          </div>
        </header>

        <div className="wx-hero-copy">
          <h2>
            Discover
            <br />
            Your Cosmic Path
          </h2>
          <p className="wx-hero-sub">Ancient Vedic Wisdom for Modern Life</p>
          <div className="wx-hero-buttons">
            <a className="wx-btn wx-btn-primary" href="#book">
              Book Your Consultation
            </a>
            <a className="wx-btn wx-btn-outline" href={dashboardUrl("/dashboard")}>
              My Dashboard
            </a>
          </div>
        </div>

        <div className="wx-hero-media">
          <img
            src={portrait}
            alt="Acharya Vedant Sharma in a traditional astrology consultation room"
            width={720}
            height={694}
          />
        </div>
      </Section>

      {/* ---------------- Words of Wisdom ---------------- */}
      <Section cls="wx-words" id="words">
        <h3 className="wx-eyebrow">A Thought to Reflect Upon</h3>
        <Quote>
          The planets do not dictate your destiny; they illuminate the possibilities within it. Through the timeless
          wisdom of Vedic astrology, discover your strengths, understand your challenges, and walk your life&apos;s
          journey with clarity and confidence.
        </Quote>
      </Section>

      {/* ---------------- About the astrologer ---------------- */}
      <Section cls="wx-about" id="about">
        <h2>Meet Your Astrologer</h2>
        <p className="wx-body">
          Acharya Vedant Sharma is a fictional Vedic astrology practitioner with over 15 years of experience studying
          Jyotish Shastra. His approach combines traditional astrological principles with thoughtful, practical
          guidance. Specializing in birth chart analysis, planetary periods, career predictions, marriage compatibility,
          and spiritual growth, he aims to make ancient astrological knowledge accessible to modern individuals. Every
          consultation is approached with care, confidentiality, and a genuine commitment to helping people find
          clarity.
        </p>
        <a className="wx-btn wx-btn-outline" href="#about">
          Discover My Journey
        </a>
      </Section>

      {/* ---------------- Consultation room image band ---------------- */}
      <Section cls="wx-scene" aria-hidden="true">
        <img
          src={scene}
          alt="Peaceful traditional Vedic astrology consultation space with warm lighting and spiritual decor"
          width={1440}
          height={900}
        />
      </Section>

      {/* ---------------- Services ---------------- */}
      <Section cls="wx-services" id="services">
        <div className="wx-services-grid">
          <div>
            <h2>Explore My Astrology Services</h2>
          </div>
          <article>
            <span className="wx-rule" />
            <h3>Complete Kundli Analysis</h3>
            <p>
              Explore your birth chart, planetary placements, houses, yogas, doshas, strengths, and important life
              patterns through a personalized Vedic astrology reading.
            </p>
          </article>
          <article>
            <span className="wx-rule" />
            <h3>Career &amp; Financial Guidance</h3>
            <p>
              Understand your professional potential, career opportunities, business prospects, financial patterns, and
              favorable planetary periods.
            </p>
          </article>
          <article>
            <span className="wx-rule" />
            <h3>Marriage &amp; Relationship Analysis</h3>
            <p>
              Explore marriage prospects, compatibility, relationship patterns, Manglik Dosha, and important planetary
              influences affecting your married life.
            </p>
          </article>
          <article>
            <span className="wx-rule" />
            <h3>Prashna Kundli</h3>
            <p>
              Receive traditional Prashna-based astrological guidance for a specific question or important decision in
              your life.
            </p>
          </article>
          <article>
            <span className="wx-rule" />
            <h3>Gemstone Consultation</h3>
            <p>
              Explore traditional gemstone recommendations based on your birth chart, planetary placements, and
              individual astrological considerations.
            </p>
          </article>
          <article>
            <span className="wx-rule" />
            <h3>Annual Horoscope Reading</h3>
            <p>
              Understand the major planetary transits, opportunities, challenges, and themes that may influence your
              upcoming year.
            </p>
          </article>
        </div>
      </Section>

      {/* ---------------- My Approach ---------------- */}
      <Section cls="wx-approach" id="approach">
        <h2>A Thoughtful Approach to Vedic Astrology</h2>
        <div className="wx-approach-list">
          <div className="wx-approach-row">
            {/* <LeafIcon /> */}
            <img
              src={anahataImg}
              alt=""
              width={100}
              height={100}
            />
            <h3>Traditional Wisdom</h3>
            <p>
              Rooted in classical Vedic astrology, every reading considers planetary positions, houses, nakshatras,
              dashas, and transits.
            </p>
          </div>
          <div className="wx-approach-row">
            {/* <BloomIcon /> */}
            <img
              src={lotusImg}
              alt=""
              width={100}
              height={100}
            />
            <h3>Personalized Guidance</h3>
            <p>
              Every birth chart is unique. Consultations are tailored to your individual circumstances, questions, and
              life goals.
            </p>
          </div>
          <div className="wx-approach-row">
            {/* <TeardropIcon /> */}
            <img
              src={shellImg}
              alt=""
              width={100}
              height={100}
            />
            <h3>Clarity Over Fear</h3>
            <p>
              Astrology should empower rather than create fear. Understand potential challenges through a balanced and
              thoughtful perspective.
            </p>
          </div>
          <div className="wx-approach-row">
            <img
              src={anahataImg}
              alt=""
              width={100}
              height={100}
            />
            <h3>Practical Understanding</h3>
            <p>
              Complex astrological concepts are explained in simple language so you can make informed personal
              decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------- Client Feedback ---------------- */}
      <Section cls="wx-feedback" id="feedback">
        <h2>Experiences Shared by Clients</h2>
        <div className="wx-feedback-grid">
          <div className="wx-feedback-card">
            <Quote>
              &ldquo;The consultation was incredibly detailed. Acharya Vedant explained my birth chart in a way that was
              easy to understand. I appreciated the balanced and practical approach.&rdquo;
            </Quote>
            <cite>Ananya Mehta</cite>
          </div>
          <div className="wx-feedback-card">
            <Quote>
              &ldquo;I wanted clarity regarding my professional direction. The session helped me understand the
              astrological concepts involved and reflect on my next steps.&rdquo;
            </Quote>
            <cite>Rohan Desai</cite>
          </div>
          <div className="wx-feedback-card">
            <Quote>
              &ldquo;A very thoughtful consultation. Everything was explained patiently, and I especially appreciated
              the emphasis on understanding rather than fear.&rdquo;
            </Quote>
            <cite>Kavya Shah</cite>
          </div>
          <div className="wx-feedback-card" style={{ gridColumn: "1 / -1", marginTop: 40 }}>
            <Quote>
              &ldquo;The marriage compatibility discussion was informative and comprehensive. The entire experience felt
              professional and welcoming.&rdquo;
            </Quote>
            <cite>Arjun Malhotra</cite>
          </div>
        </div>
      </Section>

      {/* ---------------- FAQ ---------------- */}
      <Section cls="wx-faq" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="wx-faq-grid">
          <div className="wx-faq-row">
            <h3>What information is required for a consultation?</h3>
            <p>
              You will generally need your date of birth, exact time of birth, and place of birth. These details help
              prepare your Vedic birth chart.
            </p>
          </div>
          {/*<div className="wx-faq-row">
            <h3>Do I need to know my exact birth time?</h3>
            <p>
              An accurate birth time is helpful for calculating the ascendant and house placements. If you do not know
              your exact birth time, mention this before your consultation.
            </p>
          </div>*/}
          <div className="wx-faq-row">
            <h3>What types of astrology consultations are available?</h3>
            <p>
              Services include Kundli analysis, career guidance, marriage compatibility, Prashna Kundli, gemstone
              consultations, and annual horoscope readings.
            </p>
          </div>
          <div className="wx-faq-row">
            <h3>How can I book a consultation?</h3>
            <p>
              Browse the available services, select your preferred consultation, choose an available date and time, and
              complete the booking process.
            </p>
          </div>
          {/*<div className="wx-faq-row">
            <h3>Can I ask a specific question without booking a call?</h3>
            <p>
              Yes. You can select the Ask a Question service, choose a relevant topic, submit your question, and receive
              a written response.
            </p>
          </div>*/}
          <div className="wx-faq-row">
            <h3>Are consultations confidential?</h3>
            <p>
              Yes. Personal birth details and consultation discussions are treated as private information and should
              only be used for providing the requested service.
            </p>
          </div>
          {/*<div className="wx-faq-row">
            <h3>Are gemstone recommendations compulsory?</h3>
            <p>
              No. Gemstones are optional traditional recommendations. No purchase is required to receive an astrology
              consultation.
            </p>
          </div>*/}
          {/*<div className="wx-faq-row">
            <h3>Does astrology guarantee future events?</h3>
            <p>
              Astrology offers traditional interpretations and perspectives, not guaranteed outcomes. Personal choices,
              circumstances, and actions remain important.
            </p>
          </div>*/}
        </div>
      </Section>

      {/* ---------------- Footer ---------------- */}
      <footer className="wx-footer" id="contact">
        <div className="wx-footer-inner">
          <a className="wx-footer-logo" href="#top" aria-label="Aether Jyotish home">
          <img src={footerLogo} alt="Aether Jyotish" width={158} height={40} />
        </a>
        <div className="wx-footer-col">
          <a href="tel:+919000012345">+91 90000 12345</a>
          <a className="is-underline" href="mailto:hello@example.com">
            hello@example.com
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=12,+Celestial+Avenue,+Navrangpura,+Ahmedabad,+Gujarat,+India"
            target="_blank"
            rel="noreferrer noopener"
          >
            12, Celestial Avenue, Navrangpura, Ahmedabad, Gujarat, India
          </a>
        </div>
        <div className="wx-footer-col">
          <a href="#privacy">Privacy Policy</a>
          <a href="#accessibility">Accessibility Statement</a>
        </div>
        </div>
        <div className="wx-footer-bottom">
          <p className="wx-copyright">
            <a className="is-underline" href={SUPERTALKS_URL} target="_blank" rel="noreferrer noopener">
               © 2027 by Aether Jyotish. Powered and secured by Supertalks
            </a>
          </p>
        </div>
      </footer>

      {/* ---------------- Menu overlay ---------------- */}
      {menuOpen ? (
        <>
          <div className="wx-menu-backdrop" onClick={() => setMenuOpen(false)} />
          <div className="wx-menu-panel" role="dialog" aria-modal="true" aria-label="Main navigation">
            <div className="wx-menu-panel-inner">
              <button
                type="button"
                className="wx-menu-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
              >
                <CloseIcon />
              </button>
              <nav className="wx-menu-links">
                {WIX_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={link.current ? "is-current" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </>
      ) : null}
    </main>
  );
}
