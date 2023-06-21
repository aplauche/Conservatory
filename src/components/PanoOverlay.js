import useRoom from "../stores/useRoom"
import { HiChevronLeft } from "react-icons/hi";

export default function PanoOverlay(){

  const activePano = useRoom(state => state.panoScene)
  

  return (
    <div className="panoHeader flex py-4 px-4 gap-4 bg-white rounded-lg shadow-lg">
      <div >
        <a className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-light-green" href="/">
          <HiChevronLeft className="text-xl text-white"/>
        </a>
      </div>
      <div className="px-16">
        <h1 className="font-bold text-xl text-light-green">{activePano.name}</h1>
      </div>
    </div>
  )
}