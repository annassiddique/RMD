/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const ProjectSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const container = containerRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrolled = -rect.top;
        const maxScroll = sectionHeight - windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);

        setScrollProgress(progress);

        const totalWidth = container.scrollWidth - window.innerWidth;
        const translateX = -(progress * totalWidth);
        container.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollHeight = `${projectsData.length * 100}vh`;

  return (
    <div ref={sectionRef} className="relative" style={{ height: scrollHeight }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full"
          style={{ width: `${projectsData.length * 100}vw` }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative w-screen h-full shrink-0"
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute top-12 left-0 right-0 text-center z-10">
                <h2 className="text-white text-4xl md:text-5xl font-light tracking-widest">
                  {project.title}
                </h2>
              </div>

              <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10">
                <button 
                  onClick={() => navigate(`/project/${project.slug}`)}
                  className="px-8 py-3 bg-white/10 backdrop-blur-md text-white text-sm tracking-widest border border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  DISCOVER THE COLLECTION
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;