import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 bg-gray-300 text-black dark:bg-[#020617] dark:text-white overflow-hidden"
    >
      <div className="bg-blur top-10 left-10"></div>
      <div className="bg-blur bottom-10 right-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="skills px-4 py-2 rounded-full text-sm">Contact</span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Let's discuss your next project — or a Senior Developer / Technical Lead role.
          </p>
        </div>

        <div className="glass rounded-2xl lg:rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Looking for a WordPress Expert, Laravel Developer or Technical
              Lead? Reach out directly — I usually reply within a day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:gurjarmukeshgls@gmail.com"
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-xl text-white">
                <FaEnvelope />
              </div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-500 break-all text-sm">
                gurjarmukeshgls@gmail.com
              </p>
            </a>

            <a
              href="tel:+916353691853"
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-xl text-white">
                <FaPhoneAlt />
              </div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-500 text-sm">+91 63536 91853</p>
            </a>

            <div className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-xl text-white">
                <FaMapMarkerAlt />
              </div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-500 text-sm">Surat, Gujarat, India</p>
            </div>

            <a
              href="https://linkedin.com/in/mukesh-gujjar-95958293"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-xl text-white">
                <FaLinkedin />
              </div>
              <h4 className="font-semibold">LinkedIn</h4>
              <p className="text-gray-500 text-sm">Connect with me</p>
            </a>
          </div>

          <div className="text-center mt-10">
            <a
              href="mailto:gurjarmukeshgls@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <FaEnvelope />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
