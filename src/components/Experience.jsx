import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Experience data ─────────────────────────────────────────── */
const experience = [
  {
    title: "PRESENT",
    role: "System Engineer",
    company: "Tata Consultancy Services",
    period: "JUN 2026 – PRESENT",
    type: "Full Time",
    desc: "Contributing to the development and maintenance of full-stack web applications using modern technologies. Working with cross-functional teams to deliver scalable, production-ready software solutions.",
    skills: ["MERN Stack", "Next.js", "TypeScript", "TailwindCSS", "FastAPI", "GenAI", "PostgreSQL", "MySQL", "Docker", "Github Actions", "JWT Auth", "RESTful APIs", "CI/CD Pipelines"],
  },
  {
    title: "JUN 2025",
    role: "Full Stack Developer",
    company: "10X Scale.ai",
    period: "JUN 2025 – JUN 2026",
    type: "Full Time",
    desc: "Contributed to developing and maintaining full-stack web applications. Built AI-integrated features using modern frameworks and collaborated on architecture decisions for high-performance systems.",
    skills: ["MERN Stack", "Next.js", "TypeScript", "TailwindCSS", "FastAPI", "GenAI", "PostgreSQL", "MySQL", "Docker", "Github Actions"],
  },
  {
    title: "DEC 2024",
    role: "MERN Stack Intern",
    company: "CORIZO",
    period: "DEC 2024 – JAN 2025",
    type: "Internship",
    desc: "Built full-stack features using MongoDB, Express, React and Node.js. Developed RESTful APIs and responsive UI components for real-world client projects with a focus on performance.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
  },
  {
    title: "JUN 2024",
    role: "Web Development Intern",
    company: "ICANio",
    period: "JUN 2024 – JUL 2024",
    type: "Internship",
    desc: "Designed and developed interactive web pages with HTML, CSS, and JavaScript. Collaborated with cross-functional teams to deliver pixel-perfect, accessible UIs on time.",
    skills: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Responsive Design"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const lineTrackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const lineTrack = lineTrackRef.current;

    if (!container || !line || !lineTrack) return;

    /* ── Grow the accent line as user scrolls through the section ── */
    const totalHeight = lineTrack.offsetHeight;
    line.style.height = "0px";

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top 10%",
      end: "bottom 50%",
      scrub: 0.6,
      onUpdate: (self) => {
        const h = Math.round(self.progress * totalHeight);
        line.style.height = h + "px";
      },
    });

    /* ── Fade-in each timeline row ── */
    const rows = container.querySelectorAll(".exp-tl-row");
    rows.forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="experience" className="exp-tl-section" ref={sectionRef}>
      {/* ── Subtle background grid ── */}
      <div className="exp-tl-bg-grid" />

      {/* ── Section header ── */}
      <div className="exp-tl-header">
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        <p className="exp-tl-sub">
          A journey through roles that sharpened my craft and built my perspective.
        </p>
      </div>

      {/* ── Timeline body ── */}
      <div className="exp-tl-container" ref={containerRef}>

        {/* Animated vertical line */}
        <div className="exp-tl-line-track" ref={lineTrackRef}>
          {/* Static faded background line */}
          <div className="exp-tl-line-bg" />
          {/* Animated accent line */}
          <div className="exp-tl-line-accent" ref={lineRef} />
        </div>

        {/* Rows */}
        {experience.map((exp, i) => (
          <div key={i} className="exp-tl-row">

            {/* Left — sticky date / title */}
            <div className="exp-tl-left">
              <div className="exp-tl-node">
                <div className="exp-tl-node-inner" />
              </div>
              <div className="exp-tl-date">{exp.title}</div>
            </div>

            {/* Right — content card */}
            <div className="exp-tl-right">
              {/* Mobile-only date */}
              <div className="exp-tl-date-mobile">{exp.title}</div>

              <div className={`exp-tl-card ${i === 0 ? "glow-active" : ""}`}>
                {/* Card header */}
                <div className="exp-tl-card-head">
                  <div>
                    <span className="exp-tl-type">{exp.type}</span>
                    <h3 className="exp-tl-role">{exp.role}</h3>
                    <div className="exp-tl-company">
                      <span>🏢</span> {exp.company}
                    </div>
                  </div>
                  <div className="exp-tl-period">{exp.period}</div>
                </div>

                {/* Description */}
                <p className="exp-tl-desc">{exp.desc}</p>

                {/* Skill chips */}
                <div className="exp-tl-skills">
                  {exp.skills.map((s) => (
                    <span key={s} className="exp-tl-chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
