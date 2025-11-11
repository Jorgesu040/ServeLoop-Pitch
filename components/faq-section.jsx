"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const faqs = [
  {
    question: "¿Cómo se integra con mi flujo actual?",
    answer:
      "ServeLoop se adapta a tu forma de trabajar. Los pedidos llegan al panel de control y puedes gestionarlos como prefieras.",
  },
  {
    question: "¿Necesito un TPV específico?",
    answer:
      "No necesariamente. ServeLoop funciona de forma independiente con su propio panel de gestión.",
  },
  {
    question: "¿Funciona sin app nativa?",
    answer:
      "Sí, completamente. Tus clientes solo escanean el código QR y acceden a una web optimizada para móvil. No necesitan descargar ninguna aplicación, lo que facilita mucho la adopción.",
  },
  {
    question: "¿Qué pasa si no hay buena cobertura Wi-Fi?",
    answer:
      "Recomendamos tener Wi-Fi estable para una mejor experiencia, pero ServeLoop también funciona con datos móviles. Además, el sistema está optimizado para cargar rápido incluso con conexiones lentas.",
  },
  {
    question: "¿Se puede pagar desde el móvil?",
    answer:
      "El cliente puede solicitar pagar desde la app, y tu personal procesa el pago en mesa con tarjeta o efectivo. Estamos trabajando en integrar pagos online directos para futuras versiones.",
  },
  {
    question: "¿Cuánto tiempo lleva implementarlo?",
    answer:
      "La configuración inicial es muy rápida. Una vez tengas tu menú listo, podemos tener ServeLoop funcionando en tu local en menos de una semana. Incluimos soporte durante todo el proceso.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas <span className="text-[#a3171b]">frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre ServeLoop
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-[#a3171b]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
