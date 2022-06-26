import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[0.8, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0.5}
      ></MeshDistortMaterial>
    </Sphere>
  );
}
