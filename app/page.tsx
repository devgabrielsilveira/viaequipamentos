import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SetoresSection from "@/components/setores-section"
import ProdutosSection from "@/components/produtos-section"
import QuemSomosSection from "@/components/quem-somos-section"
import ContatoSection from "@/components/contato-section"
import FaleConoscoSection from "@/components/fale-conosco-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SetoresSection />
        <ProdutosSection />
        <QuemSomosSection />
        <ContatoSection />
        <FaleConoscoSection />  
      </main>
      <Footer />
    </div>
  )
}