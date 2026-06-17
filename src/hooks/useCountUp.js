import { useEffect, useState } from 'react';

/**
 * Animates a number from 0 to a target value once `start` becomes true.
 * Used by the hero's vitals readouts and the skills bars.
 */
export function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}
