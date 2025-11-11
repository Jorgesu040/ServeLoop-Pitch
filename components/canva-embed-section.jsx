"use client"

import { motion } from "framer-motion"

export function CanvaEmbedSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-xl"
              src="https://www.canva.com/design/DAG3pH6us-8/uLgzOCHUwc0dgSQMAFTqOw/view?embed"
              allow="fullscreen"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
