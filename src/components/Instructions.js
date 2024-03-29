import { motion, AnimatePresence } from "framer-motion"


function Instructions({keyVal, isVisible=true, position="top", children}) {

  const styling = {}

  styling[position] = "20px"

  return (

    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={keyVal}
          style={styling}
          className={`text-center pointer-events-none absolute bg-white rounded-full py-2 px-5 lg:py-4 lg:px-8 left-1/2 -translate-x-1/2`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.6}}
          
        >
            {children}
        </motion.div>
      )}

    </AnimatePresence>
  )
}

export default Instructions
