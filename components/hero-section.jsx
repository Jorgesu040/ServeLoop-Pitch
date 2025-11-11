"use client"

import { Button } from "@/components/ui/button"
import { QrCode, ShoppingCart, CreditCard, FileText } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const mockupY = useTransform(scrollYProgress, [0, 1], [100, -50])
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 1])

  return (
    <section ref={sectionRef} className="relative bg-background py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="flex flex-col gap-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 self-center lg:self-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="h-10 w-10 rounded-lg bg-[#a3171b] flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-bold text-lg">S</span>
              </motion.div>
              <span className="text-2xl font-bold">ServeLoop</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Pedidos y pagos directos <span className="text-[#a3171b]">desde la mesa</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Haz que cada turno sea más ágil. Los comensales piden y pagan desde su mesa. Tú aceleras el servicio.
            </motion.p>

            {/* Quick bullets */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { icon: QrCode, text: "Pedidos por QR", color: "text-[#a3171b]" },
                { icon: ShoppingCart, text: "Carrito y confirmación", color: "text-[#e79601]" },
                { icon: CreditCard, text: "Pago en mesa", color: "text-[#a3171b]" },
                { icon: FileText, text: "Ticket PDF", color: "text-[#e79601]" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-card border rounded-lg p-3 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px rgba(163, 23, 27, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className={`h-5 w-5 ${item.color} flex-shrink-0`} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.15 }}>
                <Button size="lg" className="bg-[#a3171b] hover:bg-[#87160c] text-white text-base" asChild>
                  <Link href="https://serve-loop.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Probar demo
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.15 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#a3171b] text-[#a3171b] hover:bg-[#a3171b]/10 text-base bg-transparent"
                  asChild
                >
                  <Link href="#contact">Solicitar una demo</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mockup - Ahora aparece con el scroll en lugar de desaparecer */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            style={{ y: mockupY, opacity: mockupOpacity }}
          >
            <div className="relative w-full max-w-sm">
              <motion.div
                className="relative z-10 rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white h-[600px] rounded-[1.75rem] overflow-hidden">
                  {/* Phone mockup content */}
                  <div className="h-full flex flex-col">
                    {/* Status bar */}
                    <motion.div
                      className="bg-[#a3171b] text-white px-6 py-4"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-4"></div>
                        </div>
                      </div>
                      <h2 className="font-bold text-xl mt-2">Menú</h2>
                    </motion.div>

                    {/* Menu items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#fcf9fc]">
                      {[
                        {
                          name: "Hamburguesa Clásica",
                          desc: "Con queso, lechuga y tomate",
                          price: "12,50 €",
                          gradient: "from-[#e79601] to-[#e77f01]",
                        },
                        {
                          name: "Pizza Margarita",
                          desc: "Tomate, mozzarella y albahaca",
                          price: "10,00 €",
                          gradient: "from-[#a3171b] to-[#87160c]",
                        },
                        {
                          name: "Ensalada César",
                          desc: "Pollo, parmesano y crutones",
                          price: "9,50 €",
                          gradient: "from-[#f4dd01] to-[#e79601]",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-lg p-3 shadow-sm border"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.3 + index * 0.15 }}
                          whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                          transition={{ duration: 0.15 }}
                        >
                          <div className="flex gap-3">
                            <div
                              className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-lg flex-shrink-0`}
                            ></div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm">{item.name}</h3>
                              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                              <p className="font-bold text-[#a3171b] mt-2">{item.price}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Cart button */}
                    <motion.div
                      className="p-4 border-t bg-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      <motion.button
                        className="w-full bg-[#a3171b] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Ver carrito (2)
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#a3171b]/10 to-[#e79601]/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
