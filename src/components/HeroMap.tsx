import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface RadarPing {
  x: string
  y: string
  color: string
  size: number
  delay: number
  duration: number
  label: string
}

const pings: RadarPing[] = [
  { x: '28%', y: '32%', color: '#EF4444', size: 8, delay: 0, duration: 2, label: 'New York' },
  { x: '49%', y: '22%', color: '#F59E0B', size: 7, delay: 0.8, duration: 2.5, label: 'London' },
  { x: '79%', y: '50%', color: '#10B981', size: 11, delay: 0.4, duration: 1.8, label: 'Singapore' },
  { x: '62%', y: '18%', color: '#F59E0B', size: 6, delay: 1.2, duration: 3, label: 'Moscow' },
]

function PingDot({ ping }: { ping: RadarPing }) {
  const glowMap: Record<string, string> = {
    '#EF4444': 'rgba(239,68,68,',
    '#F59E0B': 'rgba(245,158,11,',
    '#10B981': 'rgba(16,185,129,',
  }
  const glow = glowMap[ping.color] || 'rgba(255,255,255,'

  return (
    <div
      className="absolute"
      style={{ left: ping.x, top: ping.y, transform: 'translate(-50%, -50%)' }}
    >
      {/* Outer rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: ping.size * (3 + i * 2),
            height: ping.size * (3 + i * 2),
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            borderColor: `${glow}${0.4 - i * 0.1})`,
          }}
          animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{
            duration: ping.duration + i * 0.3,
            delay: ping.delay + i * 0.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Core dot */}
      <motion.div
        className="relative rounded-full z-10"
        style={{
          width: ping.size,
          height: ping.size,
          backgroundColor: ping.color,
          boxShadow: `0 0 ${ping.size * 2}px ${ping.color}, 0 0 ${ping.size * 4}px ${glow}0.4), 0 0 ${ping.size * 8}px ${glow}0.2)`,
        }}
        animate={{ opacity: [1, 0.6, 1], scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: ping.delay }}
      />

      {/* Label */}
      <div
        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] font-medium tracking-widest opacity-60"
        style={{ color: ping.color }}
      >
        {ping.label}
      </div>
    </div>
  )
}

