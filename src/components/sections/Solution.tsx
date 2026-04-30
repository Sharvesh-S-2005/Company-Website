import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

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

const guarantees = [
  'Identity verified',
  'Policy enforced',
  'Encrypted with post-quantum cryptography',
]

const steps = [
  { step: '01', label: 'Deploy your application' },
  { step: '02', label: 'Attach SUN-DRAM' },
  { step: '03', label: 'Everything is secured.' },
]

export default function Solution() {
  return (
    <section id="solution" className="relative py-28 overflow-hidden section-glow">
      {/* Emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <FadeIn>
              <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
                The Solution
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                Security should not be something{' '}
                <span className="gradient-text">developers configure.</span>
              </h2>
              <p className="text-lg text-white/45 leading-relaxed mb-8">
                SUN-DRAM replaces manual security with automatic enforcement.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="glass-card p-6 rounded-2xl mb-8 border border-white/5">
                <div className="space-y-3 mb-6">
                  {['No TLS setup.', 'No certificate management.', 'No service mesh complexity.'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                      <span className="text-white/50 line-through text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-white/5 mb-6" />
                <p className="text-sm text-white/40 font-mono tracking-wider uppercase mb-4">Without changing a single line of code.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div>
                <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-4">Every request is:</p>
                <div className="space-y-3">
                  {guarantees.map((g, i) => (
                    <motion.div
                      key={g}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm font-medium">{g}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Flow diagram */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 border border-emerald-500/10">
                <p className="text-xs font-mono text-emerald-400/60 tracking-widest uppercase mb-8">
                  Deployment Flow
                </p>
                <div className="space-y-1">
                  {steps.map(({ step, label }, i) => (
                    <div key={step}>
                      <div className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/3 transition-colors group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                          <span className="text-xs font-bold font-mono text-emerald-400">{step}</span>
                        </div>
                        <span className={`font-semibold ${i === 2 ? 'text-emerald-400 text-lg' : 'text-white/80'}`}>
                          {label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="ml-9 w-px h-4 bg-emerald-500/20" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom callout */}
                <div className="mt-8 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                  <p className="text-sm text-emerald-400/80 font-medium text-center">
                    No configuration. No complexity.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
