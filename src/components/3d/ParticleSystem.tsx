'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSystemProps {
  count?: number;
  speed?: number;
  size?: number;
  color?: string;
}

export default function ParticleSystem({
  count = 1000,
  speed = 0.5,
  size = 0.02,
  color = '#ffffff',
}: ParticleSystemProps) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.cos((i / 100) * Math.PI * 2) * factor;
      const y = Math.sin((i / 100) * Math.PI * 2) * factor;
      const z = (Math.random() - 0.5) * 50;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    return new Float32Array(
      particles.flatMap((p) => [p.x, p.y, p.z])
    );
  }, [particles]);

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      const t = (particle.time + time * particle.speed) % 100;
      const factor = particle.factor + t * 0.01;
      const x = Math.cos((i / 100) * Math.PI * 2) * factor;
      const y = Math.sin((i / 100) * Math.PI * 2) * factor;

      const array = mesh.current!.geometry.attributes.position.array as Float32Array;
      array[i * 3] = x;
      array[i * 3 + 1] = y;
    });

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
