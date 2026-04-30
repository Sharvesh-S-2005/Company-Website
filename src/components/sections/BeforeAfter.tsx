import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check } from 'lucide-react'

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

const withoutItems = [
  'Configure TLS manually',
  'Manage certificates',
  'Maintain gateways and service mesh',
  'Debug failures',
  'Handle security per service',
]

const withItems = [
  'Deploy application',
  'Attach sidecar',
  'Security is enforced automatically',
]

export default function BeforeAfter() {
  return (
    <section className="relative py-28 overflow-hidden section-glow">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
              Before vs After
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              The difference is <span className="gradient-text">everything.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Without */}
          <FadeIn delay={0.1}>
            <div className="glass-card rounded-2xl p-7 border border-red-500/15 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <X size={18} className="text-red-400" />
                </div>
                <h3 className="font-bold text-red-400">Without SUN-DRAM</h3>
              </div>
              <ul className="space-y-4">
                {withoutItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                      <X size={9} className="text-red-400" />
                    </div>
                    <span className="text-sm text-white/45 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-red-500/10">
                <p className="text-xs text-red-400/50 font-mono tracking-wider text-center">
                  COMPLEXITY · RISK · OVERHEAD
                </p>
              </div>
            </div>
          </FadeIn>

          {/* With */}
          <FadeIn delay={0.2}>
            <div
              className="glass-card rounded-2xl p-7 h-full"
              style={{
                borderColor: 'rgba(16,185,129,0.25)',
                borderWidth: '1px',
                boxShadow: '0 0 40px rgba(16,185,129,0.06)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Check size={18} className="text-emerald-400" />
                </div>
                <h3 className="font-bold text-emerald-400">With SUN-DRAM</h3>
              </div>
              <ul className="space-y-4">
                {withItems.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <Check size={9} className="text-emerald-400" />
                    </div>
                    <span className={`text-sm leading-relaxed ${i === withItems.length - 1 ? 'text-white font-semibold' : 'text-white/65'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-emerald-500/10">
                <p className="text-sm font-bold text-emerald-400/80 text-center">
                  No configuration. No complexity.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
