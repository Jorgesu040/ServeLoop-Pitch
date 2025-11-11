"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solicita una <span className="text-[#e79601]">demo</span>
              </h2>
              <p className="text-lg text-background/80">
                Cuéntanos sobre tu negocio y te mostraremos cómo ServeLoop puede ayudarte
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Juan Pérez"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan@mirestaurante.com"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium mb-2">
                  Nombre del negocio
                </label>
                <Input
                  id="business"
                  type="text"
                  placeholder="Restaurante La Paella"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje (opcional)
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tu negocio y tus necesidades..."
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 min-h-[100px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#a3171b] hover:bg-[#87160c] text-white">
                Solicitar demo
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-background/20 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#a3171b] flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">ServeLoop</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#demo" className="hover:text-[#e79601] transition-colors">
                Demo
              </Link>
              <Link href="#contact" className="hover:text-[#e79601] transition-colors">
                Contacto
              </Link>
              <Link href="/privacy" className="hover:text-[#e79601] transition-colors">
                Privacidad
              </Link>
              <Link href="/terms" className="hover:text-[#e79601] transition-colors">
                Términos
              </Link>
            </nav>

            <div className="text-sm text-background/70">contacto@serveloop.com</div>
          </div>

          <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/70">
            © {new Date().getFullYear()} ServeLoop. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
