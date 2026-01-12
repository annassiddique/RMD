/* eslint-disable react-hooks/immutability */
// import ScrollReveal from "./ScrollReveal";

// export default function OurStorySection() {
//   return (
//     <section id="about" className="py-20! !md:py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <ScrollReveal direction="left">
//             <div>
//               <h2 className="text-4xl md:text-8xl border-b border-black pb-2 w-fit pr-2 font-serif text-gray-900 mb-6">
//                 Our Story
//               </h2>
//               <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
//                 <p>
//                   Founded with a vision to transform the real estate landscape,
//                   we have built a legacy of trust, innovation, and excellence.
//                   Our journey began with a simple belief: homes should have
//                   soul.
//                 </p>
//                 <p>
//                   Over the years, we've crafted spaces that blend architectural
//                   brilliance with thoughtful design, creating environments where
//                   memories are made and lives flourish.
//                 </p>
//                 <p>
//                   Today, we stand as one of the region's most respected
//                   developers, committed to delivering properties that exceed
//                   expectations and stand the test of time.
//                 </p>
//               </div>
//             </div>
//           </ScrollReveal>

//           <ScrollReveal direction="right">
//             <div className="flex justify-center items-center">
//               <img src="/public/India.png" alt="map" className="w-[80%]"/>
//             </div>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import India from "../assets/India";
import UAE from "../assets/UAE";
import Oman from "../assets/Oman";

export default function OurStorySection() {
  const sectionRef = useRef(null);
  const indiaRef = useRef(null);
  const omanRef = useRef(null);
  const uaeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            runAnimation();
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const runAnimation = () => {
    const tl = gsap.timeline({ delay: 2 });

    // Calculate path lengths for proper animation
    const line1Length = line1Ref.current?.getTotalLength() || 600;
    const line2Length = line2Ref.current?.getTotalLength() || 200;

    // Set initial dash array and offset
    gsap.set(line1Ref.current, {
      strokeDasharray: line1Length,
      strokeDashoffset: line1Length,
    });
    gsap.set(line2Ref.current, {
      strokeDasharray: line2Length,
      strokeDashoffset: line2Length,
    });

    // Set initial position for Line 1 group to match India's starting position
    gsap.set(line1Ref.current.parentElement, {
      x: -190,
      y: 120,
      scale: 1.3,
    });

    // Step 1: Line starts drawing from India while India stays visible
    tl.to(line1Ref.current, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power1.inOut",
    });

    // Step 2: India slides right, Line container slides right,
    // BUT Line path slides LEFT to compensate
    tl.to(
      indiaRef.current,
      {
        x: 700,

        duration: 1.2,
        ease: "power1.inOut",
      },
      "-=1.5"
    );

    // Move the container right
    tl.to(
      line1Ref.current.parentElement,
      {
        x: 700,
        duration: 1.5,
        ease: "power1.inOut",
      },
      "<"
    );

    // Move the path LEFT to keep endpoint fixed
    tl.to(
      line1Ref.current,
      {
        x: -96,
        y: -9,
        duration: 1.5,
        ease: "power1.inOut",
      },
      "<"
    );

    // Step 3: Oman fades in as line lands
    tl.to(omanRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
    });

    // Step 4: Oman → UAE line draws
    tl.to(line2Ref.current, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power1.inOut",
    });

    // Step 5: UAE fades in after second line completes
    tl.to(uaeRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
    });
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-8xl border-b border-black pb-2 w-fit pr-2 font-serif text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to transform the real estate landscape, we
                have built a legacy of trust, innovation, and excellence. Our
                journey began with a simple belief: homes should have soul.
              </p>
              <p>
                Over the years, we've crafted spaces that blend architectural
                brilliance with thoughtful design, creating environments where
                memories are made and lives flourish.
              </p>
              <p>
                Today, we stand as one of the region's most respected
                developers, committed to delivering properties that exceed
                expectations and stand the test of time.
              </p>
            </div>
          </div>

          {/* Right Column - Animated Map */}
          <div className="flex justify-center items-center rotate-2 w-full">
            <svg
              viewBox="0 0 900 600"
              className="w-full h-auto max-w-2xl mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Country SVGs Layer */}

              {/* UAE - Positioned at top, starts invisible */}
              <g
                ref={uaeRef}
                style={{ opacity: 0 }}
                transform="translate(299, -118)"
              >
                <UAE width={550} height={550} />
              </g>

              {/* India - Visible from start, positioned at center-right */}
              <g ref={indiaRef} transform="translate(60, -320)">
                <India width={850} height={1250} />
              </g>

              {/* Oman - Positioned at center-left, starts invisible */}
              <g
                ref={omanRef}
                style={{ opacity: 0 }}
                transform="translate(250, -50)"
              >
                <Oman width={650} height={650} />
              </g>

              {/* Connecting Lines Layer - Rendered last to appear on top */}

              {/* Line 1: India → Oman */}
              <g transform="translate(575, 185) ">
                <path
                  ref={line1Ref}
                  d="M530.67 76.3975C359.887 -18.4304 130.03 -45.039 0.392044 118.731"
                  stroke="#555555"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  transform="scale(0.9)"
                  rotate={10}
                  transform-origin="0 212"
                />
              </g>

              {/* Line 2: Oman → UAE */}
              <g transform="translate(495, 85)">
                <path
                  ref={line2Ref}
                  d="M115.636 171.283C-53.3719 73.9095 -29.0626 -23.4712 141.136 5.78285"
                  stroke="#555555"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  transform="scale(0.7)"
                  transform-origin="0 212"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}