import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, RoundedBox, Text } from "@react-three/drei";

/* ---------- Lights ---------- */
function Lights() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[6, 8, 4]} intensity={1.15} />
      <directionalLight position={[-6, 2, 6]} intensity={0.6} color="#c7d2fe" />
      <pointLight position={[0, 2, -8]} intensity={0.75} color="#60a5fa" />
      <pointLight position={[0, -6, 6]} intensity={0.55} color="#a78bfa" />
    </>
  );
}

/* ---------- Mouse parallax group ---------- */
function ParallaxGroup({ children }) {
  const ref = useRef();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, target.current.x, 0.08);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, target.current.y, 0.08);
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
  });

  return (
    <group
      ref={ref}
      onPointerMove={(e) => {
        target.current.x = (e.pointer.x ?? 0) * 0.35;
        target.current.y = -(e.pointer.y ?? 0) * 0.25;
      }}
      onPointerOut={() => {
        target.current.x = 0;
        target.current.y = 0;
      }}
    >
      {children}
    </group>
  );
}

/* ---------- Face Labels (slide) ---------- */
function CubeLabels({ cubeSize = 1.75 }) {
  const languages = ["React", "Tailwind", "Node.js", "PHP", "MySQL", "CI4", "JS", "Next.js"];

  const [index, setIndex] = useState(0);
  const group = useRef();

  // auto slide
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % languages.length), 1400);
    return () => clearInterval(id);
  }, []);

  // animate a little float on the label group
  useFrame((state) => {
    if (!group.current) return;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.03;
  });

  const label = languages[index];
  const half = cubeSize / 2;
  const offset = half + 0.02; // slightly above surface
  const textProps = {
    fontSize: 0.22,
    color: "#eef2ff",
    anchorX: "center",
    anchorY: "middle",
    outlineWidth: 0.005,
    outlineColor: "#312e81",
  };

  return (
    <group ref={group}>
      {/* Front */}
      <Text position={[0, 0, offset]} {...textProps}>
        {label}
      </Text>

      {/* Back */}
      <Text position={[0, 0, -offset]} rotation={[0, Math.PI, 0]} {...textProps}>
        {label}
      </Text>

      {/* Right */}
      <Text position={[offset, 0, 0]} rotation={[0, -Math.PI / 2, 0]} {...textProps}>
        {label}
      </Text>

      {/* Left */}
      <Text position={[-offset, 0, 0]} rotation={[0, Math.PI / 2, 0]} {...textProps}>
        {label}
      </Text>

      {/* Top */}
      <Text position={[0, offset, 0]} rotation={[-Math.PI / 2, 0, 0]} {...textProps}>
        {label}
      </Text>

      {/* Bottom */}
      <Text position={[0, -offset, 0]} rotation={[Math.PI / 2, 0, 0]} {...textProps}>
        {label}
      </Text>
    </group>
  );
}

/* ---------- Main cube ---------- */
function MainCube() {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.16;
    ref.current.rotation.y += delta * 0.22;
  });

  return (
    <Float speed={0.9} rotationIntensity={0.22} floatIntensity={0.55}>
      <group ref={ref} position={[0, 0.25, 0]}>
        <RoundedBox args={[1.75, 1.75, 1.75]} radius={0.18} smoothness={8}>
          <meshPhysicalMaterial
            color="#7f1f8e"
            metalness={0.15}
            roughness={0.12}
            transmission={0.35}
            thickness={0.9}
            ior={1.3}
            clearcoat={1}
            clearcoatRoughness={0.15}
            emissive="#bd2dd3"
            emissiveIntensity={0.12}
          />
        </RoundedBox>

        {/* ✅ Sliding label on cube faces */}
        <CubeLabels cubeSize={1.75} />
      </group>
    </Float>
  );
}

/* ---------- Floating cubes ---------- */
function getMaterialVariant(i) {
  const variants = [
    { color: "#a5b4fc", emissive: "#4f46e5", emissiveIntensity: 0.12 },
    { color: "#c7d2fe", emissive: "#7c3aed", emissiveIntensity: 0.08 },
    { color: "#93c5fd", emissive: "#2563eb", emissiveIntensity: 0.08 },
    { color: "#ddd6fe", emissive: "#6d28d9", emissiveIntensity: 0.06 },
  ];
  return variants[i % variants.length];
}

function FloatingCubes({ count = 34, radius = 4.2 }) {
  const group = useRef();

  const cubes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(THREE.MathUtils.lerp(1.8, radius, Math.random()));

      const scale = THREE.MathUtils.lerp(0.14, 0.48, Math.random());

      arr.push({
        position: v.toArray(),
        scale,
        speed: THREE.MathUtils.lerp(0.35, 1.0, Math.random()),
        rot: [
          THREE.MathUtils.lerp(-0.6, 0.6, Math.random()),
          THREE.MathUtils.lerp(-0.6, 0.6, Math.random()),
          THREE.MathUtils.lerp(-0.6, 0.6, Math.random()),
        ],
        variantIndex: Math.floor(Math.random() * 4),
        radius: THREE.MathUtils.lerp(0.04, 0.12, Math.random()),
      });
    }
    return arr;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.045;
  });

  return (
    <group ref={group}>
      {cubes.map((c, idx) => {
        const v = getMaterialVariant(c.variantIndex);
        return (
          <Float key={idx} speed={c.speed} rotationIntensity={0.35} floatIntensity={0.9}>
            <group position={c.position} rotation={c.rot} scale={c.scale}>
              <RoundedBox args={[1, 1, 1]} radius={c.radius} smoothness={6}>
                <meshPhysicalMaterial
                  color={v.color}
                  metalness={0.05}
                  roughness={0.22}
                  transmission={0.18}
                  thickness={0.6}
                  ior={1.25}
                  clearcoat={1}
                  clearcoatRoughness={0.2}
                  emissive={v.emissive}
                  emissiveIntensity={v.emissiveIntensity}
                />
              </RoundedBox>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

export default function CubeScene() {
  return (
    <div className="w-full h-full bg-transparent">
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.6, 7], fov: 45 }}
        dpr={[1, 1.6]}
        style={{ background: "transparent" }}
      
      >
        <Lights />
        <Environment preset="city" background={false} />

        <ContactShadows position={[0, -1.55, 0]} opacity={0.3} scale={8} blur={2.6} far={10} />

        <ParallaxGroup>
          <MainCube />
          <FloatingCubes count={36} radius={4.4} />
        </ParallaxGroup>
      </Canvas>
    </div>
  );
}
