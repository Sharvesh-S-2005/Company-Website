import { motion } from 'framer-motion'
import { ArrowRight, Play, Calendar, Lock, Zap, Globe } from 'lucide-react'
import HeroMap from '../HeroMap'

const stats = [
  { icon: Lock, value: 'Post-Quantum', label: 'Encryption' },
  { icon: Zap, value: 'Zero-Touch', label: 'Deployment' },
  { icon: Globe, value: 'Every Request', label: 'Verified' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* World map background */}
      <HeroMap />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
        >
          <span className="status-dot" />
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            Zero Trust · Post-Quantum · Production Ready
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
        >
          Replace TLS with{' '}
          <span className="gradient-text">Identity-Based,</span>
          <br />
          <span className="gradient-text">Post-Quantum</span> Secure Access
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-white/55 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          SUN-DRAM is a zero-trust security layer that automatically enforces identity, policy, and
          post-quantum encryption —{' '}
          <span className="text-white/80 font-medium">without changing your application.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            id="get-started"
            href="#solution"
            className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
          <a
            href="#architecture"
            className="btn-secondary flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
          >
            View Architecture
          </a>
          <a
            id="demo"
            href="#final-cta"
            className="btn-secondary flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
          >
            <Calendar size={15} />
            Book Demo
          </a>
        </motion.div>

        {/* Visual caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xs font-mono text-white/25 tracking-[0.2em] uppercase mb-16"
        >
          Every request is verified. Every connection is encrypted. Every service is protected.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card flex items-center gap-3 px-5 py-3.5 rounded-xl">
              <div className="p-1.5 rounded-md bg-emerald-500/10">
                <Icon size={16} className="text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">{value}</div>
                <div className="text-[11px] text-white/35 font-mono">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-emerald-500/50" />
        <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
      </motion.div>
    </section>
  )
}
