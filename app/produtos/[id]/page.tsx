"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FaleConoscoSection from "@/components/fale-conosco-section"
import ContatoSection from "@/components/contato-section"

interface Produto {
  id: string;
  titulo: string;
  descricao: string;
  slides: { image: string; text: string }[];
  textoAdicional?: string;
  caracteristicas: string[];
  opcionais?: string[];
}



// Lista de produtos com slides (imagem + texto)
export const produtos = [
  {
      id: "ch",
      titulo: "Chiller",
      descricao: "A linha Chiller foi desenvolvida para o resfriamento eficiente de água em processos industriais, garantindo o controle preciso da temperatura e promovendo a estabilidade da produção, mesmo diante de variações externas. Disponível nos modelos horizontal e vertical.",
      slides: [
    {
      image: "/chiller-a.png",
      text: "Capacidade: 60.000 kcal/h – 1.200.000 kcal/h. Outras capacidades: consultar. Versões: resfriado a ar ou água"
    },
    {
      image: "/chiller-b.png",
      text: "Gabinete metálico em chapas de aço carbono, pintado em epóxi pó (cor grafite). Evaporador tipo trocador de placas brasado de alto rendimento"
    },
    {
      image: "/chiller-c.png",
      text: "Compressor tipo Scroll (Danfoss ou Emerson). Condensador micro-canal aletado (Danfoss ou Brahex). Exaustores para condensação (EBM ou Ziehl-Abegg)"
    },
    {
      image: "/chiller-d.png",
      text: "Bomba centrífuga para circulação do líquido (Grundfos ou Ebara). Controlador programável Schneider. Sensor de temperatura e pressostato de segurança"
    },
    {
      image: "/chiller-e.png",
      text: "Opcionais: evaporador Shell-in-tube, válvula de expansão eletrônica, CLP com IHM 4,3” ou 7”, painel remoto, soft starter, acesso remoto via app"
    },
  ],
      textoAdicional: "Seu funcionamento é baseado em um sistema de refrigeração de alta performance, capaz de manter a temperatura ideal para o processo, assegurando a qualidade do produto final e a eficiência operacional. Disponível em versões resfriadas a ar ou a líquidos, os chillers são ideais para aplicações que exigem refrigeração contínua e confiável, como nas indústrias de alimentos, bebidas, plásticos, farmacêutica, química, entre outras. Com tecnologia robusta e design otimizado, a linha Chiller representa uma solução moderna, econômica e essencial para ambientes industriais que buscam alto desempenho e confiabilidade térmica.",
      
      caracteristicas: [
        "Capacidade de 60.000 kcal/h – 1.200.000 kcal/h",
        "Gabinete em chapas de aço carbono, cortado a laser e pintado com tinta epóxi em pó, na cor grafite.",
        "Compressor de refrigeração tipo Scroll, marca Danfoss ou Copeland.",
        "Condensador de gás com radiador tipo microcanais aletados.",
        "Exaustores superiores para condensação, marca Ziehl Abegg.",
        "Evaporador tipo trocador de calor a placas brasado, de alto rendimento.",
        "Bomba centrífuga para circulação do líquido (água ou solução hidroalcoólica).",
        "Controlador lógico programável (CLP) marca Schneider.",
        "Termostatos e pressostatos de segurança.",
        "Componentes elétricos marca Schneider.",
        "Outras capacidades: consultar.",
      ],
      opcionais: [
        "Válvula de expansão eletrônica.",
        "Painel remoto para controle do equipamento diretamente da sala de operações.",
        "Soft Starter.",
        "Sistema Inverter.",
        "Acesso remoto via aplicativo para smartphone ou desktop.",
      ],

  },
  {
    id: "cv",
    titulo: "Linha Cervejaria",
    descricao: "A linha LC foi desenvolvida pela Via Equipamentos para atender às necessidades específicas do mercado cervejeiro, oferecendo uma solução de refrigeração eficiente, compacta e com excelente custo-benefício.",
    slides: [
      {
        image: "/linha-cervejaria-a.png",
        text: `Gabinete metálico em chapas de aço inox AISI 304 escovado, parafusos em aço inox.
    Painel remoto, para um maior controle do equipamento, direto da sala de operações.
    Opcionais: CLP com IHM de 4,3” ou 7”.`
      },
      {
        image: "/linha-cervejaria-b.png",
        text: `Dimensões reduzidas para otimização da área das utilidades industriais.
    Compressor de refrigeração tipo Scroll marca Danfoss ou Emerson.
    Condensador do gás com radiador tipo micro-canal aletado, Danfoss ou Brahex.`
      },
      {
        image: "/linha-cervejaria-c.png",
        text: `Exaustores para sistema de condensação com posicionamento na tampa superior ou na lateral, Elgin.
    Evaporador tipo trocador de calor a placas brasado, de alto rendimento, Danfoss.
    Bomba centrífuga para circulação do líquido (água ou solução hidro-alcoólica), Ebara.`
      },
      {
        image: "/linha-cervejaria-d.png",
        text: `Controlador tipo programável para controle da temperatura e demais funções do circuito, Schneider.
    Sensor de temperatura do líquido instalado internamente.
    Sensor de segurança da temperatura de evaporação.
    Transmissor de pressão 4 a 20 mA para segurança no circuito de baixa pressão.
    Pressostato de segurança no circuito de alta pressão.`
      },
      {
        image: "/linha-cervejaria-e.png",
        text: `Rodízios de PU com trava para facilitar a movimentação do equipamento.
    Opcionais: Acesso remoto via app em smartphone/desktop.`
      },
    ],
    textoAdicional: "Projetada para o resfriamento de água ou solução hidroalcoólica, essa unidade foi criada com base na nossa experiência em aplicações industriais e no contato direto com produtores de cerveja artesanal e industrial. O resultado é um equipamento confiável, adaptado à realidade das cervejarias, com foco em performance, economia e praticidade. Se você busca controle térmico preciso para garantir a qualidade da sua produção, a linha LC é a escolha ideal.",

    caracteristicas: [
      "Gabinete metálico em chapas de aço inox AISI 304 escovado.",
      "Painel remoto para maior controle do equipamento, diretamente da sala de operações.",
      "Dimensões reduzidas para otimização da área de utilidades industriais.",
      "Compressor de refrigeração tipo Scroll, marca Danfoss ou Copeland.",
      "Condensador de gás com radiador tipo microcanais aletados.",
      "Exaustores para sistema de condensação, com posicionamento na tampa superior ou na lateral.",
      "Evaporador tipo trocador de calor a placas brasado, de alto rendimento.",
      "Bomba centrífuga para circulação do líquido (água ou solução hidroalcoólica).",
      "Controlador lógico programável (CLP) para gerenciamento da temperatura e demais funções do circuito, marca Schneider.",
      "Sensor de segurança para temperatura de evaporação.",
      "Termostatos e pressostatos de segurança.",
      "Componentes elétricos marca Schneider.",
      "Rodízios em PU com trava para facilitar a movimentação do equipamento."
    ],
    opcionais: [
      "CLP com IHM de 4,3” ou 7”.",
      "Acesso remoto via aplicativo para smartphone ou desktop."
    ]
},
  {
    id: "dry",
    titulo: "Dry Cooler",
    descricao: "O dry cooler (resfriador a seco) é um equipamento que utiliza o ar ambiente para resfriar fluidos, operando com mínimo ou nenhum consumo de água. Representa uma alternativa mais econômica e ecológica às torres de resfriamento, funcionando por meio de trocadores de calor e ventiladores.",
    slides: [
      {
        image: "/dry-cooler-a.png",
        text: "Economia de água: utiliza ar ambiente para o resfriamento, reduzindo drasticamente o consumo de água em comparação às torres tradicionais."
      },
      {
        image: "/dry-cooler-b.png",
        text: "Resfriamento adiabático: aspersão de água para reduzir a temperatura do ar de entrada, aumentando a eficiência em climas quentes e secos."
      },
      {
        image: "/dry-cooler-c.png",
        text: "Baixo consumo de energia e manutenção simplificada: não utiliza compressores nem produtos químicos, garantindo eficiência energética, menor risco de corrosão e intervenções reduzidas."
      }
    ],
        textoAdicional: "O dry cooler é a solução ideal para quem busca eficiência, sustentabilidade e confiabilidade no resfriamento de fluidos industriais.",

        caracteristicas: [
        "Economia de água: resfriamento a ar, reduzindo drasticamente o consumo em comparação às torres tradicionais.",
        "Resfriamento adiabático: sistema opcional com aspersão de água, que melhora a eficiência em climas quentes e secos.",
        "Baixa manutenção: circuito fechado que dispensa tratamento de água e produtos químicos, evitando corrosão e incrustações.",
        "Durabilidade: estrutura em inox 304 cortada a laser.",
        "Flexibilidade: capacidades sob consulta, de acordo com a necessidade do processo."
      ]
  },
  {
    id: "fr",
    titulo: "Filtragem e Resfriamento de Óleo",
    descricao: "Equipamentos desenvolvidos para processos industriais com máquinas CNC, oferecendo filtragem e resfriamento de óleo de forma eficiente. Garantem remoção do calor gerado durante a usinagem, preservando a qualidade do óleo e mantendo a estabilidade térmica dos sistemas.",
    slides: [
      {
        image: "/filtro-resfriamento-a.png",
        text: "Contam com sistema de filtragem dupla e elementos filtrantes de 5 microns, assegurando alta eficiência na retenção de impurezas. Disponíveis em capacidades de 9.000 kcal/h a 15.000 kcal/h, com opções personalizadas mediante consulta. Estrutura externa em aço carbono cortada a laser, reservatório soldado e componentes parafusados."
      },
      {
        image: "/filtro-resfriamento-b.png",
        text: "As linhas F e FR contribuem diretamente para a melhoria do desempenho, vida útil das ferramentas e qualidade do acabamento das peças. Opcional: Resfriamento por refrigeração direta ou por água resfriada através de trocadores de calor."
      }
    ],
        textoAdicional: "Projetadas para máquinas CNC, as linhas F (Filtragem) e FR (Filtragem + Resfriamento) oferecem maior eficiência no processo de usinagem, garantindo estabilidade térmica, óleo limpo e acabamento superior das peças. Soluções que unem qualidade, desempenho e confiabilidade para a sua produção.",

        caracteristicas: [
        "Filtragem dupla com elementos de 5 microns.",
        "Capacidade de 9.000 kcal/h (personalizável sob consulta).",
        "Maior vida útil das ferramentas e redução de custos de manutenção.",
        "Estrutura em aço carbono cortado a laser, robusta e durável."
      ]
  },
  {
        id: "ga",
        titulo: "Unidade de Água Gelada",
        descricao: "A linha GA foi projetada para atender às exigências do ambiente industrial, oferecendo um sistema eficiente de resfriamento de líquidos com alto desempenho. Seu principal objetivo é garantir controle preciso da temperatura, mesmo em condições externas adversas, assegurando qualidade, estabilidade e produtividade constante ao longo do processo.",
        slides: [
          { 
            image: "/unidade-ga-a.png", 
            text: "Gabinete metálico em chapas de aço carbono, pintado em tinta epóxi pó na cor grafite, tanque rotomoldado e controle de temperatura preciso." 
          },
          { 
            image: "/unidade-ga-b.png", 
            text: "Compressor de refrigeração tipo Scroll (Danfoss ou Emerson) e condensador do gás com radiador tipo micro-canal aletado (Danfoss ou Brahex)." 
          },
          { 
            image: "/unidade-ga-c.png", 
            text: "Exaustores posicionados na parte superior (Elgin), evaporador tipo trocador de calor a placas brasado de alto rendimento e bomba centrífuga Grundfoss para circulação do líquido." 
          },
          { 
            image: "/unidade-ga-d.png", 
            text: "Controlador programável Schneider, sensores de segurança da temperatura e pressão, garantindo operação segura e confiável." 
          },
          { 
            image: "/unidade-ga-e.png", 
            text: "Opcionais: evaporador Shell-intube e condensação à água, válvula de expansão eletrônica, CLP com IHM de 4,3” ou 7”, painel remoto, soft starter e acesso remoto via app em smartphone/desktop." 
          },
        ],
        textoAdicional: "Com capacidades que variam de 6.000 kcal/h a 60.000 kcal/h, a unidade é ideal para processos que exigem resfriamento confiável e contínuo. Outras faixas de capacidade podem ser desenvolvidas sob consulta. Mais do que um equipamento, a linha GA é uma solução inteligente para otimizar processos industriais que dependem de controle térmico eficiente.",
        
        caracteristicas: [
          "Gabinete em chapas de aço carbono, cortado a laser e pintado com tinta epóxi em pó, na cor grafite.",
          "Tanque rotomoldado.",
          "Compressor de refrigeração tipo Scroll, marca Danfoss ou Copeland.",
          "Condensador de gás com radiador tipo microcanais aletados.",
          "Exaustores superiores para sistema de condensação.",
          "Evaporador tipo trocador de calor a placas brasado, de alto rendimento.",
          "Bomba centrífuga para circulação do líquido (água ou solução hidroalcoólica), marca Grundfos.",
          "Controlador lógico programável (CLP) para gerenciamento da temperatura e demais funções do circuito, marca Schneider.",
          "Sensor de segurança para temperatura de evaporação.",
          "Termostatos e pressostatos de segurança.",
          "Componentes elétricos marca Schneider.",
          "Rodízios em PU com trava para facilitar a movimentação do equipamento."
        ],
        opcionais: [
          "Evaporador Shell and Tube e condensação à água.",
          "Válvula de expansão eletrônica.",
          "CLP com IHM de 4,3” ou 7”.",
          "Painel remoto para controle do equipamento diretamente da sala de operações.",
          "Soft Starter.",
          "Sistema Inverter.",
          "Acesso remoto via aplicativo para smartphone ou desktop."
        ]
  },
  {
    id: "ra",
    titulo: "Resfriador de Ar",
    descricao: "Os Resfriadores de Ar são equipamentos desenvolvidos especialmente para o controle térmico do ar em processos de extrusão de plástico filme, desempenhando um papel fundamental na qualidade e desempenho da produção.",
    slides: [
      { 
        image: "/resfriador-ar-a.png", 
        text: "Estrutura externa em aço carbono cortada a laser, interno em aço inox 430. Trocador de calor aletado em cobre/alumínio. Capacidades de 50 kg/h a 800 kg/h. Para capacidades superiores ou configurações personalizadas, consulte nossa equipe técnica." 
      },
    ],
    textoAdicional: "Com capacidades que variam de 50 kg/h até 800 kg/h, esses equipamentos atendem desde aplicações de menor porte até processos industriais de alta demanda. Para capacidades superiores ou configurações personalizadas, consulte nossa equipe técnica. A utilização dos Resfriadores de Ar garante estabilidade térmica, padronização da produção e ganhos significativos em eficiência e acabamento do filme, tornando-se uma solução indispensável em linhas modernas de extrusão.",

    caracteristicas: [
    "Estrutura externa em aço carbono, cortado a laser, parafusada, com acabamento em tinta epóxi em pó, cor grafite.",
    "Estrutura interna em aço inox 430.",
    "Trocador de calor aletado em cobre/alumínio."
  ]
  },
  {
    id: "tch",
    titulo: "Termochiller",
    descricao: "O Termochiller é uma solução versátil que combina, em um único equipamento, as funções de chiller e termorregulador, atendendo processos que exigem tanto o resfriamento quanto o aquecimento de precisão.",
    slides: [
      { 
        image: "/termochiller-a.png", 
        text: "Circuito de água gelada: temperatura de operação de 6 °C a 35 °C" 
      },
      { 
        image: "/termochiller-b.png", 
        text: "Circuito de água quente: temperatura de operação de 20 °C a 130 °C" 
      },
      { 
        image: "/termochiller-c.png", 
        text: "Gabinete metálico em chapas de aço carbono, pintado em tinta epóxi pó na cor grafite.\nCompressor tipo Scroll Danfoss ou Emerson.\nCondensador do gás com radiador tipo micro-canal aletado, Danfoss ou Brahex.\nExaustores posicionados superior ou lateral, Elgin." 
      },
      { 
        image: "/termochiller-d.png", 
        text: "Evaporador do tipo serpentina tube and tube (projeto exclusivo).\nBomba centrífuga para circulação do líquido (água ou etileno glicol) Grundfoss." 
      },
      { 
        image: "/termochiller-e.png", 
        text: "Controlador microprocessado para controle da temperatura e demais funções do circuito, com LEDs indicadores e alarmes.\nSensor de segurança da temperatura de evaporação.\nPressostato de segurança no circuito de alta e baixa pressão.\nFuncionamento independente de placa dedicada." 
      },
    ],
        textoAdicional: "Projetado com dois circuitos térmicos distintos — um de refrigeração e outro de aquecimento — o Termochiller permite operar de forma independente ou simultânea em um único processo, oferecendo amplo controle térmico para diferentes aplicações industriais. Sua flexibilidade operacional torna o Termochiller ideal para processos complexos e que exigem transições rápidas e estáveis de temperatura, garantindo eficiência, segurança e controle total.",

        caracteristicas: [
          "Circuito de água gelada: temperatura de operação de 6 °C a 35 °C.",
          "Circuito de água quente: temperatura de operação de 20 °C a 120 °C.",
          "Gabinete em chapas de aço carbono, cortado a laser e pintado com tinta epóxi em pó, na cor grafite.",
          "Compressor de refrigeração tipo Scroll, marca Danfoss ou Copeland.",
          "Condensador de gás com radiador tipo microcanais aletados.",
          "Exaustores superiores para sistema de condensação.",
          "Evaporador tipo trocador de calor a placas brasado, de alto rendimento.",
          "Bomba centrífuga para circulação de líquidos, marca Grundfos.",
          "Controlador de aquecimento e resfriamento, marca Gefran.",
          "Termostatos e pressostatos de segurança.",
          "Painel de LEDs para indicação de alarmes.",
          "Componentes elétricos marca Schneider."
        ]
  },
  {
    id: "tr",
    titulo: "Termoregulador",
    descricao: "A linha TR de termorreguladores foi projetada para oferecer controle térmico preciso em processos industriais que exigem estabilidade de temperatura, como processamento de plásticos e borracha e demais aplicações industriais.",
    slides: [
      {
        image: "/termoregulador-a.png",
        text: "Operação com água até 120 °C, garantindo uniformidade e qualidade do produto final."
      },
      {
        image: "/termoregulador-b.png",
        text: "Faixa de operação de 20 °C a 120 °C, com capacidades de 3 kW a 50 kW. Outras capacidades sob consulta."
      },
      {
        image: "/termoregulador-c.png",
        text: "Estrutura em aço carbono cortada a laser, cartuchos de aquecimento e caldeira em aço inox 304."
      },
      {
        image: "/termoregulador-d.png",
        text: "Sistema de resfriamento direto ou indireto, utilizando trocador de calor serpentina ou placas brasadas e fonte de resfriamento externa."
      },
      {
        image: "/termoregulador-e.png",
        text: "Componentes de alta qualidade (Schneider, Gefran, Grundfoss), relés de proteção e controlador microprocessado com SSR e LEDs indicativos."
      },
    ],
        textoAdicional: "Esses equipamentos são responsáveis pelo aquecimento e controle da temperatura da água, garantindo um desempenho térmico ideal para o molde ou processo produtivo. Operando com água até 120 °C, a linha TR assegura uniformidade e qualidade no produto final, evitando falhas causadas por variações térmicas e otimizando o tempo de ciclo. Compactos, eficientes e robustos, os termorreguladores da linha TR são soluções indispensáveis para quem busca precisão, confiabilidade e produtividade em processos que envolvem moldes térmicos e extrusão.",

        caracteristicas: [
          "Faixa de operação: 20 °C a 120 °C.",
          "Capacidades térmicas: de 6 kW até 50 kW.",
          "Estrutura em aço carbono, cortada a laser, parafusada, com acabamento em tinta epóxi em pó.",
          "Cartuchos de aquecimento em aço inox 304.",
          "Componentes elétricos marca Schneider.",
          "Controlador microprocessado Gefran com SSR, indicadores de funcionamento e alarmes em LED.",
          "Outras capacidades sob consulta."
        ],
        opcionais: [
          "Controlador com comunicação."
        ]
  },
  {
        id: "tre",
        titulo: "Torre de Resfriamento",
        descricao: "A linha TRE foi desenvolvida para remover o excesso de calor da água em processos industriais, garantindo que o sistema opere de forma contínua e eficiente.",
        slides: [
          { image: "/torre-a.png", text: "Capacidades disponíveis: de 20 m³/h a 60 m³/h. Outras faixas de vazão sob consulta." },
          { image: "/torre-b.png", text: "Estrutura em aço inox 430 cortada a laser, parafusada, totalmente desmontável." },
          { image: "/torre-c.png", text: "Acabamento natural da chapa, garantindo durabilidade e resistência à corrosão." },
          { image: "/torre-d.png", text: "Ventilador Axial EBM de alto desempenho e extremamente silencioso." },
          { image: "/torre-e.png", text: "Retirada do calor em contracorrente com descarga de ar úmido vertical (saída de ar superior)." },
        ],
        textoAdicional: "Com estrutura robusta e operação confiável, as torres da Via Equipamentos entregam alto desempenho térmico com baixo custo operacional. São indicadas para aplicações que exigem resfriamento constante, assegurando estabilidade ao processo e maior vida útil aos equipamentos.",

        caracteristicas: [
          "Capacidades disponíveis: de 20 m³/h a 60 m³/h.",
          "Estrutura em aço inox 430, cortada a laser, parafusada, com acabamento natural da chapa, totalmente desmontável.",
          "Ventilador axial EBM, de alto desempenho e extremamente silencioso.",
          "Retirada do calor em contracorrente, com descarga de ar úmido vertical (saída de ar superior).",
          "Outras faixas de vazão sob consulta."
        ]
  },
]

