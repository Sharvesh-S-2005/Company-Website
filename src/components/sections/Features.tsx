import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Layers, Cpu } from 'lucide-react'

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

const featureGroups = [
  {
    icon: Shield,
    color: '#10B981',
    category: 'Security',
    items: [
      'Zero-trust enforcement on every request',
      'Identity-based access control',
      'Threat detection and rate limiting',
      'Audit logs and telemetry',
    ],
  },
  {
    icon: Layers,
    color: '#F59E0B',
    category: 'Infrastructure Simplification',
    items: [
      'No TLS configuration',
      'No certificates',
      'No service mesh',
      'One policy system',
    ],
  },
  {
    icon: Cpu,
    color: '#8B5CF6',
    category: 'Crypto Innovation',
    items: [
      'Post-quantum key exchange (Kyber)',
      'Hybrid encryption',
      'AES-GCM / ChaCha20',
      'Protection against future decryption attacks',
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Everything you need.{' '}
              <span className="gradient-text">Nothing you don't.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {featureGroups.map(({ icon: Icon, color, category, items }, i) => (
            <FadeIn key={category} delay={i * 0.15}>
              <div
                className="glass-card-hover h-full rounded-2xl p-7 flex flex-col"
                style={{ borderTopColor: `${color}30`, borderTopWidth: '1px' }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-white text-base">{category}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-3 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-sm text-white/55 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
