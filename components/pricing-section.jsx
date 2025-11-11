"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Piloto",
    description: "Ideal para probar el sistema en tu negocio",
    features: ["Hasta 5 mesas", "Menú digital completo", "Pedidos desde QR", "Gestión de pedidos", "Soporte por email"],
    cta: "Comenzar piloto",
  },
  {
    name: "Profesional",
    description: "Para negocios que quieren escalar",
    features: [
      "Mesas ilimitadas",
      "Menú digital completo",
      "Pedidos y pagos integrados",
      "Panel de control avanzado",
      "Integración TPV",
      "Análisis y reportes",
      "Soporte prioritario",
    ],
    cta: "Hablar con ventas",
    featured: true,
  },
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#fcf9fc]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes flexibles para tu <span className="text-[#a3171b]">negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comienza con un piloto o escala directamente con el plan profesional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.95 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{
                y: -10,
                boxShadow: plan.featured ? "0 30px 60px rgba(163, 23, 27, 0.2)" : "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className={`bg-white rounded-2xl p-8 border-2 ${
                plan.featured ? "border-[#a3171b] shadow-lg relative" : "border-border"
              }`}
            >
              {plan.featured && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a3171b] text-white px-4 py-1 rounded-full text-sm font-semibold"
                  initial={{ scale: 0, y: -10 }}
                  animate={isInView ? { scale: 1, y: 0 } : { scale: 0, y: -10 }}
                  transition={{ type: "spring", delay: 0.5 }}
                >
                  Recomendado
                </motion.div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + featureIndex * 0.05 + 0.3 }}
                  >
                    <Check className="h-5 w-5 text-[#a3171b] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
                <Button
                  className={`w-full ${
                    plan.featured
                      ? "bg-[#a3171b] hover:bg-[#87160c] text-white"
                      : "bg-transparent border-2 border-[#a3171b] text-[#a3171b] hover:bg-[#a3171b]/10"
                  }`}
                  size="lg"
                  asChild
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          Todos los planes incluyen actualizaciones gratuitas y sin costes de instalación
        </motion.p>
      </div>
    </section>
  )
}
