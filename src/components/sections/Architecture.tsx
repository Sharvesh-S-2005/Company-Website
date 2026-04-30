import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Cpu, Shield, Database, Activity, Lock, Eye, Zap } from 'lucide-react'

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

const controlPlane = [
  { icon: Shield, label: 'Identity management' },
  { icon: Database, label: 'Policy engine' },
  { icon: Eye, label: 'Audit logging' },
  { icon: Activity, label: 'Telemetry' },
]

const dataPlane = [
  { icon: Zap, label: 'Request interception' },
  { icon: Server, label: 'Enforcement engine' },
  { icon: Lock, label: 'PQC encryption' },
  { icon: Cpu, label: 'Secure proxy' },
]

const benefits = [
  'No latency dependency',
  'No single point of failure',
  'Horizontally scalable',
]

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-28 overflow-hidden section-glow">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
              Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Built as a <span className="gradient-text">sidecar,</span> not a bottleneck.
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              SUN-DRAM runs alongside your application as a lightweight sidecar.
            </p>
          </div>
        </FadeIn>

        {/* Architecture diagram */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Your App */}
          <FadeIn delay={0.1}>
            <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center h-full justify-center min-h-[200px]">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/8 mb-4">
                <Cpu size={32} className="text-white/50" />
              </div>
              <h3 className="font-bold text-white/80 mb-1">Your Application</h3>
              <p className="text-xs text-white/30 font-mono">Unchanged. No SDK. No rewrites.</p>
            </div>
          </FadeIn>

          {/* SUN-DRAM Sidecar (center, highlighted) */}
          <FadeIn delay={0.2}>
            <div className="relative glass-card rounded-2xl p-6 border border-emerald-500/25 flex flex-col h-full"
              style={{ boxShadow: '0 0 40px rgba(16,185,129,0.07)' }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rounded-t-2xl" />
              <p className="text-xs font-mono text-emerald-400/60 tracking-widest uppercase mb-5">SUN-DRAM Sidecar</p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-white/40 tracking-wider uppercase mb-3">Control Plane</p>
                <div className="space-y-2">
                  {controlPlane.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/3">
                      <Icon size={13} className="text-emerald-400/70" />
                      <span className="text-xs text-white/55">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/5 my-3" />

              <div>
                <p className="text-xs font-semibold text-white/40 tracking-wider uppercase mb-3">Data Plane</p>
                <div className="space-y-2">
                  {dataPlane.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/3">
                      <Icon size={13} className="text-amber-400/70" />
                      <span className="text-xs text-white/55">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Network */}
          <FadeIn delay={0.3}>
            <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center h-full justify-center min-h-[200px]">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/8 mb-4">
                <Activity size={32} className="text-white/50" />
              </div>
              <h3 className="font-bold text-white/80 mb-1">Network Traffic</h3>
              <p className="text-xs text-white/30 font-mono">All intercepted & secured.</p>
            </div>
          </FadeIn>
        </div>

        {/* Key claim */}
        <FadeIn delay={0.35}>
          <div className="glass-card rounded-2xl p-8 border border-white/5 text-center mb-8">
            <p className="text-xl font-bold text-white/80 mb-6">
              SUN-DRAM is not in the request path.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-sm text-white/55">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
