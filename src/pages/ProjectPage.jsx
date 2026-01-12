/* eslint-disable no-unused-vars */
// ============================================
// pages/ProjectPage.jsx
// ============================================
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import {
  Waves,
  UtensilsCrossed,
  Baby,
  Flame,
  Users,
  Dumbbell,
  Activity,
  Download,
  FileText,
  MapPin,
  School,
  Hospital,
  ShoppingBag,
  Utensils,
  Plane,
} from "lucide-react";
import { getProjectBySlug } from "../data/projectsData";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ContactFormSection from "../components/ContactFormSection";
import MapSection from "../components/MapSection";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const iconMap = {
  Waves,
  UtensilsCrossed,
  Baby,
  Flame,
  Users,
  Dumbbell,
  Activity,
  School,
  Hospital,
  ShoppingBag,
  Utensils,
  Plane,
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = getProjectBySlug(id);
  const [viewMode, setViewMode] = useState("exterior");

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentImages =
    viewMode === "exterior" ? project.exteriorImages : project.interiorImages;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Bottom Left Text Overlay */}
        <div className="absolute bottom-24 sm:bottom-28 md:bottom-20 left-4 sm:left-6 md:left-12 right-4 sm:right-auto max-w-xs sm:max-w-sm md:max-w-md text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 sm:mb-3 md:mb-4 leading-tight">
            Welcome to {project.title.split(" BY ")[0]}
          </h2>
          <p className="text-[9px] sm:text-[10px] md:text-[12px] leading-relaxed text-white/90">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Bottom Right Stats */}
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-28 left-4 sm:left-6 md:left-auto right-4 sm:right-6 md:right-48 flex gap-3 sm:gap-4 md:gap-8 text-white">
          {[
            { value: "LOREM IPSUM", label: "Location" },
            { value: "1-5", label: "Bedroom" },
            { value: "2029", label: "Completion" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center border-r border-white pr-3 sm:pr-4 last:border-none last:pr-0"
            >
              <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-light mb-1">
                {item.value}
              </div>
              <div className="text-[7px] sm:text-[8px] md:text-[12px] uppercase tracking-wider text-white/80">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons - Mobile: horizontal at bottom, Desktop: vertical on right */}
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-18 left-1/2 md:left-auto right-auto md:right-0 -translate-x-1/2 md:translate-x-0 flex md:flex-col gap-1 sm:gap-2 text-white z-10">
          {[
            {
              label: "Enquire",
              svg: () => (
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 16 12"
                  fill="none"
                  className="sm:w-4 sm:h-3 md:w-4 md:h-3"
                >
                  <path
                    d="M15.6875 3.96875C15.8125 3.875 16 3.96875 16 4.125V10.5C16 11.3438 15.3125 12 14.5 12H1.5C0.65625 12 0 11.3438 0 10.5V4.125C0 3.96875 0.15625 3.875 0.28125 3.96875C1 4.53125 1.90625 5.21875 5.09375 7.53125C5.75 8 6.875 9.03125 8 9.03125C9.09375 9.03125 10.25 8 10.875 7.53125C14.0625 5.21875 14.9688 4.53125 15.6875 3.96875ZM8 8C7.25 8.03125 6.21875 7.09375 5.6875 6.71875C1.53125 3.71875 1.21875 3.4375 0.28125 2.6875C0.09375 2.5625 0 2.34375 0 2.09375V1.5C0 0.6875 0.65625 0 1.5 0H14.5C15.3125 0 16 0.6875 16 1.5V2.09375C16 2.34375 15.875 2.5625 15.6875 2.6875C14.75 3.4375 14.4375 3.71875 10.2812 6.71875C9.75 7.09375 8.71875 8.03125 8 8Z"
                    fill="white"
                  />
                </svg>
              ),
            },
            {
              label: "Call",
              svg: () => (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="sm:w-4 sm:h-4 md:w-4 md:h-4"
                >
                  <path
                    d="M15.5312 11.3125C15.7812 11.4375 15.9688 11.7188 15.9688 12.0312C15.9688 12.0625 15.9688 12.125 15.9688 12.1875L15.2188 15.4375C15.125 15.7812 14.8438 16 14.5 16C6.46875 16 0 9.53125 0 1.5C0 1.15625 0.21875 0.875 0.5625 0.78125L3.8125 0.03125C3.875 0.03125 3.9375 0 3.96875 0C4.28125 0 4.5625 0.1875 4.6875 0.46875L6.1875 3.96875C6.21875 4.0625 6.25 4.15625 6.25 4.25C6.25 4.5 6.125 4.71875 5.96875 4.84375L4.0625 6.40625C5.21875 8.84375 7.15625 10.7812 9.59375 11.9375L11.1562 10.0312C11.2812 9.875 11.5 9.75 11.7188 9.75C11.8438 9.75 11.9375 9.78125 12.0312 9.8125L15.5312 11.3125Z"
                    fill="white"
                  />
                </svg>
              ),
            },
            {
              label: "Whatsapp",
              svg: () => (
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="sm:w-3.5 sm:h-3.5 md:w-3.5 md:h-3.5"
                >
                  <path
                    d="M11.875 2.0625C13.1875 3.375 14 5.09375 14 6.96875C14 10.7812 10.8125 13.9062 6.96875 13.9062C5.8125 13.9062 4.6875 13.5938 3.65625 13.0625L0 14L0.96875 10.4062C0.375 9.375 0.03125 8.1875 0.03125 6.9375C0.03125 3.125 3.15625 0 6.96875 0C8.84375 0 10.5938 0.75 11.875 2.0625ZM6.96875 12.7188C10.1562 12.7188 12.8125 10.125 12.8125 6.96875C12.8125 5.40625 12.1562 3.96875 11.0625 2.875C9.96875 1.78125 8.53125 1.1875 7 1.1875C3.8125 1.1875 1.21875 3.78125 1.21875 6.9375C1.21875 8.03125 1.53125 9.09375 2.09375 10.0312L2.25 10.25L1.65625 12.375L3.84375 11.7812L4.03125 11.9062C4.9375 12.4375 5.9375 12.7188 6.96875 12.7188ZM10.1562 8.40625C10.3125 8.5 10.4375 8.53125 10.4688 8.625C10.5312 8.6875 10.5312 9.03125 10.375 9.4375C10.2188 9.84375 9.53125 10.2188 9.21875 10.25C8.65625 10.3438 8.21875 10.3125 7.125 9.8125C5.375 9.0625 4.25 7.3125 4.15625 7.21875C4.0625 7.09375 3.46875 6.28125 3.46875 5.40625C3.46875 4.5625 3.90625 4.15625 4.0625 3.96875C4.21875 3.78125 4.40625 3.75 4.53125 3.75C4.625 3.75 4.75 3.75 4.84375 3.75C4.96875 3.75 5.09375 3.71875 5.25 4.0625C5.375 4.40625 5.75 5.25 5.78125 5.34375C5.8125 5.4375 5.84375 5.53125 5.78125 5.65625C5.46875 6.3125 5.09375 6.28125 5.28125 6.59375C5.96875 7.75 6.625 8.15625 7.65625 8.65625C7.8125 8.75 7.90625 8.71875 8.03125 8.625C8.125 8.5 8.46875 8.09375 8.5625 7.9375C8.6875 7.75 8.8125 7.78125 8.96875 7.84375C9.125 7.90625 9.96875 8.3125 10.1562 8.40625Z"
                    fill="white"
                  />
                </svg>
              ),
            },
          ].map(({ label, svg: Icon }, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 sm:gap-2 border border-white p-1.5 sm:p-2 w-12 sm:w-14 md:w-auto cursor-pointer hover:bg-white/10 transition-colors"
            >
              <Icon />
              <div className="text-[5px] sm:text-[6px] md:text-[7px] uppercase tracking-wider text-white/80 whitespace-nowrap">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Description Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide">
                Lorem Ipsum is Simply Dummy
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                {project.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.brochureLink}
                  className="inline-flex items-center gap-2 px-6 py-3  text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <FileText size={20} />
                  <div className="text-left">
                    <div className="text-xs uppercase font-bold tracking-wider">
                      Project Brochure
                    </div>
                    <div className="text-xs">DOWNLOAD</div>
                  </div>
                </a>

                <a
                  href={project.floorPlanLink}
                  className="inline-flex items-center gap-2 px-6 py-3 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <FileText size={20} />
                  <div className="text-left">
                    <div className="text-xs uppercase font-bold tracking-wider">
                      Floor Plans
                    </div>
                    <div className="text-xs">DOWNLOAD</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative h-125 lg:h-150">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exterior/Interior Gallery Section */}
      <section className="relative">
        {/* Single Large Image */}
        <div className="w-screen h-dvh overflow-hidden">
          <img
            src={currentImages[0]}
            alt={`${viewMode} view`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Buttons Overlay - positioned on top of image */}
        <div className="absolute top-8 left-0 right-0 flex justify-center gap-8 z-10">
          <button
            onClick={() => setViewMode("exterior")}
            className={`text-lg tracking-widest pb-2 border-b-2 transition-colors ${
              viewMode === "exterior"
                ? "border-white text-white"
                : "border-transparent text-white/60 hover:text-white/90"
            }`}
          >
            EXTERIOR
          </button>
          <button
            onClick={() => setViewMode("interior")}
            className={`text-lg tracking-widest pb-2 border-b-2 transition-colors ${
              viewMode === "interior"
                ? "border-white text-white"
                : "border-transparent text-white/60 hover:text-white/90"
            }`}
          >
            INTERIOR
          </button>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 uppercase tracking-wide">
            Amenities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.amenities.map((amenity, i) => {
              const Icon = iconMap[amenity.icon];
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-teal-600 flex items-center justify-center mb-4">
                    {Icon && <Icon size={32} className="text-teal-600" />}
                  </div>
                  <p className="text-sm uppercase tracking-wider text-gray-700">
                    {amenity.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 bg-teal-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="pl-14">
            <h2 className="text-3xl font-light text-white mb-4 uppercase tracking-wide text-left">
              Floor Plan
            </h2>
            <p className="text-white/80 text-left mb-12">
              {project.floorPlans[0]?.name}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="">
              <img
                src={project.floorPlans[0]?.image}
                alt="Floor Plan"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-4 uppercase tracking-wide text-center">
            The Location
          </h2>

          <div className="flex justify-center gap-12 md:gap-20 my-20 flex-wrap">
            {project.location.nearby.map((place, i) => (
              <div key={i} className="flex flex-col items-center max-w-30">
                <p className="text-xs text-gray-500 mb-2">{place.time}</p>
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  {/* Render the SVG directly */}
                  {place.icon}
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-700 text-center">
                  {place.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MapSection
        coordinates={project.location.coordinates}
        title={project.title}
        address={project.location.address}
        height="100vh"
      />

      <ContactFormSection />
    </div>
  );
}
