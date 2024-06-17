import React from 'react'
import { motion } from 'framer-motion'

const homeTransition = (OgComponent) => {
    const slideIn = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: '#0f0f0f',
        transformOrigin: 'bottom'
    }

  return (
    <div>
        <OgComponent />
        <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            style={slideIn}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
        />
    </div>
  )
}

export default homeTransition;