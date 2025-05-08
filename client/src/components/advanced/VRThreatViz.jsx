import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

function ThreatNode({ position, size, color, label }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, size + 0.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

export default function VRThreatViz() {
  const threats = [
    { position: [1, 0, 0], size: 0.3, color: 'red', label: 'APT Group' },
    { position: [-1, 0.5, 0], size: 0.2, color: 'orange', label: 'Brute Force' },
    { position: [0, -1, 0], size: 0.25, color: 'yellow', label: 'Data Exfil' },
  ];

  return (
    <div className="h-96 bg-black rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {threats.map((threat, i) => (
          <ThreatNode key={i} {...threat} />
        ))}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}