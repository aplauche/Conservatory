import { useEffect, useRef, useState } from "react";
import useRoom from "../stores/useRoom";
import Room from "./Room";


export default function HoverTargets(){


  const rooms = useRoom(state => state.rooms)

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])


  return (
    <>

      {rooms.map((room, idx) => (
        <Room 
          index={idx}
          key={room.name}
          updateHovered={setHovered}
          label={room.name}
          targetScale={room.targetScale}
          targetPos={room.targetPos}
        />
      ))}
      
    </>
  )
}