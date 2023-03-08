import { Billboard, Center, MeshTransmissionMaterial, RoundedBox, Text, Text3D } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three'
import Room from "./rooms/Room";


export default function HoverTargets(){

  // const glass = useRef()
  // const text = useRef()
  // const textBg = useRef()



  return (
    <>

      <Room 

        label={"Palm Room"}
        targetScale={{x: 4, y: 4.5, z: 10.5}}
        targetPos={{x: 3.45, y: 0, z:0.2}}
      />

      <Room 

        label={"Fern Room"}
        targetScale={{x: 5.5, y: 4.5, z: 5}}
        targetPos={{x: -1.25, y: 0, z:0.2}}
      />

      <Room 

        label={"Information"}
        targetScale={{x: 2.5, y: 2.5, z: 7}}
        targetPos={{x: 6.5, y: 0, z:0.2}}
      />
      
    </>
  )
}