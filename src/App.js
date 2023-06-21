import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import Drawer from './components/Drawer.js'
import MainPage from './MainPage.js'
import Pano from './PanoPage.js'
import useRoom from './stores/useRoom.js'
import { Route, Routes } from "react-router-dom"
import PanoPage from './PanoPage.js'


export default function App(){

  // const panoScene = useRoom(state => state.panoScene)

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/room/:slug" element={<PanoPage />} />
    </Routes>

  )

}