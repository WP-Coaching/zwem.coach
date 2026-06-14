'use client'

import { motion } from 'framer-motion'

export default function ScheduleSection() {
  const periods = [
    {
      id: 'sept-nov',
      title: 'September - November',
      subtitle: '10 wekelijkse lessen',
      price: '€280',
      priceSubtitle: 'incl. toegang tot zwembad & badmuts',
      dates: 'Wekelijks van 7 september - 16 november',
      datesSub: '(uitgezonderd herfstvakantie)',
      mondayLink: process.env.NEXT_PUBLIC_STRIPE_SEPT_NOV_MONDAY_LINK,
      wednesdayLink: process.env.NEXT_PUBLIC_STRIPE_SEPT_NOV_WEDNESDAY_LINK,
      startDate: '2026-09-07',
    },
    {
      id: 'jan-mrt',
      title: 'Januari - Maart',
      subtitle: '10 wekelijkse lessen',
      price: null,
      priceSubtitle: null,
      dates: 'Wekelijks van 11 januari - 22 maart',
      datesSub: '(uitgezonderd krokusvakantie)',
      mondayLink: process.env.NEXT_PUBLIC_STRIPE_JAN_MRT_MONDAY_LINK,
      wednesdayLink: process.env.NEXT_PUBLIC_STRIPE_JAN_MRT_WEDNESDAY_LINK,
      startDate: '2027-01-11',
    },
    {
      id: 'apr-jun',
      title: 'April - Juni',
      subtitle: '10 wekelijkse lessen',
      price: null,
      priceSubtitle: null,
      dates: 'Wekelijks van 12 april - 21 juni',
      datesSub: null,
      mondayLink: process.env.NEXT_PUBLIC_STRIPE_APR_JUN_MONDAY_LINK,
      wednesdayLink: process.env.NEXT_PUBLIC_STRIPE_APR_JUN_WEDNESDAY_LINK,
      startDate: '2027-04-12',
    }
  ]

  return (
    <section className="py-20 relative bg-ocean-50/30" id="courses">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark mb-6">
            Trainingsreeksen 2026-2027
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            3 verschillende periodes van telkens 10 lessen<br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=zwembad+'t+Zeepaardje,+Vilvoorde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-athletic-primary hover:text-ocean-600 transition-colors underline decoration-ocean-200 underline-offset-4 hover:decoration-ocean-600"
            >
              Zwembad 't Zeepaardje, Vilvoorde
            </a>
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {periods.map((period, index) => {
            const isMondayOpen = !!period.mondayLink;
            const isWednesdayOpen = !!period.wednesdayLink;
            const isAnyOpen = isMondayOpen || isWednesdayOpen;
            const isFuture = new Date() < new Date(period.startDate);

            return (
              <motion.div
                key={period.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-ocean overflow-hidden border-2 border-transparent hover:border-ocean-200 transition-colors flex flex-col h-full"
              >
                <div className="bg-gradient-ocean p-8 text-white relative flex flex-col min-h-[280px]">
                  <div>
                    <h3 className="text-3xl lg:text-2xl xl:text-3xl font-display font-bold mb-2 relative z-10">
                      {period.title}
                    </h3>
                    <p className="text-ocean-100 relative z-10">{period.subtitle}</p>
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="text-5xl font-bold mb-2 h-14 relative z-10">
                      {period.price ? period.price : ''}
                    </div>
                    <p className="text-sm text-ocean-100 h-5 relative z-10">
                      {period.priceSubtitle}
                    </p>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <h4 className="font-semibold text-athletic-dark border-b pb-2">📅 Praktische info</h4>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center h-6 flex-shrink-0">🗓️</span>
                        <div className="flex flex-col">
                          <span>{period.dates}</span>
                          {period.datesSub && (
                            <span className="text-gray-500">{period.datesSub}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center h-6 flex-shrink-0">📍</span>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=zwembad+'t+Zeepaardje,+Vilvoorde"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-athletic-primary transition-colors underline decoration-ocean-200 underline-offset-4 hover:decoration-athletic-primary"
                        >
                          zwembad 't Zeepaardje, Vilvoorde
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center h-6 flex-shrink-0">👥</span>
                        <span>max 10 zwemmers per lesgever</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mt-8">
                    <h4 className="font-semibold text-athletic-dark border-b pb-2">⏰ Lesmomenten</h4>
                    <div className="space-y-2 text-gray-700">
                      <div className="bg-ocean-50 p-3 rounded-lg border border-ocean-100">
                        <span className="font-medium text-athletic-primary">Maandag:</span> 7u - 8u<br/>
                        <span className="text-sm text-gray-500">Techniek & Trainingsgroep</span>
                      </div>
                      <div className="bg-ocean-50 p-3 rounded-lg border border-ocean-100">
                        <span className="font-medium text-athletic-primary">Woensdag:</span> 7u - 8u<br/>
                        <span className="text-sm text-gray-500">Techniek & Trainingsgroep</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 space-y-3">
                    {!isAnyOpen ? (
                      isFuture ? (
                        <div className="block w-full bg-ocean-50 text-athletic-primary px-4 py-3 rounded-lg font-display font-semibold text-center border-2 border-ocean-100">
                          Inschrijvingen openen binnenkort
                        </div>
                      ) : (
                        <>
                          <div className="block w-full bg-gray-100 text-gray-400 px-4 py-3 rounded-lg font-display font-semibold text-center border-2 border-gray-200 cursor-not-allowed">
                            Maandag: Volzet
                          </div>
                          <div className="block w-full bg-gray-100 text-gray-400 px-4 py-3 rounded-lg font-display font-semibold text-center border-2 border-gray-200 cursor-not-allowed">
                            Woensdag: Volzet
                          </div>
                        </>
                      )
                    ) : (
                      <>
                        {isMondayOpen ? (
                          <a
                            href={period.mondayLink}
                            className="block w-full bg-gradient-ocean text-white px-4 py-3 rounded-lg font-display font-semibold text-center shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
                          >
                            Inschrijven Maandag
                          </a>
                        ) : (
                          <div className="block w-full bg-gray-100 text-gray-400 px-4 py-3 rounded-lg font-display font-semibold text-center border-2 border-gray-200 cursor-not-allowed">
                            Maandag: Volzet
                          </div>
                        )}
                        {isWednesdayOpen ? (
                          <a
                            href={period.wednesdayLink}
                            className="block w-full bg-gradient-ocean text-white px-4 py-3 rounded-lg font-display font-semibold text-center shadow-ocean hover:shadow-athletic transition-all duration-300 hover:scale-105"
                          >
                            Inschrijven Woensdag
                          </a>
                        ) : (
                          <div className="block w-full bg-gray-100 text-gray-400 px-4 py-3 rounded-lg font-display font-semibold text-center border-2 border-gray-200 cursor-not-allowed">
                            Woensdag: Volzet
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
