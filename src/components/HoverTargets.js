import { Center, MeshTransmissionMaterial, Text, Text3D } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from 'three'


export default function HoverTargets(){

  const glass = useRef()
  const text = useRef()

  const handleMouse = () => {
      console.log("moused over");
      gsap.to(glass.current.position, { 
        y: 1
      });
      gsap.to(text.current, { 
        opacity: 1
      });
  }
  const handleMouseOut = () => {
      console.log("moused out");
      gsap.to(glass.current.position, { 
        y: -10
      });
      gsap.to(text.current, { 
        opacity: 0
      });
  }


  return (
    <>
    
      <mesh ref={glass} position={[3.45,-10, 0.2]} scale-z={10.5} scale-x={4} scale-y={4.5}>
          <boxGeometry args={[1,1,1]} />
          <MeshTransmissionMaterial 
              background={new THREE.Color("#b3cf99")} 
              transmission={0.85}
              chromaticAberration={0} 
              thickness={0}
              roughness={1}
          />
      </mesh>

      {/* <Text position={[3.45,5, 0.2]} color="#4b6043" rotation-y={ Math.PI / 2} anchorX="center" anchorY="middle">
        FERN ROOM
      </Text> */}

      <Center position={[3.45,5, 0.2]} rotation-y={ Math.PI / 2}>
        <Text3D font={'./helvetiker_regular.typeface.json'}
                bevelEnabled
                height={0.2}
                size={0.75}
                letterSpacing={0.1}
                bevelSize={0.02}
                bevelThickness={0.02}
                bevelSegments={5}
        >
          FERN ROOM
        <meshStandardMaterial ref={text} attach={'material'} color={'#658354'} transparent={true} opacity={0} />
        </Text3D>
      </Center>

      <mesh position={[3.45,1, 0.2]} scale-z={10.5} scale-x={4} scale-y={4.5} onPointerOver={handleMouse} onPointerLeave={handleMouseOut}>
          <boxGeometry args={[1,1,1]} />
          <meshBasicMaterial  visible={false}/>
      </mesh>
    
    </>
  )
}