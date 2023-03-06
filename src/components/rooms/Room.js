import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Billboard, Center, MeshTransmissionMaterial, RoundedBox, Text, Text3D } from "@react-three/drei";

import * as THREE from 'three'



export default function Room({
  targetMaterial,
  indicatorMaterial,
  handleMouse,
  handleMouseOut,
  label,
  targetScale,
  targetPos
}){


  const glass = useRef()
  const text = useRef()
  const textBg = useRef()


  return (
    <>
      <group position={[targetPos.x, targetPos.y, targetPos.z]}>
        <mesh ref={glass}  scale-z={targetScale.z} scale-x={targetScale.x} scale-y={0} material={indicatorMaterial}>
          <boxGeometry args={[1,1,1]} />
        </mesh>

        <Billboard
          position={[0, 7.5, 0]}
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
              {label}

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
          scale-z={targetScale.z / 1.02 } 
          scale-x={targetScale.x / 1.02 } 
          scale-y={targetScale.y / 2} 
          onPointerOver={(e) => {e.stopPropagation(), handleMouse(glass, text, textBg)}} 
          onPointerLeave={() => {handleMouseOut(glass, text, textBg)}}
        >
            <boxGeometry args={[1,1,1]} />
        </mesh>
      </group>
    
    
    
    </>
  )
}