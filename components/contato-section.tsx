import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react"

export default function ContatoSection() {
  const horarios = [
    { dia: "Segunda a Sexta", horario: "07:30 às 17:30" },
    { dia: "Finais de Semana", horario: "Fechado" },
  ]

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Nossos contatos</h2>
        </div>


        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle>Horários de Atendimento</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {horarios.map((horario, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="font-medium">{horario.dia}</span>
                    <span className="text-muted-foreground">{horario.horario}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-accent font-medium">
                  🌎 Atendimento em todo o Brasil
                </p>
              </div>

              <div>
                <h4 className="mt-6 font-medium mb-2">Redes Sociais</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>Instagram: @viaequipamentos</div>
                  <div>LinkedIn: company/viaequipamentos</div>
                  <div>Facebook: Via Equipamentos</div>
              </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informações de contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Comercial</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>📱+55 (51) 99359-4652</div>
                  <div>comercial@viaequipamentos.com.br</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Administração</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>📞+55 (51) 3592-0007</div>
                  <div>📱+55 (51) 99359-4652</div>
                  <div>contato@viaequipamentos.com.br</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Assistência</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>📱+55 (51) 99359-6137</div>
                  <div>assistencia@viaequipamentos.com.br</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}