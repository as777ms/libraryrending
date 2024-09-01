// GalaxyBackground.js
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GalaxyShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
  },
  // Vertex Shader
  /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  /* glsl */ `
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;
    void main() {
      vec2 st = gl_FragCoord.xy/uResolution;
      vec3 color = vec3(0.0);
      float d = distance(st,vec2(0.5));
      color = vec3(1.0 - d);
      gl_FragColor = vec4(color,1.0);
    }
  `
);

const GalaxyBackground = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const update = () => {
        ref.current.material.uTime = performance.now() / 1000;
        requestAnimationFrame(update);
      };
      update();
    }
  }, []);

  return (
    <Canvas>
      <mesh>
        <planeBufferGeometry args={[2, 2]} />
        <GalaxyShaderMaterial ref={ref} uResolution={[window.innerWidth, window.innerHeight]} />
      </mesh>
    </Canvas>
  );
};

export default GalaxyBackground;