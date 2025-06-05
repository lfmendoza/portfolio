import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ level, color = "#3B82F6", label, animated = true }) => {
  const [progress, setProgress] = useState(0);
  const Div = motion.div;

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setProgress(level), 500);
      return () => clearTimeout(timer);
    } else {
      setProgress(level);
    }
  }, [level, animated]);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {level}%
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <Div
          className="h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
