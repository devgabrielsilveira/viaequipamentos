"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() // pega o caminho atual

  const menuItems = [
    { href: "/#produtos", label: "Produtos" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "#contato", label: "Contato" },
    { href: "#fale-conosco", label: "Orçamento" },
  ]

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false // ancoras não recebem destaque
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-35 w-35 flex items-center justify-center">
              <img 
                src="/logotipo.png" 
                alt="Logo Via Equipamentos" 
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.label === "Orçamento" ? (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 bg-[#d25703] text-white border-[#d25703] hover:bg-[#f38636] hover:border-[#f38636]"
                  >
                    Orçamento
                  </Button>
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-foreground transition-colors font-medium hover:text-primary ${
                    isActive(item.href) ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Contact Info (desktop) */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+55 (51) 99359-4652</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>contato@viaequipamentos.com.br</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) =>
                item.label === "Orçamento" ? (
                  <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full bg-[#d25703] text-white border-[#d25703] hover:bg-[#f38636] hover:border-[#f38636]"
                    >
                      Orçamento
                    </Button>
                  </Link>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-foreground transition-colors font-medium hover:text-primary ${
                      isActive(item.href) ? "text-primary font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(51) 99359-4652</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="break-words">contato@viaequipamentos.com.br</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}