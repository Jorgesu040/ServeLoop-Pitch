"use client"

import { ImageIcon, ShoppingCart, CheckCircle, CreditCard, Download, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: ImageIcon,
    title: "Menú visual con imágenes",
    description: "Muestra tus platos con fotos atractivas y descripciones detalladas.",
  },
  {
    icon: ShoppingCart,
    title: "Carrito en tiempo real",
    description: "Los clientes ven cantidades, precios y total actualizado al instante.",
  },
  {
    icon: CheckCircle,
    title: "Confirmación de pedido",
    description: "Estado del pedido visible: pendiente, en preparación, listo.",
  },
  {
    icon: CreditCard,
    title: "Pago en mesa flexible",
    description: "Acepta tarjeta o efectivo. El cliente elige cómo pagar.",
  },
  {
    icon: Download,
    title: "Ticket descargable",
    description: "Ticket en PDF generado automáticamente tras el pago.",
  },
  {
    icon: Smartphone,
    title: "Diseño responsive",
    description: "Funciona perfectamente en cualquier móvil o tablet.",
  },
]

export function FeaturesSection() {
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
            Características <span className="text-[#a3171b]">clave</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para digitalizar tu servicio de pedidos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(163, 23, 27, 0.3)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-xl p-6 border cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a3171b] to-[#e79601] flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
