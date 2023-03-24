import { BakeShadows, Environment, OrbitControls, PerspectiveCamera, SoftShadows } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function PanoScene(){

    const camera = useRef()
    const set = useThree((state) => state.set)

    useEffect(() => {
      set({ camera: camera.current })
    }, [])


    return <>

        <PerspectiveCamera 
            name="FBO Camera"
            //makeDefault
            ref={camera}
            fov={75}
            near={0.1}
            far={200}
            position={[  0,0,0 ]}
        />


        <OrbitControls 
            camera={camera?.current}
            makeDefault  
            reverseOrbit={true}
            panSpeed={0.2}
            rotateSpeed={0.2}
            // maxDistance={50}
            // minDistance={50}
            // autoRotate 
            // autoRotateSpeed={0.75}
        />


      <Environment
        background={true} // can be true, false or "only" (which only sets the background) (default: false)
        blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
        // files={`${window.location.origin}/images/sample-pano.jpg`}

        preset={'sunset'}
        scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
        encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
      />

    </>
}