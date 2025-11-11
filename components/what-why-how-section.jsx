"use client"

import { motion } from "framer-motion"

export function WhatWhyHowSection() {
  const cards = [
    {
      title: "¿Qué?",
      description:
        "Una webapp de pedidos por QR para restaurantes. El cliente escanea, elige y pide sin apps ni registros; el restaurante gestiona pedidos en tiempo real desde su panel.",
    },
    {
      title: "¿Para qué?",
      description:
        "Eliminar colas para pedir y pagar, reducir errores en toma de pedidos y aumentar la rotación de mesas. Con un simple QR, cualquier cliente pide rápido sin depender del camarero.",
    },
    {
      title: "¿Cómo?",
      description:
        "Creamos una plataforma web ágil y accesible desde cualquier dispositivo. Cada mesa tiene su QR, el pedido llega directo al local y todo el proceso se vuelve más rápido y claro.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFF8F0] rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#FF5722] mb-6 text-balance">{card.title}</h3>
              <p className="text-lg text-gray-800 leading-relaxed text-pretty">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
