'use client';

import Scene3D from './Scene3D';
import ParticleSystem from './ParticleSystem';
import AnimatedGroup from './AnimatedGroup';

interface Hero3DProps {
  className?: string;
}

export default function Hero3D({ className = '' }: Hero3DProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Scene3D cameraPosition={[0, 0, 10]} className="w-full h-full">
        <AnimatedGroup>
          {/* Floating geometric shapes */}
          <mesh position={[-2, 1, 0]} rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#1a5f7a"
              transparent
              opacity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[2, -1, 0]} rotation={[-0.5, 0.5, 0]}>
            <octahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial
              color="#ff6b6b"
              transparent
              opacity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0, -2, 1]} rotation={[0.5, -0.5, 0]}>
            <torusGeometry args={[0.6, 0.3, 16, 100]} />
            <meshStandardMaterial
              color="#4ecdc4"
              transparent
              opacity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Particle system */}
          <ParticleSystem count={500} speed={0.3} size={0.03} color="#ffffff" />
        </AnimatedGroup>
      </Scene3D>
    </div>
  );
}
