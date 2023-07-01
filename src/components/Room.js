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

  const [gsapContext] = useState(gsap.context(() => {}))
  const [animating, setAnimating] = useState(false)

  const handleMouse = () => {

      updateHovered(true)

      setAnimating(true)

      gsapContext.add(() => {
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
          }, "-=50%")
          .add(()=>{
            setAnimating(false)
          })
      });


  }
  const handleMouseOut = () => {

    updateHovered(false)

    if(animating) {
      gsapContext.revert()
      return
    } 

    gsapContext.add(() => {
      const mouseOurTl = gsap.timeline()

      gsap.to(glass.current.position, { 
        y: -1
      });
      gsap.to(glass.current.scale, { 
        y: 0
      });
      mouseOurTl
        .to(text.current, { 
          opacity: 0
        })
        .to(textLine.current.scale, { 
          y: 0
        }, "-=50%")
        .to(textLine.current.position, { 
        y: -2.5
        }, '-=100%')

    });



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

          {/* target line */}
          <group position={[0,-1.75,0]}>
            <mesh position={[-0.4,-2.5,0]} scale-y={0} ref={textLine}>
              <planeGeometry args={[0.1, 5]} />
              <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide}/>
            </mesh>
          </group>

          <Html
            ref={text}
            as='div' // Wrapping element (default: 'div')
            wrapperClass="room-label" // The className of the wrapping element (default: undefined)
            transform
            center={false}
            
            style={{
              padding: "4px",
              border: "2px solid white",
              transform: "translate(50%, 0%)",
              opacity: 0,
            }}
          >
            <div style={{
              background: "#fff",
              padding: "16px 24px",

              color: "#666",
            }}>         
              <h3>{label}</h3>
            </div>
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