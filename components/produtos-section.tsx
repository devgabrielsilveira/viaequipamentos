import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Snowflake, Flame, Zap, Settings, Shield } from "lucide-react"
import Link from "next/link"

export default function ProdutosSection() {
  const produtos = [
    {
      id: 1,
      codigo: "CH",
      nome: "Chiller",
      descricao: "Sistema de resfriamento de água.",
      categoria: "Linha Chiller - Resfriamento",
      icon: Snowflake,
      features: [
        "Capacidade de 60.000 a 1.200.000 kcal/h",
        "Compressor Scroll (Danfoss ou Emerson)",
        "Condensador micro-canal aletado",
        "Evaporador de placas brasado de alto rendimento",
        "Bomba centrífuga Grundfos ou Ebara"

      ],
      image: "/chiller-a.png",
    },
    {
      id: 2,
      codigo: "CV",
      nome: "Cervejaria",
      descricao: "Resfriamento de água ou solução hidroalcoólica",
      categoria: "Linha LC - Cervejaria",
      icon: Thermometer,
      features: [
        "Gabinete metálico em aço inox AISI 304 escovado",
        "Compressor Scroll (Danfoss ou Emerson)",
        "Condensador micro-canal aletado",
        "Evaporador de placas brasado de alto rendimento",
        "Controlador programável Schneider"

      ],
      image: "/linha-cervejaria-a.png",
    },
    {
      id: 3,
      codigo: "DRY",
      nome: "Dry Cooler",
      descricao: "Sistema de resfriamento a ar.",
      categoria: "Linha DRY - Resfriamento",
      icon: Zap,
      features: [
      
        "Economia de água",
        "Resfriamento adiabático",
        "Baixo consumo de energia",
        "Não utiliza compressores nem produtos químicos",
        "Alta confiabilidade e durabilidade superior"
    
      ],
      image: "/dry-cooler-a.png",
    },
    {
      id: 4,
      codigo: "FR",
      nome: "Filtragem e Resfriamento de Óleo",
      descricao: "Filtragem e resfriamento de óleo industrial.",
      categoria: "Linhas F e FR - Filtragem",
      icon: Shield,
      features: [
        "Filtragem dupla com elementos de 5 microns",
        "Alta eficiência na retenção de impurezas",
        "Capacidades de 9.000 a 15.000 kcal/h",
        "Melhora desempenho e vida útil das ferramentas",
        "Opções de resfriamento direto ou por trocador de calor"
      ],
      image: "/filtro-resfriamento-a.png",
    },
    {
      id: 5,
      codigo: "GA",
      nome: "Unidade de Água Gelada",
      descricao: "Sistema de resfriamento por água gelada.",
      categoria: "Linha GA - Resfriamento",
      icon: Snowflake,
      features: [
        "Gabinete metálico com tanque rotomoldado",
        "Compressor Scroll e ",
        "Placas e bomba centrífuga",
        "Controlador programável",
        "Condensador micro-canal aletado"
      ],
      image: "/unidade-ga-a.png",
    },
    {
      id: 6,
      codigo: "RA",
      nome: "Resfriador de Ar",
      descricao: "Controle térmico do ar.",
      categoria: "Linha RA - Resfriamento",
      icon: Thermometer,
      features: [
        "Controle térmico preciso", 
        "Garante uniformidade na produção",
        "Melhora brilho qualidade do filme", 
        "Trocador de calor aletado em cobre/alumínio",
        "Alta durabilidade"
      ],
      image: "/resfriador-ar-a.png",
    },
    {
      id: 7,
      codigo: "TCH",
      nome: "Termochiller",
      descricao: "Sistema avançado de controle térmico.",
      categoria: "Linha TCH - Controle Térmico",
      icon: Settings,
      features: [
        "Circuito de água gelada",
        "Circuito de água quente",
        "Condensador micro-canal", 
        "Bomba centrífuga Grundfoss", 
        "Controlador alarmes de segurança"
      ],
      image: "/termochiller-a.png",
    },
    {
      id: 8,
      codigo: "TR",
      nome: "Termoregulador",
      descricao: "Controle térmico para moldes e processos.",
      categoria: "Linha TR - Controle Térmico",
      icon: Flame,
      features: [
        "Capacidades de 3 kW a 50 kW", 
        "Faixa de 20 °C a 120 °C, ",
        "Estrutura em aço carbono", 
        "Sistema de resfriamento com trocador de calor",
        "Componentes de alta qualidade"
      ],
      image: "/termoregulador-a.png",
    },
    {
      id: 9,
      codigo: "TRE",
      nome: "Torre de Resfriamento",
      descricao: "Sistemas de dissipação de calor da água.",
      categoria: "Linha TRE - Resfriamento",
      icon: Thermometer,
      features: [
        "Capacidades de 20 a 60 m³/h", 
        "Estrutura cortada a laser e desmontável", 
        "Acabamento resistente à corrosão", 
        "Ventilador axial EBM", 
        "Retirada de calor em contracorrente"
      ],
      image: "/torre-a.png",
    },
  ]

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case "Linha Chiller - Resfriamento":
        return "bg-blue-100 text-blue-800"
      case "Linha DRY - Resfriamento":
        return "bg-blue-100 text-blue-800"
      case "Linha RA - Resfriamento":
        return "bg-blue-100 text-blue-800"
      case "Linha GA - Resfriamento":
        return "bg-blue-100 text-blue-800"
      case "Linha TRE - Resfriamento":
        return "bg-blue-100 text-blue-800"
      case "Aquecimento":
        return "bg-orange-100 text-orange-800"
      case "Linha TCH - Controle Térmico":
        return "bg-green-100 text-green-800"
      case "Linha TR - Controle Térmico":
        return "bg-green-100 text-green-800"
      case "Linha LC - Cervejaria":
        return "bg-yellow-100 text-yellow-800"
      case "Linhas F e FR - Filtragem":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Conheça nossos produtos</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => {
            const IconComponent = produto.icon
            return (
              <Card key={produto.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={produto.image || "/placeholder.svg"}
                    alt={produto.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(produto.categoria)}>{produto.categoria}</Badge>
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{produto.nome}</CardTitle>
                  <CardDescription className="text-base">{produto.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Diferenciais:</h4>
                      <ul className="space-y-1">
                        {produto.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/produtos/${produto.codigo.toLowerCase()}`}>
                      <Button className="w-full bg-transparent" variant="outline">
                        Saiba Mais
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#fale-conosco">
            <Button
              variant="outline"
              size="lg"
              className="px-8 bg-[#d25703] text-white border-[#d25703] hover:bg-[#f38636] hover:border-[#f38636]"
            >
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}