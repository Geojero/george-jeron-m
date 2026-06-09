import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

const contactDetails = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "georgejeron59@gmail.com",
    href: "mailto:georgejeron59@gmail.com",
  },
  {
    icon: <MapPinIcon />,
    label: "Location",
    value: "India",
    href: null,
  },
];

// Add phone and resume as separate contact items
contactDetails.unshift({
  icon: <MailIcon />,
  label: "Phone",
  value: "+91-7604917204",
  href: "tel:+917604917204",
});

const socialLinks = [
  {
    icon: <GithubIcon />,
    label: "GitHub",
    href: "https://github.com/Geojero",
  },
  {
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/george-jeron-m/",
  },
  // {
  //   icon: <TwitterIcon />,
  //   label: "Twitter",
  //   href: "https://x.com/venkatesh6807",
  // },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

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
      gsap.fromTo(
        gridRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const phoneNumber = "917604917208";
    const text = `*New Contact Form Submission*
*Name:* ${form.name}
*Email:* ${form.email}
*Subject:* ${form.subject}

*Message:*
${form.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    // Simulate sending
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef} style={{ opacity: 0 }}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="contact-grid" ref={gridRef} style={{ opacity: 0 }}>
          {/* Left: Info */}
          <div>
            <h3 className="contact-info-title">Let's Work Together</h3>
            <p className="contact-info-desc">
              I'm currently open to new opportunities. Whether you have a
              project in mind, want to collaborate, or just want to say hi — my
              inbox is always open!
            </p>

            <div className="contact-details">
              {contactDetails.map(({ icon, label, value, href }) =>
                href ? (
                  <a key={label} href={href} className="contact-detail-item">
                    <div className="contact-detail-icon">{icon}</div>
                    <div>
                      <div className="contact-detail-label">{label}</div>
                      <div className="contact-detail-value">{value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={label} className="contact-detail-item">
                    <div className="contact-detail-icon">{icon}</div>
                    <div>
                      <div className="contact-detail-label">{label}</div>
                      <div className="contact-detail-value">{value}</div>
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Collaboration"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="form-textarea"
                />
              </div>

              {status === "sent" && (
                <div
                  style={{
                    background: "rgba(0,240,255,0.08)",
                    border: "1px solid rgba(0,240,255,0.26)",
                    borderRadius: "10px",
                    padding: "0.75rem 1rem",
                    color: "var(--accent-color)",
                    fontSize: "0.875rem",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <SendIcon /> Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
