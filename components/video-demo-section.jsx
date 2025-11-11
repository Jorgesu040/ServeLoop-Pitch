"use client"

import { motion } from "framer-motion"

export function VideoDemoSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold  mb-8">
            Ve ServeLoop en Acción
          </h2>
          <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            <video
              className="w-full h-full object-cover"
              controls
            >
              <source src="/serveloop-demo.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
