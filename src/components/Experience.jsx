import { RepeatWrapping } from "three";
import { OrbitControls, SoftShadows, Sky, Cloud, Sparkles, useTexture } from "@react-three/drei";
import Paladin from "./Paladin";
import Floor from "./Floor";


const Experience = () => {
  // const [colorMap] = useTexture([
  //   './textures/floor/Ground_Grass_001_COLOR.jpg',
  // ])

  const floorProps = useTexture({
    map: '/textures/floor/grass_color.jpeg',
    displacementMap: '/textures/floor/grass_displacement.jpeg',
    aoMap: '/textures/floor/grass_spec.jpeg',
    normalMap: '/textures/floor/grass_normal.jpeg',
  }, (textures) => {
    for (const texture of textures) {
      texture.wrapS = texture.wrapT = RepeatWrapping
      texture.repeat.set(6,6)
      texture.rotation = Math.PI / 2;
    }
  })
  

  return (
    <>
      <OrbitControls />
      {/* <ambientLight intensity={0.2} /> */}
      <directionalLight
        position={[-5, 10, 10]}
        castShadow
        intensity={0.4}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group position={[0, -1, 0]}>
        <Paladin />
        <Sparkles color="orange" size={5} noise={1} amount={100} opacity={0.4} />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1.20, 0]}
        receiveShadow
        castShadow
      >
        <planeGeometry args={[25, 25, 100, 100]} />
        <meshPhongMaterial {...floorProps} displacementScale={0.25} normalScale={1} fog={true}  />
      </mesh>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, -2]}
        receiveShadow
      >
        <planeBufferGeometry args={[25, 15, 1, 1]} receiveShadow />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <group position={[0, -1.1, 0]}>
        <Floor />
      </group>
      <Sky
            distance={3000}
            sunPosition={[0,0,-1]}
            mieCoefficient={0.002}
            mieDirectionalG={0.8}
            turbidity={10}
            rayleigh={6}
            inclination={5}
            azimuth={0.01} />
      <SoftShadows size={35} samples={16} focus={1} />
      <group>
          {/* <Cloud position={[-4, -2, 0]} args={[3, 2]} depth={1.5} segments={20} depthTest={true} opacity={0.5} /> */}
          {/* <Cloud position={[-4, 2, 0]} args={[3, 2]} depth={1.5} segments={20} depthTest={true} opacity={0.5} /> */}
          <Cloud position={[-4, -2, 0]} args={[3, 2]}  depth={1.5} segments={20} depthTest={true} opacity={0.3} />
{/* 24      <Cloud position={[-4, 2, 0]} args={[3, 2]}  depth={1.5} segments={20} depthTest={true} opacity={0.3} /> */}
{/* 25      <Cloud args={[3, 2]}  depth={1.5} segments={20} depthTest={true} opacity={0.3} /> */}
{/* 26      <Cloud position={[4, -2, 0]} args={[3, 2]}  depth={1.5} segments={20} depthTest={true} opacity={0.5} /> */}
{/* 27      <Cloud position={[4, 2, 0]} args={[3, 2]}  depth={1.5} segments={20} depthTest={true} opacity={0.5} /> */}
        </group>
    </>
  );
};

export default Experience;
