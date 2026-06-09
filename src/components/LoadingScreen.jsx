import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }) {
  const screenRef = useRef(null);
  const barRef = useRef(null);
  const percentRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate logo
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );

    // Animate progress bar
    tl.to(
      barRef.current,
      {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
          if (percentRef.current) {
            percentRef.current.textContent = progress + "%";
          }
        },
      },
      "-=0.2",
    );

    // Fade out loading screen
    tl.to(
      screenRef.current,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        },
      },
      "+=0.3",
    );

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={screenRef} className="loading-screen">
      <div ref={logoRef} className="loading-logo">
        <img src="/logo_gj.png" alt="Logo" style={{ width: "80px", height: "auto", filter: "drop-shadow(0 0 10px rgba(200, 255, 0, 0.5))" }} />
      </div>
      <div className="loading-bar-container">
        <div ref={barRef} className="loading-bar" />
      </div>
      <div ref={percentRef} className="loading-percent">
        0%
      </div>
    </div>
  );
}
