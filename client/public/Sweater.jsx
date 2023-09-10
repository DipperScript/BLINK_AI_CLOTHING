/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 sweater.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/sweater.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['jumper_model_man-base'].geometry} material={materials.DefaultSkin} position={[0.01, 1.09, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/sweater.glb')
