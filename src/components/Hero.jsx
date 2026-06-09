import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HERO_IMAGES = [
  "/Hero_img/hero_page (1).png",
  "/Hero_img/hero_page (2).png",
  "/Hero_img/hero_page (3).png",
];

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

function ArrowDown() {
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
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

function DownloadIcon() {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function MailIcon() {
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const socialsRef = useRef(null);
  const imageWrapRef = useRef(null);

  // Slideshow state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlickering, setIsFlickering] = useState(false);
  const imgRef = useRef(null);
  const flickerTlRef = useRef(null);

  // Entry animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    )
      .fromTo(
        text1Ref.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.2",
      )
      .fromTo(
        text2Ref.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        socialsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        imageWrapRef.current,
        { opacity: 0, x: 80, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.8",
      );

    return () => tl.kill();
  }, []);

  // Flicker transition effect for image cycling
  const flickerTransition = (nextIdx) => {
    if (!imgRef.current) return;
    if (flickerTlRef.current) flickerTlRef.current.kill();

    setIsFlickering(true);

    // Rapid flicker sequence: quick opacity bursts like a film reel/glitch
    const flickerTl = gsap.timeline({
      onComplete: () => {
        setCurrentIdx(nextIdx);
        setIsFlickering(false);
        // Settle in
        gsap.to(imgRef.current, {
          opacity: 1,
          filter: "brightness(1) contrast(1)",
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    flickerTl
      .to(imgRef.current, { opacity: 0.1, duration: 0.06, ease: "none" })
      .to(imgRef.current, { opacity: 0.8, duration: 0.05, ease: "none" })
      .to(imgRef.current, { opacity: 0.05, duration: 0.07, ease: "none" })
      .to(imgRef.current, { opacity: 0.9, duration: 0.04, ease: "none" })
      .to(imgRef.current, { opacity: 0, duration: 0.08, ease: "none" })
      .call(() => {
        setCurrentIdx(nextIdx);
      })
      .to(imgRef.current, {
        opacity: 0.6,
        filter: "brightness(1.4) contrast(1.2)",
        duration: 0.05,
        ease: "none",
      })
      .to(imgRef.current, {
        opacity: 0.3,
        filter: "brightness(0.8) contrast(0.9)",
        duration: 0.06,
        ease: "none",
      })
      .to(imgRef.current, {
        opacity: 0.9,
        filter: "brightness(1.2) contrast(1.1)",
        duration: 0.05,
        ease: "none",
      });

    flickerTlRef.current = flickerTl;
  };

  // Auto cycle images
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIdx + 1) % HERO_IMAGES.length;
      flickerTransition(next);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIdx]);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="hero-inner hero-inner--split" ref={heroRef}>
        {/* ── LEFT: Text content ── */}
        <div className="hero-content">
          {/* Badge */}
          <div ref={badgeRef} style={{ opacity: 0 }}>
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </span>
          </div>

          {/* Big headline text */}
          <div style={{ marginBottom: "0.5rem" }}>
            <span ref={text1Ref} className="hero-text-1" style={{ opacity: 0 }}>
              GEORGE
            </span>
            <span ref={text2Ref} className="hero-text-2" style={{ opacity: 0 }}>
              JERON
            </span>
          </div>

          {/* Name */}
          <p ref={nameRef} className="hero-name" style={{ opacity: 0 }}>
            FULL STACK DEVELOPER
          </p>

          {/* Subtitle */}
          <p ref={subtitleRef} className="hero-subtitle" style={{ opacity: 0 }}>
            Computer Science graduate building responsive web apps with
            <span style={{ color: "var(--accent-color)", fontWeight: 600 }}>
              {" "}
              React, Node.js,
            </span>
            <span style={{ color: "var(--accent-color)", fontWeight: 600 }}>
              {" "}
              Express
            </span>
            , and
            <span style={{ color: "var(--accent-color)", fontWeight: 600 }}>
              {" "}
              MongoDB
            </span>
            .
          </p>

          {/* CTA buttons */}
          <div ref={ctaRef} className="hero-cta" style={{ opacity: 0 }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <DownloadIcon />
              Download CV
            </a>
            <a href="#contact" className="btn-outline" onClick={scrollToContact}>
              <MailIcon />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div ref={socialsRef} className="hero-socials" style={{ opacity: 0 }}>
            <a
              href="https://github.com/Venkatesh0768"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/venkatesh-rapolu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://x.com/venkatesh6807"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>

        {/* ── RIGHT: Image Slideshow ── */}
        <div className="hero-image-wrap" ref={imageWrapRef} style={{ opacity: 0 }}>
          {/* Decorative frame ring */}
          <div className="hero-img-ring" />

          {/* Corner accent lines */}
          <div className="hero-img-corner hero-img-corner--tl" />
          <div className="hero-img-corner hero-img-corner--br" />

          {/* Accent glow blob behind image */}
          <div className="hero-img-glow" />

          {/* The actual image */}
          <img
            ref={imgRef}
            src={HERO_IMAGES[currentIdx]}
            alt={`Hero slide ${currentIdx + 1}`}
            className="hero-slide-img"
          />

        </div>
      </div>

      {/* Scroll indicator */}
     
    </section>
  );
}
