import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = true,
  delay = 0,
  ...props
}) => {
  const Div = motion.div;
  return (
    <Div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      {...props}
    >
      {children}
    </Div>
  );
};

export default Card;
