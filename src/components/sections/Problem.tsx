import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, RotateCcw, Layers, GitBranch, Bot } from 'lucide-react'

const problems = [
  { icon: AlertTriangle, text: 'TLS configuration is complex and error-prone' },
  { icon: RotateCcw, text: 'Certificates expire, rotate, and break systems' },
  { icon: Layers, text: 'Service-to-service security requires heavy infrastructure' },
  { icon: GitBranch, text: 'API gateways and service meshes add operational overhead' },
]

const stateItems = [
  { label: 'Fragmented', color: '#EF4444' },
  { label: 'Misconfigured', color: '#F59E0B' },
  { label: 'Reactive', color: '#EF4444' },
]

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export default function Problem() {
  return (
    <section id="problem" className="relative py-28 overflow-hidden grid-bg">
      {/* Section glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs tracking-widest text-red-400/70 uppercase mb-4">
              The Problem
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Modern applications are{' '}
              <span className="text-white/90">easy to build</span>{' '}
              —<br /> but{' '}
              <span className="text-red-400">hard to secure.</span>
            </h2>
            <p className="text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
              Developers don't struggle to build applications anymore.{' '}
              <span className="text-white/70">They struggle to secure and connect them.</span>
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {problems.map(({ icon: Icon, text }, i) => (
            <FadeInWhenVisible key={text} delay={i * 0.1}>
              <div className="glass-card-hover flex items-start gap-4 p-5 rounded-xl">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-red-500/10 mt-0.5">
                  <Icon size={18} className="text-red-400" />
                </div>
                <p className="text-sm md:text-base text-white/65 leading-relaxed">{text}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* AI quote */}
        <FadeInWhenVisible delay={0.2}>
          <div className="relative glass-card border-l-2 border-amber-500/60 p-8 rounded-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Bot size={20} className="text-amber-400" />
              </div>
              <span className="text-sm font-semibold text-amber-400">AI Acceleration Problem</span>
            </div>
            <p className="text-xl font-semibold text-white/80 mb-2">
              Even with AI generating code, security remains manual.
            </p>
            <p className="text-white/40 text-sm">
              AI can generate applications — but it doesn't secure them.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Security state */}
        <FadeInWhenVisible delay={0.3}>
          <div className="text-center">
            <p className="text-sm text-white/35 font-mono tracking-wider uppercase mb-6">
              Security today is:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {stateItems.map(({ label, color }) => (
                <div
                  key={label}
                  className="glass-card px-6 py-3 rounded-full"
                  style={{ borderColor: `${color}30` }}
                >
                  <span className="font-bold text-lg" style={{ color }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-white/35 text-sm font-mono">
              And not future-proof against quantum threats.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
