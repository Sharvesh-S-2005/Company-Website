import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Code2 } from 'lucide-react'

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

const tractionItems = [
  { label: 'Control plane complete', done: true },
  { label: 'Identity system implemented', done: true },
  { label: 'Policy engine functional', done: true },
  { label: 'PQC tunnel operational', done: true },
  { label: 'Sidecar built in Rust', done: true },
  { label: 'Final optimization and deployment tooling', done: false, active: true },
]

export default function Traction() {
  return (
    <section id="traction" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <FadeIn>
              <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
                Traction
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                Built,{' '}
                <span className="gradient-text">not conceptual.</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-8">
                This is working infrastructure.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex items-center gap-3 glass-card px-5 py-3.5 rounded-xl w-fit border border-amber-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-mono text-amber-400 tracking-wider">CURRENTLY IN PROGRESS</span>
                </div>
                <span className="text-xs text-white/40 font-mono">Final optimization & deployment tooling</span>
              </div>
            </FadeIn>
          </div>

          {/* Right: Checklist */}
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-7 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <Code2 size={16} className="text-emerald-400/70" />
                <span className="text-xs font-mono text-white/30 tracking-wider uppercase">Build Status</span>
              </div>
              <div className="space-y-3">
                {tractionItems.map(({ label, done, active }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      active ? 'bg-amber-500/5 border border-amber-500/15' : ''
                    }`}
                  >
                    {done ? (
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-amber-500/60 flex-shrink-0 relative">
                        <motion.div
                          className="absolute inset-0.5 rounded-full bg-amber-500/40"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                    )}
                    <span className={`text-sm ${active ? 'text-amber-400 font-medium' : done ? 'text-white/70' : 'text-white/40'}`}>
                      {label}
                    </span>
                    {done && (
                      <span className="ml-auto text-[10px] font-mono text-emerald-500/50 tracking-wider">DONE</span>
                    )}
                    {active && (
                      <span className="ml-auto text-[10px] font-mono text-amber-500/70 tracking-wider">ACTIVE</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
