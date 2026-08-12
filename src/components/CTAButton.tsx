'use client'

import { motion } from 'framer-motion'

export default function CTAButton() {
  const ctas = [
    {
      label: 'Summer School',
      detail: '10 - 14 augustus',
      target: 'summer-school',
    },
    {
      label: 'Lessenreeks',
      detail: 'Vanaf september 2026',
      target: 'courses',
    },
    {
      label: 'Open water training',
      detail: '26 augustus · 19u',
      target: 'open-water-training',
    },
  ]

  return (
    <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
      {ctas.map((cta) => (
        <motion.button
          key={cta.target}
          onClick={() => {
            document.getElementById(cta.target)?.scrollIntoView({
              behavior: 'smooth',
            })
          }}
          className="min-w-56 px-7 py-4 rounded-lg font-display shadow-ocean bg-gradient-ocean text-white hover:shadow-athletic transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="block text-lg font-semibold">{cta.label}</span>
          <span className="block mt-1 text-sm font-normal text-ocean-100">
            {cta.detail}
          </span>
        </motion.button>
      ))}
    </div>
  )
}
