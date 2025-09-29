import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MailIcon,
} from "lucide-react";

const Footer = () => {
  const usefulLinks = [
    "IELTS Tests",
    "IELTS Preparation",
    "IELTS Results",
    "Practice Tests",
    "Study Materials",
    "Success Stories",
  ];

  const moreInformation = [
    "About Us",
    "Our Teachers",
    "Pricing Plans",
    "FAQ",
    "Blog",
    "Contact Support",
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", href: "https://github.com/junaidkhan1723" },
    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/in/junaidkhan1723" },
    { icon: MailIcon, name: "Mail", href: "mailto:pathanjunaid7888@gmail.com" },
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Refund Policy",
    "Disclaimer",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/*Logo*/}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
                IELTS Pro
              </h2>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-gray-300">info@ieltspro.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-300">+91 123-4567-890</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                <span className="text-gray-300">
                  123 AmeerPet
                  <br />
                  Hydrabad, TS 12345
                  <br />
                  India
                </span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Useful Links
            </h3>
            <div className="space-y-3">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              More Information
            </h3>
            <div className="space-y-3">
              {moreInformation.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-gray-400 font-medium">Follow Us:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 text-center md:text-left">
              <div>
                <div className="text-2xl font-bold text-red-600">10K+</div>
                <div className="text-gray-400 text-sm">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">95%</div>
                <div className="text-gray-400 text-sm">Success</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">4.9★</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 IELTS Pro. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
