'use client'

import { motion } from 'framer-motion'

export default function PricingSection() {
  const requiredGear = [
    'Zwembril',
    'Korte zwemvinnen',
    'Frontale snorkel',
    'Pullbuoy',
    'Aansluitende zwemkledij',
  ]

  const starterPackageGear = [
    'Zwembril',
    'Korte zwemvinnen',
    'Frontale snorkel',
    'Pullbuoy',
  ]

  return (
    <section className="py-20 bg-white relative" id="prijs">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark mb-6">
            Benodigdheden
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8">
            {/* Required Gear */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border-2 border-ocean-200 rounded-xl p-8"
            >
              <h4 className="text-2xl font-display font-semibold text-athletic-dark mb-6">
                🎒 Benodigdheden
              </h4>
              <p className="text-gray-600 mb-4">
                Zelf te voorzien voor de lessen:
              </p>
              <ul className="space-y-3">
                {requiredGear.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-athletic-accent mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Starter Package */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-ocean-50 border-2 border-athletic-accent rounded-xl p-8"
            >
              <h4 className="text-2xl font-display font-semibold text-athletic-dark mb-6">
                📦 Optioneel startpakket
              </h4>
              <p className="text-gray-700 mb-4">
                Heb je nog geen materiaal? Koop een startpakket bij
                inschrijving:
              </p>
              <ul className="space-y-3 mb-6">
                {starterPackageGear.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-athletic-success mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-athletic-dark mb-1">
                  €110
                </p>
                <p className="text-sm text-gray-600">
                  Bij inschrijving
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
