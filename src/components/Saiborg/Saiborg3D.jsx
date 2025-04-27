import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/saiborg.glb')

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.5
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <pointLight intensity={1.5} position={[4, 6, -1]} decay={2} />
      <PerspectiveCamera makeDefault={false} fov={17.8} position={[0,0,24]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('/saiborg.glb')