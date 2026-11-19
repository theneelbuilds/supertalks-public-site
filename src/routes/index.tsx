import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import headerLogo from "../assets/wix-header-logo.png";
import footerLogo from "../assets/wix-logo.png";
import solar_system from "../assets/solar_system.jpg";
import astrologer from "../assets/astrologer-test.jpeg";
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

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function dateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function upcomingDays(count: number): { key: string; label: string }[] {
  const now = new Date();
  const days: { key: string; label: string }[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    days.push({
      key: dateKey(d),
      label: d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric" }),
    });
  }
  return days;
}

const BOOKING_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

type QuestionTopic = {
  title: string;
  description: string;
  questions: string[];
};

const QUESTION_TOPICS: QuestionTopic[] = [
  {
    title: "My Career",
    description: "Questions regarding my career, job, business and financial stability.",
    questions: [
      "Which field will I be successful in?",
      "When will I succeed in my career?",
      "What is the scope of my career and when can I expect a good opportunity?",
      "What is better for me: Government Job, Private Job or Business?",
      "Which career field is good for me and which should I avoid?",
      "How will my current job be and what is its future scope?",
      "What will be the major turning point in my life?",
      "Which single gemstone is suitable for my overall problems?",
      "When will I get a job?",
      "Which careers can bring financial stability for me?",
    ],
  },
  {
    title: "About My Marriage",
    description: "Questions regarding your future spouse and married life.",
    questions: [
      "How will his/her nature be?",
      "How will his/her looks be?",
      "What will his/her profession be?",
      "What type of marriage will I have: Love or Arranged?",
      "Will it be inter-caste or same caste?",
      "Will I marry a friend or an unknown person?",
      "Which direction is favorable for my marriage?",
      "When will I get married? Give the year and estimated months.",
      "Is Kumbh Vivah necessary for me or not?",
      "Is there Manglik Dosha in my horoscope?",
      "What is one gemstone, mantra or remedy for my overall problems?",
      "How will my married life be?",
    ],
  },
  {
    title: "My Health",
    description: "Questions regarding health, wellness and self-care.",
    questions: [
      "Which areas of my body need extra care?",
      "Do I recover quickly from illness?",
      "What kind of daily routine suits me best?",
      "When should I focus more on self-care?",
      "Is this a good time to start a healthy routine?",
    ],
  },
];

