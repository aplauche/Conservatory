import { MeshTransmissionMaterial, OrbitControls, PivotControls, TransformControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense, useRef } from 'react'
import Placeholder from './components/Placeholder'
import Building from './components/Building'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Experience(){



    



    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow shadow-normalBias={0.05} position={ [ 1, 2, -3 ] } intensity={ 0.6 } />
        <ambientLight intensity={ 0.9 } />

        {/* <pointLight position={[6,3, 0.2]} intensity={0.1}/> */}



        <mesh receiveShadow position-y={ - 15.18 } scale={ 1 }>
            <cylinderGeometry args={[12, 12, 30, 32]} />
            <meshStandardMaterial color="#75975e" />
        </mesh>
        {/* <mesh receiveShadow position-y={ - 15.18 } scale={ 1 }>
            <boxGeometry args={[20, 30, 20]} />
            <meshStandardMaterial color="#75975e" />
        </mesh> */}

        {/* <Suspense fallback={ <Placeholder position-y={0.5} scale={[2,3,2]}/> }>
            <Hamburger scale={0.5}/>
        </Suspense> */}

        <Building />

        {/* <PivotControls 
            anchor={[0,0,0]} 
            depthTest={false}
            lineWidth={2}
            axisColors={['#9381ff', '#ff4d6d', "#78e582"]}
            scale={1.2}
            annotations={true}
        >
            <mesh position={[3.45,1, 0.2]} scale-z={12} scale-x={4} scale-y={6}>
                <boxGeometry args={[1,1,1]} />
                <MeshTransmissionMaterial 
                    background={new THREE.Color("ivory")} 
                    transmission={0.95}
                    chromaticAberration={0.4} 
                    thickness={0.03}
                    roughness={0.3}
                />
            </mesh>
        </PivotControls> */}

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