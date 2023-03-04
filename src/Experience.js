import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import Placeholder from './components/Placeholder'
import Building from './components/Building'


export default function Experience()
{

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow shadow-normalBias={0.05} position={ [ 1, 2, -3 ] } intensity={ 1 } />
        <ambientLight intensity={ 0.8 } />

        <mesh receiveShadow position-y={ - 15.18 } scale={ 1 }>
            <cylinderGeometry args={[12, 12, 30, 32]} />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        {/* <Suspense fallback={ <Placeholder position-y={0.5} scale={[2,3,2]}/> }>
            <Hamburger scale={0.5}/>
        </Suspense> */}

        <Building />

    </>
}