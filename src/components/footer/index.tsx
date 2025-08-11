import { FaLinkedin } from "react-icons/fa";

const footerSections = [
  {
    title: "OUR SERVICES",
    links: ["Advisory Services", "Threat Defense"],
  },
  {
    title: "WHO WE SERVE",
    links: [
      "Hospitals & Health Systems",
      "Healthcare Technology, Medical Devices & Biotech",
      "Provider Groups",
      "Health Plans",
    ],
  },
  {
    title: "WHY VUKAYA",
    links: ["Central Command", "Our Approach", "Awards", "Case Studies"],
  },
  {
    title: "RESOURCES",
    links: ["Horizon Reports", "Blog", "Threat Bulletins", "Cyber Survivor"],
  },
  {
    title: "EVENTS",
    links: ["Conferences and Shows", "Roundtables", "Webinars"],
  },
  {
    title: "WHO WE ARE",
    links: [
      "Leadership",
      "In The News",
      "Board of Directors",
      "Press Releases",
      "Advisory Board",
      "Join Our Team",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-sm text-gray-800 mt-10">
      <div className="md:max-w-screen-xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-10 flex-wrap">
        {/* Left Section */}
        <div className="md:w-64">
          {/* <img src={LogoIcon} alt='logo icon' className='mb-4 md:w-full w-[256px] h-auto' /> */}
          <p className="mb-2 text-blue-900">
            connect@vukayahealthsecurity.com
          </p>
          <p className="text-teal-700">
            120 Brentwood Commons Way
            <br />
            Building 4, Suite 500
            <br />
            Brentwood, TN 37027
          </p>
          <a
            href="https://www.linkedin.com/company/vukaya-health-security"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-teal-600 hover:text-teal-800 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Content Sections */}
        <div className="flex flex-wrap gap-10 flex-1">
          {footerSections.map((section) => (
            <div key={section.title} className="min-w-[140px]">
              <h3 className="font-bold mb-2 uppercase text-sm text-gray-800">
                {section.title}
              </h3>
              <ul className="space-y-1 text-gray-700">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-teal-700">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-xs text-center text-gray-600 py-4 px-4">
        <p>
          © Copyright 2024 Vukaya Health Security, Inc. All rights reserved.{" "}
          <a href="#" className="hover:underline">
            Contact Us
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </p>
        <p className="mt-2">
          Vukaya Health Security is healthcare’s recognized leader in
          cybersecurity – protecting patient data and reducing risk throughout
          the Vukaya healthcare ecosystem.
        </p>
      </div>
    </footer>
  );
};

export {Footer};
