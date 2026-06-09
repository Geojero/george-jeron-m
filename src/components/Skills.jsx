import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: "Programming Languages",
    color: "#EF9F27",
    skills: [
      "JavaScript", "TypeScript", "Python", "Dart", "Java", "C",
    ],
  },
  {
    name: "Frontend",
    color: "#5DCAA5",
    skills: [
      "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Material UI",
    ],
  },
  {
    name: "Backend",
    color: "#7F77DD",
    skills: [
      "Node.js", "Express.js", "FastAPI", "Socket.IO", "REST APIs",
    ],
  },
  {
    name: "AI / ML",
    color: "#D85A30",
    skills: [
      "Anthropic Claude", "OpenAI GPT-4", "Pydantic AI",
      "LLM Prompt Engineering", "Ollama", "Robotics", "RAG", "Cerebro",
    ],
  },
  {
    name: "Databases",
    color: "#378ADD",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Typesense"],
  },
  {
    name: "Tools & Platforms",
    color: "#888780",
    skills: [
      "Git", "GitHub", "VS Code", "Figma", "Docker", "Firebase",
      "Twilio", "Postman", "Netlify", "Vercel", "AWS", "Azure", "GCP",
    ],
  },
  {
    name: "Core Concepts",
    color: "#D4537E",
    skills: [
      "Data Structures & Algorithms", "OOP", "DBMS", "System Design",
    ],
  },
  {
    name: "Soft Skills",
    color: "#639922",
    skills: [
      "Problem Solving", "Adaptability", "Team Collaboration", "Quick Learning",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

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

      const chips = sectionRef.current.querySelectorAll(".skill-chip");
      gsap.fromTo(
        chips,
        { opacity: 0, scale: 0.85, y: 16 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
          stagger: 0.02,
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".skills-categories"),
            start: "top 80%",
            once: true,
          },
        },
      );

      // Apply hover effect to all items while scrolling
      chips.forEach((chip) => {
        ScrollTrigger.create({
          trigger: chip,
          start: "top 65%",
          end: "bottom 35%",
          toggleClass: "scroll-active",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-blob" />
      <div className="container skills-container">
        <div className="section-header" ref={headerRef} style={{ opacity: 0 }}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Technical <span>Expertise</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.name} className="skills-category-block">
              <div className="skills-category-header">
                <span
                  className="skills-category-dot"
                  style={{ backgroundColor: category.color }}
                />
                <span className="skills-category-name">{category.name}</span>
                <span className="skills-category-rule" />
              </div>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-chip">
                    <span
                      className="skill-chip-dot"
                      style={{ backgroundColor: category.color }}
                    />
                    {skill}
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