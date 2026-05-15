'use client'
import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef()
  const wireframeRef = useRef()
  const timerRef = useRef(new THREE.Timer())

  useFrame(() => {
    const elapsed = timerRef.current.getElapsed()
    if (meshRef.current) {
      meshRef.current.rotation.x = elapsed * 0.3
      meshRef.current.rotation.y = elapsed * 0.5
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = elapsed * -0.2
      wireframeRef.current.rotation.y = elapsed * -0.4
    }
  })

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <Sphere ref={wireframeRef} args={[1, 32, 32]} scale={2.3}>
          <meshBasicMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.15}
          />
        </Sphere>
      </Float>
    </>
  )
}

function Particles() {
  const count = 200
  const mesh = useRef()
  const timerRef = useRef(new THREE.Timer())
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const factor = Math.random() * 2
      const speed = 0.01 + Math.random() * 0.02
      const x = Math.random() * 20 - 10
      const y = Math.random() * 20 - 10
      const z = Math.random() * 20 - 10
      temp.push({ time: Math.random() * 100, factor, speed, x, y, z })
    }
    return temp
  }, [])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(() => {
    const elapsed = timerRef.current.getElapsed()
    particles.forEach((particle, index) => {
      particle.time += particle.speed
      const t = particle.time
      const { factor, x, y, z } = particle
      
      dummy.position.set(
        x + Math.cos((t / 10) * factor) * 2,
        y + Math.sin((t / 15) * factor) * 2,
        z + Math.cos((t / 20) * factor) * 2
      )
      dummy.updateMatrix()
      mesh.current.setMatrixAt(index, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color="#818cf8" transparent opacity={0.6} />
    </instancedMesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#6366f1" intensity={0.5} />
      <AnimatedSphere />
      <Particles />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export default function Hero3D() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-900/50 to-purple-900/50" />
    )
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  )
}