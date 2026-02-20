import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Globe } from "lucide-react"

export default function QuemSomosSection() {
  const stats = [
    { icon: Clock, label: "Anos de Experiência", value: "15" },
    { icon: Users, label: "Clientes Atendidos", value: "1000+" },
    { icon: Award, label: "Estados Presentes", value: "23" },
    { icon: Globe, label: "Países Presentes", value: "10" },
  ]

  const valores = [
    {
      titulo: "Missão",
      descricao: "Oferecer ao mercado soluções para aquecimento e resfriamento em processos industriais.",
    },
    {
      titulo: "Visão",
      descricao: "Ser reconhecida como uma empresa competitiva com excelência e domínio tecnológico na geração de soluções para processos industriais.",
    },
    {
      titulo: "Valores",
      descricao: "Garantir a satisfação dos clientes com responsabilidade técnica, mantendo a excelência na qualidade de produtos e serviços.",
    },
    {
      titulo: "Inovação",
      descricao: "Desenvolver constantemente soluções avançadas, aprimorando processos e antecipando as necessidades do mercado industrial.",
    },
  ]

  return (
    <section id="quem-somos-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                Sobre a Via Equipamentos
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Referência em Soluções Térmicas Industriais</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Há 15 anos, entregamos soluções inteligentes para controle térmico, unindo tecnologia avançada, eficiência energética e compromisso com a sustentabilidade.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Nossos Diferenciais</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {valores.map((valor, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-primary">{valor.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{valor.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/foto-quem-somos.png"
                alt="Instalações da ThermoControl"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-3 p-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}