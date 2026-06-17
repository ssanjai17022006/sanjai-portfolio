/**
 * VitalTrace — the site's signature element.
 *
 * A continuously scrolling ECG-style waveform, the same visual motif that
 * threads through the loader, the hero backdrop, section dividers, and the
 * footer. One heartbeat cycle is drawn once, then the SVG content is
 * duplicated and animated with a seamless horizontal scroll.
 */
const CYCLE = 'M0,50 L26,50 C32,50 34,38 38,38 C42,38 43,50 48,50 L60,50 L66,8 L74,92 L80,50 L96,50 C100,50 101,30 106,30 C111,30 112,50 118,50 L150,50';

export default function VitalTrace({
  color = '#22d3ee',
  height = 80,
  strokeWidth = 2,
  glow = true,
  speed = '8s',
  className = '',
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-y-0 flex items-center"
        style={{
          width: '200%',
          animation: `ecgScroll ${speed} linear infinite`,
        }}
      >
        <svg
          viewBox="0 0 1500 100"
          preserveAspectRatio="none"
          className="h-full w-1/2 flex-shrink-0"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={i}
              d={CYCLE}
              transform={`translate(${i * 150}, 0)`}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={glow ? { filter: `drop-shadow(0 0 6px ${color}80)` } : undefined}
            />
          ))}
        </svg>
        <svg
          viewBox="0 0 1500 100"
          preserveAspectRatio="none"
          className="h-full w-1/2 flex-shrink-0"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={i}
              d={CYCLE}
              transform={`translate(${i * 150}, 0)`}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={glow ? { filter: `drop-shadow(0 0 6px ${color}80)` } : undefined}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
