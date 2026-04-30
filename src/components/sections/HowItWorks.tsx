import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Radio, UserCheck, ShieldCheck, Lock, ArrowRight, XCircle } from 'lucide-react'

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

const steps = [
  {
    number: '01',
    icon: Radio,
    title: 'Request Interception',
    description: 'Traffic enters the SUN-DRAM sidecar before reaching your application.',
    color: '#10B981',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Identity Verification',
    description: 'Each request is validated using secure identity and token checks.',
    color: '#10B981',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Policy Enforcement',
    description: 'Access control, rate limiting, and threat detection are applied.',
    color: '#F59E0B',
  },
  {
    number: '04',
    icon: Lock,
    title: 'Post-Quantum Encryption',
    description: 'A secure tunnel is established using Kyber + modern encryption.',
    color: '#10B981',
  },
  {
    number: '05',
    icon: ArrowRight,
    title: 'Secure Forwarding',
    description: 'Only verified and compliant requests reach your application.',
    color: '#10B981',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs tracking-widest text-emerald-400/70 uppercase mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              A security pipeline applied to{' '}
              <span className="gradient-text">every request.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Pipeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-emerald-500/15 to-transparent md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0
              return (
                <FadeIn key={step.number} delay={i * 0.12}>
                  <div className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Card — takes up ~45% width on desktop */}
                    <div className={`w-full md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="glass-card-hover p-6 rounded-2xl">
                        <div className="flex items-start gap-4">
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${step.color}15`, border: `1px solid ${step.color}30` }}
                          >
                            <Icon size={18} style={{ color: step.color }} />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-1.5">
                              <span className="font-mono text-xs text-white/25">{step.number}</span>
                              <h3 className="font-bold text-white text-base">{step.title}</h3>
                            </div>
                            <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-black border-2 items-center justify-center z-10"
                      style={{ borderColor: step.color }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* Closing line */}
        <FadeIn delay={0.5}>
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-2xl border border-red-500/20">
              <XCircle size={20} className="text-red-400 flex-shrink-0" />
              <p className="text-sm font-semibold text-white/70">
                If any step fails, the request is{' '}
                <span className="text-red-400 font-bold">blocked automatically.</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
