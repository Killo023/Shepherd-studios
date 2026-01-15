'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AnimatedLogo() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = hovered
      ? meshRef.current.rotation.y + 0.02
      : Math.sin(time * 0.5) * 0.2;
    meshRef.current.rotation.x = hovered
      ? meshRef.current.rotation.x + 0.01
      : Math.cos(time * 0.3) * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Create a 3D representation of the logo */}
      {/* This is a placeholder - replace with actual logo geometry */}
      <group>
        {/* Letter S shape approximation */}
        <mesh position={[-0.3, 0, 0]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color="#1a5f7a" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color="#1a5f7a" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.3, 0, 0]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color="#1a5f7a" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
    </mesh>
  );
}
