import { useEffect, useState } from "react"
import useRoom from "../stores/useRoom"

export default function Drawer( ){

  const currentlySelected = useRoom((state) => state.currentlySelected)
  const closeRoomDrawer = useRoom((state) => state.closeRoomDrawer)
  const exitPanoScene = useRoom((state) => state.exitPanoScene)
  const loadPanoScene = useRoom((state) => state.loadPanoScene)


  // use an additional layer to store the last selected room in order to not have flash of no data
  const [cachedSelected, setCachedSelected] = useState(null);

  useEffect(() => {
    if(currentlySelected != null){
      setCachedSelected({...currentlySelected})
    }
  }, [currentlySelected])

  return (
    <> 

        <div className={`drawer ${currentlySelected !== null && "drawer-open"}`}>
          <div className="drawer-inner">
            <div className="name py-4 my-4 flex items-center">
              <div className="bg-light-green text-white h-[60px] w-[60px] rounded-full flex items-center justify-center font-black">01</div>
              <h1 className="ml-4 text-4xl font-bold">{cachedSelected?.name}</h1>
            </div>
            <div className="image">
              <img src={window.location.origin + cachedSelected?.photo} />
            </div>
            <div className="info py-8">
              {cachedSelected?.description}
            </div>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="border border-light px-4 py-8 text-center">
                <p className="mb-2 text-light-green">Temp</p>
                <div className="text-medium-text  font-bold text-4xl">
                  73˚
                </div>
              </div>
              <div className="border border-light px-4 py-8 text-center">
                <p className="mb-2 text-light-green">Humidity</p>
                <div className=" font-bold text-medium-text text-4xl">
                  85%
                </div>
              </div>
            </div>
            <div className="cta">
              <a href={'/room/1'} className="button">
                Explore
              </a>
            </div>
          </div>
        </div>
        {currentlySelected !== null && (          
          <div className="backdrop" onClick={closeRoomDrawer}></div>
        )}

    </>
  )
}