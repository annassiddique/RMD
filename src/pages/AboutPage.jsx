import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  const stats = [
    { number: "03", label: "Destinations" },
    { number: "18", label: "Projects" },
    { number: "$10bn", label: "Portfolio" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        <img
          src="/public/about.jpg"
          alt="About RMD"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute flex flex-col gap-2 items-start bottom-8 left-6 md:bottom-12 md:left-12">
          <p className="text-[8px] md:text-[10px] text-white">
            Home / About / Who we are
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-thin tracking-wider border-l-2 md:border-l-3 pl-2 md:pl-3 border-gray-400">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto p-6 md:p-8 lg:p-12">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 md:mb-8 uppercase tracking-wide border-l-4 border-gray-500 pl-3 md:pl-4 inline-block pb-2">
              Our Story
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base leading-relaxed mb-12 md:mb-16">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission, Vision, Values */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 my-12 md:my-16">
              <div className="pb-6 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 border-b border-gray-400 pb-2">
                  Mission
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>

              <div className="pb-6 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 border-b border-gray-400 pb-2">
                  Vision
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>

              <div className="pb-6 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 border-b border-gray-400 pb-2">
                  Values
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center md:text-left border-l-2 border-gray-700 py-6 pl-4"
                >
                  <div className="text-5xl md:text-7xl font-light text-gray-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Message from Founder */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Founder Image */}
              <div className="relative h-75 md:h-125 w-full">
                <img
                  src="/public/ceo.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Message */}
              <div className="space-y-4 md:space-y-6 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 uppercase tracking-wide border-l-2 border-gray-400 pl-2 py-1 inline-block">
                  Message from Founder
                </h3>

                <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages.
                  </p>
                </div>

                <div className="pt-4 md:pt-6">
                  <p className="font-semibold text-gray-900">Lorem Ipsum</p>
                  <p className="text-sm text-gray-500">Founder, RMD</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}