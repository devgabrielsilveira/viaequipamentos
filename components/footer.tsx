import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-25 w-25 flex items-center justify-center">
                <img 
                src="/logotipo.png" 
                alt="Logo Via Equipamentos" 
                className="h-full w-full object-contain"
              />
              </div>
            </Link>

            <p className="text-sm text-muted-foreground text-pretty">
              Tecnologia e precisão em controle térmico industrial.
            </p>
            <div className="flex space-x-4">
              <div className="text-xs text-muted-foreground">+15 Anos de Experiência</div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#produtos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </Link>
              <Link href="#quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Quem Somos
              </Link>
              <Link href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
              <Link href="#fale-conosco" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Orçamento
              </Link>
            </nav>
          </div>

          {/* Produtos */}
          {/* Produtos */}
          {/* Produtos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Produtos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/produtos/ch" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Chiller
              </Link>
              <Link href="/produtos/cv" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cervejeira
              </Link>
              <Link href="/produtos/dry" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Dry Cooler
              </Link>
              <Link href="/produtos/fr" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Filtragem e Resfriamento de Óleo
              </Link>
              <Link href="/produtos/ga" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Unidade de Água Gelada
              </Link>
              <Link href="/produtos/ra" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resfriador de Ar
              </Link>
              <Link href="/produtos/tch" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termochiller
              </Link>
              <Link href="/produtos/tr" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termorregulador
              </Link>
              <Link href="/produtos/tre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Torres de Resfriamento
              </Link>
            </nav>
          </div>



          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>R. Louro Freijo, 130</div>
                  <div>Boa Vista - São Leopoldo/RP</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+55 (51) 98100-4008</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">comercial@viaequipamentos.com.br</span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Seg-Sex: 07h30 às 17h00</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Via Equipamentos. Todos os direitos reservados •  Desenvolvido por{" "}
            <a 
              href="https://boemiasmk.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-inherit no-underline"
            >
              Boêmia.smk
            </a>.
          </div>

        </div>
      </div>
    </footer>
  )
}