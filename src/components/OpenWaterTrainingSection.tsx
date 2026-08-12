'use client'

import { motion } from 'framer-motion'

const registrationLink =
  process.env.NEXT_PUBLIC_STRIPE_OPEN_WATER_TRAINING_LINK
const locationLink =
  'https://www.google.com/maps/search/?api=1&query=Sport+Vlaanderen+Willebroek+-+Hazewinkel'

const equipment = [
  'Wetsuit',
  'Brilletje',
  'Safety Buoy (op aanvraag bij ons te verkrijgen)',
]

export default function OpenWaterTrainingSection() {
  return (
    <section
      id="open-water-training"
      aria-labelledby="open-water-training-title"
      className="relative overflow-hidden bg-athletic-dark py-20 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-ocean-700/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-athletic-accent/20 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-block rounded-full bg-athletic-accent px-4 py-1 text-sm font-bold uppercase tracking-wider text-athletic-dark">
              Eenmalige training
            </div>
            <h2
              id="open-water-training-title"
              className="mb-6 font-display text-4xl font-bold md:text-5xl"
            >
              Open water training
            </h2>
            <p className="max-w-2xl text-xl leading-relaxed text-gray-200">
              Bereid je voor op je volgende openwateruitdaging tijdens een
              gerichte training in Hazewinkel.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ocean-300">
                  Wanneer
                </p>
                <p className="mt-1 text-lg font-semibold">
                  Woensdag 26 augustus
                </p>
                <p className="text-gray-300">19u00</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ocean-300">
                  Waar
                </p>
                <a
                  href={locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-lg font-semibold underline decoration-ocean-400 underline-offset-4 transition-colors hover:text-ocean-300"
                >
                  Hazewinkel Willebroek
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ocean-300">
                  Prijs
                </p>
                <p className="mt-1 text-lg font-semibold">€30</p>
                <p className="text-gray-300">incl. btw</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-white p-8 text-athletic-dark shadow-2xl"
          >
            <h3 className="mb-5 border-b border-gray-200 pb-3 font-display text-2xl font-bold">
              Benodigdheden
            </h3>
            <ul className="space-y-3 text-gray-700">
              {equipment.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 text-xl leading-none text-athletic-accent"
                  >
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {registrationLink ? (
              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-lg bg-gradient-ocean px-4 py-3 text-center font-display font-semibold text-white shadow-ocean transition-all duration-300 hover:scale-105 hover:shadow-athletic"
              >
                Inschrijven voor €30
              </a>
            ) : (
              <div className="mt-8 block w-full rounded-lg bg-gray-100 px-4 py-3 text-center font-display font-semibold text-gray-500">
                Inschrijven binnenkort beschikbaar
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
