"use client";
// 3D Spinning coin logo component
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Coin({ textureUrl = "/logo.jpg" }: { textureUrl?: string }) {
  const mesh = useRef<THREE.Mesh>(null!); // self-spin
  const precess = useRef<THREE.Group>(null!); // slow orbit around vertical
  const tiltGroup = useRef<THREE.Group>(null!); // fixed + wobbly tilt
  const tRef = useRef(0);

  const tex = useTexture(textureUrl);
  tex.anisotropy = 16;
  tex.generateMipmaps = true;

  // Materials: [side, top, bottom]
  const materials = useMemo(() => {
    const side = new THREE.MeshStandardMaterial({
      color: "#d1d5db",
      metalness: 0.6,
      roughness: 0.35,
    });
    const top = new THREE.MeshStandardMaterial({
      map: tex,
      metalness: 0.1,
      roughness: 0.8,
      side: THREE.DoubleSide,
    });
    const bottom = new THREE.MeshStandardMaterial({
      map: tex,
      metalness: 0.1,
      roughness: 0.8,
      side: THREE.DoubleSide,
    });
    return [side, top, bottom];
  }, [tex]);

  // Spin like a coin on a table: precession + tilt + self-spin (all slower)
  useFrame((_, delta) => {
    tRef.current += delta;

    if (precess.current) {
      precess.current.rotation.y += delta * 0.2; // precession speed (slow)
    }
    if (tiltGroup.current) {
      const baseTilt = 0.45; // ~26°
      const wobble = 0.06 * Math.sin(tRef.current * 2); // subtle wobble
      tiltGroup.current.rotation.x = baseTilt + wobble;
    }
    if (mesh.current) {
      mesh.current.rotation.z += delta * 1.2; // self-spin (slower than before)
    }
  });

  return (
    // precess around vertical
    <group ref={precess}>
      {/* maintain a slightly tilted orientation */}
      <group ref={tiltGroup}>
        <mesh ref={mesh} material={materials}>
          {/* small thickness so the rim reads */}
          <cylinderGeometry args={[0.9, 0.9, 0.12, 128]} />
        </mesh>
      </group>
    </group>
  );
}

export function CoinLogo({ size = 96 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="rounded-full ">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 35 }}>
        {/* Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <directionalLight position={[-2, -2, 2]} intensity={0.4} />

        {/* coin-on-table motion */}
        <Coin />
      </Canvas>
    </div>
  );
}
