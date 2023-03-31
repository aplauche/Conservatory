import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import Drawer from './components/Drawer.js'
import MainCanvas from './MainCanvas.js'
import Pano from './PanoCanvas.js'
import useRoom from './stores/useRoom.js'
import { Route, Routes } from "react-router-dom"
import PanoCanvas from './PanoCanvas.js'


export default function App(){

  // const panoScene = useRoom(state => state.panoScene)

  return (
    <Routes>
      <Route path="/" element={<MainCanvas />} />
      <Route path="/room/:id" element={<PanoCanvas />} />
    </Routes>

  )

}