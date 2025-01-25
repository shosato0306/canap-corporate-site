import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/canap_logo.png"
            alt="株式会社Canapロゴ"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-2xl font-bold text-gray-800">株式会社Canap</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="#services" className="text-gray-600 hover:text-gray-900">
              事業内容
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

