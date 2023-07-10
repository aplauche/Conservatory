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
import { useControls, button, Leva  } from 'leva'
import  TWEEN  from '@tweenjs/tween.js'

export default function MainScene(){

    const camera = useRef()

    const mainObject = useRef()

    const cameraStartPosition = {x: 0, y: 60, z:0}
    const cameraDefault = {x: 0, y:30, z: 60}

    const mainObjectDefaultRotation = {
        x: 0,
        y: -Math.PI / 4 - 0.2,
        z: 0
    }

    const {gl} = useThree()
    console.log(gl)


    const currentlySelected = useRoom(state => state.currentlySelected)

    const [enableSpin, setEnableSpin] = useState(true)

    // const optionsRot = useMemo(() => {
    //     return {
    //       x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    //       y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    //       z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    //       visible: true,
    //       color: { value: 'lime' },
    //     }
    //   }, [])

    // const camRot = useControls('Camera Rotation', optionsRot)

    // const optionsPos = useMemo(() => {
    //     return {
    //       x: { value: 0, min: -30, max: 50, step: 0.01 },
    //       y: { value: 60, min: -30, max: 80, step: 0.01 },
    //       z: { value: 0, min: -30, max: 50, step: 0.01 },
    //       visible: true,
    //       color: { value: 'lime' },
    //     }
    //   }, [])

    // const camPos = useControls('Camera Position', optionsPos)

    // const debugCamera = useControls(
    //     {
    //       "Get Camera Stats": button(() => {
    //         console.log("pos: ", camera.current.position);
    //         console.log("rot: ", camera.current.rotation);        
    //       })
    //     },
    //     [camera?.current?.position, camera?.current?.rotation]
    // );

    useEffect(() => {
        if(currentlySelected){
            const tl = gsap.timeline()

            // let targetRot =[0,0,0];
            // let targetPos =[
            //     currentlySelected.cameraShift.x,
            //     currentlySelected.cameraShift.y,
            //     currentlySelected.cameraShift.z
            // ];

            // // backup original rotation
            // var startRotation = camera.current.rotation.clone();
            // var startPosition = camera.current.position.clone()

            // // move to final position
            // camera.current.position.set(...targetPos)

            // // set final target rotation (with lookAt)
            // camera.current.lookAt( new THREE.Vector3(...targetRot) );
            // targetRot = camera.current.rotation.clone();

            // // revert to original rotation / position
            // camera.current.rotation.copy( startRotation );
            // camera.current.position.copy( startPosition );

            // Do the animation
            tl
                .to(camera.current.position, { 
                    x: currentlySelected.focusPosition.x,
                    y: currentlySelected.focusPosition.y,
                    z: currentlySelected.focusPosition.z,
                    duration: 1
                })
                .to(mainObject.current.rotation, {
                    x: currentlySelected.focusRotation.x,
                    y: currentlySelected.focusRotation.y,
                    z: currentlySelected.focusRotation.z,
                    duration: 1
                }, "-=100%")
                // .to(camera.current.position, { 
                //     x: currentlySelected.cameraShift.x,
                //     y: currentlySelected.cameraShift.y,
                //     z: currentlySelected.cameraShift.z,
                //     duration: 1
                // })
                // .to(camera.current.rotation, {
                //     x: targetRot.x,
                //     y: targetRot.y,
                //     z: targetRot.z,
                //     duration: 1
                // }, "-=100%")

        } else {   

            const tl = gsap.timeline()
            let targetRot =[0,0,0];
            let targetPos =[0,0,0];

            // backup original rotation
            var startRotation = camera.current.rotation.clone();
            var startPosition = camera.current.position.clone()

            // get final rotation back to default (with lookAt)
            camera.current.position.set(cameraDefault.x, cameraDefault.y, cameraDefault.z)
            camera.current.lookAt( new THREE.Vector3(0,0,0));
            targetRot = camera.current.rotation.clone();
            targetPos = camera.current.position.clone();

            // revert to original rotation
            camera.current.rotation.copy( startRotation );
            camera.current.position.copy( startPosition );

            // Run the animation
            tl
                .to(camera.current.position, { 
                    x: 0,
                    y: 30,
                    z: 60,
                    duration: 1
                })
                .to(mainObject.current.rotation, {
                    x: mainObjectDefaultRotation.x,
                    y: mainObjectDefaultRotation.y,
                    z: mainObjectDefaultRotation.z,
                    duration: 1
                }, "-=100%")
                .to(camera.current.rotation, {
                    x: targetRot.x,
                    y: targetRot.y,
                    z: targetRot.z,
                    duration: 1
                }, "-=100%")

        }

        return () => {

        }

    }, [currentlySelected, camera.current])



    useFrame(() => {
        if (window.innerWidth > window.innerHeight) {
            // LANDSCAPE
            //setEnableSpin(true)
            camera.current.fov=22
          } else {
            // PORTRAIT
            //setEnableSpin(true)
            camera.current.fov=35
          }
    })


  

    return <>

        {/* <Perf position="top-left" /> */}

        {/* <Leva hidden={true} /> */}

        <PerspectiveCamera 
            name="FBO Camera"
            makeDefault
            ref={camera}
            fov={window.innerWidth > window.innerHeight ? 22 : 35}
            near={0.1}
            far={200}
            // position={[  45, 22, 30 ]}
            rotation={[0, 0, 0]}
            position={[cameraStartPosition.x, cameraStartPosition.y, cameraStartPosition.z]}
        />

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
            global={true} // Spin globally or by dragging the model
            cursor={true} // Whether to toggle cursor style on drag
            snap={true} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            polar={[-Math.PI / 8, Math.PI / 2]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 170, friction: 50 }} // Spring config
            domElement={gl.domElement}
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
                args={[26, 25, 26]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.35} // Radius of the rounded corners. Default is 0.05
                smoothness={8} // The number of curve segments. Default is 4
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                receiveShadow
                >
                <meshStandardMaterial color="#b0a27d" />
            </RoundedBox>

            <Building  />

            <HoverTargets />

        </group>
        </PresentationControls>

    </>
}