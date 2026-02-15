export default function CircuitOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-40 dark:opacity-60">

      <svg
        className="w-full h-full"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Blue circuit gradient */}
          <linearGradient id="pcbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="pcbGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ================= MAIN TRACES ================= */}

        <path
          d="M 300 80 
             L 300 260 
             Q 300 300 340 300 
             L 520 300 
             Q 560 300 560 340 
             L 560 500"
          stroke="url(#pcbGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pcbGlow)"
        />

        <path
          d="M 900 120 
             L 900 300 
             Q 900 340 940 340 
             L 1120 340 
             Q 1160 340 1160 380 
             L 1160 550"
          stroke="url(#pcbGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pcbGlow)"
        />

        <path
          d="M 560 500 
             Q 560 540 600 540 
             L 760 540 
             Q 800 540 800 580 
             L 800 720"
          stroke="url(#pcbGradient)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pcbGlow)"
        />

        <path
          d="M 800 720 
             Q 800 760 760 760 
             L 480 760 
             Q 440 760 440 800 
             L 440 950"
          stroke="url(#pcbGradient)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pcbGlow)"
        />

        <path
          d="M 1160 550 
             Q 1160 590 1200 590 
             L 1300 590 
             Q 1340 590 1340 630 
             L 1340 800"
          stroke="url(#pcbGradient)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pcbGlow)"
        />

        {/* ================= NODES ================= */}

        {[
          [300, 80],
          [560, 500],
          [800, 720],
          [440, 950],
          [900, 120],
          [1160, 550],
          [1340, 800],
        ].map(([x, y], i) => (
          <g key={i} filter="url(#pcbGlow)">
            <circle cx={x} cy={y} r="6" fill="#38bdf8" />
            <circle cx={x} cy={y} r="14" fill="rgba(56,189,248,0.2)" />
          </g>
        ))}
      </svg>
    </div>
  );
}
