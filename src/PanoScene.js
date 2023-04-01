import { BakeShadows, Environment, OrbitControls, PerspectiveCamera, SoftShadows } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function PanoScene(){


    const controls = useRef()

    return <>


      <OrbitControls 
          reverseOrbit={true}
          panSpeed={0.2}
          rotateSpeed={0.2}
          ref={controls}
          makeDefault
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