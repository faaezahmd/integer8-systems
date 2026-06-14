/**
 * Abstract finance-systems visual: nodes connected in a flow, suggesting
 * integrations and automation between systems. Pure SVG, no stock imagery.
 */
export default function SystemVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 360"
      className={className}
      role="img"
      aria-label="Abstract diagram of connected finance systems and automated data flow"
    >
      <defs>
        <pattern
          id="dots"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="#14110f" opacity="0.06" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="420" height="360" fill="url(#dots)" rx="16" />

      {/* connecting lines */}
      <g stroke="#ddd6cb" strokeWidth="1.5" fill="none">
        <path d="M110 96 L210 60" />
        <path d="M110 96 L96 200" />
        <path d="M210 60 L320 110" />
        <path d="M96 200 L210 180" />
        <path d="M320 110 L210 180" />
        <path d="M210 180 L300 270" />
        <path d="M96 200 L150 290" />
        <path d="M210 180 L150 290" />
      </g>

      {/* accent flow line */}
      <path
        d="M110 96 L210 180 L300 270"
        stroke="#bb0a21"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />

      {/* nodes */}
      <g>
        {[
          { x: 110, y: 96, r: 9 },
          { x: 210, y: 60, r: 7 },
          { x: 320, y: 110, r: 7 },
          { x: 96, y: 200, r: 7 },
          { x: 300, y: 270, r: 7 },
          { x: 150, y: 290, r: 7 },
        ].map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#fffefa"
            stroke="#ddd6cb"
            strokeWidth="1.5"
          />
        ))}
        {/* central node, accented */}
        <circle cx="210" cy="180" r="13" fill="#fffefa" stroke="#bb0a21" strokeWidth="2" />
        <circle cx="210" cy="180" r="4" fill="#bb0a21" />
      </g>
    </svg>
  );
}
