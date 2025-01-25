import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

