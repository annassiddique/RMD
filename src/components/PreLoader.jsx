import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function PreLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Draw the white overlay with progressive R cutout reveal
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.scale(dpr, dpr);

    // Fill entire canvas with white
    ctx.fillStyle = "#f5f5f0";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const scale = 4;

    ctx.save();
    ctx.translate(centerX - 15 * scale, centerY - 21 * scale);
    ctx.scale(scale, scale);

    ctx.globalCompositeOperation = "destination-out";

    // Your complete R path
    const fullRPath = new Path2D(
      "M0 42V8H18.2195C20.8444 8 23.4384 8.70269 25.6441 10.1266C27.8756 11.566 30 13.8698 30 17.4224C30 24.9026 29.5057 29.2455 22.0111 31.2454L29.1309 41.999H20.3872L8.77047 24.9995H18.8879C18.8879 24.9995 23.3992 25.3045 23.6989 20.3723C24.0542 14.521 18.8879 14.7487 18.8879 14.7487H2.27577V16.8732C2.27577 16.8732 6.77273 16.9979 7.14757 20.6226V41.999H0V42Z"
    );

    // Phase 1: Left leg (0-33%) - wipe BOTTOM to TOP
    if (progress > 0) {
      ctx.save();
      const leftProgress = Math.min(progress / 33, 1);
      ctx.beginPath();
      // Start from bottom (y = 42) and grow upward
      ctx.rect(0, 42 - 34 * leftProgress, 7.15, 34 * leftProgress);
      ctx.clip();
      ctx.fill(fullRPath);
      ctx.restore();
    }

    // Phase 2: Curve/top section (33-66%) - wipe top to bottom
    if (progress > 33) {
      ctx.save();
      const curveProgress = Math.min((progress - 33) / 33, 1);
      ctx.beginPath();
      ctx.rect(7.15, 8, 23, 24 * curveProgress); // Top curve area
      ctx.clip();
      ctx.fill(fullRPath);
      ctx.restore();
    }

    // Phase 3: Diagonal leg (66-100%) - wipe left to right
    if (progress > 66) {
      ctx.save();
      const legProgress = Math.min((progress - 66) / 34, 1);
      ctx.beginPath();
      ctx.rect(8.77, 24.99, 21 * legProgress, 18); // Diagonal leg area
      ctx.clip();
      ctx.fill(fullRPath);
      ctx.restore();
    }

    ctx.restore();
    ctx.globalCompositeOperation = "source-over";
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            onComplete();
          },
        });

        tl.to(containerRef.current, {
          scale: 15,
          duration: 1.2,
          ease: "power2.inOut",
        });

        tl.to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power1.out",
          },
          "-=0.4"
        );
      }, 400);
    }
  }, [progress, onComplete]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 pointer-events-none">
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ transformOrigin: "center center" }}
      >
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      <div className="absolute -bottom-64 inset-0 flex flex-col items-center justify-center">
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-700 mb-6 text-center px-4 leading-relaxed">
            A key to
            <br />
            homes with soul
          </h2>

          <div className="w-[80vw] max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-sans text-gray-600">Loading</span>
              <span className="text-sm font-sans text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-[1.5px] bg-gray-300 overflow-hidden">
              <div
                className="h-full bg-gray-600 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
