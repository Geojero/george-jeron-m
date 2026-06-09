import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    emoji: "🔁",
    title: "Smart Sync – Urban Complaint Management System",
    description:
      "Platform for inter-departmental complaint management with authentication, Twilio OTP verification, file uploads, and status tracking.",
    tags: ["Node.js", "Express", "MongoDB", "Twilio"],
    github: null,
    live: null,
    color: "#00f0ff",
  },
  {
    emoji: "🛍️",
    title: "E-Commerce Web Application",
    description:
      "Complete e-commerce platform (MERN) with authentication, admin dashboard, product management, cart and order flow.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: null,
    live: null,
    color: "#41f4d6",
  },
  {
    emoji: "🗳️",
    title: "Voting Application for Student Council",
    description:
      "Full voting platform used in real elections with secure voting logic and session-based controls to prevent duplicate votes.",
    tags: ["JavaScript", "PHP"],
    github: null,
    live: null,
    color: "#f441b4",
  },
  {
    emoji: "📚",
    title: "Library Management System with Alerts",
    description:
      "System to manage issue/return operations with SMS alerts for due dates (Twilio integration).",
    tags: ["PHP", "JavaScript", "Twilio"],
    github: null,
    live: null,
    color: "#f4a141",
  },
  {
    emoji: "🧩",
    title: "FlexUI – React Component Registry (Open Source)",
    description:
      "150+ reusable UI components for React and shadcn/ui, supports Next.js and Vite. One-command install and demo site.",
    tags: ["React", "shadcn/ui", "Vite", "Next.js"],
    github: null,
    live: "https://flex-ui-wine.vercel.app",
    color: "#ffd166",
  },
];

export default function Projects() {
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

      const cards = cardsRef.current.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    // 3D tilt on hover
    const cards = document.querySelectorAll(".project-card");
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    };
    const handleMouseLeave = (card) => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
      card.addEventListener("mouseleave", () => handleMouseLeave(card));
    });

    return () => {
      ctx.revert();
      cards.forEach((card) => {
        card.removeEventListener("mousemove", (e) => handleMouseMove(e, card));
        card.removeEventListener("mouseleave", () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef} style={{ opacity: 0 }}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Featured <span>Work</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid" ref={cardsRef}>
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
              style={{ opacity: 0 }}
            >
              {/* Image area */}
              <div
                className="project-card-image"
                style={{
                  background: `linear-gradient(135deg, rgba(${project.color === "#00f0ff" ? "0,240,255" : project.color === "#41f4d6" ? "65,244,214" : project.color === "#f441b4" ? "244,65,180" : "244,161,65"},0.08) 0%, rgba(255,255,255,0.02) 100%)`,
                }}
              >
                <span
                  className="project-card-image-placeholder"
                  style={{ fontSize: "5rem" }}
                >
                  {project.emoji}
                </span>
                <div className="project-card-overlay">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ fontSize: "0.75rem", padding: "0.5rem 1rem" }}
                    >
                      <GithubIcon /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ fontSize: "0.75rem", padding: "0.5rem 1rem" }}
                    >
                      <ExternalLinkIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="project-card-body">
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <GithubIcon /> View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLinkIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
