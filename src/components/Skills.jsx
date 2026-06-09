import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "🟨" },
      { name: "Python", icon: "🐍" },
      { name: "C", icon: "🔣" },
      { name: "Dart", icon: "🔣" },
      { name: "Java", icon: "🔣" },
      { name: "TypeScript", icon: "🟨" },

    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "⚛️" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Material UI", icon: "🧩" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "Fast API", icon: "🔵" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐬" },
      { name: "Typesense", icon: "🔣" },
      { name: "MySQL", icon: "🐬" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "🖥️" },
      { name: "Firebase", icon: "🔥" },
      { name: "Postman", icon: "🔣" },
      { name: "Docker", icon: "🐳" },
      { name: "Netlify", icon: "🔣" },
      { name: "Vercel", icon: "🔣" },
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "☁️" },
      { name: "GCP", icon: "☁️" },
    ],
  },
  {
    name: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", icon: "📚" },
      { name: "OOP", icon: "🧭" },
      { name: "DBMS", icon: "🗄️" },
      { name: "System Design", icon: "📚" },

    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: "🧠" },
      { name: "Adaptability", icon: "🔄" },
      { name: "Team Collaboration", icon: "🤝" },
      { name: "Quick Learning", icon: "⚡" },

    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
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

      // Animate each skill chip with stagger
      const chips = sectionRef.current.querySelectorAll(".skill-chip");
      gsap.fromTo(
        chips,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.03,
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".skills-categories"),
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef} style={{ opacity: 0 }}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Technical <span>Expertise</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="skills-category-title">{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span className="skill-chip-icon">{skill.icon}</span>
                    {skill.name}
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
