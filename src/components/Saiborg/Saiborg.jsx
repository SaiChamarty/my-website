// src/components/Saiborg.jsx
import React from 'react'
import './Saiborg.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Saiborg3D'
import { motion } from 'framer-motion'

export default function Saiborg() {
  return (
    <motion.div
       className="saiborg-wrapper"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1 /* seconds */ }}
    >
      <div className="name">
        <p className="jersey">Saiborg</p>
      </div>

      <div className="canvas-container">
        <Canvas
          style={{ width: '100%', height: '100%' }}
          camera={{ position: [0, 0, 20], fov: 50 }}
        >
          {/* Medium‐strength green ambient fill */}
          <ambientLight color="#33AD3B" intensity={0.3} />

          {/* Green “key” light for some subtle shading */}
          <directionalLight
            color="#33AD3B"
            intensity={0.3}
            position={[10, 0, 0]}   // directly overhead
            target-position={[0, 0, 0]}  // make sure it points at the origin
          />

          <Model position={[0, 0.5, 0]} scale={[1.2, 1.2, 1.2]} />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="building">
        <p>Building...</p>
      </div>
    </motion.div>
  )
}