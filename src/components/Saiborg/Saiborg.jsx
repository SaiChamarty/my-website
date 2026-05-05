// src/components/Saiborg.jsx
import React from 'react';
import './Saiborg.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Saiborg3D';
import { motion } from 'framer-motion';
import Chat from './Chat';

export default function Saiborg() {
  return (
    <motion.div
      className="saiborg-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ── PAGE HEADING ── */}
      <div className="saiborg-eyebrow">AI PROJECT</div>
      <h1 className="saiborg-h1">
        Sai<span className="saiborg-accent">borg</span>{' '}
        <span className="saiborg-serif">Interface</span>
      </h1>
      <p className="saiborg-lead">
        A transformer-based conversational LLM trained from scratch — exploring
        human–machine interaction and language model design.
      </p>

      {/* ── LAYOUT ── */}
      <div className="saiborg-layout">

        {/* ── LEFT: VISUAL PANEL ── */}
        <div className="saiborg-vis">
          <div className="saiborg-scan" />
          <div className="canvas-container">
            <Canvas
              style={{ width: '100%', height: '100%' }}
              camera={{ position: [0, 0, 20], fov: 50 }}
            >
              <ambientLight color="#FFDBB5" intensity={0.2} />
              <hemisphereLight
                skyColor="#FFDBB5"
                groundColor="#8A5230"
                intensity={0.3}
              />
              <directionalLight
                color="#FFB874"
                intensity={0.2}
                position={[10, 10, 5]}
              />
              <Model position={[0, 0.5, 0]} scale={[1.45, 1.45, 1.45]} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={true}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
          <div className="saiborg-vis-label">
            <span className="saiborg-vis-dot" />
            BUILDING IN PROGRESS
          </div>
        </div>

        {/* ── RIGHT: CHAT + STATUS ── */}
        <div className="saiborg-right">
          <Chat />

          <div className="saiborg-status">
            <div className="saiborg-stat">
              <div className="saiborg-stat-label">MODEL</div>
              <div className="saiborg-stat-value">Transformer</div>
            </div>
            <div className="saiborg-stat">
              <div className="saiborg-stat-label">STATUS</div>
              <div className="saiborg-stat-value saiborg-stat-live">Building</div>
            </div>
            <div className="saiborg-stat">
              <div className="saiborg-stat-label">TRAINING</div>
              <div className="saiborg-stat-value">Scratch</div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
