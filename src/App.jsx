import { Canvas } from "@react-three/fiber";
import { EffectComposer, DepthOfField, Bloom, Vignette } from "@react-three/postprocessing";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
        <Experience />
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={8} height={480} />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.6} height={500} />
          <Vignette eskil={false} offset={0.2} darkness={1.1} />
        </EffectComposer>
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
