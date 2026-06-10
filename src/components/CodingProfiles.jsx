import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const profiles = [
  {
    icon: "🧠",
    name: "LeetCode",
    handle: "@",
    url: "#",
    stats: [{ number: "100+", label: "Problems Solved" }],
    description:
      "Consistent practice on algorithm and data structure problems.",
    iconBg: "#FFA116",
  },
  {
    icon: "🐙",
    name: "GitHub",
    handle: "@",
    url: "#",
    stats: [
      { number: "20+", label: "Repositories" },
      { number: "500+", label: "Commits" },
    ],
    description:
      "Open source projects and personal repositories showcasing MERN projects.",
    iconBg: "#333",
  },
  {
    icon: "⚡",
    name: "SkillRack",
    handle: "@",
    url: "#",
    stats: [{ number: "100+", label: "Programs Solved" }],
    description: "Competitive programming practice and challenge solving.",
    iconBg: "#f4a141",
  },
];

export default function CodingProfiles() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      const cards = cardsRef.current.querySelectorAll(".coding-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="profiles" className="section coding-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef} style={{ opacity: 0 }}>
          <span className="section-label">Coding Profiles</span>
          <h2 className="section-title">
            Competitive <span>Programming</span>
          </h2>
          <div className="section-divider" />
          <p
            style={{
              marginTop: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Sharpening problem-solving skills through consistent practice on
            multiple competitive programming platforms.
          </p>
        </div>

        <div className="coding-grid" ref={cardsRef}>
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="coding-card"
              style={{ opacity: 0 }}
            >
              <div className="coding-card-header">
                <div
                  className="coding-icon"
                  style={{ background: profile.iconBg, border: "none" }}
                >
                  {profile.icon}
                </div>
                <div>
                  <div className="coding-card-name">{profile.name}</div>
                  <div className="coding-card-handle">{profile.handle}</div>
                </div>
              </div>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                }}
              >
                {profile.description}
              </p>

              <div className="coding-stats">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="coding-stat">
                    <span className="coding-stat-number">{stat.number}</span>
                    <span className="coding-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
