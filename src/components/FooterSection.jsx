/* eslint-disable no-unused-vars */
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";

export default function FooterSection() {
  const portfolioLinks = [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ];

  const quickLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/#about" },
    { label: "OUR VALUES", href: "/#values" },
    { label: "CAREERS", href: "/#careers" },
    { label: "MEDIA", href: "/#media" },
    { label: "CONTACT US", href: "/#contact" },
    { label: "FIRST TIME BUYER", href: "/#buyers" },
    { label: "BECOME AN AGENT", href: "/#agent" },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
  ];

  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(3.82deg, #C8C8C8 -34.77%, #055463 96.87%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10 lg:mb-12">
          {/* Brand & Social */}
          <div className="space-y-5">
            <Link to="/">
              <Logo width={150}/>
            </Link>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center border border-white/40 rounded-full hover:bg-white/10 hover:border-white/60 transition-all"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-white/60 font-medium">
              OUR PORTFOLIO
            </h4>
            <ul className="space-y-2.5 text-sm">
              {portfolioLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-white/60 font-medium">
              HOME
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="hover:text-amber-200 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <p className="order-1 md:order-0">RMD © 2025</p>

          <div className="flex gap-6 order-2 md:order-0">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="order-3 md:order-0">
            <span className="text-white/70">Language: </span>
            <button className="text-white hover:text-amber-200 transition-colors font-medium">
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}