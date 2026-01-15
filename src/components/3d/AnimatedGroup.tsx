'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ReactNode } from 'react';

interface AnimatedGroupProps {
  children: ReactNode;
}

export default function AnimatedGroup({ children }: AnimatedGroupProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    groupRef.current.rotation.y = Math.cos(time * 0.1) * 0.1;
  });

  return <group ref={groupRef}>{children}</group>;
}
