import { BakeShadows, CameraControls, Html, MeshTransmissionMaterial, OrbitControls, OrthographicCamera, PerspectiveCamera, PivotControls, PresentationControls, RoundedBox, SoftShadows, TransformControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import Placeholder from './components/Placeholder'
import Building from './components/Building'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import HoverTargets from './components/HoverTargets'
import useRoom from './stores/useRoom'
import gsap from 'gsap'
import { button, useControls, Leva } from 'leva'
import  TWEEN  from '@tweenjs/tween.js'

export default function MainScene(){

    const {size} = useThree()

    const camera = useRef()

    const mainObject = useRef()

    const currentlySelected = useRoom(state => state.currentlySelected)

    const optionsRot = useMemo(() => {
        return {
          x: { value: -1.6, min: -5, max: Math.PI * 2, step: 0.01 },
          y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
          z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
          visible: true,
          color: { value: 'lime' },
        }
      }, [])

    const camRot = useControls('Camera Rotation', optionsRot)

    const optionsPos = useMemo(() => {
        return {
          x: { value: -5, min: -30, max: 50, step: 0.01 },
          y: { value: 60, min: -30, max: 80, step: 0.01 },
          z: { value: 0, min: -30, max: 50, step: 0.01 },
          visible: true,
          color: { value: 'lime' },
        }
      }, [])

    const camPos = useControls('Camera Position', optionsPos)

    const debugCamera = useControls(
        {
          "Get Camera Stats": button(() => {
            console.log("pos: ", camera.current.position);
            console.log("rot: ", camera.current.rotation);
          })
        },
        [camera?.current?.position, camera?.current?.rotation]
    );

   

    // useEffect(() => {
       
    //     gsap
    //     // var lookAtTween = new TWEEN.Tween( camera.current.quaternion ).to( endRotation, 6000 ).start();

    //     //camera.current.lookAt(new THREE.Vector3(-5,-1.6,0), 1000)
    // },[])

    useEffect(() => {
        if(currentlySelected){
            gsap.to(camera.current.position, { 
                x: currentlySelected.cameraShift.x,
                y: currentlySelected.cameraShift.y,
                z: currentlySelected.cameraShift.z,
                duration: 0.75
            });
            // gsap.to(controls.current.target, { 
            //     x: 4,
            //     y: 0,
            //     z: -4,
            // });
        } else {   
            const tl = gsap.timeline()
            let targetRot =[0,0,0];
            let targetPos =[0,0,0];

            // backup original rotation
            var startRotation = camera.current.rotation.clone();
            var startPosition = camera.current.position.clone()

            // final rotation (with lookAt)
            camera.current.position.set(0,25,50)
            camera.current.lookAt( new THREE.Vector3(-5,-1,0) );
            targetRot = camera.current.rotation.clone();
            targetPos = camera.current.position.clone();

            // revert to original rotation
            camera.current.rotation.copy( startRotation );
            camera.current.position.copy( startPosition );


            tl
                .to(camera.current.position, { 
                    x: 0,
                    y: 25,
                    z: 50,
                    duration: 1
                })
                .to(camera.current.rotation, {
                    x: targetRot.x,
                    y: targetRot.y,
                    z: targetRot.z,
                    duration: 1
                }, "-=100%")
            // gsap.to(controls.current.target, { 
            //     x: 0,
            //     y: 0,
            //     z: 0,
            // });
        }

        return () => {

        }
    }, [currentlySelected, camera.current])






  

    return <>

        {/* <Perf position="top-left" /> */}

        <Leva hidden={true} />

        <PerspectiveCamera 
            name="FBO Camera"
            makeDefault
            ref={camera}
            fov={22}
            near={0.1}
            far={200}
            // position={[  45, 22, 30 ]}
            rotation={[camRot.x, camRot.y, camRot.z]}
            position={[camPos.x, camPos.y, camPos.z]}
        />

        {/* <OrthographicCamera 
        left={- (size.width / 2) }
        right={(size.width / 2) }
        top={(size.height / 2) }
        bottom={-(size.height / 2) }
        makeDefault
        ref={camera}
        near={0.1}
        far={200}
        // zoom={30}
        /> */}




        {/* <CameraControls   
            ref={controls}
            // maxDistance={30}
            // minDistance={30}
            dollySpeed={0}
            minZoom={1}
            maxZoom={1}
            maxPolarAngle={Math.PI / 2.05}

        /> */}

          

        <SoftShadows />
  
        <ambientLight intensity={ 0.9 } />

        <PresentationControls
            enabled={true} // the controls can be disabled by setting this to false
            global={false} // Spin globally or by dragging the model
            cursor={true} // Whether to toggle cursor style on drag
            snap={true} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            polar={[-Math.PI / 8, Math.PI / 2]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 170, friction: 50 }} // Spring config
        > 

        <group ref={mainObject} rotation-y={-Math.PI /4 - 0.2} >
        {/* <BakeShadows /> */}

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

            {/* <group position={[-12,6,5]} rotation-y={Math.PI / 2}>
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
                    <h3>Garfield Park<br />Conservatory</h3>
                    </div>
                </Html>
            </group> */}


            <Building  />

            <HoverTargets />

        </group>
        </PresentationControls>

    </>
}