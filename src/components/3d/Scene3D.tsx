'use client';

import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  className?: string;
}

export default function Scene3D({
  children,
  cameraPosition = [0, 0, 5],
  enableControls = false,
  className = '',
}: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {enableControls && <OrbitControls enableZoom={false} />}
        {children}
      </Canvas>
    </div>
  );
}
