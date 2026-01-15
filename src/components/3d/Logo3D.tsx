'use client';

import Scene3D from './Scene3D';
import AnimatedLogo from './AnimatedLogo';

interface Logo3DProps {
  className?: string;
}

export default function Logo3D({ className = '' }: Logo3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Scene3D cameraPosition={[0, 0, 5]} enableControls={false}>
        <AnimatedLogo />
      </Scene3D>
    </div>
  );
}
