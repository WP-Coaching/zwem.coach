'use client'

import { motion } from 'framer-motion'

export default function SummerSchoolSection() {
  const indoorGear = [
    'Zwembril',
    'Korte zwemvinnen',
    'Frontale snorkel',
    'Pullbuoy',
    'Aansluitende zwemkledij',
  ]

  const openWaterGear = [
    'Zwembril',
    'Wetsuit',
    'Safety buoy (eventueel via ons te verkrijgen)',
  ]

  const indoorLink = process.env.NEXT_PUBLIC_STRIPE_SUMMERSCHOOL_INDOOR_LINK
  const openWaterLink = process.env.NEXT_PUBLIC_STRIPE_SUMMERSCHOOL_OPENWATER_LINK

  const isIndoorOpen = !!indoorLink
  const isOpenWaterOpen = !!openWaterLink

  return (
    <section className="py-20 bg-ocean-50 relative" id="summer-school">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-athletic-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
            Nieuw
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark mb-6">
            Zwem.coach Summer School
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Geef je techniek deze zomer een flinke boost met onze intensieve Summer School. Kies tussen indoor techniektraining of open water vaardigheden.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Indoor Program */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full bg-white rounded-2xl shadow-ocean overflow-hidden border-2 border-transparent hover:border-ocean-200 transition-colors"
          >
            <div className="bg-gradient-ocean p-8 text-white">
              <h3 className="text-3xl font-display font-bold mb-2">
                Indoor Editie
              </h3>
              <p className="text-ocean-100 mb-6">Focus op techniek: alle niveaus</p>
              <div className="text-5xl font-bold mb-2">€149</div>
              <p className="text-sm text-ocean-100">incl. toegang tot zwembad</p>
            </div>
            
            <div className="flex flex-col flex-grow p-8">
              <div className="space-y-8 flex-grow">
                <div className="space-y-4">
                <h4 className="font-semibold text-athletic-dark border-b pb-2">📅 Praktische info</h4>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xl">🗓️</span>
                    <span>10 - 14 augustus</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xl">📍</span>
                    <a href="https://www.google.com/maps/search/?api=1&query=Zwembad+%27t+Zeepaardje%2C+Vilvoorde" target="_blank" rel="noopener noreferrer" className="hover:text-athletic-accent hover:underline transition-colors">
                      Zwembad 't Zeepaardje, Vilvoorde
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xl">👥</span>
                    <span>Max 10 zwemmers per lesgever</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-athletic-dark border-b pb-2">⏰ Twee groepen</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="bg-ocean-50 p-3 rounded-lg border border-ocean-100">
                    <span className="font-medium text-athletic-primary">Groep 1:</span> maandag t.e.m. vrijdag 7u - 8u
                  </div>
                  <div className="bg-ocean-50 p-3 rounded-lg border border-ocean-100">
                    <span className="font-medium text-athletic-primary">Groep 2:</span> maandag t.e.m. vrijdag 9u - 10u
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-athletic-dark border-b pb-2">🎒 Benodigdheden</h4>
                <ul className="space-y-2">
                  {indoorGear.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center text-athletic-accent text-xl leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>

              <div className="pt-8 mt-auto">
                {isIndoorOpen ? (
                  <a
                    href={indoorLink}
                    className="block w-full bg-gradient-ocean text-white px-6 py-4 rounded-lg font-display font-semibold text-center shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
                  >
                    Inschrijven
                  </a>
                ) : (
                  <div className="block w-full bg-gray-100 text-gray-400 px-6 py-4 rounded-lg font-display font-semibold text-center border-2 border-gray-200 cursor-not-allowed">
                    Inschrijvingen gesloten
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Open Water Program */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full bg-white rounded-2xl shadow-ocean overflow-hidden border-2 border-transparent hover:border-athletic-accent transition-colors relative"
          >
            <div className="bg-athletic-dark p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full"></div>
              <h3 className="text-3xl font-display font-bold mb-2 relative z-10">
                Open Water Editie
              </h3>
              <p className="text-gray-300 mb-6 relative z-10">Focus op open water technieken: alle niveaus</p>
              <div className="text-5xl font-bold mb-2 relative z-10">€149</div>
              <p className="text-sm text-gray-400 relative z-10">incl. toegang tot domein</p>
            </div>
            
            <div className="flex flex-col flex-grow p-8">
              <div className="space-y-8 flex-grow">
                <div className="space-y-4">
                <h4 className="font-semibold text-athletic-dark border-b pb-2">📅 Praktische info</h4>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xl">🗓️</span>
                    <span>10 - 14 augustus</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xl">📍</span>
                    <a href="https://www.google.com/maps/search/?api=1&query=Sport+Vlaanderen+Willebroek+-+Hazewinkel" target="_blank" rel="noopener noreferrer" className="hover:text-athletic-accent hover:underline transition-colors">
                      Sport Vlaanderen Willebroek - Hazewinkel
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xl">👥</span>
                    <span>Max 10 zwemmers per lesgever</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-athletic-dark border-b pb-2">⏰ Twee groepen</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <span className="font-medium text-athletic-dark">Groep 1:</span> maandag t.e.m. vrijdag 12u - 13u
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <span className="font-medium text-athletic-dark">Groep 2:</span> maandag t.e.m. vrijdag 13u - 14u
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-athletic-dark border-b pb-2">🎒 Benodigdheden</h4>
                <ul className="space-y-2">
                  {openWaterGear.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center text-athletic-accent text-xl leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>

              <div className="pt-8 mt-auto">
                {isOpenWaterOpen ? (
                  <a
                    href={openWaterLink}
                    className="block w-full bg-athletic-dark text-white px-6 py-4 rounded-lg font-display font-semibold text-center shadow-md hover:shadow-athletic transition-all duration-300 hover:scale-105"
                  >
                    Inschrijven
                  </a>
                ) : (
                  <div className="block w-full bg-gray-100 text-gray-400 px-6 py-4 rounded-lg font-display font-semibold text-center border-2 border-gray-200 cursor-not-allowed">
                    Inschrijvingen gesloten
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
