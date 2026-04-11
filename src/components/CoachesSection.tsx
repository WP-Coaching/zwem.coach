'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CoachesSection() {
  return (
    <section className="py-20 bg-white relative" id="coaches">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark mb-6">
            Coaches
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Train met Olympisch talent en expertise van het hoogste niveau
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Pieter Timmers */}
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pieter.jpg"
                  alt="Pieter Timmers - Olympisch zilvermedaillewinnaar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold text-athletic-primary mb-4">
                Pieter Timmers
              </h3>
              <h4 className="text-xl font-display font-semibold text-gray-700 mb-6">
                Van Olympisch zilver tot jouw coach
              </h4>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Maak kennis met Pieter Timmers, een naam die synoniem staat
                  voor Belgische zwemgeschiedenis. Als een van de meest
                  succesvolle olympiërs van het land, heeft Pieter de topsport
                  op het allerhoogste niveau beleefd.
                </p>

                <p>
                  Het absolute hoogtepunt van zijn carrière was het behalen van
                  de{' '}
                  <strong>zilveren medaille op de 100 meter vrije slag</strong>{' '}
                  tijdens de Olympische Spelen van Rio de Janeiro in 2016, hét koninginnennummer in het zwemmen. Een
                  prestatie die hem op het wereldtoneel plaatste.
                </p>

                <p>
                  Naast dit historisch Olympisch succes is Pieter meervoudig
                  Belgisch recordhouder en behaalde hij diverse medailles op
                  Europese kampioenschappen. Zijn carrière werd gekenmerkt door
                  discipline, een ongeëvenaarde techniek en een diepe passie
                  voor het water.
                </p>

                <div className="bg-ocean-50 rounded-lg p-6 mt-6">
                  <h5 className="font-display font-semibold text-athletic-primary mb-3">
                    Waarom lessen bij Pieter?
                  </h5>
                  <p>
                    Bij zwem.coach krijg je niet zomaar zwemles; je leert van
                    een Olympiër. Pieter vertaalt de complexe technieken van de
                    topsport naar haalbare doelen voor elk niveau. Of je nu je
                    crawl wil perfectioneren, efficiënter wil leren zwemmen of
                    je eerste baantjes trekt, Pieter biedt persoonlijke
                    begeleiding met de precisie van een topsporter en het geduld
                    van een coach.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ward Pellegrims */}
          <motion.div
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-display font-bold text-athletic-primary mb-4">
                Ward Pellegrims
              </h3>
              <h4 className="text-xl font-display font-semibold text-gray-700 mb-6">
                Onderdeel van het Olympische succesteam
              </h4>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Achter elke topsporter staat een team van topcoaches. Maak
                  kennis met Ward Pellegrims, een coach met jarenlange ervaring
                  in de Belgische zwem- en triatlonwereld.
                </p>

                <p>
                  Ward maakte deel uit van het{' '}
                  <strong>
                    coachingteam van Olympisch medaillewinnaar Pieter Timmers
                  </strong>
                  , waarbij hij Pieter begeleidde op zijn indrukwekkende traject
                  naar de historische zilveren medaille op de 100m vrije slag
                  tijdens de Olympische Spelen van Rio de Janeiro in 2016.
                </p>

                <p>
                  Zijn expertise gaat breder dan het elitezwemmen. Met meer
                  dan 15 jaar ervaring en een Master in de Sportwetenschappen,
                  is Ward een autoriteit in performance coaching voor
                  duursporten. Hij specialiseert zich in het coachen van zowel
                  zwemmers als triatleten van elk niveau.
                </p>

                <div className="bg-ocean-50 rounded-lg p-6 mt-6">
                  <h5 className="font-display font-semibold text-athletic-primary mb-3">
                    Waarom lessen bij Ward?
                  </h5>
                  <p>
                    Ervaring op het hoogste niveau van het zwemmen en ook in de
                    totaalbegeleiding van agegroup triatleten en beginnende
                    zwemmers maakt van Ward de ideale coach om in het zwembad
                    mee aan de slag te gaan. Ward combineert
                    wetenschappelijke kennis met jarenlange praktijkervaring aan
                    de wereldtop.
                  </p>
                  <p className="mt-3">
                    Of je nu je crawltechniek wil leren of verfijnen, of
                    traint voor je eerste triatlon, Ward brengt de inzichten van
                    Olympisch niveau naar jouw training. Hij gelooft niet in een
                    &apos;one-size-fits-all&apos; methode, maar in de kracht van
                    technische perfectie en een gepersonaliseerde trainingsaanpak.

                  </p>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ward.jpeg"
                  alt="Ward Pellegrims - Olympisch Coach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
