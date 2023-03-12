import { Billboard, Center, MeshTransmissionMaterial, RoundedBox, Text, Text3D } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three'
import useRoom from "../stores/useRoom";
import Room from "./Room";


export default function HoverTargets(){

  // const glass = useRef()
  // const text = useRef()
  // const textBg = useRef()

  const rooms = useRoom(state => state.rooms)

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])


  return (
    <>

      {rooms.map((room, idx) => (
        <Room 
          index={idx}
          key={room.name}
          updateHovered={setHovered}
          label={room.name}
          targetScale={room.targetScale}
          targetPos={room.targetPos}
        />
      ))}
      
    </>
  )
}