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
          <ambientLight color="#FFDBB5" intensity={0.2} />

          {/* Green “key” light for some subtle shading */}
          {/* Key from the right */}
          <hemisphereLight
            skyColor="#FFDBB5"       // top-down color
            groundColor="#8A5230"    // bounced from below
            intensity={0.3}
          />

          {/* Optional directional “rim” or “key” for contrast */}
          <directionalLight
            color="#FFB874"
            intensity={0.2}
            position={[10, 10, 5]}
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