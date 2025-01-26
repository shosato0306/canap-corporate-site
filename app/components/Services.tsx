"use client"

import { Code, Puzzle, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-16 h-16 text-blue-500" />,
      title: "ドメイン駆動開発（DDD）",
      description: "複雑なビジネスロジックを効果的にモデル化し、柔軟で保守性の高いソフトウェアを設計します。",
    },
    {
      icon: <Puzzle className="w-16 h-16 text-blue-500" />,
      title: "マイクロサービスアーキテクチャ",
      description: "DDDの原則に基づいて、スケーラブルで疎結合なマイクロサービスを設計・実装します。",
    },
    {
      icon: <Users className="w-16 h-16 text-blue-500" />,
      title: "ドメインエキスパートとの協業",
      description:
        "お客様のビジネスドメインを深く理解し、ユビキタス言語を用いて効果的なコミュニケーションを実現します。",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="services" className="w-full py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          ドメイン駆動開発のエキスパート
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-50 rounded-xl p-4 mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

