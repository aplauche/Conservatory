import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Billboard, Center, MeshTransmissionMaterial, RoundedBox, Text, Text3D } from "@react-three/drei";


import * as THREE from 'three'
import useRoom from "../stores/useRoom";



export default function Room({
  index,
  label,
  targetScale,
  targetPos,
  updateHovered
}){


  const glass = useRef()
  const text = useRef()
  const textBg = useRef()

  const targetMaterial = new THREE.MeshBasicMaterial({color: "mediumpurple", transparent: true, opacity: 0})
  const indicatorMaterial = new THREE.MeshBasicMaterial({color: "white", transparent: true, opacity: 0.5})

  const handleRoomSelect = useRoom((state) => state.handleRoomSelect)

  const handleMouse = () => {

      updateHovered(true)

      gsap.to(glass.current.position, { 
        y: 1
      });
      gsap.to(glass.current.scale, { 
        y: targetScale.y
      });
      gsap.to(text.current, { 
        opacity: 1
      });
      gsap.to(textBg.current, { 
        opacity: 1
      });
  }
  const handleMouseOut = () => {

    updateHovered(false)

      gsap.to(glass.current.position, { 
        y: -1
      });
      gsap.to(glass.current.scale, { 
        y: 0
      });
      gsap.to(text.current, { 
        opacity: 0
      });
      gsap.to(textBg.current, { 
        opacity: 0
      });

  }

  const handleClick = () => {
    handleRoomSelect(index)
  }

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
            <Text3D font={'./telegraph.json'}
                    bevelEnabled
                    height={0.2}
                    size={0.45}
                    letterSpacing={0.01}
                    bevelSize={0.02}
                    bevelThickness={0.02}
                    bevelSegments={5}
            >
              {label}

            <meshStandardMaterial ref={text} attach={'material'} color={'#658354'} transparent={true} opacity={0} />
            </Text3D>
          </Center>
          <mesh  position-z={-0.35}>
            <RoundedBox args={[6 , 1.5 , 0.4 ]} radius={0.2} smoothness={6}>
              <meshStandardMaterial ref={textBg} attach={'material'} color={'#e5e5e5'} transparent={true} opacity={0} /> 
            </RoundedBox>
          </mesh>
          </Billboard>


        <mesh 
          material={targetMaterial}
          scale-z={targetScale.z / 1.02 } 
          scale-x={targetScale.x / 1.02 } 
          scale-y={targetScale.y / 2} 
          onPointerOver={(e) => {e.stopPropagation(), handleMouse()}} 
          onPointerLeave={() => {handleMouseOut()}}
          onClick={(e)=> {e.stopPropagation(), handleClick()}}
        >
            <boxGeometry args={[1,1,1]} />
        </mesh>
      </group>
    
    
    
    </>
  )
}