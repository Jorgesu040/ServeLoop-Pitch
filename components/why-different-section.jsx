"use client"

import { motion } from "framer-motion"
import { Brain, LineChart, Repeat, ShieldCheck } from "lucide-react"

const differentiators = [
  {
    icon: Brain,
    title: "Sin app, adopción inmediata",
    description: "QR directo a web ultra ligera: fricción mínima y más pedidos en minutos.",
  },
  {
    icon: LineChart,
    title: "Panel operativo en tiempo real",
    description: "Estado de cada mesa y pedido para priorizar cocina y sala con datos claros.",
  },
  {
    icon: Repeat,
    title: "Upselling y extras simples",
    description: "Añadir complementos es natural en el flujo y aumenta ticket medio automáticamente.",
  }
]

export function WhyDifferentSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fcf9fc]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por qué <span className="text-[#a3171b]">somos distintos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más que pedidos por QR: enfocamos tecnología en acelerar turnos y aumentar ingresos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -6, boxShadow: "0 18px 40px rgba(163,23,27,0.15)" }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a3171b] to-[#e79601] flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-2 text-sm md:text-base">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
