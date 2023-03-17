import { OrbitControls, SoftShadows } from "@react-three/drei";
import Paladin from "./Paladin";
import Floor from "./Floor";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 10, 10]}
        castShadow
        intensity={0.4}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group position={[0, -1, 0]}>
        <Paladin />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, -2]}
        receiveShadow
      >
        <planeBufferGeometry args={[25, 15, 1, 1]} receiveShadow />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <group position={[0, -1, 0]}>
        <Floor />
      </group>
      <SoftShadows size={35} samples={16} focus={1} />
    </>
  );
};

export default Experience;
