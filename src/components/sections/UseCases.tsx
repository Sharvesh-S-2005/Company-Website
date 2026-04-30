import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, CreditCard, Boxes } from 'lucide-react'

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

const useCases = [
  {
    icon: Building2,
    color: '#10B981',
    title: 'Enterprise',
    description: 'Secure deployments with centralized policy and audit logs.',
    tags: ['Policy Control', 'Audit Logs', 'SSO'],
  },
  {
    icon: CreditCard,
    color: '#F59E0B',
    title: 'Fintech',
    description: 'Protect transactions with identity enforcement and post-quantum encryption.',
    tags: ['PQC', 'Identity', 'Compliance'],
  },
  {
    icon: Boxes,
    color: '#8B5CF6',
    title: 'Microservices',
    description: 'Secure service-to-service communication without service mesh.',
    tags: ['No Mesh', 'mTLS-Free', 'Scalable'],
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-28 overflow-hidden section-glow">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Built for every{' '}
              <span className="gradient-text">modern stack.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map(({ icon: Icon, color, title, description, tags }, i) => (
            <FadeIn key={title} delay={i * 0.15}>
              <div className="glass-card-hover rounded-2xl p-7 h-full flex flex-col">
                {/* Icon header */}
                <div
                  className="inline-flex p-3 rounded-xl mb-5 w-fit"
                  style={{ backgroundColor: `${color}12`, border: `1px solid ${color}25` }}
                >
                  <Icon size={24} style={{ color }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-white/45 leading-relaxed mb-6 flex-1">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: `${color}10`,
                        color: `${color}`,
                        border: `1px solid ${color}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
