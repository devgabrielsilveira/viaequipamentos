import { Button } from "@/components/ui/button"
import { ArrowRight, Thermometer, Snowflake, Flame } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Tecnologia e precisão em controle <span className="text-primary">térmico industrial</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Chillers e termorreguladores projetados para máxima eficiência energética.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#produtos">
                <Button size="lg" className="px-8" variant="default">
                  Ver Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <a href="#fale-conosco">
                <Button variant="outline" size="lg" className="px-8 bg-transparent">
                  Solicitar Orçamento
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl p-8">
              <img
                src="/fachada-via.png"
                alt="Equipamentos industriais de resfriamento e aquecimento"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}