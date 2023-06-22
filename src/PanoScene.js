import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import useRoom from './stores/useRoom'



export default function PanoScene(){

    const activePano = useRoom(state => state.panoScene)

    const texture = useLoader(THREE.TextureLoader, `${window.location.origin}${activePano.pano}`)

    const controls = useRef()

    return <>


      <OrbitControls 
          reverseOrbit={true}
          panSpeed={0.2}
          rotateSpeed={0.2}
          ref={controls}
          makeDefault
          minDistance={1}
          maxDistance={40}
      />

        <PerspectiveCamera 
            makeDefault
            fov={60}
            near={0.1}
            far={800}
            position={[40,0,40]}
        />


      <mesh>
        <sphereGeometry args={[100, 60, 40]}   />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>


 

    </>
}