import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield } from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Shield icon */}
        <FadeIn>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <Shield size={32} className="text-emerald-400" />
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
            Secure your applications
            <br />
            <span className="gradient-text">without changing your code.</span>
          </h2>
        </FadeIn>

        {/* Subtext */}
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-white/40 max-w-xl mx-auto mb-10">
            Deploy faster. Eliminate complexity. Future-proof your infrastructure.
          </p>
        </FadeIn>


        {/* Closing line */}
        <FadeIn delay={0.4}>
          <p className="text-sm font-mono text-white/25 tracking-[0.15em] uppercase">
            Attach SUN-DRAM. Everything else is handled.
          </p>
        </FadeIn>

        {/* Bottom decorative line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>
    </section>
  )
}
