import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import FaleConoscoSection from "@/components/fale-conosco-section"
import ContatoSection from "@/components/contato-section"

export default function QuemSomosPage() {
  // Placeholder images for the gallery - user will replace with actual photos
  const galleryImages = [
    {
      id: 1,
      src: "/foto-interna.png",
      alt: "Sistemas de aquecimento",
      title: "Linha de montagem",
    },
    {
      id: 2,
      src: "/foto-linha.png",
      alt: "Máquinas de resfriamento industrial",
      title: "Equipamentos de resfriamento",
    },
    {
      id: 3,
      src: "/foto-instalacao.png",
      alt: "Instalações da empresa",
      title: "Nossas instalações",
    },
    {
      id: 4,
      src: "/foto-projetista.jpg",
      alt: "Engenheiros em reunião",
      title: "Desenvolvimento de projetos",
    },
    {
      id: 5,
      src: "/fachada-via.png",
      alt: "Sistemas de aquecimento",
      title: "Portão de entrada",
    },
    {
      id: 6,
      src: "/foto-montagem.png",
      alt: "Instalação de equipamentos",
      title: "Etapa de testes",
    },
    {
      id: 7,
      src: "/foto-tch.png",
      alt: "Equipe técnica especializada",
      title: "Linha TCH",
    },
    {
      id: 8,
      src: "/foto-clientes.png",
      alt: "Cliente satisfeito",
      title: "Clientes satisfeitos",
    },
    {
      id: 9,
      src: "/foto-feira.png",
      alt: "Certificações e prêmios",
      title: "Feiras",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Quem Somos</h1>

          <div className="mt-8 flex justify-center">
            <img 
              src="/foto-equipe.png" 
              alt="Equipe Via Equipamentos" 
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md mb-10"
            />
          </div>



          <p className="text-left text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Fundada em 2010 por dois sócios em uma garagem no Rio Grande do Sul, a Via Equipamentos nasceu com 
            o propósito de oferecer soluções eficientes e de alta qualidade para o controle térmico em processos 
            industriais. 

            <br /><br />
            Unindo o conhecimento técnico e a visão empreendedora de seus fundadores, a empresa iniciou sua trajetória 
            no segmento da refrigeração industrial com foco em inovação, confiabilidade e atendimento personalizado.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Description */}
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <p className="text-left text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Desde então, a Via Equipamentos se consolidou como uma referência no mercado nacional, 
              oferecendo uma linha completa de equipamentos voltados para o aquecimento, resfriamento 
              e controle de temperatura em processos industriais — como chillers, termoreguladores, 
              unidades de água gelada e soluções customizadas. Todos os produtos são desenvolvidos com 
              tecnologia de ponta, componentes de alta performance e foco na eficiência energética.

              <br /><br />
              Com sede em São Leopoldo (RS), a empresa mantém seu compromisso com a qualidade, investindo 
              constantemente em pesquisa, desenvolvimento e no aprimoramento dos seus processos. Além disso, 
              oferece suporte técnico especializado e atendimento próximo, garantindo a satisfação dos seus 
              clientes em todo o Brasil.
              <br /><br />

              A Via Equipamentos é movida por inovação, responsabilidade técnica e pelo objetivo constante de 
              evoluir junto com a indústria brasileira.
            </p>

          </div>
        </div>

        <FaleConoscoSection />
        <ContatoSection />
      </main>

      <Footer />
    </div>
  )
}
