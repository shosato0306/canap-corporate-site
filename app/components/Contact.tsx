import { Mail, Twitter, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">お問い合わせ</h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl font-semibold mb-4">代表取締役 山田太郎</p>
          <a href="mailto:yamada@canap.co.jp" className="flex items-center text-blue-600 hover:text-blue-800">
            <Mail className="w-6 h-6 mr-2" />
            yamada@canap.co.jp
          </a>
          <a
            href="https://twitter.com/canap_ceo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-600"
          >
            <Twitter className="w-6 h-6 mr-2" />
            @canap_ceo
          </a>
          <a
            href="https://github.com/canap-ceo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <Github className="w-6 h-6 mr-2" />
            canap-ceo
          </a>
          <a
            href="https://www.linkedin.com/in/canap-ceo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-700 hover:text-blue-900"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            山田太郎
          </a>
        </div>
      </div>
    </section>
  )
}

