import { BakeShadows, OrbitControls, SoftShadows } from '@react-three/drei'

export default function PanoScene(){



    return <>

            {/* <Perf position="top-left" /> */}

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

    </>
}