export default function HeroMap() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Ocean background */}
      <div className="absolute inset-0 bg-black" />

      {/* SVG World Map */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="continent-glow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* North America */}
        <path
          d="M 95 80 L 115 65 L 145 60 L 175 55 L 195 65 L 210 72 L 225 68 L 240 75 L 250 88 L 248 100 L 238 108 L 228 115 L 215 125 L 205 135 L 200 148 L 195 162 L 188 178 L 180 195 L 172 210 L 168 228 L 165 242 L 170 255 L 175 268 L 172 278 L 165 285 L 155 288 L 148 282 L 140 272 L 132 260 L 125 248 L 118 238 L 110 225 L 105 210 L 100 195 L 95 180 L 88 165 L 82 150 L 78 135 L 80 120 L 85 105 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Alaska */}
        <path
          d="M 85 88 L 70 82 L 55 78 L 42 72 L 38 80 L 45 88 L 58 92 L 72 95 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Mexico & Central America */}
        <path
          d="M 168 228 L 175 235 L 178 248 L 175 262 L 170 272 L 162 278 L 155 282 L 148 288 L 142 295 L 138 305 L 135 315 L 132 325 L 128 330 L 132 318 L 135 305 L 138 292 L 145 280 L 152 270 L 158 258 L 162 245 L 165 232 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Greenland */}
        <path
          d="M 205 35 L 225 28 L 248 32 L 265 40 L 270 52 L 262 62 L 248 68 L 232 65 L 215 55 L 205 45 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />

        {/* South America */}
        <path
          d="M 178 295 L 195 290 L 212 295 L 228 305 L 238 320 L 242 338 L 245 355 L 248 372 L 248 390 L 245 408 L 240 424 L 232 438 L 222 448 L 210 452 L 198 448 L 188 438 L 180 422 L 175 405 L 172 388 L 170 370 L 168 352 L 165 335 L 162 318 L 162 302 L 168 295 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />

        {/* Europe */}
        <path
          d="M 440 80 L 455 72 L 470 68 L 488 70 L 498 78 L 505 88 L 510 100 L 505 112 L 495 120 L 482 125 L 470 130 L 458 135 L 448 128 L 440 118 L 435 105 L 438 92 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Iberian Peninsula */}
        <path
          d="M 440 118 L 448 128 L 452 140 L 448 152 L 440 158 L 430 152 L 428 140 L 432 128 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Scandinavia */}
        <path
          d="M 482 55 L 490 45 L 502 40 L 515 42 L 520 52 L 518 65 L 510 75 L 498 78 L 488 70 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Italy */}
        <path
          d="M 482 125 L 490 132 L 495 145 L 492 158 L 485 165 L 478 158 L 478 145 L 480 132 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />

        {/* Africa */}
        <path
          d="M 458 165 L 478 155 L 498 152 L 518 158 L 532 168 L 540 182 L 545 198 L 548 215 L 548 232 L 545 250 L 540 268 L 532 285 L 522 300 L 510 312 L 498 320 L 485 322 L 472 320 L 460 312 L 450 300 L 442 285 L 438 268 L 435 250 L 434 232 L 435 215 L 438 198 L 442 182 L 448 168 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Madagascar */}
        <path
          d="M 552 255 L 558 248 L 562 260 L 560 275 L 555 282 L 550 275 L 550 262 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />

        {/* Asia - Main body */}
        <path
          d="M 508 68 L 530 58 L 558 52 L 585 48 L 615 50 L 645 55 L 672 62 L 698 68 L 722 72 L 745 78 L 765 88 L 780 100 L 788 115 L 790 130 L 785 145 L 775 158 L 760 168 L 742 175 L 722 180 L 700 182 L 678 180 L 655 175 L 632 170 L 610 165 L 588 162 L 568 158 L 548 155 L 530 152 L 515 148 L 505 138 L 500 125 L 502 110 L 506 95 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Indian Subcontinent */}
        <path
          d="M 618 175 L 635 182 L 648 195 L 655 212 L 658 228 L 655 242 L 648 255 L 638 265 L 628 268 L 618 265 L 608 255 L 602 242 L 600 228 L 602 212 L 608 198 L 615 185 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Southeast Asia */}
        <path
          d="M 742 175 L 758 182 L 772 192 L 782 205 L 785 220 L 780 235 L 770 245 L 758 248 L 745 245 L 735 235 L 730 220 L 732 205 L 738 192 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Arabian Peninsula */}
        <path
          d="M 558 158 L 575 162 L 590 170 L 598 185 L 598 200 L 592 212 L 580 218 L 568 215 L 558 205 L 552 192 L 552 178 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Korea/Japan Peninsula */}
        <path
          d="M 788 110 L 800 105 L 812 108 L 820 118 L 818 130 L 808 138 L 798 135 L 790 125 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* Japan islands */}
        <path
          d="M 812 95 L 820 90 L 832 92 L 840 100 L 838 112 L 828 118 L 818 115 L 812 105 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />

        {/* Australia */}
        <path
          d="M 778 298 L 798 288 L 820 285 L 842 288 L 862 298 L 875 312 L 882 328 L 885 345 L 882 362 L 875 378 L 862 390 L 845 398 L 828 400 L 810 398 L 795 390 L 782 378 L 775 362 L 772 345 L 772 328 L 775 312 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        {/* New Zealand */}
        <path
          d="M 900 368 L 908 360 L 915 365 L 918 378 L 912 388 L 904 385 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />

        {/* Indonesia islands */}
        <path
          d="M 762 248 L 775 245 L 785 250 L 788 262 L 782 270 L 770 268 L 762 260 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        <path
          d="M 792 252 L 808 248 L 820 252 L 825 262 L 820 272 L 808 275 L 795 272 L 790 262 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />

        {/* UK */}
        <path
          d="M 450 82 L 458 78 L 465 82 L 465 95 L 458 102 L 450 98 L 448 88 Z"
          fill="#0A0A0A"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />

        {/* Grid overlay subtle lines for the command center feel */}
        <line x1="0" y1="250" x2="1000" y2="250" stroke="#1A1A1A" strokeWidth="0.3" strokeDasharray="4,8" opacity="0.5" />
        <line x1="500" y1="0" x2="500" y2="500" stroke="#1A1A1A" strokeWidth="0.3" strokeDasharray="4,8" opacity="0.5" />
        <line x1="250" y1="0" x2="250" y2="500" stroke="#1A1A1A" strokeWidth="0.2" strokeDasharray="2,12" opacity="0.3" />
        <line x1="750" y1="0" x2="750" y2="500" stroke="#1A1A1A" strokeWidth="0.2" strokeDasharray="2,12" opacity="0.3" />
        <line x1="0" y1="125" x2="1000" y2="125" stroke="#1A1A1A" strokeWidth="0.2" strokeDasharray="2,12" opacity="0.3" />
        <line x1="0" y1="375" x2="1000" y2="375" stroke="#1A1A1A" strokeWidth="0.2" strokeDasharray="2,12" opacity="0.3" />
      </svg>

      {/* Subtle green radial glow from center */}
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

      {/* Radar Ping Dots */}
      <div className="absolute inset-0">
        {pings.map((ping) => (
          <PingDot key={ping.label} ping={ping} />
        ))}
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-x-0 h-px opacity-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.8), transparent)',
        }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
      />

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-emerald-500/40" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-emerald-500/40" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-emerald-500/40" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-emerald-500/40" />

      {/* Live indicator */}
      <div className="absolute top-5 left-14 flex items-center gap-2">
        <span className="status-dot" />
        <span className="font-mono text-[10px] text-emerald-500/70 tracking-widest uppercase">Live Threat Geography</span>
      </div>

      {/* Top-right timestamp */}
      <div className="absolute top-5 right-14 font-mono text-[10px] text-white/20 tracking-wider">
        SUN-DRAM / COMMAND CENTER
      </div>
    </div>
  )
}
