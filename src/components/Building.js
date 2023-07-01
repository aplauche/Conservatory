
import { useGLTF } from "@react-three/drei"

export default function Building() {

  const building = useGLTF('./building-no-ground.glb')

  building.scene.children.forEach(child => {
    child.castShadow = true

    if(child?.children.length > 0){
      child.children.forEach(gchild => {
        gchild.castShadow = true
      })
    }
  })

  return (
    <primitive  castShadow object={building.scene} scale={0.2} />
  )
}