"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageSquare, Send, CheckCircle } from "lucide-react"

export default function FaleConoscoSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [startTime, setStartTime] = useState<number>(0)
  

  useEffect(() => {
    setStartTime(Date.now())
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const formData = new FormData(form)

    const honeypot = formData.get("website")?.toString() || ""
    const nome = formData.get("nome")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const telefone = formData.get("telefone")?.toString() || ""
    const mensagem = formData.get("mensagem")?.toString() || ""

    const elapsedTime = (Date.now() - startTime) / 1000

    // Regex para detectar links
    const hasLink =
      /(https?:\/\/|www\.|\.com|\.net|\.org|\.io|\.co|\.gy|short\.|bit\.ly)/i.test(
        mensagem
      )

    // Validação telefone (apenas números, 10 ou 11 dígitos)
    const cleanPhone = telefone.replace(/\D/g, "")
    const phoneValid = /^\d{10,11}$/.test(cleanPhone)

    // 🚨 REGRAS DE BLOQUEIO
    if (
      honeypot ||              // honeypot preenchido
      elapsedTime < 3 ||       // enviado muito rápido
      hasLink ||               // contém link
      mensagem.length < 10 ||  // mensagem muito curta
      !phoneValid              // telefone inválido
    ) {
      e.preventDefault()
      return
    }

    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="fale-conosco" className="py-20 min-h-screen flex items-center justify-center">
        <div className="container px-4 w-full max-w-2xl text-center">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                ✅ Mensagem enviada com sucesso!
              </h3>
              <p className="text-green-700">
                Obrigado pelo seu contato. Entraremos em contato em breve.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section
      id="fale-conosco"
      className="py-20 bg-muted/30 min-h-screen flex items-center justify-center"
    >
      <div className="container px-4 w-full max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Preencha o formulário abaixo para solicitar seu orçamento ou entrar
            em contato conosco!
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              <CardTitle>Envie sua Mensagem</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form
              action="https://formsubmit.co/69b94eb2c89b719d3a110d03842185c6"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input id="nome" name="nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    placeholder="(51) 99999-9999"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" name="empresa" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="segmento">Segmento</Label>
                <Input id="segmento" name="segmento" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem *</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                />
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              {/* FormSubmit configs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Novo contato - Via Equipamentos" />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#d25703] text-white border-[#d25703] hover:bg-[#f38636] hover:border-[#f38636]"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
