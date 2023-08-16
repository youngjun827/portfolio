/*
author: Seafoam (https://sketchfab.com/seafoam)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24
title: Smol Ame in an Upcycled Terrarium [HololiveEn]
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Computer = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/computer.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Animation.play();
  }, [actions.Animation]);
  return (
    <group ref={group} {...props}>
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2.2, 0, -0.2]}
          position={[-0.1, -0.9, 0]}
          scale={1.25}
        >
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='pasokon_1'>
                <mesh
                  name='Object_4'
                  geometry={nodes.Object_4.geometry}
                  material={materials.pasokon}
                />
                <mesh
                  name='Object_5'
                  geometry={nodes.Object_5.geometry}
                  material={materials.terrarium1}
                />
              </group>
              <group
                name='amelia_37'
                position={[-0.2, 0.9, 0]}
                rotation={[0, 0.86, 0]}
              >
                <group name='GLTF_created_0'>
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name='Object_10'
                    geometry={nodes.Object_10.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name='Object_12'
                    geometry={nodes.Object_12.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name='Object_14'
                    geometry={nodes.Object_14.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name='Object_16'
                    geometry={nodes.Object_16.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name='Object_18'
                    geometry={nodes.Object_18.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name='Object_19'
                    geometry={nodes.Object_19.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name='Object_21'
                    geometry={nodes.Object_21.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name='Object_23'
                    geometry={nodes.Object_23.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name='Object_25'
                    geometry={nodes.Object_25.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name='Object_27'
                    geometry={nodes.Object_27.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name='Object_29'
                    geometry={nodes.Object_29.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name='Object_31'
                    geometry={nodes.Object_31.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name='Object_33'
                    geometry={nodes.Object_33.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name='Object_35'
                    geometry={nodes.Object_35.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name='Object_39'
                    geometry={nodes.Object_39.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name='Object_41'
                    geometry={nodes.Object_41.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name='Object_37'
                    geometry={nodes.Object_37.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_37.skeleton}
                    morphTargetDictionary={
                      nodes.Object_37.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_37.morphTargetInfluences
                    }
                  />
                </group>
              </group>
              <group
                name='isopod002_49'
                position={[0, 0.86, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.07}
              >
                <group name='GLTF_created_1'>
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name='Object_65'
                    geometry={nodes.Object_65.geometry}
                    material={materials.terrarium1}
                    skeleton={nodes.Object_65.skeleton}
                  />
                  <skinnedMesh
                    name='Object_67'
                    geometry={nodes.Object_67.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_67.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Computer;
useGLTF.preload("/computer.gltf");
