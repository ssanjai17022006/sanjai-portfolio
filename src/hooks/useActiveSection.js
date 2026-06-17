import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view to drive the nav's
 * active-state indicator (the small moving trace dot under the link).
 */
export function useActiveSection(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = id;
        }
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
