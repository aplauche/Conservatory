import { Billboard, Center, MeshTransmissionMaterial, RoundedBox, Text, Text3D } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three'
import Room from "./rooms/Room";


export default function HoverTargets(){

  // const glass = useRef()
  // const text = useRef()
  // const textBg = useRef()

    const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const targetMaterial = new THREE.MeshBasicMaterial({color: "mediumpurple", transparent: true, opacity: 0})
  const indicatorMaterial = new THREE.MeshBasicMaterial({color: "white", transparent: true, opacity: 0.5})


  const handleMouse = (glass, text, textBg) => {

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
  const handleMouseOut = (glass, text, textBg) => {
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


  return (
    <>

      <Room 
        indicatorMaterial={indicatorMaterial} 
        targetMaterial={targetMaterial}
        handleMouse={handleMouse}
        handleMouseOut={handleMouseOut}
        label={"Palm Room"}
        targetScale={{x: 4, y: 4.5, z: 10.5}}
        targetPos={{x: 3.45, y: 0, z:0.2}}
      />

      <Room 
        indicatorMaterial={indicatorMaterial} 
        targetMaterial={targetMaterial}
        handleMouse={handleMouse}
        handleMouseOut={handleMouseOut}
        label={"Fern Room"}
        targetScale={{x: 5.5, y: 4.5, z: 5}}
        targetPos={{x: -1.25, y: 0, z:0.2}}
      />
      
    </>
  )
}