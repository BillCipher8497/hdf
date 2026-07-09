// Signature element: section eyebrows are hex chips — a swatch plus its
// literal hex value in mono. The brand is hexadecimal; the UI shows its work.
export default function HexChip({ hex = '#9ee64b', label }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
      <span
        className="inline-block h-3 w-3 rounded-[3px] ring-1 ring-ink/20"
        style={{ background: hex }}
      />
      <span className="text-fern">{hex}</span>
      {label && <span className="text-ink/50">/ {label}</span>}
    </span>
  )
}
