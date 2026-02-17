'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import type { Mesh } from 'three'

export function HeroScene() {
  const mainRef = useRef<Mesh>(null)
  const wireRef = useRef<Mesh>(null)
  const innerRef = useRef<Mesh>(null)
  const { pointer } = useThree()

  useFrame((state, delta) => {
    if (!mainRef.current || !wireRef.current || !innerRef.current) return
    const t = state.clock.getElapsedTime()
    mainRef.current.rotation.y += delta * 0.12
    mainRef.current.rotation.x = Math.sin(t * 0.3) * 0.15
    wireRef.current.rotation.y = mainRef.current.rotation.y
    wireRef.current.rotation.x = mainRef.current.rotation.x
    innerRef.current.rotation.y = mainRef.current.rotation.y * 1.5
    innerRef.current.rotation.x = mainRef.current.rotation.x * 1.5
    mainRef.current.rotation.z += (pointer.x * 0.2 - mainRef.current.rotation.z) * 0.02
    wireRef.current.rotation.z = mainRef.current.rotation.z
    innerRef.current.rotation.z = mainRef.current.rotation.z
  })

  return (
    <>
      <ambientLight intensity={0.05} />
      <spotLight position={[5, 5, 5]} color="#fffaf0" intensity={1.5} angle={0.4} />
      <pointLight position={[3, 0, -3]} color="#f59e0b" intensity={0.6} />
      <pointLight position={[-2, 3, 2]} color="#f97316" intensity={0.3} />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <mesh ref={mainRef}>
          <octahedronGeometry args={[1.6, 0]} />
          <meshPhysicalMaterial
            color="#1a1408"
            metalness={1}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
            reflectivity={1}
          />
        </mesh>
        <mesh ref={wireRef}>
          <octahedronGeometry args={[1.65, 0]} />
          <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.12} />
        </mesh>
        <mesh ref={innerRef}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.08} />
        </mesh>
      </Float>
    </>
  )
}
