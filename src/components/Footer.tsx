'use client'

import { motion } from 'framer-motion'


export default function Footer() {
  return (
    <footer className="bg-athletic-dark text-white py-16 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-ocean-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-display font-semibold text-xl mb-3">
                zwem.coach
              </h3>
              <p className="text-gray-400 text-sm">Technieklessen Crawl Vilvoorde</p>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-3">Contact</h4>
              <div className="space-y-2">
                <a
                  href="mailto:info@zwem.coach"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-athletic-accent transition-colors"
                  aria-label="Stuur ons een email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>info@zwem.coach</span>
                </a>
                <a
                  href="https://www.instagram.com/zwem.coach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-athletic-accent transition-colors"
                  aria-label="Volg ons op Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@zwem.coach</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/zwemcoach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-athletic-accent transition-colors"
                  aria-label="Volg ons op LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>zwem.coach</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-3">Locatie</h4>
              <p className="text-gray-400 text-sm">
                Zwembad 't Zeepaardje
                <br />
                Heldenplein 13
                <br />
                1800 Vilvoorde
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center md:text-left text-sm text-gray-500 md:flex md:items-center md:justify-between md:gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span className="block md:inline">
                © {new Date().getFullYear()} zwem.coach - Alle rechten
                voorbehouden
              </span>
              <span className="hidden md:inline text-gray-600">•</span>
              <span>
                Website door{' '}
                <a
                  href="https://www.cotersus.be/"
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cotersus
                </a>
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
              <a
                href="/algemene-voorwaarden"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Algemene Voorwaarden
              </a>
              <span className="hidden md:inline text-gray-600">•</span>
              <a
                href="/privacybeleid"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacyverklaring
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