export default function ProdutoPage() {
  const { id } = useParams()
const produto: Produto | undefined = produtos.find((p) => p.id === id)


  const [currentSlide, setCurrentSlide] = useState(0)

  if (!produto) {
    return <div className="p-10 text-center">Produto não encontrado.</div>
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % produto.slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + produto.slides.length) % produto.slides.length)
  }

  const slide = produto.slides[currentSlide]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Título e descrição */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">{produto.titulo}</h1>
            <div className="text-left max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground">{produto.descricao}</p>
            </div>
          </div>

          {/* Card com imagem + característica */}
          <Card className="max-w-2xl mx-auto overflow-hidden">
            <div className="relative aspect-video">
              <img src={slide.image} alt={produto.titulo} className="w-full h-full object-cover" />

              {/* Botões de navegação, só aparecem se houver mais de 1 slide */}
              {produto.slides.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            <CardContent className="p-8 text-center">
              <p className="text-xl">{slide.text}</p>
            </CardContent>
          </Card>

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

          {produto.textoAdicional && (
            <p className="text-left max-w-2xl mx-auto mt-8 text-center text-lg text-muted-foreground">
              {produto.textoAdicional}
            </p>
          )}

        {/* Características */}
        {produto?.caracteristicas?.length > 0 && (
          <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4 text-left">Características</h3>
            <ul className="list-none text-sm text-gray-800">
              {produto.caracteristicas.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray-300 py-2 last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Opcionais */}
        {produto.opcionais && produto.opcionais.length > 0 && (
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4 text-left">Opcionais</h3>
            <ul className="list-none text-sm text-gray-800">
              {produto.opcionais.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray-300 py-2 last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}


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

        <ContatoSection />
        <FaleConoscoSection />
      </main>

      <Footer />
    </div>
  )
}
