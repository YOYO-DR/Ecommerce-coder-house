
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../../utils/tailwind";
const Dropdown = ({ children, open, className }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 z-50 border border-gray-200 dark:border-gray-700",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Dropdown;