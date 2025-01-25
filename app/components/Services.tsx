import { Code, Puzzle, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12 mb-4 text-blue-500" />,
      title: "ドメイン駆動開発（DDD）",
      description: "複雑なビジネスロジックを効果的にモデル化し、柔軟で保守性の高いソフトウェアを設計します。",
    },
    {
      icon: <Puzzle className="w-12 h-12 mb-4 text-blue-500" />,
      title: "マイクロサービスアーキテクチャ",
      description: "DDDの原則に基づいて、スケーラブルで疎結合なマイクロサービスを設計・実装します。",
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-blue-500" />,
      title: "ドメインエキスパートとの協業",
      description:
        "お客様のビジネスドメインを深く理解し、ユビキタス言語を用いて効果的なコミュニケーションを実現します。",
    },
  ]

  return (
    <section id="services" className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">ドメイン駆動開発のエキスパート</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

