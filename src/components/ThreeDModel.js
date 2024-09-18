import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three-stdlib';

const OrbitControlsComponent = () => {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

const Model = () => {
  const { scene } = useLoader(GLTFLoader, '/scene.gltf');

  useEffect(() => {
    if (scene) {
      // Increase the scale of the plant
      scene.scale.set(150, 150, 150);
      scene.position.set(0, 0, 0); // Ensure the model is within the view
    }
  }, [scene]);

  return <primitive object={scene} />;
};

const ThreeDModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 10, 5], fov: 75 }} 
      style={{ height: '100%', width: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model />
      <OrbitControlsComponent />
    </Canvas>
  );
};

export default ThreeDModel;
