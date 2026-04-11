'use client'

import { motion } from 'framer-motion'

export default function ProgramSection() {
  const features = [
    {
      icon: '👥',
      title: 'Doelgroep',
      description: '15 jaar en ouder.',
    },
    {
      icon: '📊',
      title: 'Techniek & Training',
      description:
        'Techniekgroep: Voor nieuwe deelnemers, focus op zwemtechnische vaardigheden. Trainingsgroep: Voor wie de reeks reeds doorlopen heeft, focus op techniek en snelheid.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Kleine groepen',
      description: 'Maximaal 10 zwemmers per lesgever waardoor individuele bijsturing mogelijk blijft.',
    },
  ]

  const ANIMATION_STAGGER_DELAY = 0.2

  return (
    <section className="py-20 relative" id="programma">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark mb-6">
            Programma
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Een gestructureerd programma dat je helpt om je crawltechniek te
            verbeteren, ongeacht je huidige niveau.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * ANIMATION_STAGGER_DELAY }}
              className="bg-white rounded-xl p-8 shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-display font-semibold text-athletic-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
