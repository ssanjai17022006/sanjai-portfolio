import { motion, AnimatePresence } from 'framer-motion';
import VitalTrace from './VitalTrace.jsx';

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="w-64 sm:w-80">
            <VitalTrace color="#22d3ee" height={70} strokeWidth={2.5} speed="1.6s" />
          </div>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">
            Initializing system<span className="animate-blink">_</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
