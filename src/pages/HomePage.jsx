import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import PreLoader from "../components/PreLoader";
import OurStorySection from "../components/OurStorySection";
import ProjectSection from "../components/ProjectSection";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import NewSection from "../components/NewSection";
import ContactFormSection from "../components/ContactFormSection";

function Homepage() {
  const [loading, setLoading] = useState(() => {
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    return !hasSeenPreloader;
  });

  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [loading]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasSeenPreloader", "true");
    setLoading(false);
  };

  return (
    <>
      {/* Hero Section ALWAYS visible (behind preloader) */}
      <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
        <HeroSection />
      </div>
      {/* PreLoader sits on top */}
      {loading && <PreLoader onComplete={handlePreloaderComplete} />}

      {/* Rest of content - needs higher z-index than hero */}
      <div
        style={{
          visibility: loading ? "hidden" : "visible",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Spacer to push content down after hero */}
        <div style={{ height: "100vh" }} />

        <OurStorySection />
        <ProjectSection />
        <HorizontalScrollSection />
        <NewSection />
        <ContactFormSection />
      </div>
    </>
  );
}

export default Homepage;
