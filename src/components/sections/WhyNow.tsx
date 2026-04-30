import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Code2, Atom } from 'lucide-react'

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

const trends = [
  {
    icon: Code2,
    color: '#10B981',
    trend: 'AI is accelerating software development',
    problem: 'Security is still manual',
  },
  {
    icon: TrendingUp,
    color: '#F59E0B',
    trend: 'Software deployment cycles are shrinking',
    problem: 'Infrastructure is complex',
  },
  {
    icon: Atom,
    color: '#EF4444',
    trend: 'Quantum computers are advancing rapidly',
    problem: 'Quantum threats are emerging',
  },
]

export default function WhyNow() {
  return (
    <section id="why-now" className="relative py-28 overflow-hidden section-glow">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
              Why Now
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              The way we build software has changed.{' '}
              <span className="text-red-400">Security hasn't.</span>
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              AI is accelerating software development. But security remains the bottleneck.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4 mb-14">
          {trends.map(({ icon: Icon, color, trend, problem }, i) => (
            <FadeIn key={trend} delay={i * 0.15}>
              <div className="glass-card-hover rounded-xl p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 p-2.5 rounded-xl w-fit"
                    style={{ backgroundColor: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>

                  {/* Trend arrow problem */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3 flex-1">
                    <span className="text-sm font-medium text-white/70">{trend}</span>
                    <div className="hidden md:flex items-center gap-2 px-4">
                      <div className="h-px w-12 bg-white/10" />
                      <span className="text-white/15 text-xs">but</span>
                      <div className="h-px w-12 bg-white/10" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-sm font-semibold" style={{ color }}>{problem}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Conclusion */}
        <FadeIn delay={0.4}>
          <div
            className="glass-card rounded-2xl p-8 text-center"
            style={{ borderColor: 'rgba(16,185,129,0.2)', borderWidth: '1px', boxShadow: '0 0 60px rgba(16,185,129,0.05)' }}
          >
            <p className="text-lg text-white/50 mb-2">
              As software gets easier to build,
            </p>
            <p className="text-2xl md:text-3xl font-black text-white mb-2">
              security becomes the bottleneck.
            </p>
            <p className="text-xl font-bold gradient-text mt-4">
              SUN-DRAM makes security automatic.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
