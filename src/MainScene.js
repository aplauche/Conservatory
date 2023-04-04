import { BakeShadows, Html, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, PivotControls, RoundedBox, SoftShadows, TransformControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useRef } from 'react'
import Placeholder from './components/Placeholder'
import Building from './components/Building'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import HoverTargets from './components/HoverTargets'
import useRoom from './stores/useRoom'
import gsap from 'gsap'

export default function MainScene(){


    const camera = useRef()

    const controls = useRef()

    const mainObject = useRef()

    const set = useThree((state) => state.set)
    const currentlySelected = useRoom(state => state.currentlySelected)


    useEffect(() => {
      set({ camera: camera.current })
    //   gsap.from(mainObject.current.position, {
    //     y: -20, duration: 1.5
    //   })
    }, [])

    useEffect(() => {
        if(currentlySelected){
            gsap.to(camera.current.position, { 
                x: currentlySelected.cameraShift.x,
                y: currentlySelected.cameraShift.y,
                z: currentlySelected.cameraShift.z,
            });
            gsap.to(controls.current.target, { 
                x: 4,
                y: 0,
                z: -4,
            });
        } else {
            gsap.to(camera.current.position, { 
                x: 30,
                y: 16,
                z: 26
            });
            gsap.to(controls.current.target, { 
                x: 0,
                y: 0,
                z: 0,
            });
        }

        return () => {

        }
    }, [currentlySelected, camera.current])
  

    return <>

        {/* <Perf position="top-left" /> */}

        <PerspectiveCamera 
            name="FBO Camera"
            ref={camera}
            fov={22}
            near={0.1}
            far={200}
            position={[  30, 22, 30 ]}
        />


        <OrbitControls   
            ref={controls}
            maxDistance={60}
            minDistance={60}
            maxPolarAngle={Math.PI / 2.05}

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

        <group ref={mainObject}>




            {/* <mesh receiveShadow  scale={ 1 }>
                <cylinderGeometry args={[12, 12, 30, 64]} />
                <meshStandardMaterial color="#75975e" />
            </mesh> */}

            <RoundedBox
                position-y={ -0.75 }
                args={[22, 1.25, 20]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.35} // Radius of the rounded corners. Default is 0.05
                smoothness={8} // The number of curve segments. Default is 4
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                receiveShadow
                >
                <meshStandardMaterial color="#75975e" />
            </RoundedBox>

            <RoundedBox
                position-y={ -13.5 }
                //position-z={ 1 }
                args={[26, 25, 26]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.35} // Radius of the rounded corners. Default is 0.05
                smoothness={8} // The number of curve segments. Default is 4
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                receiveShadow
                >
                <meshStandardMaterial color="#b0a27d" />
            </RoundedBox>

            <group position={[-12,6,5]} rotation-y={Math.PI / 2}>
                <Html
                    
                    as='div' // Wrapping element (default: 'div')
                    wrapperClass="main-title" // The className of the wrapping element (default: undefined)
                    transform
                    //occlude={true} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
                    center={false}
                    
                    style={{
                    padding: "4px",
                    //border: "2px solid white",
                    //background: "transparent"
                    //transform: "translate(50%, 0%)",
                    opacity: 1,
                    }}
                >
                    <div style={{
                    //background: "#fff",
                    padding: "16px 24px",
                    fontSize: "60px",
                    fontWeight: 700,
                    color: "#fff",
                
                    }}>         
                    <h3>The<br /> Conservatory</h3>
                    </div>
                </Html>
            </group>


            <Building  />

            <HoverTargets />

        </group>

    </>
}