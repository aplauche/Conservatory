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
            <div className="name">
              <h1>{cachedSelected?.name}</h1>
            </div>
            <div className="image">
              <img src={window.location.origin + cachedSelected?.photo} />
            </div>
            <div className="info">
              {cachedSelected?.description}
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