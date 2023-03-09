import { BakeShadows, MeshTransmissionMaterial, OrbitControls, PivotControls, SoftShadows, TransformControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useRef } from 'react'
import Placeholder from './components/Placeholder'
import Building from './components/Building'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import HoverTargets from './components/HoverTargets'
import useRoom from './stores/useRoom'

export default function Experience(){


    const currentlySelected = useRoom((state) => state.currentlySelected)

    useEffect(() => {
        console.log(currentlySelected)
    },[currentlySelected])

    return <>

        <Perf position="top-left" />

        <OrbitControls 
            makeDefault  
            // maxDistance={50}
            // minDistance={50}
            maxPolarAngle={Math.PI / 2.05}
            // autoRotate 
            // autoRotateSpeed={0.75}
        />

        <SoftShadows />
        <BakeShadows />

        <directionalLight 
            castShadow 
            shadow-camera-left={-10} 
            shadow-camera-right={10} 
            shadow-camera-top={10}  
            shadow-camera-bottom={-10} 
            shadow-normalBias={0.05} 
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            position={ [ 2, 6.5, -3 ] } 
            intensity={ 0.6 } 
        />


        <ambientLight intensity={ 0.9 } />


        <mesh receiveShadow position-y={ - 15.18 } scale={ 1 }>
            <cylinderGeometry args={[12, 12, 30, 64]} />
            <meshStandardMaterial color="#75975e" />
        </mesh>


        {/* <Suspense fallback={ <Placeholder position-y={0.5} scale={[2,3,2]}/> }>
            <Hamburger scale={0.5}/>
        </Suspense> */}

        <Building  />

        <HoverTargets />
     

    

        {/* <mesh position-y={2.75}>
                <boxGeometry args={[20, 6, 20]} />
                <MeshTransmissionMaterial 
                    background={new THREE.Color("ivory")} 
                    transmission={0.95}
                    chromaticAberration={0.01} 
                    thickness={0.1}
                    roughness={0.3}
                    samples={6}
                    resolution={8000}
                />

            </mesh> */}

    </>
}