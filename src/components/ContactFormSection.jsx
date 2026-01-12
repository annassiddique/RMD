import ScrollReveal from "./ScrollReveal";

export default function ContactFormSection({ heading, body }) {
  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-3 md:mb-4">
                {heading ? heading : `Get in touch`}
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                {body
                  ? body
                  : `Leave your contact details below to register your interest in Bayroot`}
              </p>
            </div>

            <form className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="*First Name"
                  className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-gray-600 transition-colors placeholder:text-gray-400 text-sm md:text-base"
                />
                <input
                  type="text"
                  placeholder="*Last Name"
                  className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-gray-600 transition-colors placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="*Your Email"
                  className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-gray-600 transition-colors placeholder:text-gray-400 text-sm md:text-base"
                />
                <select className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-gray-600 transition-colors text-gray-400 text-sm md:text-base">
                  <option>Select Budget</option>
                  <option>Under 50L</option>
                  <option>50L - 1Cr</option>
                  <option>1Cr - 2Cr</option>
                  <option>Above 2Cr</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-gray-600 transition-colors text-gray-400 text-sm md:text-base">
                  <option>Select Interested Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                </select>
                <select className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-gray-600 transition-colors text-gray-400 text-sm md:text-base">
                  <option>Select Investment Purpose</option>
                  <option>Primary Residence</option>
                  <option>Investment</option>
                  <option>Vacation Home</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="UAE +971"
                  className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-gray-600 transition-colors placeholder:text-gray-400 text-sm md:text-base"
                />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-gray-600 transition-colors placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>

              <div className="flex items-center gap-3 py-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 md:w-5 md:h-5 border-2 border-gray-300 rounded"
                />
                <span className="text-xs md:text-sm text-gray-600">
                  I'm not a robot
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 md:px-12 py-3 bg-black text-white text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}