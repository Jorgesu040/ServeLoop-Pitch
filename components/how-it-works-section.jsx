"use client"

import { QrCode, ShoppingBag, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    icon: QrCode,
    title: "Escanea el QR",
    description: "El cliente escanea el código QR en su mesa con su móvil. Sin apps que instalar.",
    color: "bg-[#a3171b]",
  },
  {
    icon: ShoppingBag,
    title: "Elige platos y confirma",
    description: "Navega el menú, añade al carrito y confirma el pedido. Todo desde su dispositivo.",
    color: "bg-[#e79601]",
  },
  {
    icon: CreditCard,
    title: "Paga en mesa, recibe ticket",
    description: "Cuando esté listo, paga con tarjeta o efectivo y recibe su ticket en PDF.",
    color: "bg-[#f4dd01] text-foreground",
  },
]

export function HowItWorksSection() {
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
            Cómo <span className="text-[#a3171b]">funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, rápido y sin complicaciones para tus clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 50 }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[#a3171b]/20 to-[#e79601]/20"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    style={{ transformOrigin: "left" }}
                  ></motion.div>
                )}

                <motion.div
                  className="relative bg-card rounded-xl p-6 border text-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    borderColor: "rgba(163, 23, 27, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`inline-flex w-16 h-16 rounded-full ${step.color} items-center justify-center mb-4`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className={`h-8 w-8 ${step.color.includes("text-foreground") ? "text-foreground" : "text-white"}`}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#a3171b] text-white flex items-center justify-center font-bold text-sm"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", delay: index * 0.2 + 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
