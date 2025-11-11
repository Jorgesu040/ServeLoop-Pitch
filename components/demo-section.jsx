"use client"

import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function DemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section
      ref={ref}
      id="demo"
      className="py-16 md:py-24 bg-gradient-to-br from-[#a3171b] to-[#87160c] text-white relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#e79601]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="inline-flex w-16 h-16 rounded-full bg-white/10 items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          >
            <Smartphone className="h-8 w-8" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prueba la experiencia como cliente
          </motion.h2>

          <motion.p
            className="text-lg text-white/90 mb-8 text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Descubre lo simple que es pedir desde la mesa. Prueba nuestra demo interactiva y experimenta el flujo
            completo desde el punto de vista de tus clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <Button size="lg" className="bg-white text-[#a3171b] hover:bg-white/90 text-base font-semibold" asChild>
              <Link href="https://serve-loop.vercel.app/">Probar demo ahora</Link>
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-white/70 mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            No requiere registro • Funciona en cualquier dispositivo
          </motion.p>
        </div>
      </div>
    </section>
  )
}
