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

  const indoorLinkG1 = process.env.NEXT_PUBLIC_STRIPE_SUMMERSCHOOL_INDOOR_G1_LINK
  const indoorLinkG2 = process.env.NEXT_PUBLIC_STRIPE_SUMMERSCHOOL_INDOOR_G2_LINK
  const openWaterLinkG1 = process.env.NEXT_PUBLIC_STRIPE_SUMMERSCHOOL_OPENWATER_G1_LINK
  const openWaterLinkG2 = process.env.NEXT_PUBLIC_STRIPE_SUMMERSCHOOL_OPENWATER_G2_LINK

  const isIndoorG1Open = !!indoorLinkG1
  const isIndoorG2Open = !!indoorLinkG2
  const isOpenWaterG1Open = !!openWaterLinkG1
  const isOpenWaterG2Open = !!openWaterLinkG2

  return (
    <section className="py-20 bg-ocean-50 relative" id="summer-school">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
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
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
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
                      Zwembad &apos;t Zeepaardje, Vilvoorde
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xl">👥</span>
                    <span>Max 10 zwemmers per lesgever</span>
                  </p>
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

              <div className="pt-8 mt-auto space-y-4">
                <h4 className="font-semibold text-athletic-dark border-b pb-2">⏰ Kies je groep</h4>
                <div className="space-y-3">
                  <div className="bg-ocean-50 p-4 rounded-lg border border-ocean-100 flex flex-col gap-3 hover:border-ocean-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-athletic-primary text-lg">Groep 1</div>
                        <div className="text-gray-600 text-sm">maandag t.e.m. vrijdag • 7u - 8u</div>
                      </div>
                    </div>
                    {isIndoorG1Open ? (
                      <a
                        href={indoorLinkG1}
                        className="block w-full bg-gradient-ocean text-white px-4 py-2.5 rounded-lg font-display font-semibold text-center shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
                      >
                        Inschrijven
                      </a>
                    ) : (
                      <div className="block w-full bg-gray-200 text-gray-500 px-4 py-2.5 rounded-lg font-display font-semibold text-center cursor-not-allowed">
                        Volzet
                      </div>
                    )}
                  </div>

                  <div className="bg-ocean-50 p-4 rounded-lg border border-ocean-100 flex flex-col gap-3 hover:border-ocean-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-athletic-primary text-lg">Groep 2</div>
                        <div className="text-gray-600 text-sm">maandag t.e.m. vrijdag • 9u - 10u</div>
                      </div>
                    </div>
                    {isIndoorG2Open ? (
                      <a
                        href={indoorLinkG2}
                        className="block w-full bg-gradient-ocean text-white px-4 py-2.5 rounded-lg font-display font-semibold text-center shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
                      >
                        Inschrijven
                      </a>
                    ) : (
                      <div className="block w-full bg-gray-200 text-gray-500 px-4 py-2.5 rounded-lg font-display font-semibold text-center cursor-not-allowed">
                        Volzet
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open Water Program */}
          <motion.div
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
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

              <div className="pt-8 mt-auto space-y-4">
                <h4 className="font-semibold text-athletic-dark border-b pb-2">⏰ Kies je groep</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col gap-3 hover:border-gray-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-athletic-dark text-lg">Groep 1</div>
                        <div className="text-gray-600 text-sm">maandag t.e.m. vrijdag • 12u - 13u</div>
                      </div>
                    </div>
                    {isOpenWaterG1Open ? (
                      <a
                        href={openWaterLinkG1}
                        className="block w-full bg-athletic-dark text-white px-4 py-2.5 rounded-lg font-display font-semibold text-center shadow-md hover:shadow-athletic transition-all duration-300 hover:scale-105"
                      >
                        Inschrijven
                      </a>
                    ) : (
                      <div className="block w-full bg-gray-200 text-gray-500 px-4 py-2.5 rounded-lg font-display font-semibold text-center cursor-not-allowed">
                        Volzet
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col gap-3 hover:border-gray-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-athletic-dark text-lg">Groep 2</div>
                        <div className="text-gray-600 text-sm">maandag t.e.m. vrijdag • 13u - 14u</div>
                      </div>
                    </div>
                    {isOpenWaterG2Open ? (
                      <a
                        href={openWaterLinkG2}
                        className="block w-full bg-athletic-dark text-white px-4 py-2.5 rounded-lg font-display font-semibold text-center shadow-md hover:shadow-athletic transition-all duration-300 hover:scale-105"
                      >
                        Inschrijven
                      </a>
                    ) : (
                      <div className="block w-full bg-gray-200 text-gray-500 px-4 py-2.5 rounded-lg font-display font-semibold text-center cursor-not-allowed">
                        Volzet
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
