"use client"

import { TrendingUp, Users, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  {
    icon: TrendingUp,
    value: "52%",
    label: "Reducción en tiempos de espera",
    source: "Statista, 2025",
  },
  {
    icon: Users,
    value: "61%",
    label: "De hosteleros quiere invertir en sistemas de pedidos",
    source: "SEGITTUR, 2021",
  },
  {
    icon: Star,
    value: "76%",
    label: "De operadores dice que la tecnología les da ventaja competitiva",
    source: "National Restaurant Association, 2024",
  },
]

export function SocialProofSection() {
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
            Respaldado por <span className="text-[#a3171b]">datos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La tecnología está transformando la hostelería. Los números hablan por sí solos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div
                  className="inline-flex w-12 h-12 rounded-full bg-[#a3171b]/10 items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }} // Acelerada animación de rotación del icono
                >
                  <Icon className="h-6 w-6 text-[#a3171b]" />
                </motion.div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#a3171b] mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <p className="font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.source}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonial */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.div
            className="bg-[#fcf9fc] rounded-2xl p-8 md:p-10 border"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(163, 23, 27, 0.1)" }}
            transition={{ duration: 0.2 }} // Cambiada de spring a duración fija más rápida
          >
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                >
                  <Star className="h-5 w-5 fill-[#f4dd01] text-[#f4dd01]" />
                </motion.div>
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-center mb-6 text-pretty">
              "Desde que implementamos ServeLoop, nuestros tiempos de servicio se han reducido notablemente. Los
              clientes están más contentos y nosotros podemos atender más mesas sin aumentar personal."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold">María González</p>
              <p className="text-sm text-muted-foreground">Propietaria, Café Central Barcelona</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
