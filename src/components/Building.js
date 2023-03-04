
import { useGLTF } from "@react-three/drei"

export default function Building() {

  const building = useGLTF('./building-no-ground.glb')

  console.log(building)

  return (
    <primitive object={building.scene} scale={0.2} />
  )
}