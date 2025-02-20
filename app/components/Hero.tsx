"use client"

import Image from "next/image"
import canapLogo from "@/public/images/canap_logo.png"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    servicesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full min-h-screen py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-white text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
      <div className="absolute inset-0 bg-[url('/images/dots.svg')] bg-repeat opacity-10" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-32 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <Image
            src={canapLogo}
            alt="株式会社Canapロゴ"
            width={120}
            height={120}
            className="rounded-full shadow-md hover:shadow-lg transition-all duration-500"
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
        >
          未来を創るITソリューション
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          株式会社Canapは、ITサービスの開発および成長をサポートします
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          <button
            onClick={scrollToServices}
            className="bg-gradient-to-r from-amber-500 to-orange-400 text-white px-10 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            詳しく見る
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

