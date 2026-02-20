import { Building2, Heart, Utensils, Wine, FlaskConical, Sparkles, Trash2, Cog } from "lucide-react"

const setores = [
  { nome: "Saúde", icon: Heart },
  { nome: "Borracha", icon: Building2 },
  { nome: "Plástico", icon: Building2 },
  { nome: "Alimentício", icon: Utensils },
  { nome: "Bebidas", icon: Wine },
  { nome: "Química", icon: FlaskConical },
  { nome: "Higiene", icon: Sparkles },
  { nome: "Limpeza", icon: Trash2 },
  { nome: "Processos Industriais", icon: Cog },
]

export default function SetoresSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Onde atuamos</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna dos ícones */}
          <div className="grid grid-cols-3 gap-4">
            {setores.map((setor, index) => {
              const IconComponent = setor.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 text-center">{setor.nome}</span>
                </div>
              )
            })}
          </div>

          {/* Coluna da foto */}
          <div className="flex items-center justify-center">
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <img
                src="/onde-atuamos.png"
                alt="Instalações da ThermoControl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}