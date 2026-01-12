import { Mail, Phone, MapPin } from "lucide-react";
import MapSection from "../components/MapSection";
import ContactFormSection from "../components/ContactFormSection";

export default function ContactPage() {
  const officeLocation = {
    coordinates: { lat: 25.1972, lng: 55.2744 },
    title: "RMD Head Office",
    address: "Downtown Dubai, UAE",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Image Only */}
      <section className="relative h-[50vh] md:h-[70vh] lg:h-dvh w-full">
        <img
          src="/nav-bg.png"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Contact Form Section */}
      <ContactFormSection
        heading={"Contact Us"}
        body={`Our dedicated team is here to assist with any enquiries you may have. Get in touch today, and let us help you find your new home.`}
      />

      {/* Map Section */}
      <MapSection
        coordinates={officeLocation.coordinates}
        title={officeLocation.title}
        address={officeLocation.address}
        height="50vh"
      />

      {/* Location Details Section */}
      <section className="py-12 md:py-16 px-6 lg:px-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Open on Google Maps link */}
          <a
            href={`https://www.google.com/maps?q=${officeLocation.coordinates.lat},${officeLocation.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-colors inline-block mb-6 md:mb-8"
          >
            OPEN ON GOOGLE MAPS
          </a>

          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12 uppercase tracking-wide text-center md:text-left">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pl-0 md:pl-8">
            {/* Head Office */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">
                  Head Office:
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs md:text-sm font-medium text-gray-900">
                  For Enquiries:
                </h4>
                <p className="text-gray-700 text-xs md:text-sm">800 (RMD)</p>
                <p className="text-gray-700 text-xs md:text-sm">
                  enquiries@rmd.ae
                </p>
              </div>
            </div>

            {/* Sales Gallery */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <div className="border-l-0 md:border-l-2 border-gray-200 pl-0 md:pl-7">
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">
                  Sales Gallery:
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}