import { useEffect, useState } from 'react';

/**
 * Cycles through a list of strings with a typing / deleting effect,
 * mimicking a status line on a diagnostic readout.
 */
export function useTypewriter(words, { typingSpeed = 65, deletingSpeed = 35, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!words.length) return;

    if (!deleting && subIndex === words[index].length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  useEffect(() => {
    setText(words[index]?.substring(0, subIndex) ?? '');
  }, [subIndex, index, words]);

  return text;
}
