export function ClimberScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label="Illustration of a person climbing stairs and gaining points"
    >
      {/* ascending steps */}
      <g>
        <rect x="34" y="238" width="70" height="52" rx="8" fill="var(--brand)" opacity="0.16" />
        <rect x="96" y="198" width="70" height="92" rx="8" fill="var(--brand)" opacity="0.28" />
        <rect x="158" y="158" width="70" height="132" rx="8" fill="var(--brand)" opacity="0.5" />
        <rect x="220" y="118" width="70" height="172" rx="8" fill="var(--brand)" />
      </g>

      {/* upward trajectory */}
      <path
        d="M60 250 L128 210 L190 170 L252 130"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
        opacity="0.35"
        fill="none"
      />

      {/* climbing figure on the third step */}
      <g transform="translate(150 92)">
        {/* motion dashes */}
        <g stroke="var(--brand)" strokeWidth="4.5" strokeLinecap="round">
          <line x1="10" y1="-6" x2="18" y2="-16" />
          <line x1="24" y1="-2" x2="34" y2="-9" />
          <line x1="-4" y1="-2" x2="-8" y2="-13" />
        </g>
        {/* head */}
        <circle cx="14" cy="18" r="16" fill="var(--brand)" />
        <circle cx="9" cy="16" r="2.3" fill="white" />
        <circle cx="19" cy="16" r="2.3" fill="white" />
        <path
          d="M8 23 Q14 28 20 23"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* body */}
        <path
          d="M14 34 C6 40 4 52 8 62 L2 82 C0 90 12 94 15 86 L21 66 C30 62 34 72 40 80 C45 86 55 80 50 72 C44 60 40 50 28 46 C24 44 18 34 14 34 Z"
          fill="var(--brand)"
        />
        {/* raised arm */}
        <path
          d="M22 44 C34 40 44 32 50 22"
          stroke="var(--brand)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        {/* shoes */}
        <ellipse cx="4" cy="86" rx="10" ry="6" fill="var(--ink)" />
        <ellipse cx="52" cy="74" rx="10" ry="6" fill="var(--ink)" transform="rotate(24 52 74)" />
      </g>
    </svg>
  )
}
