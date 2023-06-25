import { useProgress } from "@react-three/drei"

function CustomLoader() {

  const {progress} = useProgress()
  return (
    <div className={`${progress == 100 ? 'loaded': ''} loading-screen fixed w-full min-h-screen bg-white top-0 left-0 z-50 flex gap-4 flex-col items-center justify-center`}>
      <div className="w-[120px] h-[120px] relative overflow-hidden">
        <img className="absolute top-0 left-0 w-full h-full object-contain" src="/images/gc-logo.svg" alt="" />
        <div style={{transform: `translateY(-${progress}%)`}} className="absolute top-0 left-0 w-full h-full bg-white"></div>
        <img className="absolute top-0 left-0 w-full h-full object-contain opacity-20" src="/images/gc-logo.svg" alt="" />
      </div>
      <p className="text-2xl text-light-text">Loading... {progress}%</p>
    </div>
  )
}

export default CustomLoader