function BookingSection() {
  const days = useMemo(() => upcomingDays(28), []);
  const weekSize = 7;
  const maxWeekOffset = Math.max(0, Math.ceil(days.length / weekSize) - 1);
  const [weekOffset, setWeekOffset] = useState(0);
  const [date, setDate] = useState(() => dateKey(new Date()));
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const weekDays = days.slice(weekOffset * weekSize, weekOffset * weekSize + weekSize);
  const dateLabel = days.find((day) => day.key === date)?.label ?? "the selected day";

  const goToWeek = (next: number) => {
    const clamped = Math.max(0, Math.min(maxWeekOffset, next));
    setWeekOffset(clamped);
    const shown = days.slice(clamped * weekSize, clamped * weekSize + weekSize);
    if (!shown.some((day) => day.key === date) && shown[0]) {
      setDate(shown[0].key);
      setSelectedSlot(null);
    }
  };

  return (
    <Section cls="wx-book" id="book">
      <div className="wx-book-head">
        <h2>Book a Consultation</h2>
        <p>Choose a convenient day and time for your personalized astrology consultation.</p>
      </div>
      <div id="slot-picker" className="wx-book-week scroll-mt-24">
        <button
          type="button"
          className="wx-book-week-nav"
          aria-label="Previous week"
          disabled={weekOffset === 0}
          onClick={() => goToWeek(weekOffset - 1)}
        >
          <ArrowLeftIcon />
        </button>
        <div className="wx-book-days">
          {weekDays.map((day) => (
            <button
              key={day.key}
              type="button"
              className={day.key === date ? "is-active" : ""}
              onClick={() => {
                setDate(day.key);
                setSelectedSlot(null);
              }}
            >
              {day.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="wx-book-week-nav"
          aria-label="Next week"
          disabled={weekOffset >= maxWeekOffset}
          onClick={() => goToWeek(weekOffset + 1)}
        >
          <ArrowRightIcon />
        </button>
      </div>
      <div className="wx-book-slots">
        <p className="wx-book-note">Available times on {dateLabel}</p>
        <div className="wx-slot-grid">
          {BOOKING_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              className={`wx-slot${selectedSlot === slot ? " is-active" : ""}`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
        {selectedSlot ? (
          <p className="wx-book-ok">
            {selectedSlot} on {dateLabel} selected. Sign in to confirm your booking.
          </p>
        ) : null}
      </div>
      <p className="wx-book-note">
        Sign in (or create a free account) to book a slot.
        <span className="wx-auth-btns">
          <a className="wx-auth-btn" href={dashboardUrl("/dashboard")}>
            Sign in
          </a>
          <a className="wx-auth-btn wx-auth-btn-solid" href={dashboardUrl("/dashboard")}>
            Create Account
          </a>
        </span>
      </p>
    </Section>
  );
}

function QuestionSection() {
  const [categoryIndex, setCategoryIndex] = useState<number | null>(null);
  const [picked, setPicked] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [clientDetails, setClientDetails] = useState({
    clientName: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
  });

  const setDetail = (key: keyof typeof clientDetails, value: string) =>
    setClientDetails((cur) => ({ ...cur, [key]: value }));

  const activeTopic = categoryIndex != null ? QUESTION_TOPICS[categoryIndex] ?? null : null;

  useEffect(() => {
    if (categoryIndex != null) {
      const el = document.getElementById(`questions-${categoryIndex}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [categoryIndex]);

  const isPicked = (question: string, category: string) =>
    picked.includes(`${category}::${question}`);

  const toggleQuestion = (question: string, category: string) => {
    const key = `${category}::${question}`;
    setStatus(null);
    setPicked((cur) =>
      cur.includes(key) ? cur.filter((entry) => entry !== key) : [...cur, key],
    );
  };

  const totalCount = picked.length;
  const detailsComplete =
    clientDetails.clientName.trim().length > 0 &&
    clientDetails.birthDate.length > 0 &&
    clientDetails.birthTime.length > 0 &&
    clientDetails.birthPlace.trim().length > 0;

  return (
    <Section cls="wx-question" id="question">
      <div className="wx-question-head">
        <h2>Ask an Astrologer</h2>
        <p>
          Have a question about your birth chart, career, relationships, or life&apos;s next chapter?
          Send your question and receive personalized guidance.
        </p>
      </div>
      <div className="max-w-4xl w-full">
        <header className="m-8">
          <p className="text-sm font-semibold text-indigo-600 mb-2">STEP 1 OF 2</p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Select Your Question Topic</h3>
          <p className="mt-2 text-gray-500">Choose a topic and select the questions you want answered.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {QUESTION_TOPICS.map((topic, index) => {
            const isCategorySelected = categoryIndex === index;
            return (
              <button
                key={`${topic.title}-${index}`}
                type="button"
                onClick={() => setCategoryIndex(index)}
                className={`text-left rounded-2xl border-2 p-5 transition-all duration-200 ${
                  isCategorySelected
                    ? "border-indigo-600 bg-indigo-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{topic.title}</h4>
                    {topic.description ? (
                      <p className="mt-2 text-sm text-gray-500">{topic.description}</p>
                    ) : null}
                  </div>
                  {isCategorySelected && <span className="text-indigo-600 text-xl">✓</span>}
                </div>
                <div className="mt-4 text-sm font-medium text-indigo-600">
                  {topic.questions.length} question{topic.questions.length === 1 ? "" : "s"}
                </div>
              </button>
            );
          })}
        </div>

        {activeTopic ? (
          <div id={`questions-${categoryIndex}`} className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900">{activeTopic.title}</h4>
                <p className="text-sm text-gray-500 mt-1">Select the questions you want to ask.</p>
              </div>
              <div className="text-sm font-semibold text-indigo-600">{totalCount} selected</div>
            </div>

            <div className="space-y-3">
              {activeTopic.questions.map((question, index) => {
                const isQuestionSelected = isPicked(question, activeTopic.title);
                return (
                  <button
                    key={question}
                    type="button"
                    onClick={() => toggleQuestion(question, activeTopic.title)}
                    className={`w-full flex items-start gap-4 text-left p-4 rounded-xl border transition-all ${
                      isQuestionSelected
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${
                        isQuestionSelected
                          ? "bg-indigo-600 border-indigo-600 text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {isQuestionSelected && <span className="text-sm">✓</span>}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-gray-400">QUESTION {index + 1}</span>
                      <p className="mt-1 text-gray-800 font-medium">{question}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-gray-50 border border-dashed border-gray-300 p-8 text-center">
            <div className="text-4xl mb-3">✨</div>
            <h4 className="font-semibold text-gray-800">Choose a topic to continue</h4>
            <p className="text-sm text-gray-500 mt-1">
              Select one of the topics above to pick your questions.
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">
          Can&apos;t find your exact question?{" "}
          <a href="#book" className="font-semibold text-indigo-600 hover:underline">
            Book a slot
          </a>{" "}
          for a personalised consultation.
        </p>

        <div className="mt-8 pt-6 border-t border-gray-200">
          {totalCount > 0 && (
            <div id="birth-details" className="mb-6 scroll-mt-24 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="text-sm font-bold text-gray-900">Your birth details</h4>
              <p className="mt-1 text-xs text-gray-500">
                All fields are required for an accurate reading.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block sm:col-span-2">
                  <span className="block text-sm font-medium text-gray-700">
                    Your name <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    value={clientDetails.clientName}
                    onChange={(e) => setDetail("clientName", e.target.value)}
                    placeholder="Full name"
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">
                    Birth date <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="date"
                    value={clientDetails.birthDate}
                    onChange={(e) => setDetail("birthDate", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:border-indigo-500 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">
                    Birth time <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="time"
                    value={clientDetails.birthTime}
                    onChange={(e) => setDetail("birthTime", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:border-indigo-500 focus:outline-none"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="block text-sm font-medium text-gray-700">
                    Birth place <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    value={clientDetails.birthPlace}
                    onChange={(e) => setDetail("birthPlace", e.target.value)}
                    placeholder="City, country"
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
                  />
                </label>
              </div>
            </div>
          )}
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-500">
              {totalCount > 0
                ? `${totalCount} question${totalCount === 1 ? "" : "s"} selected`
                : "No questions selected"}
            </p>
            <button
              type="button"
              onClick={() => {
                if (!detailsComplete) return;
                setStatus("Your question is ready. Sign in to send it and track replies from your dashboard.");
              }}
              disabled={totalCount === 0 || !detailsComplete}
              className="w-full md:w-auto bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="mr-2">✓</span>
              Ask a Question
            </button>
          </div>
          {status ? <p className="wx-book-ok">{status}</p> : null}
        </div>
      </div>
      <p className="wx-book-note">
        Sign in (or create a free account) to send your question.
        <span className="wx-auth-btns">
          <a className="wx-auth-btn" href={dashboardUrl("/dashboard")}>
            Sign in
          </a>
          <a className="wx-auth-btn wx-auth-btn-solid" href={dashboardUrl("/dashboard")}>
            Create Account
          </a>
        </span>
      </p>
    </Section>
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
            {/*<img src={headerLogo} alt="Aether Jyotish" width={179} height={39} />*/}
            <h1 className="text-xl">
              Aether Jyotish
            </h1>
          </a>
          {/*<div className="wx-header-actions">
            <a className="wx-header-dash" href={dashboardUrl("/dashboard")}>
              My Dashboard
            </a>
             <button
              type="button"
              className="wx-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </button>
          </div>*/}
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
            src={astrologer}
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
          src={solar_system}
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

      {/* ---------------- Book a Session ---------------- */}
      <BookingSection />

      {/* ---------------- Ask a Question ---------------- */}
      <QuestionSection />

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
          {/*<div className="wx-feedback-card" style={{ gridColumn: "1 / -1", marginTop: 40 }}>
            <Quote>
              &ldquo;The marriage compatibility discussion was informative and comprehensive. The entire experience felt
              professional and welcoming.&rdquo;
            </Quote>
            <cite>Arjun Malhotra</cite>
          </div>*/}
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
            {/*<img src={footerLogo} alt="Aether Jyotish" width={158} height={40} />*/}
            Aether Jyotish
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
