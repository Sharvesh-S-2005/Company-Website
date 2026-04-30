import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Terminal, CheckCircle2 } from 'lucide-react'

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

const autoFeatures = [
  'Intercepts traffic',
  'Applies policies',
  'Encrypts communication',
  'Secures service-to-service calls',
]

export default function DeveloperExperience() {
  return (
    <section id="developer" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Terminal */}
          <FadeIn delay={0.1}>
            <div className="relative">
              {/* Terminal window */}
              <div className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
                {/* Title bar */}
                <div className="flex items-center gap-2.5 px-5 py-3.5 bg-white/5 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <div className="flex items-center gap-2 ml-3">
                    <Terminal size={13} className="text-white/30" />
                    <span className="text-xs font-mono text-white/30">terminal</span>
                  </div>
                </div>

                {/* Terminal body */}
                <div className="bg-black/80 p-6 font-mono text-sm space-y-4">
                  <div>
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white/70"># Option 1 — Docker</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">docker run </span>
                    <span className="text-amber-400">sundram/sidecar</span>
                  </motion.div>

                  <div className="h-px bg-white/5" />

                  <div>
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white/70"># Option 2 — Kubernetes (Helm)</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">helm install </span>
                    <span className="text-amber-400">sundram</span>
                  </motion.div>

                  <div className="h-px bg-white/5" />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="space-y-1 pt-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-white/25">&gt;</span>
                      <span className="text-emerald-400/70">Identity system... </span>
                      <span className="text-emerald-400">✓ online</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/25">&gt;</span>
                      <span className="text-emerald-400/70">Policy engine... </span>
                      <span className="text-emerald-400">✓ active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/25">&gt;</span>
                      <span className="text-emerald-400/70">PQC tunnel... </span>
                      <span className="text-emerald-400">✓ secured</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-white/25">&gt;</span>
                      <span className="text-white font-bold">SUN-DRAM active. All traffic secured.</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-white"
                      >
                        _
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Glow under terminal */}
              <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div>
            <FadeIn>
              <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
                Developer Experience
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                Secure your application{' '}
                <span className="gradient-text">in seconds.</span>
              </h2>
              <div className="flex gap-6 text-sm text-white/40 font-mono mb-8">
                <span className="line-through">No code changes.</span>
                <span className="line-through">No SDKs.</span>
                <span className="line-through">No rewrites.</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="glass-card rounded-xl p-6 border border-white/5 mb-8">
                <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-4">
                  SUN-DRAM automatically:
                </p>
                <div className="space-y-3">
                  {autoFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-white/65">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-base text-white/50 leading-relaxed">
                Developers focus on{' '}
                <span className="text-white font-semibold">building.</span>{' '}
                SUN-DRAM handles{' '}
                <span className="text-emerald-400 font-semibold">security.</span>
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
