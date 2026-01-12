/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

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

        if (!hasAnimated && rect.top <= windowHeight * 0.5) {
          setHasAnimated(true);
        }

        const totalWidth = container.scrollWidth - window.innerWidth;
        const translateX = -(progress * totalWidth);
        container.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="relative" style={{ height: `900vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full"
          style={{ width: `900vw` }}
        >
          {/* Slide 1 - CASA II BY RMD */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gray-50" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <svg
                className="w-full h-[80%]"
                viewBox="0 0 5399 1218"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M-57.6362 484.891H2359.83V809.083H2056.6C2043.57 944.629 2072.27 1215.72 2291.37 1215.72C2510.47 1215.72 4708.83 1215.72 5298.52 1215.72"
                  stroke="black"
                  strokeOpacity="0.12"
                  strokeWidth="2.79476"
                  strokeDasharray="10000"
                  strokeDashoffset={hasAnimated ? "0" : "10000"}
                  style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
                />
                <path
                  d="M5340.44 732.228H2802.8V408.035H3106.03C3119.07 272.489 3090.36 1.39768 2871.26 1.39768C2652.16 1.39768 553.019 1.39768 -36.6753 1.39768"
                  stroke="black"
                  strokeOpacity="0.12"
                  strokeWidth="2.79476"
                  strokeDasharray="10000"
                  strokeDashoffset={hasAnimated ? "0" : "10000"}
                  style={{ transition: "stroke-dashoffset 1.5s ease-out 0.3s" }}
                />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 mb-4 md:mb-6 text-center md:text-left">
                    CASA II BY RMD
                  </h2>
                  <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed mb-6 md:mb-20 text-center md:text-left">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-60 sm:w-70 md:w-125 h-65 sm:h-77.5 md:h-137.5 overflow-hidden shadow-xl">
                    <img src="/hero.png" alt="CASA II" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Elegant Design */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-white" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-100">
              <svg className="w-full h-[80%]" viewBox="0 0 5399 1218" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M5398.08 484.891H2980.61V809.083H3283.84C3296.88 944.629 3268.17 1215.72 3049.07 1215.72C2829.97 1215.72 631.616 1215.72 41.9216 1215.72" stroke="black" strokeOpacity="0.12" strokeWidth="2.79476" />
                <path d="M0 732.228H2537.64V408.035H2234.41C2221.38 272.489 2250.08 1.39768 2469.18 1.39768C2688.28 1.39768 4787.42 1.39768 5377.12 1.39768" stroke="black" strokeOpacity="0.12" strokeWidth="2.79476" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin font-serif text-gray-900 mb-4 md:mb-6 text-center md:text-left">
                    Elegant Design
                  </h2>
                  <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed mb-6 md:mb-20 text-center md:text-left">
                    Design at RMD is never ornamental - it is intentional. Every line, proportion, and material is chosen to create balance, warmth, and timeless appeal. Our spaces are designed to feel calm, refined, and effortlessly beautiful - homes that remain relevant long after trends fade.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-60 sm:w-70 md:w-125 h-65 sm:h-77.5 md:h-137.5 overflow-hidden">
                    <img src="/elgant.png" alt="Design" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 - Craftsmanship */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[#055363]" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <svg className="w-full h-[80%]" viewBox="0 0 5399 1218" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M0 484.892H2417.47V809.084H2114.24C2101.2 944.63 2129.91 1215.72 2349.01 1215.72C2568.11 1215.72 4766.46 1215.72 5356.16 1215.72" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
                <path d="M5398.08 732.228H2860.44V408.035H3163.67C3176.7 272.489 3148 1.39768 2928.9 1.39768C2709.8 1.39768 610.656 1.39768 20.9614 1.39768" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:pl-2 lg:px-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-28 items-center">
                <div className="md:order-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin text-white mb-4 md:mb-6 text-center md:text-left">
                    Craftsmanship
                  </h2>
                  <p className="text-sm sm:text-base md:text-base text-white/90 leading-relaxed mb-6 md:mb-20 text-center md:text-left">
                    Craftsmanship is at the heart of everything we build. From foundation to finish, each detail reflects care, discipline, and pride in the process. We believe true quality is felt in the quiet details - the precision you see, and the comfort you experience every day.
                  </p>
                </div>
                <div className="md:order-1 flex justify-center md:block md:-ml-8">
                  <div className="relative w-70 sm:w-85 md:w-150 h-40 sm:h-50 md:h-87.5 overflow-hidden">
                    <img src="/craft.png" alt="Craftsmanship" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 - Quality That Endures */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-white" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <svg className="w-full h-[80%]" viewBox="0 0 5399 1218" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M5398.08 484.891H2980.61V809.083H3283.84C3296.88 944.629 3268.17 1215.72 3049.07 1215.72C2829.97 1215.72 631.617 1215.72 41.9221 1215.72" stroke="black" strokeOpacity="0.12" strokeWidth="2.79476" />
                <path d="M0 732.228H2537.64V408.035H2234.41C2221.38 272.489 2250.08 1.39768 2469.18 1.39768C2688.28 1.39768 4787.42 1.39768 5377.12 1.39768" stroke="black" strokeOpacity="0.12" strokeWidth="2.79476" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 md:mb-6 text-center md:text-left">
                    Quality That Endures
                  </h2>
                  <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed mb-6 md:mb-20 text-center md:text-left">
                    Quality is not a feature; it is a commitment. We focus on materials, finishes, and construction standards that stand the test of time, ensuring every home remains as dependable as it is beautiful - today and for years to come.
                  </p>
                </div>
                <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center md:justify-end items-end">
                  <div className="relative w-27.5 sm:w-35 md:w-62.5 h-32.5 sm:h-42.5 md:h-75 md:mb-5 overflow-hidden">
                    <img src="/endure1.png" alt="Quality" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative w-37.5 sm:w-50 md:w-95 h-45 sm:h-60 md:h-112.5 overflow-hidden">
                    <img src="/endure2.png" alt="Endures" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5 - Well-Being */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-teal-600" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <svg className="w-full h-[80%]" viewBox="0 0 5399 1218" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M0 484.891H2417.47V809.083H2114.24C2101.2 944.629 2129.91 1215.72 2349.01 1215.72C2568.11 1215.72 4766.46 1215.72 5356.16 1215.72" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
                <path d="M5398.08 732.228H2860.44V408.035H3163.67C3176.7 272.489 3148 1.39768 2928.9 1.39768C2709.8 1.39768 610.656 1.39768 20.9614 1.39768" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="md:order-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-6 text-center md:text-left">
                    Well-Being
                  </h2>
                  <p className="text-sm sm:text-base md:text-base text-white/90 leading-relaxed mb-6 md:mb-20 text-center md:text-left">
                    Well-being is woven into our design philosophy. Natural light, open layouts, calming environments, and mindful planning come together to create homes that support balance, comfort, and everyday peace - spaces that nurture both body and mind.
                  </p>
                </div>
                <div className="md:order-1 flex justify-center md:block md:-ml-12">
                  <div className="relative w-60 sm:w-75 md:w-145 h-82.5 sm:h-105 md:h-dvh rounded-lg overflow-hidden">
                    <img src="/well.png" alt="Well-Being" className="w-full h-full object-cover object-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 6 - Uplifted Lifestyle */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-white" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <svg className="w-full h-[80%]" viewBox="0 0 5399 1218" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M5398.08 484.891H2980.61V809.083H3283.84C3296.88 944.629 3268.17 1215.72 3049.07 1215.72C2829.97 1215.72 631.617 1215.72 41.9221 1215.72" stroke="black" strokeOpacity="0.12" strokeWidth="2.79476" />
                <path d="M0 732.228H2537.64V408.035H2234.41C2221.38 272.489 2250.08 1.39768 2469.18 1.39768C2688.28 1.39768 4787.42 1.39768 5377.12 1.39768" stroke="black" strokeOpacity="0.12" strokeWidth="2.79476" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 text-center md:text-left">
                    Uplifted Lifestyle
                  </h2>
                  <p className="text-sm sm:text-base md:text-base leading-relaxed mb-6 md:mb-20 text-center md:text-left">
                    We design places that elevate everyday living. From thoughtfully curated amenities to welcoming communal spaces, our developments encourage connection, ease, and a sense of belonging - enhancing not just how you live, but how you feel.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-60 sm:w-75 md:w-125 h-82.5 sm:h-105 md:h-dvh rounded-lg overflow-hidden">
                    <img src="/lifted.png" alt="Lifestyle" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 7 - Connected Locations */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-teal-700" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <svg className="w-full h-[80%]" viewBox="0 0 5399 1218" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M5398.08 484.891H2980.61V809.083H3283.84C3296.88 944.629 3268.17 1215.72 3049.07 1215.72C2829.97 1215.72 631.617 1215.72 41.9221 1215.72" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
                <path d="M0 732.228H2537.64V408.035H2234.41C2221.38 272.489 2250.08 1.39768 2469.18 1.39768C2688.28 1.39768 4787.42 1.39768 5377.12 1.39768" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="md:order-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-6 text-center md:text-left">
                    Connected Locations
                  </h2>
                  <p className="text-sm sm:text-base md:text-base text-white/90 leading-relaxed mb-6 md:mb-20 text-center md:text-left">
                    Location shapes life. RMD homes are thoughtfully positioned to keep residents close to what matters - work, education, leisure, and community, while still offering a sense of retreat from the pace of the city.
                  </p>
                </div>
                <div className="md:order-1 flex justify-center md:block md:-ml-12">
                  <div className="relative w-70 sm:w-85 md:w-145 h-47.5 sm:h-57.5 md:h-100 rounded-lg overflow-hidden">
                    <img src="/connected.png" alt="Locations" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 8 - Built on Trust */}
          <div className="w-screen h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-white" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <svg className="w-full h-[80%]" viewBox="0 0 5399 1218" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M0 484.891H2417.47V809.083H2114.24C2101.2 944.629 2129.91 1215.72 2349.01 1215.72C2568.11 1215.72 4766.46 1215.72 5356.16 1215.72" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
                <path d="M5398.08 732.228H2860.44V408.035H3163.67C3176.7 272.489 3148 1.39768 2928.9 1.39768C2709.8 1.39768 610.656 1.39768 20.9614 1.39768" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 text-center md:text-left">
                    Built on Trust
                  </h2>
                  <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed mb-6 md:mb-20 text-center md:text-left">
                    Every home we create begins with a promise. A promise of integrity, transparency, and care - carried through every stage of development. At RMD, trust is not stated; it is earned through consistency and kept promises.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-55 sm:w-70 md:w-120 h-82.5 sm:h-105 md:h-dvh rounded-lg overflow-hidden">
                    <img src="/trust.png" alt="Trust" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 9 - RMD Signature */}
          <div className="w-screen h-full flex items-center justify-center relative px-4 sm:px-6 md:pl-12">
            <div className="absolute inset-0 bg-white" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <svg className="w-full h-[80%]" viewBox="0 0 5399 1218" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M5398.08 484.891H2980.61V809.083H3283.84C3296.88 944.629 3268.17 1215.72 3049.07 1215.72C2829.97 1215.72 631.617 1215.72 41.9221 1215.72" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
                <path d="M0 732.228H2537.64V408.035H2234.41C2221.38 272.489 2250.08 1.39768 2469.18 1.39768C2688.28 1.39768 4787.42 1.39768 5377.12 1.39768" stroke="white" strokeOpacity="0.15" strokeWidth="2.79476" />
              </svg>
            </div>

            <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
              <div className="relative w-full max-w-6xl mx-auto h-100 sm:h-125 md:h-dvh rounded-lg overflow-hidden border-2 sm:border-3 md:border-4 border-white/20">
                <img src="/sign.png" alt="RMD Signature" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
                    RMD Signature
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
                    RMD Signature builds more than homes — we create places shaped by care, guided by integrity, and designed for meaningful living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;