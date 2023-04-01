import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Billboard, Center, Html, MeshTransmissionMaterial, RoundedBox, Text, Text3D } from "@react-three/drei";


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
  const textLine = useRef()

  const targetMaterial = new THREE.MeshBasicMaterial({color: "mediumpurple", transparent: true, opacity: 0})
  const indicatorMaterial = new THREE.MeshBasicMaterial({color: "white", transparent: true, opacity: 0.5})

  const handleRoomSelect = useRoom((state) => state.handleRoomSelect)

  const handleMouse = () => {

      updateHovered(true)

      const tl = gsap.timeline()

      gsap.to(glass.current.position, { 
        y: 1
      });
      gsap.to(glass.current.scale, { 
        y: targetScale.y
      });

      tl
        .to(textLine.current.scale, { 
          y: 1
        })
        .to(textLine.current.position, { 
        y: 0
        }, '-=100%')
        .to(text.current, { 
          opacity: 1
        })
  }
  const handleMouseOut = () => {

    updateHovered(false)

      const tl = gsap.timeline()

      gsap.to(glass.current.position, { 
        y: -1
      });
      gsap.to(glass.current.scale, { 
        y: 0
      });
      tl
        .to(text.current, { 
          opacity: 0
        })
        .to(textLine.current.scale, { 
          y: 0
        })
        .to(textLine.current.position, { 
        y: -2.5
        }, '-=100%')


  }

  const handleClick = () => {
    handleRoomSelect(index)
  }

  return (
    <>
      <group position={[targetPos.x, targetPos.y, targetPos.z]}>

        
        <mesh ref={glass} position-y={-1} scale-z={targetScale.z} scale-x={targetScale.x} scale-y={0} material={indicatorMaterial}>
          <boxGeometry args={[1,1,1]} />
        </mesh>


        <group position={[0, 7.5, 0]} rotation-y={Math.PI / 2} >

          {/* <Text color="#777" anchorX="left" anchorY="middle">
            {label}
          </Text> */}

          {/* target line */}
          <group position={[0,-1.75,0]}>
            <mesh position={[-0.4,-2.5,0]} scale-y={0} ref={textLine}>
              <planeGeometry args={[0.1, 5]} />
              <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide}/>
            </mesh>
          </group>

          {/* Text bg */}
          {/* <mesh position={[-0.4,-2,0]}>
            <planeGeometry args={[0.1, 5]} />
            <meshBasicMaterial color="#ffffffff" side={THREE.DoubleSide}/>
          </mesh> */}

          <Html
            ref={text}
            as='div' // Wrapping element (default: 'div')
            wrapperClass="room-label" // The className of the wrapping element (default: undefined)
            transform
            //distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
            //occlude={true} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
            center={false}
            
            style={{
              background: "#fff",
              padding: "20px 30px",
              transform: "translate(50%, 0%)",
              opacity: 0,
              color: "#666"
            }}
          >
            <h3>{label}</h3>
          </Html>

        </group>

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