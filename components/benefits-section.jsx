"use client"

import { TrendingUp, Smile, Zap, Receipt } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Menos espera, más rotación",
    description: "Aumenta la rotación de mesas hasta un 20% reduciendo tiempos muertos.",
  },
  {
    icon: Smile,
    title: "Clientes satisfechos",
    description: "Servicio más ágil que mejora la experiencia y genera mejores reseñas.",
  },
  {
    icon: Zap,
    title: "Carga operativa reducida",
    description: "Libera a tu personal de tareas repetitivas para enfocarse en el servicio.",
  },
  {
    icon: Receipt,
    title: "Mayor ticket medio",
    description: "Los pedidos digitales aumentan el ticket promedio al facilitar añadir extras.",
  },
]

export function BenefitsSection() {
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
            Por qué elegir <span className="text-[#a3171b]">ServeLoop</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beneficios tangibles para tu negocio desde el primer día
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(163, 23, 27, 0.15)",
                }}
                className="bg-white rounded-xl p-6 shadow-sm border cursor-pointer"
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-[#a3171b]/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-6 w-6 text-[#a3171b]" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
