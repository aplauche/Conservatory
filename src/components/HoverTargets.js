import { Billboard, Center, MeshTransmissionMaterial, RoundedBox, Text, Text3D } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three'


export default function HoverTargets(){

  const glass = useRef()
  const text = useRef()
  const textBg = useRef()

  const [hovered, setHovered] = useState(false)

  const handleMouse = () => {
      setHovered(true)
      console.log("moused over");
      gsap.to(glass.current.position, { 
        y: 1
      });
      gsap.to(glass.current.scale, { 
        y: 4.5
      });
      gsap.to(text.current, { 
        opacity: 1
      });
      gsap.to(textBg.current, { 
        opacity: 1
      });
  }
  const handleMouseOut = () => {
      console.log("moused out");
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

      setHovered(false)
  }

  const handleClick = () => {
    //gsap.to('.drawer', {x: 0})
  }

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])


  return (
    <>
    
      <mesh ref={glass} position={[3.45,-1, 0.2]} scale-z={10.5} scale-x={4} scale-y={0}>
          <boxGeometry args={[1,1,1]} />
          {/* <MeshTransmissionMaterial 
              background={new THREE.Color("#b3cf99")} 
              transmission={0.85}
              chromaticAberration={0} 
              thickness={0}
              roughness={1}
          /> */}
          <meshStandardMaterial color={"#fff"} transparent={true} opacity={0.5}/>
      </mesh>

      {/* <Text position={[3.45,5, 0.2]} color="#4b6043" rotation-y={ Math.PI / 2} anchorX="center" anchorY="middle">
        FERN ROOM
      </Text> */}



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
            Fern Room

          <meshStandardMaterial ref={text} attach={'material'} color={'#658354'} transparent={true} opacity={0} />
          </Text3D>
        </Center>
        <mesh position-z={-0.35}>
          <RoundedBox args={[8 , 1.75 , 0.4 ]} radius={0.2} smoothness={6}>
            <meshStandardMaterial ref={textBg} attach={'material'} color={'#e5e5e5'} transparent={true} opacity={0} /> 
          </RoundedBox>
        </mesh>
        </Billboard>


      <mesh position={[3.45,1, 0.2]} scale-z={10.5} scale-x={4} scale-y={4.5} onClick={handleClick} onPointerOver={handleMouse} onPointerLeave={handleMouseOut}>
          <boxGeometry args={[1,1,1]} />
          <meshBasicMaterial  visible={false}/>
      </mesh>
    
    </>
  )
}