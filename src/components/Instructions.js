import { motion, AnimatePresence } from "framer-motion"


function Instructions({key, isVisible=true, position="top", children}) {

  const styling = {}

  styling[position] = "20px"

  return (

    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={key}
          style={styling}
          className={`pointer-events-none absolute bg-white rounded-full py-4 px-8 left-1/2 -translate-x-1/2`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
      )}

    </AnimatePresence>
  )
}

export default Instructions
