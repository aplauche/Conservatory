import useRoom from "../stores/useRoom"
import { HiChevronLeft } from "react-icons/hi";
import Instructions from "./Instructions";

export default function PanoOverlay(){

  const activePano = useRoom(state => state.panoScene)
  

  return (
    <>
      <a href="/" className="panoHeader flex items-center py-3 px-3 gap-4 bg-white rounded-full shadow-lg">
        <div >
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center" >
            <HiChevronLeft className="text-3xl"/>
          </div>
        </div>
      </a>
      <Instructions key="pano" position="top">
        Click and drag to explore
      </Instructions>
    </>
  )
}