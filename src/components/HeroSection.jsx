export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/442763334.sd.mp4?s=4e1e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e"
          type="video/mp4"
        />
      </video> */}

      {/* Fallback Image */}
      <div className="absolute inset-0 bg-black">
        <img
          src="/hero.png"
          alt="Architectural View"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Optional: Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
