'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CTAButton() {
  const [showModal, setShowModal] = useState(false)

  const periods = [
    {
      id: 'sept-nov',
      title: 'Periode 1: Sept - Nov',
      mondayLink: process.env.NEXT_PUBLIC_STRIPE_SEPT_NOV_MONDAY_LINK,
      wednesdayLink: process.env.NEXT_PUBLIC_STRIPE_SEPT_NOV_WEDNESDAY_LINK,
    },
    {
      id: 'jan-mrt',
      title: 'Periode 2: Jan - Mrt',
      mondayLink: process.env.NEXT_PUBLIC_STRIPE_JAN_MRT_MONDAY_LINK,
      wednesdayLink: process.env.NEXT_PUBLIC_STRIPE_JAN_MRT_WEDNESDAY_LINK,
    },
    {
      id: 'apr-jun',
      title: 'Periode 3: Apr - Jun',
      mondayLink: process.env.NEXT_PUBLIC_STRIPE_APR_JUN_MONDAY_LINK,
      wednesdayLink: process.env.NEXT_PUBLIC_STRIPE_APR_JUN_WEDNESDAY_LINK,
    }
  ]

  const isAnyOpen = periods.some(p => !!p.mondayLink || !!p.wednesdayLink)

  return (
    <motion.button
      onClick={() => {
        const coursesSection = document.getElementById('courses')
        if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: 'smooth' })
        }
      }}
      className={`px-8 py-4 rounded-lg font-display font-semibold text-lg shadow-ocean transition-all duration-300 ${
        isAnyOpen
          ? 'bg-gradient-ocean text-white hover:shadow-athletic hover:scale-105'
          : 'bg-gradient-ocean text-white hover:shadow-athletic hover:scale-105'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Inschrijven
    </motion.button>
  )
}
