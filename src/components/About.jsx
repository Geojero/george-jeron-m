import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Jayaraj Annapackiam CSI College Of Engineering",
    period: "2021 – 2025",
    grade: "8.4 CGPA",
    highlight: true,
  },
  {
    degree: "HSC – Computer Science",
    institution: "SSN. Govt Higher Secondary School",
    period: "2020 – 2021",
    grade: "89%",
    highlight: false,
  },
  {
    degree: "SSLC",
    institution: "SSN. Govt Higher Secondary School",
    period: "2018 – 2019",
    grade: "88%",
    highlight: false,
  },
];

const facts = [
  { emoji: "📍", label: "Location", value: "Thoothukudi, Tamil Nadu" },
  { emoji: "💼", label: "Status", value: "Open to Work" },
  { emoji: "🎓", label: "Degree", value: "B.E. Computer Science" },
  { emoji: "⚡", label: "Focus", value: "Full-Stack & MERN" },
  { emoji: "🌐", label: "Languages", value: "English, Tamil" },
  { emoji: "🎯", label: "Goal", value: "Impactful Software" },
];

export default function About() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const track = trackRef.current;
      const panels = track.querySelectorAll(".hs-panel");

      // Total horizontal distance to scroll
      const totalScroll = track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: () => `+=${totalScroll + window.innerHeight * 0.5}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, {
        x: () => -totalScroll,
        ease: "none",
      });

      // Stagger reveal for each panel's content
      panels.forEach((panel) => {
        const items = panel.querySelectorAll(".hs-reveal");
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tl,
              start: "left 70%",
              once: true,
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="about" className="hs-outer" ref={outerRef}>


      {/* Horizontal track */}
      <div className="hs-track" ref={trackRef}>
        {/* ── Panel 1: Who I Am ───────────────────────────────── */}
        <div className="hs-panel hs-panel--intro">
          <div className="hs-panel-inner">
            <div className="hs-panel-number hs-reveal">01</div>
            <h2 className="hs-panel-title hs-reveal">
              Who I <span>Am</span>
            </h2>
            <div className="section-divider hs-reveal" style={{ marginBottom: "2rem" }} />

            <div className="hs-bio-block hs-reveal">
              <p className="hs-bio-text">
                Hi! I'm <strong>George Jeron M</strong> — a Computer Science Engineering graduate
                with strong fundamentals in programming, data structures, and full-stack
                development.
              </p>
              <p className="hs-bio-text">
                I enjoy building responsive user interfaces with <em>React.js</em> and integrating
                backend services using <em>Node.js</em> and <em>Express</em>. I have hands-on
                experience through internships in the MERN stack and a passion for delivering
                efficient, reliable software.
              </p>

            </div>

            <div className="hs-facts-mini hs-reveal">
              {facts.map((f) => (
                <div key={f.label} className="hs-fact-chip">
                  <span className="hs-fact-emoji">{f.emoji}</span>
                  <div>
                    <div className="hs-fact-label">{f.label}</div>
                    <div className="hs-fact-value">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Avatar card */}
          <div className="hs-avatar-card hs-reveal">
            <div className="hs-avatar-glow" />
            <div className="hs-avatar-ring">
              <div className="hs-avatar-initials">
                <img src="/logo_gj.png" alt="Logo" style={{ width: "60px", height: "auto" }} />
              </div>
            </div>
            <div className="hs-avatar-name">GEORGE JERON M</div>
            <div className="hs-avatar-role">Full-Stack Developer</div>
            <div className="hs-avatar-badge">
              <span className="hs-badge-dot" />
              Open to Work
            </div>

            {/* Stats */}
            <div className="hs-avatar-stats">
              <div className="hs-stat">
                <span className="hs-stat-num">4+</span>
                <span className="hs-stat-lbl">Companies</span>
              </div>
              <div className="hs-stat">
                <span className="hs-stat-num">20+</span>
                <span className="hs-stat-lbl">Projects</span>
              </div>
              <div className="hs-stat">
                <span className="hs-stat-num">100+</span>
                <span className="hs-stat-lbl">DSA Problems</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Panel 2: Education ──────────────────────────────── */}
        <div className="hs-panel hs-panel--education">
          <div className="hs-panel-inner" style={{ maxWidth: '1000px', width: '100%' }}>
            <div className="hs-panel-number hs-reveal">02</div>
            <h2 className="hs-panel-title hs-reveal">
              My <span>Education</span>
            </h2>
            <div className="section-divider hs-reveal" style={{ marginBottom: "2.5rem" }} />

            <div className="hs-edu-layout">
              <div className="hs-edu-stack">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={`hs-edu-card hs-reveal ${edu.highlight ? "hs-edu-card--highlight" : ""}`}
                  >
                    <div className="hs-edu-icon">🎓</div>
                    <div className="hs-edu-info">
                      <div className="hs-edu-degree">{edu.degree}</div>
                      <div className="hs-edu-inst">{edu.institution}</div>
                      <div className="hs-edu-meta">
                        <span>{edu.period}</span>
                        <span className="hs-edu-grade">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="hs-achievements hs-reveal" style={{ height: 'fit-content' }}>
                <div className="hs-ach-title">Highlights</div>
                <div className="hs-ach-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: "🏆", text: "Naan Muthalvan Ambassador " },
                    { icon: "🥈", text: "CSI Chapter Secretary" },
                    { icon: "⚡", text: "300+ DSA problems solved across platforms" },
                    { icon: "🌐", text: "Open-source UI component contributor" },
                    { icon: "📜", text: "HackerRank 5★ Problem Solving Badge" },
                    { icon: "🏆", text: "10+ Events Organized sucessfully (hackathon, workshop and etc..)" },

                  ].map((a, i) => (
                    <div key={i} className="hs-ach-item">
                      <span className="hs-ach-icon">{a.icon}</span>
                      <span>{a.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Panel 3: Personal / Fun ─────────────────────────── */}
        <div className="hs-panel hs-panel--personal">
          <div className="hs-panel-inner" style={{ maxWidth: '1200px', width: '100%' }}>
            <div className="hs-panel-number hs-reveal">03</div>
            <h2 className="hs-panel-title hs-reveal">
              Beyond <span>SYNTAX</span>
            </h2>
            <div className="section-divider hs-reveal" style={{ marginBottom: "2.5rem" }} />

            <div className="hs-personal-layout">
              <div className="hs-interests hs-reveal">
                {[
                  { icon: "🧩", title: "Problem Solver", desc: "Love tackling algorithmic challenges and brain teasers" },
                  { icon: "🎨", title: "UI Enthusiast", desc: "Obsessed with clean, purposeful interface design" },
                  { icon: "📚", title: "Continuous Learner", desc: "Always exploring new frameworks and tech trends" },
                  { icon: "🤝", title: "Team Player", desc: "Believe great software is built collaboratively" },
                  { icon: "🌍", title: "Open Source", desc: "Contributing to the community one PR at a time" },
                  { icon: "☕", title: "Coffee-Driven", desc: "Best ideas happen over a strong cup of filter coffee" },
                ].map((item) => (
                  <div key={item.title} className="hs-interest-card">
                    <div className="hs-interest-icon">{item.icon}</div>
                    <div className="hs-interest-title">{item.title}</div>
                    <div className="hs-interest-desc">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="hs-cta-block hs-reveal" style={{ height: 'fit-content' }}>
                <p className="hs-cta-text">
                  Ready to build something <span>amazing</span> together?
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a href="#contact" className="btn-primary">Let's Talk →</a>
                  <a href="#projects" className="btn-outline">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}

    </section>
  );
}
