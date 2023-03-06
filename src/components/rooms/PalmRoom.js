import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Billboard, Center, MeshTransmissionMaterial, RoundedBox, Text, Text3D } from "@react-three/drei";

import * as THREE from 'three'



export default function PalmRoom({
  targetMaterial,
  indicatorMaterial,
  handleMouse,
  handleMouseOut
}){


  const glass = useRef()
  const text = useRef()
  const textBg = useRef()


  return (
    <>
        <mesh ref={glass} position={[3.45,-1, 0.2]} scale-z={10.5} scale-x={4} scale-y={0} material={indicatorMaterial}>
          <boxGeometry args={[1,1,1]} />
        </mesh>

      <Billboard
        position={[3.45,7.5, 0.2]}
        rotation-y={Math.PI / 8}
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Center >
          <Text3D font={'./bebas.json'}
                  bevelEnabled
                  height={0.2}
                  size={0.75}
                  letterSpacing={0.1}
                  bevelSize={0.02}
                  bevelThickness={0.02}
                  bevelSegments={5}
          >
            Palm Room

          <meshStandardMaterial ref={text} attach={'material'} color={'#658354'} transparent={true} opacity={0} />
          </Text3D>
        </Center>
        <mesh position-z={-0.35}>
          <RoundedBox args={[8 , 1.75 , 0.4 ]} radius={0.2} smoothness={6}>
            <meshStandardMaterial ref={textBg} attach={'material'} color={'#e5e5e5'} transparent={true} opacity={0} /> 
          </RoundedBox>
        </mesh>
        </Billboard>


      <mesh 
        material={targetMaterial}
        position={[3.45,1, 0.2]} 
        scale-z={10.5} 
        scale-x={3.5} 
        scale-y={2} 
        onPointerOver={() => {handleMouse(glass, text, textBg)}} 
        onPointerLeave={() => {handleMouseOut(glass, text, textBg)}}
      >
          <boxGeometry args={[1,1,1]} />
      </mesh>
    
    
    
    </>
  )
}