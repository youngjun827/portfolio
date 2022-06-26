import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "../assets/map.jpg";

export default function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]}></boxBufferGeometry>
      {/*<meshStandardMaterial map={colorMap}></meshStandardMaterial> */}
      <meshNormalMaterial attach="material"></meshNormalMaterial>
    </mesh>
  );
}
