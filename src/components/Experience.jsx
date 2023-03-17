import { OrbitControls } from "@react-three/drei";
import Paladin from "./Paladin";

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
        position={[0, -1.2, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[25, 15, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
        {/* <meshPhongMaterial attach="material" color="green" /> */}
        {/* <planeBufferGeometry args={[100, 100, 1, 1]} /> */}
        {/* <shadowMaterial transparent opacity={0.2} /> */}
      </mesh>
    </>
  );
};

export default Experience;
