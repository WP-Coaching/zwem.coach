'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import CTAButton from './CTAButton'

const VIDEO_LOAD_TIMEOUT = 5000
const SCROLL_INDICATOR_Y_RANGE = [0, 5, 0]
const SCROLL_DOT_Y_RANGE = [0, 12, 0]

export default function HeroSection() {
  const videoMp4Url = process.env.NEXT_PUBLIC_HERO_VIDEO_URL
  const videoWebmUrl = videoMp4Url?.replace('.mp4', '.webm')
  const [showVideo, setShowVideo] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoLoaded) {
      return
    }

    // Set a timeout to show fallback if video doesn't load within 5 seconds
    const timeout = setTimeout(() => {
      setShowVideo(false)
    }, VIDEO_LOAD_TIMEOUT)

    return () => {
      clearTimeout(timeout)
    }
  }, [videoLoaded])

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
  }

  const handleVideoError = () => {
    setShowVideo(false)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {showVideo ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={handleVideoLoaded}
              onCanPlay={handleVideoLoaded}
              onError={handleVideoError}
              className="absolute inset-0 w-full h-full object-cover"
            >
              {videoWebmUrl && <source src={videoWebmUrl} type="video/webm" />}
              {videoMp4Url && <source src={videoMp4Url} type="video/mp4" />}
            </video>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </>
        ) : (
          /* Fallback: Decorative background elements */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-50 to-ocean-100"></div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
              <div
                className="absolute top-40 right-10 w-72 h-72 bg-athletic-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
                style={{ animationDelay: '2s' }}
              ></div>
              <div
                className="absolute -bottom-8 left-1/2 w-72 h-72 bg-ocean-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
                style={{ animationDelay: '4s' }}
              ></div>
            </div>
            {/* Darker overlay for better text readability with light background */}
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        )}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="zwem.coach"
                  width={600}
                  height={150}
                  className="w-80 md:w-[600px] h-auto drop-shadow-lg"
                  priority
                />
              </div>
              <span className="text-3xl md:text-5xl lg:text-7xl text-athletic-accent block break-words">
                Technieklessen crawl Vilvoorde
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-md">
              Met Olympische expertise van Pieter Timmers en Ward Pellegrims
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-athletic-accent font-display font-semibold mb-8 drop-shadow-md"
            >
              Van beginners tot gevorderden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <CTAButton />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
          animate={{ translateY: SCROLL_INDICATOR_Y_RANGE }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ translateY: SCROLL_DOT_Y_RANGE }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
