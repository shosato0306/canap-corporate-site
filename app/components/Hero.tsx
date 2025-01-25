import Image from "next/image"
import canapLogo from "@/public/images/canap_logo.png"

export default function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-orange-200 to-red-300 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            src={canapLogo}
            alt="株式会社Canapロゴ"
            width={80}
            height={80}
            className="rounded-full shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">未来を創るITソリューション</h1>
        <p className="text-xl mb-8">株式会社Canapは、革新的なITサービスで企業の成長をサポートします</p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
          詳しく見る
        </button>
      </div>
    </section>
  )
}

