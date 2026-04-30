import { Shield } from 'lucide-react'

const footerLinks = {
  Product: ['Architecture', 'Features', 'Security', 'Roadmap'],
  Developers: ['Documentation', 'API Reference', 'GitHub', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Shield size={20} className="text-emerald-500" />
              <span className="font-bold text-lg">
                <span className="text-white">SUN</span>
                <span className="text-emerald-500">-DRAM</span>
              </span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              Zero-trust security layer with post-quantum encryption. No code changes required.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="status-dot" />
              <span className="text-xs font-mono text-emerald-500/60 tracking-widest">SYSTEM OPERATIONAL</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-mono">
            © 2025 SUN-DRAM. All rights reserved.
          </p>
          <p className="text-xs text-white/15 font-mono tracking-wider">
            POST-QUANTUM SECURE · ZERO TRUST · OPEN STANDARDS
          </p>
        </div>
      </div>
    </footer>
  )
}
